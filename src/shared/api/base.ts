import { envVariables } from '@/shared/constants';
import axios from 'axios';

let isRefreshing = false; // Flag to indicate if a token refresh is in progress
let failedQueue: Array<() => void> = []; // Queue to store callbacks for requests waiting for a token refresh

/**
 * Processes the queue of failed requests by executing each callback and clearing the queue.
 */
const processQueue = () => {
  failedQueue.forEach(cb => cb());
  failedQueue = [];
};

/**
 * Axios instance configured for API requests.
 * - `baseURL`: The base URL for API requests, derived from environment variables.
 * - `headers`: Default headers for all requests, including `Content-Type: application/json`.
 * - `withCredentials`: Ensures cookies are included in cross-origin requests.
 */
export const apiClient = axios.create({
  baseURL: envVariables.API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

/**
 * Axios response interceptor to handle API responses and errors.
 * - On success: Returns the response as-is.
 * - On error: Handles 401 Unauthorized errors by attempting to refresh the authentication token.
 */
apiClient.interceptors.response.use(
  response => response, // Pass successful responses through
  async error => {
    const originalRequest = error.config; // The original request that caused the error

    // Check if the error is a 401 Unauthorized
    if (error.response?.status === 401) {
      // If a token refresh is already in progress, queue the request
      if (isRefreshing) {
        return new Promise(resolve => {
          failedQueue.push(() => {
            resolve(apiClient(originalRequest));
          });
        });
      }

      // Mark the request for retry and start the token refresh process
      originalRequest._retry = true;
      isRefreshing = true;

      try {
        // Attempt to refresh the token
        await apiClient.post('/auth/refresh');
        processQueue(); // Process queued requests after a successful refresh
        return apiClient(originalRequest); // Retry the original request
      } catch (refreshError) {
        processQueue(); // Process queued requests even if the refresh fails
        window.location.href = '/login'; // Redirect to login on refresh failure
        return Promise.reject(refreshError); // Propagate the refresh error
      } finally {
        isRefreshing = false; // Reset the refresh flag
      }
    }

    // Propagate other errors
    return Promise.reject(error);
  },
);
