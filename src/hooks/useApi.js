import { useCallback } from 'react';

const useApi = (url) => {
  const BASE_URL = 'https://stunning-ducks-3b3e7d323f.strapiapp.com'; // Replace with your actual base API URL

  const getProjects = useCallback(async () => {
    const response = await fetch(`${BASE_URL}/api/projects`);
    const data = await response.json();
    return data.data; // Access the products directly
  }, [BASE_URL]);

  const getProject = useCallback(async (id) => {
    const response = await fetch(`${BASE_URL}/api/projects/${id}`);
    const data = await response.json();
    return data.data; // Access the products directly
  }, [BASE_URL]);

  return { getProjects, getProject };
};

export default useApi;
