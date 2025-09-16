import React from 'react';
import { Calendar, Download, ExternalLink, Play, Image, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../components/ui/Card';
import Button from '../components/ui/Button';

const Media: React.FC = () => {
  const mediaItems = [
    {
      id: '1',
      title: 'GNRF Annual Research Symposium 2024',
      type: 'video',
      date: '2024-12-15',
      description: 'Highlights from our annual research symposium featuring presentations from funded researchers.',
      thumbnail: '/news1.jpg',
      duration: '45:30'
    },
    {
      id: '2',
      title: 'Climate Research Initiative Launch',
      type: 'image',
      date: '2024-11-20',
      description: 'Photo gallery from the launch of our ₵10 million climate research initiative.',
      thumbnail: '/climate.jpg'
    },
    {
      id: '3',
      title: 'Research Impact Report 2024',
      type: 'document',
      date: '2024-10-30',
      description: 'Comprehensive report on the impact of GNRF-funded research projects.',
      fileSize: '3.2 MB'
    }
  ];

  const pressReleases = [
    {
      id: '1',
      title: 'GNRF Announces ₵50 Million Investment in Agricultural Research',
      date: '2024-12-10',
      summary: 'New funding initiative aims to enhance food security and sustainable farming practices across Ghana.'
    },
    {
      id: '2',
      title: 'Partnership with International Research Institutions',
      date: '2024-11-25',
      summary: 'GNRF signs MOU with leading global universities to promote collaborative research.'
    },
    {
      id: '3',
      title: 'Young Researchers Program Launches',
      date: '2024-11-15',
      summary: 'New program provides dedicated funding and mentorship for early-career researchers.'
    }
  ];

  const getMediaIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Play className="w-6 h-6 text-red-600" />;
      case 'image':
        return <Image className="w-6 h-6 text-blue-600" />;
      case 'document':
        return <FileText className="w-6 h-6 text-green-600" />;
      default:
        return <FileText className="w-6 h-6 text-gray-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Media Center
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access the latest news, press releases, multimedia content, and resources 
              from the Ghana National Research Fund.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Media */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Media</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaItems.map((item) => (
              <Card key={item.id} hover className="overflow-hidden">
                {item.type === 'video' || item.type === 'image' ? (
                  <div className="relative h-48 bg-gray-200">
                    <img 
                      src={item.thumbnail} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    {item.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                        <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                          <Play className="w-8 h-8 text-gray-800 ml-1" />
                        </div>
                      </div>
                    )}
                    {item.duration && (
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                        {item.duration}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    {getMediaIcon(item.type)}
                  </div>
                )}
                
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    {getMediaIcon(item.type)}
                    <span className="text-sm text-gray-500 capitalize">{item.type}</span>
                    <span className="text-sm text-gray-400">•</span>
                    <span className="text-sm text-gray-500">
                      {new Date(item.date).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <Button size="sm" className="flex items-center space-x-2">
                      {item.type === 'document' ? (
                        <>
                          <Download className="w-4 h-4" />
                          <span>Download</span>
                        </>
                      ) : (
                        <>
                          <ExternalLink className="w-4 h-4" />
                          <span>View</span>
                        </>
                      )}
                    </Button>
                    
                    {item.fileSize && (
                      <span className="text-xs text-gray-500">{item.fileSize}</span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Press Releases</h2>
            <Button variant="outline" size="sm">
              View All Releases
            </Button>
          </div>
          
          <div className="space-y-6">
            {pressReleases.map((release) => (
              <Card key={release.id} hover>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-500">
                          {new Date(release.date).toLocaleDateString()}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {release.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {release.summary}
                      </p>
                    </div>
                    <Button variant="outline" size="sm" className="ml-4 flex items-center space-x-2">
                      <span>Read More</span>
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-bold text-gray-900">Media Kit</h2>
              <p className="text-gray-600">
                Download official logos, brand guidelines, and media resources
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 border border-gray-200 rounded-lg">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Image className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Official Logos</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    High-resolution GNRF logos in various formats
                  </p>
                  <Button size="sm" variant="outline">
                    Download
                  </Button>
                </div>
                
                <div className="text-center p-6 border border-gray-200 rounded-lg">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Brand Guidelines</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Official brand usage guidelines and standards
                  </p>
                  <Button size="sm" variant="outline">
                    Download
                  </Button>
                </div>
                
                <div className="text-center p-6 border border-gray-200 rounded-lg">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Download className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Fact Sheets</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Key facts and figures about GNRF
                  </p>
                  <Button size="sm" variant="outline">
                    Download
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-bold text-gray-900">Media Inquiries</h2>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Press Contact</h3>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Communications Office</strong></p>
                    <p>Ghana National Research Fund</p>
                    <p>Email: media@gnrf.gov.gh</p>
                    <p>Phone: +233 (0) 302 123 456</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Media Guidelines</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• All media requests should be submitted 48 hours in advance</li>
                    <li>• Interview requests require prior approval</li>
                    <li>• High-resolution images available upon request</li>
                    <li>• Attribution required for all GNRF content</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Media;