const localhost = 'http://localhost:3001/';

function getBaseUrl(): string {
  const isLocal = process.env.NODE_ENV === 'development';
  const publicUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return isLocal ? localhost : publicUrl || '';
}

export const envVariables = {
  API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || '',
  BASE_URL: getBaseUrl() || '',
};
