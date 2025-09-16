// API service layer for backend communication
// TODO: Implement actual API endpoints

const API_BASE_URL = process.env.REACT_APP_API_URL || '/api';

class ApiService {
  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const token = localStorage.getItem('authToken');
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
      ...options,
    };

    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  // Authentication
  async login(email: string, password: string) {
    return this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  }

  async register(userData: any) {
    return this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  async logout() {
    return this.request('/auth/logout', { method: 'POST' });
  }

  // Funding Calls
  async getFundingCalls() {
    return this.request('/funding-calls');
  }

  async getFundingCall(id: string) {
    return this.request(`/funding-calls/${id}`);
  }

  // Applications
  async getApplications(userId?: string) {
    const endpoint = userId ? `/users/${userId}/applications` : '/applications';
    return this.request(endpoint);
  }

  async getApplication(id: string) {
    return this.request(`/applications/${id}`);
  }

  async createApplication(applicationData: any) {
    return this.request('/applications', {
      method: 'POST',
      body: JSON.stringify(applicationData),
    });
  }

  async updateApplication(id: string, applicationData: any) {
    return this.request(`/applications/${id}`, {
      method: 'PUT',
      body: JSON.stringify(applicationData),
    });
  }

  // Projects
  async getFundedProjects() {
    return this.request('/funded-projects');
  }

  // News
  async getNews() {
    return this.request('/news');
  }

  // Stats
  async getStats() {
    return this.request('/stats');
  }

  async getUserStats(userId: string) {
    return this.request(`/users/${userId}/stats`);
  }

}

export const apiService = new ApiService();
export default apiService;