import React from 'react';
import { Download, Target, Eye, Users, Award } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../components/ui/Card';
import Button from '../components/ui/Button';

const About: React.FC = () => {
  const teamMembers = [
    {
name: 'Prof. Eric Danquah',
position: 'Inaugural Chair',
image: '/lead1.png',
bio: 'Leading Ghana\'s research agenda with over 20 years of experience in science policy.'
    },
    {
      name: 'Prof. Abigail Opoku Mensah',
      position: 'Administrator of the fund',
      image: '/lead2.jpg',
      bio: 'Renowned researcher in environmental science and sustainable development.'
    },
    {
      name: 'Prof. Paul Pinnock Bosu',
      position: 'Council for Scientific and Industrial Research',
      image: '/lead3.png',
      bio: 'Expert in technology transfer and innovation ecosystem development.'
    }
  ];

  const documents = [
    { title: 'GNRF Strategic Plan 2023-2027', type: 'PDF', size: '2.4 MB' },
    { title: 'Research Priorities Framework', type: 'PDF', size: '1.8 MB' },
    { title: 'Annual Report 2024', type: 'PDF', size: '5.2 MB' },
    { title: 'Code of Ethics for Researchers', type: 'PDF', size: '892 KB' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Ghana National Research Fund
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Established to promote and support research excellence in Ghana, GNRF serves as the 
              primary funding agency for scientific research, innovation, and technology development 
              that addresses national priorities and contributes to socio-economic transformation.
            </p>
            <div className="flex justify-center space-x-1 mb-8">
              <div className="w-8 h-6 bg-red-600"></div>
              <div className="w-8 h-6 bg-yellow-400"></div>
              <div className="w-8 h-6 bg-green-600"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-green-600 rounded-lg shadow-md text-center p-6 flex flex-col justify-between">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-white text-opacity-90">
                To advance scientific knowledge, innovation, and technology development through 
                strategic funding of high-quality research that addresses Ghana's development 
                challenges and opportunities.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-red-600 rounded-lg shadow-md text-center p-6 flex flex-col justify-between">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-white text-opacity-90">
                To be the leading catalyst for research excellence and innovation in Ghana, 
                fostering a knowledge-based economy that transforms lives and communities.
              </p>
            </div>

            {/* Values */}
            <div className="bg-yellow-400 rounded-lg shadow-md text-center p-6 flex flex-col justify-between">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
              <ul className="text-white text-left space-y-2 text-opacity-90">
                <li>Excellence in research</li>
                <li>Transparency & integrity</li>
                <li>Innovation & creativity</li>
                <li>Collaboration & partnership</li>
                <li>Impact & sustainability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mandate & Objectives */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Mandate & Strategic Objectives
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Legislative Mandate</h3>
                <p className="text-gray-600 mb-4">
                  GHANA NATIONAL RESEARCH FUND ACT, 2020
AN ACT to establish the Ghana National Research Fund to provide for
funds to support research in all fields of national endeavour, to
provide for the management of the Fund and for related matters
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-red-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-red-900 mb-3">Research Excellence</h4>
                  <p className="text-red-700">
                    Support world-class research that meets international standards while 
                    addressing local and national priorities.
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-green-900 mb-3">Capacity Building</h4>
                  <p className="text-green-700">
                    Develop human resources and institutional capacity for research and 
                    innovation across all sectors.
                  </p>
                </div>

                <div className="bg-yellow-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-yellow-900 mb-3">Knowledge Translation</h4>
                  <p className="text-yellow-700">
                    Bridge the gap between research and application through technology transfer 
                    and commercialization support.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-900 mb-3">Strategic Partnerships</h4>
                  <p className="text-blue-700">
                    Foster collaboration between academia, industry, and government to maximize 
                    research impact and innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Leadership Team
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-red-600 font-medium mb-3">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Organizational Structure */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Organizational Structure
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Board of Directors</h3>
                  <p className="text-gray-600 text-sm">Strategic oversight and governance</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Target className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900">Executive Office</h4>
                    <p className="text-sm text-gray-600">Leadership & Administration</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Eye className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900">Research Directorate</h4>
                    <p className="text-sm text-gray-600">Program Management</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="w-8 h-8 text-yellow-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900">Innovation Office</h4>
                    <p className="text-sm text-gray-600">Technology Transfer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Strategic Documents */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Strategic Documents
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold text-gray-900">
                  Key Policy & Strategic Documents
                </h3>
                <p className="text-gray-600">
                  Access our strategic plans, policies, and governance documents
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {documents.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-red-100 rounded flex items-center justify-center">
                          <Download className="w-5 h-5 text-red-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{doc.title}</h4>
                          <p className="text-sm text-gray-500">{doc.type} • {doc.size}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;