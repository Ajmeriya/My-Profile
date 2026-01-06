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
      id: 7,
      title: 'Lundary Flow',
      description: 'Full-stack laundry management application with order tracking, customer management, and automated workflow. Features include real-time order status updates, payment processing, and admin dashboard for managing laundry operations efficiently.',
      tech: ['Spring Boot', 'React.js', 'MySQL', 'REST API', 'JWT'],
      image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=300&fit=crop',
      github: '#',
      demo: '#',
      date: '2024-2025'
    },
    {
      id: 8,
      title: 'Student Helper',
      description: 'Comprehensive student assistance platform designed to help students manage their academic life. Features include assignment tracking, timetable management, note-taking, grade calculator, and study resources sharing. Built to enhance student productivity and organization.',
      tech: ['Spring Boot', 'React.js', 'MySQL', 'REST API', 'JWT'],
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop',
      github: '#',
      demo: '#',
      date: '2024-2025'
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
      title: '400 Problems Solved',
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
        
        /* Enhanced Glassmorphism Effect */
        .glass-effect {
          background: rgba(17, 24, 39, 0.7);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
        }
        
        /* Professional Card Hover Effects */
        .card-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-hover:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(59, 130, 246, 0.1);
        }
        
        /* Enhanced Gradient Text */
        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        /* Professional Button Styles */
        .btn-primary {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }
        
        .btn-primary:hover::before {
          left: 100%;
        }
        
        /* Enhanced Navigation */
        .nav-glass {
          background: rgba(17, 24, 39, 0.8);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }
        
        /* Professional Section Dividers */
        .section-divider {
          height: 2px;
          background: linear-gradient(90deg, transparent, #667eea, #764ba2, transparent);
          border-radius: 2px;
        }
        
        /* Enhanced Project Cards */
        .project-card-enhanced {
          position: relative;
          overflow: hidden;
        }
        
        .project-card-enhanced::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        
        .project-card-enhanced:hover::after {
          opacity: 1;
        }
        
        /* Smooth Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }
        
        /* Enhanced Skill Cards */
        .skill-card-enhanced {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }
        
        .skill-card-enhanced:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
        }
        
        /* Professional Stats Cards */
        .stats-card {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
          border: 1px solid rgba(59, 130, 246, 0.2);
          transition: all 0.3s ease;
        }
        
        .stats-card:hover {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%);
          border-color: rgba(59, 130, 246, 0.4);
          transform: translateY(-4px);
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
        
        /* Enhanced Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: #1f2937;
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 10px;
          border: 2px solid #1f2937;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
        }
        
        /* Selection Color */
        ::selection {
          background: rgba(99, 102, 241, 0.3);
          color: white;
        }
        
        ::-moz-selection {
          background: rgba(99, 102, 241, 0.3);
          color: white;
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrollY > 50 ? 'nav-glass shadow-2xl border-b border-gray-800/50' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4">
            <button
              onClick={() => scrollToSection('home')}
              className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:from-blue-300 hover:to-purple-400 transition-all"
            >
              Harsh Ajmeriya
            </button>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'text-blue-400 bg-blue-500/10' 
                      : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800/50'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full"></span>
                  )}
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
                className="text-white hover:text-blue-400 transition-colors mobile-button p-2 rounded-lg hover:bg-gray-800/50"
                aria-label="Toggle mobile menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              
              {/* Mobile Navigation Dropdown */}
              {isMenuOpen && (
                <div className="absolute top-full right-0 mt-2 w-56 glass-effect border border-gray-700/50 rounded-xl shadow-2xl overflow-hidden">
                  <div className="py-2">
                    {navItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`block w-full text-left px-4 py-3 transition-colors mobile-button ${
                          activeSection === item.id 
                            ? 'text-blue-400 bg-blue-500/10 border-l-2 border-blue-400' 
                            : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800/50'
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
      <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 pt-20 sm:pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="text-center z-10 px-4 w-full max-w-5xl mx-auto">
          {/* Profile Photo */}
          <div className="mb-8 sm:mb-10">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden bg-gray-900 ring-4 ring-gray-800">
                <img 
                  src="/assets/profile_photo.jpg"
                  alt="Harsh Ajmeriya"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = '/profile_photo.jpg';
                  }}
                />
              </div>
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                <div className="flex items-center gap-2 glass-effect px-3 py-1 rounded-full border border-green-500/30">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-400 font-medium">Available</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Name and Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
            Harsh Ajmeriya
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
            B.Tech IT Student • Full Stack Developer • 400+ DSA Problems Solved
          </p>

          {/* LeetCode Stats - Simplified */}
          <div className="mb-8 sm:mb-10 max-w-md mx-auto">
            <div className="glass-effect rounded-2xl p-6 border border-gray-700/50 shadow-2xl">
              <div className="flex items-center justify-center gap-6 mb-4">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-green-400">400</div>
                  <div className="text-xs text-gray-400 mt-1">Problems Solved</div>
                </div>
                <div className="h-12 w-px bg-gray-700"></div>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div>
                    <div className="text-lg font-bold text-green-400">150</div>
                    <div className="text-xs text-gray-500">Easy</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-yellow-400">220</div>
                    <div className="text-xs text-gray-500">Medium</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-red-400">30</div>
                    <div className="text-xs text-gray-500">Hard</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => scrollToSection('projects')}
              className="btn-primary w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl mobile-button"
            >
              View My Projects
            </button>
            <button className="btn-primary w-full sm:w-auto border-2 border-blue-400/50 hover:border-blue-400 hover:bg-blue-400/10 px-8 py-3.5 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 mobile-button">
              <Download size={18} />
              Download Resume
            </button>
          </div>
          
          {/* Scroll Indicator */}
          <div className="mt-12 sm:mt-16">
            <div className="animate-bounce">
              <ChevronDown size={28} className="mx-auto text-blue-400/60" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 sm:py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="section-divider w-32 h-1 mx-auto mt-4"></div>
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
                With expertise in Data Structures and Algorithms, I've solved 400 problems on LeetCode 
                and 100+ on GeeksforGeeks. I'm proficient in multiple databases including MongoDB, MySQL, 
                and PostgreSQL, and have hands-on experience building real-world applications.
              </p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 mobile-text">
                Apart from coding, I'm fascinated by space exploration and enjoy watching cricket. 
                I believe in continuous learning and love exploring new technologies to create innovative solutions.
              </p>

              {/* Interests */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {interests.map((interest, index) => (
                  <div
                    key={interest.name}
                    className="text-center p-5 glass-effect rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 card-hover"
                  >
                    <div className={`w-14 h-14 mx-auto mb-3 bg-gradient-to-r ${interest.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <interest.icon size={28} className="text-white" />
                    </div>
                    <p className="text-sm text-gray-300 font-semibold">{interest.name}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4 sm:gap-6 stats-grid">
                <div className="stats-card glass-effect p-4 sm:p-6 rounded-xl text-center card-hover">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">400+</div>
                  <div className="text-gray-300 text-sm font-medium">LeetCode Problems</div>
                </div>
                <div className="stats-card glass-effect p-4 sm:p-6 rounded-xl text-center card-hover">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2">8.39</div>
                  <div className="text-gray-300 text-sm font-medium">CGPA</div>
                </div>
                <div className="stats-card glass-effect p-4 sm:p-6 rounded-xl text-center card-hover">
                  <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">3rd</div>
                  <div className="text-gray-300 text-sm font-medium">Year B.Tech IT</div>
                </div>
                <div className="stats-card glass-effect p-4 sm:p-6 rounded-xl text-center card-hover">
                  <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-2">7+</div>
                  <div className="text-gray-300 text-sm font-medium">Projects Built</div>
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
      <section id="skills" className="py-20 sm:py-24 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="section-divider w-32 h-1 mx-auto mt-4 mb-4"></div>
            <p className="text-gray-400 text-lg">Technologies I work with</p>
          </div>

          {/* Auto-scrolling Skills Carousel */}
          <div className="relative overflow-hidden mb-16">
            <div className="flex space-x-6 animate-scroll">
              {[...skills, ...skills].map((skill, index) => (
                <div
                  key={`${skill.name}-${index}`}
                  className="flex-shrink-0 w-32 h-32 glass-effect border border-gray-700/50 rounded-2xl p-4 flex flex-col items-center justify-center hover:border-blue-500/50 transition-all duration-300 group hover:scale-105"
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <skill.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-sm font-semibold text-white text-center leading-tight">{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Grid with Progress Bars */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="skill-card-enhanced glass-effect border border-gray-700/50 p-6 rounded-2xl hover:border-blue-500/50 group card-hover relative overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-5">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} mr-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                      <skill.icon size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{skill.name}</h3>
                      <p className="text-xs text-gray-400 mt-1">{skill.level}% proficiency</p>
                    </div>
                  </div>
                  <div className="w-full bg-gray-800/50 rounded-full h-2.5 overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out shadow-lg`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 sm:py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="section-divider w-32 h-1 mx-auto mt-4 mb-4"></div>
            <p className="text-gray-400 text-lg">Some of my recent work and contributions</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative project-card-enhanced card-hover glass-effect border border-gray-700/50 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                
                <div className="relative overflow-hidden h-52">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>
                  {project.status && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 px-4 py-2 rounded-full text-xs font-bold shadow-xl backdrop-blur-sm">
                      {project.status}
                    </div>
                  )}
                </div>
                <div className="relative z-10 p-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
                    <span className="text-xs text-gray-400 bg-gray-800/70 backdrop-blur-sm px-3 py-1.5 rounded-full flex-shrink-0 border border-gray-700/50">{project.date}</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-5">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-500/10 text-blue-300 border border-blue-500/30 px-3 py-1.5 rounded-full text-xs font-medium hover:bg-blue-500/20 hover:border-blue-500/50 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-5 border-t border-gray-700/50">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors group/link font-medium hover:gap-3"
                    >
                      <Github size={18} className="group-hover/link:scale-110 transition-transform" />
                      <span className="text-sm">Code</span>
                    </a>
                    {project.demo !== '#' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors group/link font-medium hover:gap-3"
                      >
                        <ExternalLink size={18} className="group-hover/link:scale-110 transition-transform" />
                        <span className="text-sm">Demo</span>
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
      <section id="achievements" className="py-20 sm:py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/30 to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Achievements & Certifications
            </h2>
            <div className="section-divider w-32 h-1 mx-auto mt-4 mb-4"></div>
            <p className="text-gray-400 text-lg">Recognition and milestones in my journey</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group relative glass-effect border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 card-hover overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${achievement.color} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 flex-shrink-0`}>
                      <achievement.icon size={24} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{achievement.title}</h3>
                      <p className="text-sm text-gray-400 mb-3">{achievement.issuer}</p>
                      <span className="inline-block text-xs font-medium text-gray-300 bg-gray-800/50 px-3 py-1.5 rounded-full border border-gray-700/50">
                        {achievement.year}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="section-divider w-32 h-1 mx-auto mt-4 mb-4"></div>
            <p className="text-gray-400 text-lg">Let's connect and work together on something amazing</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              
              <a 
                href="mailto:ajmeriyaharsh324@gmail.com"
                className="group flex items-center gap-5 p-6 glass-effect rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 card-hover"
              >
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-xl flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  <Mail size={24} className="text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-gray-400 text-xs mb-1 uppercase tracking-wider">Email</p>
                  <p className="text-white font-semibold text-base break-all group-hover:text-blue-400 transition-colors">ajmeriyaharsh324@gmail.com</p>
                </div>
              </a>

              <a 
                href="tel:+918200877556"
                className="group flex items-center gap-5 p-6 glass-effect rounded-2xl border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 card-hover"
              >
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-xl flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs mb-1 uppercase tracking-wider">Phone</p>
                  <p className="text-white font-semibold text-base group-hover:text-green-400 transition-colors">+91-8200877556</p>
                </div>
              </a>

              <div className="flex items-center gap-5 p-6 glass-effect rounded-2xl border border-gray-700/50">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 rounded-xl flex-shrink-0 shadow-lg">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs mb-1 uppercase tracking-wider">Location</p>
                  <p className="text-white font-semibold text-base">Jam Khambhaliya, Gujarat, India</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4">
                <p className="text-gray-400 text-sm mb-4">Follow me on</p>
                <div className="flex gap-3">
                  <a 
                    href="https://github.com/Ajmeriya" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group glass-effect hover:bg-gray-800/50 p-4 rounded-xl transition-all duration-300 border border-gray-700/50 hover:border-gray-600 hover:scale-110"
                  >
                    <Github size={24} className="text-gray-300 group-hover:text-white transition-colors" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/harsh-ajmeriya-985b17314"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group glass-effect hover:bg-blue-500/10 p-4 rounded-xl transition-all duration-300 border border-gray-700/50 hover:border-blue-500/50 hover:scale-110"
                  >
                    <Linkedin size={24} className="text-gray-300 group-hover:text-blue-400 transition-colors" />
                  </a>
                  <a 
                    href="mailto:ajmeriyaharsh324@gmail.com"
                    className="group glass-effect hover:bg-purple-500/10 p-4 rounded-xl transition-all duration-300 border border-gray-700/50 hover:border-purple-500/50 hover:scale-110"
                  >
                    <Mail size={24} className="text-gray-300 group-hover:text-purple-400 transition-colors" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="glass-effect p-8 rounded-2xl border border-gray-700/50 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full glass-effect border border-gray-700/50 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/30 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full glass-effect border border-gray-700/50 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/30 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
                  <textarea
                    rows={5}
                    placeholder="Hi, I'd like to discuss..."
                    className="w-full glass-effect border border-gray-700/50 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/30 transition-all resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl text-white"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 border-t border-gray-800/50 bg-gradient-to-b from-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.05),transparent_50%)]"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                Harsh Ajmeriya
              </h3>
              <p className="text-gray-400 text-sm">Java Full Stack Developer</p>
            </div>
            <div className="flex gap-4">
              <a 
                href="https://github.com/Ajmeriya" 
                target="_blank"
                rel="noopener noreferrer"
                className="glass-effect p-3 rounded-xl border border-gray-700/50 hover:border-gray-600 transition-all hover:scale-110"
              >
                <Github size={20} className="text-gray-400 hover:text-white transition-colors" />
              </a>
              <a 
                href="https://www.linkedin.com/in/harsh-ajmeriya-985b17314"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-effect p-3 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all hover:scale-110"
              >
                <Linkedin size={20} className="text-gray-400 hover:text-blue-400 transition-colors" />
              </a>
              <a 
                href="mailto:ajmeriyaharsh324@gmail.com"
                className="glass-effect p-3 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all hover:scale-110"
              >
                <Mail size={20} className="text-gray-400 hover:text-purple-400 transition-colors" />
              </a>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800/50">
            <p className="text-gray-500 text-sm text-center mb-2">
              &copy; 2025 Harsh Ajmeriya. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs text-center">
              Built with <span className="text-blue-400">React.js</span>, <span className="text-cyan-400">Tailwind CSS</span>, and <span className="text-purple-400">Lucide Icons</span>
            </p>
            <p className="text-gray-600 text-xs text-center mt-2">
              B.Tech IT Student | Dharmsinh Desai University
            </p>
          </div>
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