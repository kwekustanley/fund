import React, { useState } from 'react';
import { Download, FileText, Video, BookOpen, ExternalLink, Search } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../components/ui/Card';
import Button from '../components/ui/Button';

interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'template' | 'guide' | 'video' | 'policy' | 'form';
  category: string;
  fileSize?: string;
  downloadUrl?: string;
  lastUpdated: string;
}

const Resources: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const resources: Resource[] = [
    {
      id: '1',
      title: 'Research Proposal Template',
      description: 'Standard template for submitting research proposals to GNRF funding calls.',
      type: 'template',
      category: 'Application Forms',
      fileSize: '245 KB',
      downloadUrl: '#',
      lastUpdated: '2025-01-15'
    },
    {
      id: '2',
      title: 'Budget Preparation Guidelines',
      description: 'Comprehensive guide on preparing accurate and justified research budgets.',
      type: 'guide',
      category: 'Guidelines',
      fileSize: '1.2 MB',
      downloadUrl: '#',
      lastUpdated: '2025-01-10'
    },
    {
      id: '3',
      title: 'Ethics Review Application Form',
      description: 'Required form for research involving human subjects or sensitive data.',
      type: 'form',
      category: 'Application Forms',
      fileSize: '180 KB',
      downloadUrl: '#',
      lastUpdated: '2025-01-08'
    },
    {
      id: '4',
      title: 'Research Impact Assessment Framework',
      description: 'Framework for measuring and reporting research impact and outcomes.',
      type: 'policy',
      category: 'Policies',
      fileSize: '890 KB',
      downloadUrl: '#',
      lastUpdated: '2025-01-05'
    },
    {
      id: '5',
      title: 'How to Write a Winning Proposal',
      description: 'Video tutorial series on crafting competitive research proposals.',
      type: 'video',
      category: 'Training',
      lastUpdated: '2024-12-20'
    },
    {
      id: '6',
      title: 'Financial Reporting Template',
      description: 'Template for quarterly and annual financial reporting of funded projects.',
      type: 'template',
      category: 'Reporting',
      fileSize: '320 KB',
      downloadUrl: '#',
      lastUpdated: '2024-12-15'
    },
    {
      id: '7',
      title: 'Intellectual Property Guidelines',
      description: 'Guidelines on intellectual property rights and commercialization of research.',
      type: 'policy',
      category: 'Policies',
      fileSize: '650 KB',
      downloadUrl: '#',
      lastUpdated: '2024-12-10'
    },
    {
      id: '8',
      title: 'Research Collaboration Agreement Template',
      description: 'Standard template for multi-institutional research collaborations.',
      type: 'template',
      category: 'Legal Documents',
      fileSize: '420 KB',
      downloadUrl: '#',
      lastUpdated: '2024-12-05'
    }
  ];

  const categories = ['all', 'Application Forms', 'Guidelines', 'Policies', 'Training', 'Reporting', 'Legal Documents'];
  const types = ['all', 'template', 'guide', 'video', 'policy', 'form'];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesType = selectedType === 'all' || resource.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'template':
        return <FileText className="w-5 h-5 text-blue-600" />;
      case 'guide':
        return <BookOpen className="w-5 h-5 text-green-600" />;
      case 'video':
        return <Video className="w-5 h-5 text-red-600" />;
      case 'policy':
        return <FileText className="w-5 h-5 text-purple-600" />;
      case 'form':
        return <FileText className="w-5 h-5 text-orange-600" />;
      default:
        return <FileText className="w-5 h-5 text-gray-600" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'template':
        return 'bg-blue-100 text-blue-800';
      case 'guide':
        return 'bg-green-100 text-green-800';
      case 'video':
        return 'bg-red-100 text-red-800';
      case 'policy':
        return 'bg-purple-100 text-purple-800';
      case 'form':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Resources & Downloads
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Access essential documents, templates, guidelines, and training materials 
              to support your research funding applications and project management.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="py-8 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Application Templates */}
            <div className="bg-blue-600 rounded-lg shadow-md text-center p-6 flex flex-col justify-between">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-white text-xl mb-2">Application Templates</h3>
              <p className="text-sm text-white text-opacity-90">Standard forms and templates for funding applications</p>
            </div>

            {/* Guidelines & Manuals */}
            <div className="bg-green-600 rounded-lg shadow-md text-center p-6 flex flex-col justify-between">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-white text-xl mb-2">Guidelines & Manuals</h3>
              <p className="text-sm text-white text-opacity-90">Comprehensive guides for researchers and institutions</p>
            </div>

            {/* Training Materials */}
            <div className="bg-red-600 rounded-lg shadow-md text-center p-6 flex flex-col justify-between">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-white text-xl mb-2">Training Materials</h3>
              <p className="text-sm text-white text-opacity-90">Video tutorials and training resources</p>
            </div>

            {/* Policies & Procedures */}
            <div className="bg-purple-600 rounded-lg shadow-md text-center p-6 flex flex-col justify-between">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-white text-xl mb-2">Policies & Procedures</h3>
              <p className="text-sm text-white text-opacity-90">Official policies and procedural documents</p>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-6 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                {types.map(type => (
                  <option key={type} value={type}>
                    {type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => (
              <Card key={resource.id} hover className="h-full">
                <CardHeader>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      {getTypeIcon(resource.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {resource.title}
                      </h3>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full capitalize ${getTypeColor(resource.type)}`}>
                          {resource.type}
                        </span>
                        <span className="text-xs text-gray-500">
                          {resource.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {resource.description}
                  </p>
                  <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
                    <span>Updated: {new Date(resource.lastUpdated).toLocaleDateString()}</span>
                    {resource.fileSize && <span>{resource.fileSize}</span>}
                  </div>
                  <div className="flex space-x-2">
                    {resource.type === 'video' ? (
                      <Button size="sm" className="flex-1 flex items-center justify-center space-x-2">
                        <ExternalLink className="w-4 h-4" />
                        <span>Watch</span>
                      </Button>
                    ) : (
                      <Button size="sm" className="flex-1 flex items-center justify-center space-x-2">
                        <Download className="w-4 h-4" />
                        <span>Download</span>
                      </Button>
                    )}
                    <Button variant="outline" size="sm">
                      Preview
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No resources found
              </h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Try adjusting your search criteria or filters to find relevant resources.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Help Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Need Additional Support?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you 
              with your research funding applications and project management needs.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="outline" size="lg" className="flex items-center space-x-2">
              <span>Contact Support</span>
              <ExternalLink className="w-4 h-4" />
            </Button>
            <Button size="lg">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;