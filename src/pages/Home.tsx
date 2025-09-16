import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Calendar, ArrowRight, Users, Award, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';

// TODO: Replace with actual API calls
const fetchNews = async () => {
  // return await fetch('/api/news').then(res => res.json());
  return [];
};

const fetchStats = async () => {
  // return await fetch('/api/stats').then(res => res.json());
  return {
    activeResearchers: 0,
    fundedProjects: 0,
    totalFunding: 0
  };
};

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [news, setNews] = useState([]);
  const [stats, setStats] = useState({
    activeResearchers: 0,
    fundedProjects: 0,
    totalFunding: 0
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const [newsData, statsData] = await Promise.all([
          fetchNews(),
          fetchStats()
        ]);
        setNews(newsData);
        setStats(statsData);
      } catch (error) {
        console.error('Failed to load data:', error);
      }
    };

    loadData();
  }, []);

  const slides = [
    {
      title: 'Advancing Scientific Research in Ghana',
      subtitle: 'Supporting innovative research that drives national development',
      image: '/lab.jpg',
      cta: 'Explore Funding Opportunities'
    },
    {
      title: 'The Governing Board of GNRF',
      subtitle: 'Meet the leaders guiding Ghana’s research and innovation for national transformation',
      image: '/awards.jpg',
      cta: 'Learn More'
    },
    {
      title: 'Climate Change Research Initiative',
      subtitle: '₵10 Million allocated for climate adaptation research',
      image: '/climate.jpg', // replaced with local image from public folder
      cta: 'Apply Now'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Slider Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="relative h-full flex items-center justify-center text-center">
                <div className="max-w-4xl px-4">
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-200 mb-8">
                    {slide.subtitle}
                  </p>
                  <Link to="/funding-opportunities">
                    <Button size="lg" className="text-lg px-8 py-4">
                      {slide.cta}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full transition-all duration-200"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full transition-all duration-200"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Empowering Ghana Through Research Excellence
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              The Ghana National Research Fund is committed to supporting innovative research 
              initiatives that address national priorities, enhance scientific capacity, and 
              contribute to sustainable development across all sectors of the economy.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/about">
                <Button variant="outline" size="lg">
                  Learn About GNRF
                </Button>
              </Link>
              <Link to="/ABOUT">
                <Button size="lg">
                  Explore Grants
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-red-600" />
                </div>
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">{stats.activeResearchers}+</h3>
              <p className="text-lg text-gray-600">Active Researchers</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">{stats.fundedProjects}+</h3>
              <p className="text-lg text-gray-600">Funded Projects</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-yellow-600" />
                </div>
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">₵{(stats.totalFunding / 1000000).toFixed(0)}M+</h3>
              <p className="text-lg text-gray-600">Total Funding Awarded</p>
            </div>
          </div>
        </div>
      </section>

      {/* News & Updates Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Latest News & Updates</h2>
            <Link to="/news">
              <Button variant="ghost" className="flex items-center space-x-2">
                <span>View All News</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.length === 0 ? (
              <div className="col-span-3 text-center py-12">
                <p className="text-gray-500">No news available at the moment.</p>
              </div>
            ) : (
              news.slice(0, 3).map((newsItem, idx) => (
              <Card key={newsItem.id} hover className="overflow-hidden">
                <div
                  className="h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${
                      newsItem.image || '/news1.jpg'
                    })`
                  }}
                ></div>
                <CardContent>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(newsItem.date).toLocaleDateString()}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {newsItem.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {newsItem.summary}
                  </p>
                  <Button variant="ghost" size="sm" className="p-0">
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;