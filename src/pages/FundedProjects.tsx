import React, { useState } from 'react';
import { useEffect } from 'react';
import { Search, Filter, Calendar, MapPin, User, Award, ExternalLink, Download } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { type FundedProject } from '../data/mockData';

// TODO: Replace with actual API calls
const fetchFundedProjects = async (): Promise<FundedProject[]> => {
  // return await fetch('/api/funded-projects').then(res => res.json());
  return [];
};

const FundedProjects: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedField, setSelectedField] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedProject, setSelectedProject] = useState<FundedProject | null>(null);
  const [fundedProjects, setFundedProjects] = useState<FundedProject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchFundedProjects();
        setFundedProjects(data);
      } catch (error) {
        console.error('Failed to load funded projects:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  const fields = ['all', 'Environmental Engineering', 'Medical Technology', 'Agricultural Economics', 'Computer Science', 'Materials Science'];
  const years = ['all', '2024', '2023', '2022', '2021'];

  const filteredProjects = fundedProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.principalInvestigator.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.institution.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesField = selectedField === 'all' || project.field === selectedField;
    const matchesYear = selectedYear === 'all' || project.year === selectedYear;
    
    return matchesSearch && matchesField && matchesYear;
  });

  const totalFunding = fundedProjects.reduce((sum, project) => {
    const amount = parseInt(project.grantAmount.replace(/[₵,]/g, ''));
    return sum + amount;
  }, 0);

  const formatCurrency = (amount: number) => {
    return `₵${amount.toLocaleString()}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Funded Research Projects
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore successful research projects funded by the Ghana National Research Fund, 
              showcasing innovation and scientific excellence across various disciplines.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-8 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">{fundedProjects.length}</div>
              <div className="text-sm text-gray-600">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{formatCurrency(totalFunding)}</div>
              <div className="text-sm text-gray-600">Total Investment</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">15</div>
              <div className="text-sm text-gray-600">Institutions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">8</div>
              <div className="text-sm text-gray-600">Research Fields</div>
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
                placeholder="Search projects, researchers, or institutions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-4">
              <select
                value={selectedField}
                onChange={(e) => setSelectedField(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                {fields.map(field => (
                  <option key={field} value={field}>
                    {field === 'all' ? 'All Fields' : field}
                  </option>
                ))}
              </select>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                {years.map(year => (
                  <option key={year} value={year}>
                    {year === 'all' ? 'All Years' : year}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading funded projects...</p>
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No projects found
              </h3>
              <p className="text-gray-600 max-w-md mx-auto">
                {fundedProjects.length === 0 
                  ? "No funded projects are currently available to display."
                  : "Try adjusting your search criteria or filters to find relevant projects."
                }
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} hover className="h-full">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {project.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{project.principalInvestigator}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{project.institution}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                          {project.field}
                        </span>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">
                          {project.year}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">
                        {project.grantAmount}
                      </div>
                      <div className="text-xs text-gray-500">Grant Amount</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center space-x-2"
                    >
                      <span>View Details</span>
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <div className="flex items-center space-x-1 text-xs text-gray-500">
                      <Award className="w-4 h-4" />
                      <span>GNRF Funded</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          )}
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div 
              className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
              onClick={() => setSelectedProject(null)}
            ></div>

            <div className="inline-block w-full max-w-4xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedProject.title}
                </h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  ×
                </button>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Project Information</h3>
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm font-medium text-gray-500">Principal Investigator:</span>
                        <p className="text-gray-900">{selectedProject.principalInvestigator}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500">Institution:</span>
                        <p className="text-gray-900">{selectedProject.institution}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500">Research Field:</span>
                        <p className="text-gray-900">{selectedProject.field}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500">Grant Year:</span>
                        <p className="text-gray-900">{selectedProject.year}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Funding Details</h3>
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600 mb-2">
                          {selectedProject.grantAmount}
                        </div>
                        <div className="text-sm text-green-700">Total Grant Amount</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Project Description</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="flex justify-end space-x-4">
                  <Button
                    variant="outline"
                    onClick={() => setSelectedProject(null)}
                  >
                    Close
                  </Button>
                  <Button className="flex items-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>Download Report</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FundedProjects;