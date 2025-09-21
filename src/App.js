import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  Code,
  Database,
  Globe,
  Download,
  ChevronDown,
  Star,
  Trophy,
  Award,
  Rocket,
  Heart,
  Terminal,
  Zap
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.mobile-menu-container')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' }
  ];

  const skills = [
    { name: 'Java', level: 85, icon: Code, color: 'from-orange-400 to-orange-600', bgColor: 'bg-orange-500/20' },
    { name: 'Spring Boot', level: 80, icon: Globe, color: 'from-green-400 to-green-600', bgColor: 'bg-green-500/20' },
    { name: 'JavaScript', level: 82, icon: Terminal, color: 'from-yellow-400 to-yellow-600', bgColor: 'bg-yellow-500/20' },
    { name: 'React.js', level: 82, icon: Code, color: 'from-blue-400 to-blue-600', bgColor: 'bg-blue-500/20' },
    { name: 'HTML/CSS', level: 88, icon: Globe, color: 'from-red-400 to-red-600', bgColor: 'bg-red-500/20' },
    { name: 'C++', level: 75, icon: Code, color: 'from-blue-500 to-purple-600', bgColor: 'bg-blue-600/20' },
    { name: 'Python', level: 70, icon: Code, color: 'from-blue-400 to-yellow-400', bgColor: 'bg-blue-400/20' },
    { name: 'MERN Stack', level: 78, icon: Database, color: 'from-green-400 to-cyan-400', bgColor: 'bg-green-600/20' },
    { name: 'MongoDB', level: 80, icon: Database, color: 'from-green-500 to-green-700', bgColor: 'bg-green-700/20' },
    { name: 'MySQL', level: 85, icon: Database, color: 'from-blue-500 to-blue-700', bgColor: 'bg-blue-700/20' },
    { name: 'PostgreSQL', level: 75, icon: Database, color: 'from-indigo-500 to-indigo-700', bgColor: 'bg-indigo-600/20' },
    { name: 'Docker', level: 65, icon: Globe, color: 'from-blue-400 to-blue-700', bgColor: 'bg-blue-600/20' },
    { name: 'AWS', level: 70, icon: Globe, color: 'from-orange-500 to-orange-700', bgColor: 'bg-orange-600/20' },
    { name: 'Git/GitHub', level: 85, icon: Code, color: 'from-gray-500 to-gray-700', bgColor: 'bg-gray-600/20' },
    { name: 'REST APIs', level: 82, icon: Globe, color: 'from-purple-400 to-purple-600', bgColor: 'bg-purple-500/20' },
    { name: 'DSA', level: 88, icon: Code, color: 'from-purple-500 to-purple-700', bgColor: 'bg-purple-600/20' }
  ];

  const projects = [
    {
      id: 1,
      title: 'NiveshX Trading Platform',
      description: 'Full-stack trading platform with secure user registration, JWT authentication with 2FA, portfolio management, and transaction handling. Built with modular Spring Boot backend and responsive React.js frontend.',
      tech: ['Spring Boot', 'React.js', 'MySQL', 'JWT', 'REST APIs', '2FA'],
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop',
      github: 'https://github.com/Ajmeriya/NiveshXTrading',
      demo: '#',
      date: 'Jan 2025 - Present',
      status: 'In Development'
    },
    {
      id: 2,
      title: 'Online Chess Game',
      description: 'Real-time multiplayer chess game with user authentication, move validation, and WebSocket communication. Features include timer-based gameplay, offer draw/resign functionality, and responsive chess board design.',
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'WebSockets', 'Chess.js'],
      image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'300\' viewBox=\'0 0 400 300\'%3E%3Cdefs%3E%3Cpattern id=\'chessboard\' patternUnits=\'userSpaceOnUse\' width=\'40\' height=\'40\'%3E%3Crect width=\'20\' height=\'20\' fill=\'%23F0D9B5\'/%3E%3Crect x=\'20\' y=\'20\' width=\'20\' height=\'20\' fill=\'%23F0D9B5\'/%3E%3Crect x=\'20\' y=\'0\' width=\'20\' height=\'20\' fill=\'%23B58863\'/%3E%3Crect x=\'0\' y=\'20\' width=\'20\' height=\'20\' fill=\'%23B58863\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'400\' height=\'300\' fill=\'%23363636\'/%3E%3Crect x=\'50\' y=\'30\' width=\'300\' height=\'240\' fill=\'url(%23chessboard)\' stroke=\'%23333\' stroke-width=\'3\'/%3E%3Ctext x=\'200\' y=\'20\' text-anchor=\'middle\' fill=\'white\' font-family=\'Arial\' font-size=\'14\' font-weight=\'bold\'%3EOnline Chess Game%3C/text%3E%3Ctext x=\'80\' y=\'290\' fill=\'%234CAF50\' font-family=\'Arial\' font-size=\'12\'%3EYou are playing as White%3C/text%3E%3Ctext x=\'280\' y=\'290\' fill=\'white\' font-family=\'Arial\' font-size=\'12\'%3EReal-time Multiplayer%3C/text%3E%3C/svg%3E',
      github: 'https://github.com/Ajmeriya/Chess',
      demo: '#',
      date: 'Oct 2024'
    },
    {
      id: 3,
      title: 'Discussion Hub - Social Media App',
      description: 'Full-featured social media platform with user authentication, profile management, post creation, likes, and comments. Built with MERN stack and EJS templating.',
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'EJS'],
      image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=400&h=300&fit=crop',
      github: 'https://github.com/Ajmeriya/social_app.mini_project',
      demo: '#',
      date: 'Nov-Dec 2024'
    },
    {
      id: 4,
      title: 'Apple Foods Website',
      description: 'Responsive food website built with HTML and CSS, showcasing modern web design principles with clean UI and smooth animations.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
      github: 'https://github.com/Ajmeriya/Apple-Foods',
      demo: '#',
      date: '2024'
    },
    {
      id: 5,
      title: 'Spring Boot Backend APIs',
      description: 'Comprehensive backend development project showcasing RESTful API creation, database integration, and Spring Boot framework implementation.',
      tech: ['Java', 'Spring Boot', 'REST API', 'MySQL'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
      github: 'https://github.com/Ajmeriya/Backend-SpringBoot',
      demo: '#',
      date: '2024-2025'
    },
    {
      id: 6,
      title: 'Laundry Service Web Application',
      description: 'Currently developing a full-stack laundry management system with Spring Boot backend and React.js frontend. Features order management, tracking, and payment integration.',
      tech: ['Spring Boot', 'React.js', 'MySQL', 'REST API'],
      image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=300&fit=crop',
      github: '#',
      demo: '#',
      date: 'Feb 2025 - Present',
      status: 'In Development'
    }
  ];

  const achievements = [
    {
      title: 'AWS Academy Cloud Foundations',
      issuer: 'AWS',
      year: '2025',
      icon: Award,
      color: 'from-orange-400 to-orange-600'
    },
    {
      title: '309 Problems Solved',
      issuer: 'LeetCode',
      year: '2024-2025',
      icon: Code,
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      title: '100+ Problems Solved',
      issuer: 'GeeksforGeeks',
      year: '2024-2025',
      icon: Code,
      color: 'from-green-400 to-green-600'
    },
    {
      title: 'Two 50 Days Badge',
      issuer: 'LeetCode',
      year: '2025',
      icon: Trophy,
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: '50 Days Streak',
      issuer: 'CodeChef',
      year: '2024-2025',
      icon: Star,
      color: 'from-purple-400 to-purple-600'
    },
    {
      title: 'National Creativity Aptitude Test',
      issuer: 'All India Category 1',
      year: '2024',
      icon: Award,
      color: 'from-red-400 to-red-600'
    }
  ];

  const interests = [
    { name: 'Space Exploration', icon: Rocket, color: 'from-blue-400 to-purple-600' },
    { name: 'Cricket', icon: Heart, color: 'from-green-400 to-blue-500' },
    { name: 'Problem Solving', icon: Zap, color: 'from-yellow-400 to-orange-500' }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const navHeight = 80;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= navHeight + 50) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial active section
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <style jsx>{`
        * {
          box-sizing: border-box;
        }
        
        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }
        
        .mobile-menu-container {
          position: relative;
        }
        
        /* Prevent horizontal scroll on mobile */
        .container-mobile {
          max-width: 100vw;
          overflow-x: hidden;
        }
        
                  /* Mobile specific styles */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.25rem !important;
            line-height: 1.1 !important;
            margin-bottom: 1rem !important;
            word-spacing: -0.1em !important;
            letter-spacing: -0.02em !important;
          }
          
          .hero-subtitle {
            font-size: 0.875rem !important;
            padding: 0 1.5rem;
            line-height: 1.4 !important;
            margin-bottom: 1.5rem !important;
          }
          
          .hero-container {
            padding-top: 2rem !important;
            padding-bottom: 2rem !important;
          }
          
          .hero-image-container {
            margin-bottom: 1.5rem !important;
          }
          
          .hero-stats-container {
            margin-bottom: 2rem !important;
            max-width: 280px !important;
          }
          
          .project-card {
            margin-bottom: 1.5rem;
          }
          
          .skill-card {
            min-height: 120px;
          }
          
          .nav-mobile {
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1rem !important;
          }
          
          .achievement-grid {
            grid-template-columns: 1fr !important;
          }
          
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          
          .interests-grid {
            grid-template-columns: 1fr !important;
          }
          
          .mobile-padding {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
          
          /* Ensure buttons are touch-friendly */
          .mobile-button {
            min-height: 44px;
            min-width: 44px;
            touch-action: manipulation;
          }
          
          /* Fix image sizing on mobile */
          .project-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
          }
          
          /* Improve text readability on mobile */
          .mobile-text {
            font-size: 0.9rem;
            line-height: 1.6;
          }
        }
        
        /* Animation performance */
        * {
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar for webkit browsers */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #374151;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #6366f1;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #4f46e5;
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg border-b border-gray-800 nav-mobile' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Harsh Ajmeriya
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`hover:text-blue-400 transition-colors duration-300 text-sm lg:text-base mobile-button ${
                    activeSection === item.id ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden mobile-menu-container">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMenuOpen(!isMenuOpen);
                }}
                className="text-white hover:text-blue-400 transition-colors mobile-button p-2"
                aria-label="Toggle mobile menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              
              {/* Mobile Navigation Dropdown */}
              {isMenuOpen && (
                <div className="absolute top-12 right-0 w-48 bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-lg shadow-xl nav-mobile">
                  <div className="py-2">
                    {navItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`block w-full text-left px-4 py-3 hover:bg-gray-800/50 hover:text-blue-400 transition-colors mobile-button ${
                          activeSection === item.id ? 'text-blue-400 bg-gray-800/30' : 'text-gray-300'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 mobile-padding">
        <div className="text-center z-10 px-4 w-full max-w-4xl mx-auto hero-container">
          <div className="mb-8 sm:mb-12 hero-image-container">
            <div className="relative w-36 h-36 sm:w-44 md:w-52 sm:h-44 md:h-52 mx-auto">
              {/* Profile photo container */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-900 flex items-center justify-center">
                  <img 
                    src="/profile-photo.jpg" 
                    alt="Harsh Ajmeriya - Professional Photo"
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      // Fallback to initials if image fails to load
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback initials (hidden by default) */}
                  <div className="w-full h-full rounded-full overflow-hidden shadow-xl">
                    <img 
                      src="/assets/profile_photo.jpg"
                      alt="Harsh Ajmeriya"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Simple status indicator */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-gray-800/80 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-700">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-400 font-medium">Available</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent hero-title">
            Harsh Ajmeriya
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-4 sm:mb-6 md:mb-8 hero-subtitle px-2">
            B.Tech IT Student • Problem Solver • 309+ DSA Problems Solved
          </p>

          {/* LeetCode Stats Display */}
          <div className="mb-4 sm:mb-6 md:mb-8 hero-stats-container mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-3 sm:p-4 md:p-6 max-w-xs sm:max-w-sm mx-auto border border-gray-700">
              <div className="text-center mb-3 sm:mb-4">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-gray-700" />
                    <circle 
                      cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="8" fill="transparent"
                      className="text-green-400"
                      strokeDasharray={`${(309/3686) * 283} 283`}
                      strokeDashoffset="0"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">309</span>
                    <span className="text-xs text-gray-400">/3686</span>
                  </div>
                </div>
                <p className="text-green-400 font-semibold mt-2 text-sm sm:text-base">Solved</p>
              </div>
              
              <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 text-center">
                <div>
                  <div className="text-green-400 text-sm sm:text-base md:text-lg font-bold">114</div>
                  <div className="text-xs text-gray-400">Easy</div>
                  <div className="text-xs text-gray-500">114/899</div>
                </div>
                <div>
                  <div className="text-yellow-400 text-sm sm:text-base md:text-lg font-bold">176</div>
                  <div className="text-xs text-gray-400">Med.</div>
                  <div className="text-xs text-gray-500">176/1918</div>
                </div>
                <div>
                  <div className="text-red-400 text-sm sm:text-base md:text-lg font-bold">19</div>
                  <div className="text-xs text-gray-400">Hard</div>
                  <div className="text-xs text-gray-500">19/869</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => scrollToSection('projects')}
              className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 sm:px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg mobile-button"
            >
              View My Projects
            </button>
            <button className="w-full sm:w-auto border border-blue-400 hover:bg-blue-400/10 px-6 sm:px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 mobile-button">
              <Download size={18} />
              Download Resume
            </button>
          </div>
          
          <div className="mt-8 sm:mt-12 animate-bounce">
            <ChevronDown size={32} className="mx-auto text-blue-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 px-4 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <div className="mb-6">
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4 mobile-text">
                  I'm Harsh Ajmeriya, a passionate Java Full Stack Developer and 3rd-year B.Tech IT student 
                  at Dharmsinh Desai University, Nadiad, with a CGPA of 8.39/10. I have a strong foundation 
                  in Java, Spring Boot, React.js, and the MERN stack.
                </p>
              </div>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 mobile-text">
                With expertise in Data Structures and Algorithms, I've solved 309 problems on LeetCode 
                and 100+ on GeeksforGeeks. I'm proficient in multiple databases including MongoDB, MySQL, 
                and PostgreSQL, and have hands-on experience building real-world applications.
              </p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 mobile-text">
                Apart from coding, I'm fascinated by space exploration and enjoy watching cricket. 
                I believe in continuous learning and love exploring new technologies to create innovative solutions.
              </p>

              {/* Interests */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 interests-grid">
                {interests.map((interest, index) => (
                  <div
                    key={interest.name}
                    className="text-center p-4 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-gray-600 transition-all duration-300"
                  >
                    <div className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-r ${interest.color} rounded-full flex items-center justify-center`}>
                      <interest.icon size={24} className="text-white" />
                    </div>
                    <p className="text-sm text-gray-300 font-medium">{interest.name}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4 sm:gap-6 stats-grid">
                <div className="bg-gray-800/50 p-4 sm:p-6 rounded-xl backdrop-blur-sm border border-gray-700 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">309+</div>
                  <div className="text-gray-400 text-sm">LeetCode Problems</div>
                </div>
                <div className="bg-gray-800/50 p-4 sm:p-6 rounded-xl backdrop-blur-sm border border-gray-700 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2">8.39</div>
                  <div className="text-gray-400 text-sm">CGPA</div>
                </div>
                <div className="bg-gray-800/50 p-4 sm:p-6 rounded-xl backdrop-blur-sm border border-gray-700 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">3rd</div>
                  <div className="text-gray-400 text-sm">Year B.Tech IT</div>
                </div>
                <div className="bg-gray-800/50 p-4 sm:p-6 rounded-xl backdrop-blur-sm border border-gray-700 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-2">6+</div>
                  <div className="text-gray-400 text-sm">Projects Built</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 p-4 sm:p-6 rounded-xl border border-blue-500/20">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-blue-400">Quick Facts</h3>
                <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                  <li className="flex items-center gap-2">
                    <Star size={16} className="text-yellow-400" />
                    AWS Certified Cloud Foundations
                  </li>
                  <li className="flex items-center gap-2">
                    <Code size={16} className="text-green-400" />
                    Full Stack Development Experience
                  </li>
                  <li className="flex items-center gap-2">
                    <Trophy size={16} className="text-purple-400" />
                    National Level Test Achiever
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-400 text-base sm:text-lg">Technologies I work with</p>
          </div>

          {/* Auto-scrolling Skills Carousel */}
          <div className="relative overflow-hidden mb-12 sm:mb-16">
            <div className="flex space-x-6 sm:space-x-8 animate-scroll">
              {[...skills, ...skills].map((skill, index) => (
                <div
                  key={`${skill.name}-${index}`}
                  className="flex-shrink-0 w-28 h-28 sm:w-32 sm:h-32 bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-3 sm:p-4 flex flex-col items-center justify-center hover:border-gray-600 transition-all duration-300 group hover:scale-105 skill-card"
                >
                  <div className={`p-2 sm:p-3 rounded-xl bg-gradient-to-r ${skill.color} mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <skill.icon size={20} className="text-white sm:w-7 sm:h-7" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-semibold text-white text-center leading-tight">{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Grid with Progress Bars */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 p-4 sm:p-6 rounded-xl hover:border-gray-600 transition-all duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-2 sm:p-3 rounded-lg bg-gradient-to-r ${skill.color} mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <skill.icon size={20} className="text-white sm:w-6 sm:h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-semibold text-white">{skill.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-400">{skill.level}% proficiency</p>
                  </div>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20 px-4 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-400 text-base sm:text-lg">Some of my recent work and contributions</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-gray-600 transition-all duration-300 hover:-translate-y-2 project-card"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500 project-image"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                  {project.status && (
                    <div className="absolute top-4 right-4 bg-green-500 px-3 py-1 rounded-full text-xs font-medium">
                      {project.status}
                    </div>
                  )}
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
                    <span className="text-xs sm:text-sm text-gray-400 bg-gray-700 px-2 py-1 rounded flex-shrink-0">{project.date}</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 mobile-text">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-500/10 text-blue-300 border border-blue-500/20 px-2 sm:px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group/link mobile-button"
                    >
                      <Github size={18} className="group-hover/link:scale-110 transition-transform" />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                    {project.demo !== '#' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group/link mobile-button"
                      >
                        <ExternalLink size={18} className="group-hover/link:scale-110 transition-transform" />
                        <span className="text-sm font-medium">Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-16 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Achievements & Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-400 text-base sm:text-lg">Recognition and milestones in my journey</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 achievement-grid">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group bg-gray-800/30 backdrop-blur-sm border border-gray-700 p-4 sm:p-6 rounded-xl hover:border-gray-600 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start mb-4">
                  <div className={`p-2 sm:p-3 rounded-lg bg-gradient-to-r ${achievement.color} mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <achievement.icon size={20} className="text-white sm:w-6 sm:h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-white mb-1">{achievement.title}</h3>
                    <p className="text-sm text-gray-400 mb-2">{achievement.issuer}</p>
                    <span className="text-xs text-gray-500 bg-gray-700 px-2 py-1 rounded">{achievement.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 px-4 bg-gray-800/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-400 text-base sm:text-lg">Let's connect and work together on something amazing</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 contact-grid">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white">Let's Connect</h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-full flex-shrink-0">
                    <Mail size={20} className="text-white sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-semibold text-sm sm:text-base break-all">ajmeriyaharsh324@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-full flex-shrink-0">
                    <Phone size={20} className="text-white sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white font-semibold text-sm sm:text-base">+91-8200877556</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-3 rounded-full flex-shrink-0">
                    <MapPin size={20} className="text-white sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-semibold text-sm sm:text-base">Jam Khambhaliya, Gujarat, India</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mt-6 sm:mt-8">
                <a 
                  href="https://github.com/Ajmeriya" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-600 p-3 sm:p-4 rounded-full transition-colors group mobile-button"
                >
                  <Github size={20} className="group-hover:scale-110 transition-transform sm:w-6 sm:h-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/harsh-ajmeriya-985b17314"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-blue-600 p-3 sm:p-4 rounded-full transition-colors group mobile-button"
                >
                  <Linkedin size={20} className="group-hover:scale-110 transition-transform sm:w-6 sm:h-6" />
                </a>
                <a 
                  href="mailto:ajmeriyaharsh324@gmail.com"
                  className="bg-gray-700 hover:bg-purple-600 p-3 sm:p-4 rounded-full transition-colors group mobile-button"
                >
                  <Mail size={20} className="group-hover:scale-110 transition-transform sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>

            <form className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors text-sm sm:text-base mobile-button"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors text-sm sm:text-base mobile-button"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
                <textarea
                  rows={5}
                  placeholder="Enter your message"
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors resize-none text-sm sm:text-base"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg mobile-button"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 border-t border-gray-800 bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 text-sm sm:text-base">&copy; 2025 Harsh Ajmeriya. Built with React.js, Tailwind CSS, and Lucide Icons.</p>
          <p className="text-xs sm:text-sm mt-2 text-gray-500">B.Tech IT Student | Dharmsinh Desai University | Java Full Stack Developer</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;