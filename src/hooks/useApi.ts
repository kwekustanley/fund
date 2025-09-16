import { useState, useEffect } from 'react';
import { apiService } from '../services/api';

// Generic hook for API calls with loading and error states
export function useApi<T>(
  apiCall: () => Promise<T>,
  dependencies: any[] = []
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await apiCall();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, dependencies);

  const refetch = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await apiCall();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, refetch };
}

// Specific hooks for common API calls
export function useFundingCalls() {
  return useApi(() => apiService.getFundingCalls());
}

export function useFundedProjects() {
  return useApi(() => apiService.getFundedProjects());
}

export function useNews() {
  return useApi(() => apiService.getNews());
}

export function useUserApplications(userId: string) {
  return useApi(() => apiService.getApplications(userId), [userId]);
}

export function useUserStats(userId: string) {
  return useApi(() => apiService.getUserStats(userId), [userId]);
}
