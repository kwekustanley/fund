// This file will be replaced with actual API calls and database integration
// TODO: Implement actual data fetching services

export interface FundingCall {
  id: string;
  title: string;
  description: string;
  deadline: string;
  amount: string;
  category: string;
  type: 'research' | 'innovation' | 'infrastructure';
  eligibility: string[];
  requirements: string[];
  status: 'draft' | 'published' | 'closed';
  createdAt: string;
  updatedAt: string;
}

export interface Application {
  id: string;
  title: string;
  status: 'draft' | 'submitted' | 'under-review' | 'approved' | 'rejected';
  fundingCallId: string;
  submittedDate: string;
  lastUpdated: string;
  amount: string;
  applicantId: string;
}

export interface FundedProject {
  id: string;
  title: string;
  principalInvestigator: string;
  institution: string;
  grantAmount: string;
  year: string;
  field: string;
  description: string;
  status: 'active' | 'completed' | 'suspended';
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  image: string;
  author: string;
  published: boolean;
}

// These will be replaced with actual API calls
export const mockFundingCalls: FundingCall[] = [];
export const mockApplications: Application[] = [];
export const mockFundedProjects: FundedProject[] = [];
export const mockNews: NewsItem[] = [];