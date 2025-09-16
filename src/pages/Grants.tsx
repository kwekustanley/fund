import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, FileText, Users, Award, Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../components/ui/Card';
import Button from '../components/ui/Button';

const Grants: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Grants
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access grant information, application portals, and funding opportunities 
              available through the Ghana National Research Fund.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Grants Portal */}
            <Card hover className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <ExternalLink className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Grants Portal</h2>
                    <p className="text-gray-600">Access the official grants application system</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  The Grants Portal is your gateway to submitting applications, tracking progress, 
                  and managing your research funding requests. Access comprehensive application 
                  forms, guidelines, and submission tools.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Submit new grant applications</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Track application status</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Manage project reports</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Access reviewer feedback</span>
                  </div>
                </div>
                <Button className="w-full flex items-center justify-center space-x-2">
                  <span>Access Grants Portal</span>
                  <ExternalLink className="w-4 h-4" />
                </Button>
                <p className="text-xs text-gray-500 mt-3 text-center">
                  Redirects to external grants management system
                </p>
              </CardContent>
            </Card>

            {/* Opportunities */}
            <Card hover className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <Award className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Opportunities</h2>
                    <p className="text-gray-600">Explore current funding opportunities</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Discover available funding opportunities, research calls, and grant programs. 
                  Stay updated with the latest announcements and application deadlines for 
                  various research areas and initiatives.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Current funding calls</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Application deadlines</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Eligibility criteria</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Funding amounts</span>
                  </div>
                </div>
                <Link to="/funding-opportunities" className="block">
                  <Button variant="secondary" className="w-full flex items-center justify-center space-x-2">
                    <span>View Opportunities</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Additional Information */}
          <div className="mt-12">
            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold text-gray-900">Grant Application Process</h3>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <FileText className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">1. Prepare</h4>
                    <p className="text-sm text-gray-600">Review guidelines and prepare required documents</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="w-6 h-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">2. Apply</h4>
                    <p className="text-sm text-gray-600">Submit application through the grants portal</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Calendar className="w-6 h-6 text-yellow-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">3. Review</h4>
                    <p className="text-sm text-gray-600">Expert panel reviews and evaluates applications</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="w-6 h-6 text-purple-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">4. Award</h4>
                    <p className="text-sm text-gray-600">Successful applicants receive funding notification</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Grants;