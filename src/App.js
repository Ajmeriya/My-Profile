import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
      title: 'Online Chess Game',
      description: 'Real-time multiplayer chess game with user authentication, move validation, and WebSocket communication. Features include timer-based gameplay, offer draw/resign functionality, and responsive chess board design.',
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'WebSockets', 'Chess.js'],
      image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'300\' viewBox=\'0 0 400 300\'%3E%3Cdefs%3E%3Cpattern id=\'chessboard\' patternUnits=\'userSpaceOnUse\' width=\'40\' height=\'40\'%3E%3Crect width=\'20\' height=\'20\' fill=\'%23F0D9B5\'/%3E%3Crect x=\'20\' y=\'20\' width=\'20\' height=\'20\' fill=\'%23F0D9B5\'/%3E%3Crect x=\'20\' y=\'0\' width=\'20\' height=\'20\' fill=\'%23B58863\'/%3E%3Crect x=\'0\' y=\'20\' width=\'20\' height=\'20\' fill=\'%23B58863\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'400\' height=\'300\' fill=\'%23363636\'/%3E%3Crect x=\'50\' y=\'30\' width=\'300\' height=\'240\' fill=\'url(%23chessboard)\' stroke=\'%23333\' stroke-width=\'3\'/%3E%3Ctext x=\'200\' y=\'20\' text-anchor=\'middle\' fill=\'white\' font-family=\'Arial\' font-size=\'14\' font-weight=\'bold\'%3EOnline Chess Game%3C/text%3E%3Ctext x=\'80\' y=\'290\' fill=\'%234CAF50\' font-family=\'Arial\' font-size=\'12\'%3EYou are playing as White%3C/text%3E%3Ctext x=\'280\' y=\'290\' fill=\'white\' font-family=\'Arial\' font-size=\'12\'%3EReal-time Multiplayer%3C/text%3E%3C/svg%3E',
      github: 'https://github.com/Ajmeriya/Chess',
      demo: '#',
      date: 'Oct 2024'
    },
    {
      id: 2,
      title: 'Discussion Hub - Social Media App',
      description: 'Full-featured social media platform with user authentication, profile management, post creation, likes, and comments. Built with MERN stack and EJS templating.',
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'EJS'],
      image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=400&h=300&fit=crop',
      github: 'https://github.com/Ajmeriya/social_app.mini_project',
      demo: '#',
      date: 'Nov-Dec 2024'
    },
    {
      id: 3,
      title: 'Apple Foods Website',
      description: 'Responsive food website built with HTML and CSS, showcasing modern web design principles with clean UI and smooth animations.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
      github: 'https://github.com/Ajmeriya/Apple-Foods',
      demo: '#',
      date: '2024'
    },
    {
      id: 4,
      title: 'Spring Boot Backend APIs',
      description: 'Comprehensive backend development project showcasing RESTful API creation, database integration, and Spring Boot framework implementation.',
      tech: ['Java', 'Spring Boot', 'REST API', 'MySQL'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
      github: 'https://github.com/Ajmeriya/Backend-SpringBoot',
      demo: '#',
      date: '2024-2025'
    },
    {
      id: 5,
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

  const leetcodeStats = {
    total: 309,
    solved: 309,
    easy: { solved: 114, total: 899 },
    medium: { solved: 176, total: 1918 },
    hard: { solved: 19, total: 869 }
  };

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
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const LeetCodeCircle = ({ percentage, stats, label, color }) => {
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;

    return (
      <div className="relative flex flex-col items-center">
        <div className="relative w-24 h-24">
          <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r={radius}
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              className="text-gray-700"
            />
            <circle
              cx="50"
              cy="50"
              r={radius}
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              strokeDasharray={strokeDasharray}
              className={`text-${color} transition-all duration-1000 ease-out`}
              style={{ strokeDasharray, strokeDashoffset: 0 }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-lg font-bold text-white">{stats.solved}</span>
            <span className="text-xs text-gray-400">/{stats.total}</span>
          </div>
        </div>
        <span className={`mt-2 text-sm font-medium text-${color}`}>{label}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg border-b border-gray-800' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >
              Harsh Ajmeriya
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`hover:text-blue-400 transition-colors duration-300 ${
                    activeSection === item.id ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-blue-400 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-gray-900/95 backdrop-blur-sm border-b border-gray-800"
            >
              <div className="px-4 py-4 space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left hover:text-blue-400 transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center z-10 px-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-8"
          >
            <div className="w-40 h-40 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full p-1">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img 
                  src="/profile_photo.jpg"
                  alt="Harsh Ajmeriya"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Harsh Ajmeriya
          </motion.h1>
          <motion.p
            className="text-lg text-gray-400 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            B.Tech IT Student • Problem Solver • 309+ DSA Problems Solved
          </motion.p>

          {/* LeetCode Stats Display */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mb-8"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto border border-gray-700">
              <div className="text-center mb-4">
                <div className="relative w-24 h-24 mx-auto">
                  <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-gray-700" />
                    <circle 
                      cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="8" fill="transparent"
                      className="text-green-400"
                      strokeDasharray={`${(309/3686) * 283} 283`}
                      strokeDashoffset="0"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold text-white">309</span>
                    <span className="text-xs text-gray-400">/3686</span>
                  </div>
                </div>
                <p className="text-green-400 font-semibold mt-2">Solved</p>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-green-400 text-lg font-bold">114</div>
                  <div className="text-xs text-gray-400">Easy</div>
                  <div className="text-xs text-gray-500">114/899</div>
                </div>
                <div>
                  <div className="text-yellow-400 text-lg font-bold">176</div>
                  <div className="text-xs text-gray-400">Med.</div>
                  <div className="text-xs text-gray-500">176/1918</div>
                </div>
                <div>
                  <div className="text-red-400 text-lg font-bold">19</div>
                  <div className="text-xs text-gray-400">Hard</div>
                  <div className="text-xs text-gray-500">19/869</div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View My Projects
            </button>
            <button className="border border-blue-400 hover:bg-blue-400/10 px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2">
              <Download size={18} />
              Download Resume
            </button>
          </motion.div>
          
          <motion.div
            className="mt-12 animate-bounce"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <ChevronDown size={32} className="mx-auto text-blue-400" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInUp}>
                <div className="mb-6">
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    I'm Harsh Ajmeriya, a passionate Java Full Stack Developer and 3rd-year B.Tech IT student 
                    at Dharmsinh Desai University, Nadiad, with a CGPA of 8.39/10. I have a strong foundation 
                    in Java, Spring Boot, React.js, and the MERN stack.
                  </p>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  With expertise in Data Structures and Algorithms, I've solved 309 problems on LeetCode 
                  and 100+ on GeeksforGeeks. I'm proficient in multiple databases including MongoDB, MySQL, 
                  and PostgreSQL, and have hands-on experience building real-world applications.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Apart from coding, I'm fascinated by space exploration and enjoy watching cricket. 
                  I believe in continuous learning and love exploring new technologies to create innovative solutions.
                </p>

                {/* Interests */}
                <div className="grid grid-cols-3 gap-4">
                  {interests.map((interest, index) => (
                    <motion.div
                      key={interest.name}
                      variants={fadeInUp}
                      className="text-center p-4 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-gray-600 transition-all duration-300"
                    >
                      <div className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-r ${interest.color} rounded-full flex items-center justify-center`}>
                        <interest.icon size={24} className="text-white" />
                      </div>
                      <p className="text-sm text-gray-300 font-medium">{interest.name}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700 text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">309+</div>
                    <div className="text-gray-400 text-sm">LeetCode Problems</div>
                  </div>
                  <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700 text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">8.39</div>
                    <div className="text-gray-400 text-sm">CGPA</div>
                  </div>
                  <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700 text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">3rd</div>
                    <div className="text-gray-400 text-sm">Year B.Tech IT</div>
                  </div>
                  <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700 text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">5+</div>
                    <div className="text-gray-400 text-sm">Projects Built</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 p-6 rounded-xl border border-blue-500/20">
                  <h3 className="text-xl font-bold mb-4 text-blue-400">Quick Facts</h3>
                  <ul className="space-y-2 text-gray-300">
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
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-400 text-lg">Technologies I work with</p>
          </motion.div>

          {/* Auto-scrolling Skills Carousel */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex space-x-8"
              animate={{
                x: [0, -1920],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {/* First set of skills */}
              {[...skills, ...skills].map((skill, index) => (
                <div
                  key={`${skill.name}-${index}`}
                  className="flex-shrink-0 w-32 h-32 bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-4 flex flex-col items-center justify-center hover:border-gray-600 transition-all duration-300 group hover:scale-105"
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <skill.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-sm font-semibold text-white text-center leading-tight">{skill.name}</h3>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Skills Grid with Progress Bars */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={fadeInUp}
                className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 p-6 rounded-xl hover:border-gray-600 transition-all duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <skill.icon size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                    <p className="text-sm text-gray-400">{skill.level}% proficiency</p>
                  </div>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-400 text-lg">Some of my recent work and contributions</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                className="group bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-gray-600 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                  {project.status && (
                    <div className="absolute top-4 right-4 bg-green-500 px-3 py-1 rounded-full text-xs font-medium">
                      {project.status}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
                    <span className="text-sm text-gray-400 bg-gray-700 px-2 py-1 rounded">{project.date}</span>
                  </div>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-500/10 text-blue-300 border border-blue-500/20 px-3 py-1 rounded-full text-xs font-medium"
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
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group/link"
                    >
                      <Github size={18} className="group-hover/link:scale-110 transition-transform" />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                    {project.demo !== '#' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group/link"
                      >
                        <ExternalLink size={18} className="group-hover/link:scale-110 transition-transform" />
                        <span className="text-sm font-medium">Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Achievements & Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-400 text-lg">Recognition and milestones in my journey</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-gray-800/30 backdrop-blur-sm border border-gray-700 p-6 rounded-xl hover:border-gray-600 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${achievement.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <achievement.icon size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">{achievement.title}</h3>
                    <p className="text-sm text-gray-400 mb-2">{achievement.issuer}</p>
                    <span className="text-xs text-gray-500 bg-gray-700 px-2 py-1 rounded">{achievement.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-400 text-lg">Let's connect and work together on something amazing</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12"
          >
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold mb-6 text-white">Let's Connect</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-full">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-semibold">ajmeriyaharsh324@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-full">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white font-semibold">+91-8200877556</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-3 rounded-full">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-semibold">Jam Khambhaliya, Gujarat, India</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <a 
                  href="https://github.com/Ajmeriya" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-600 p-4 rounded-full transition-colors group"
                >
                  <Github size={24} className="group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/harsh-ajmeriya-985b17314"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-blue-600 p-4 rounded-full transition-colors group"
                >
                  <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="mailto:ajmeriyaharsh324@gmail.com"
                  className="bg-gray-700 hover:bg-purple-600 p-4 rounded-full transition-colors group"
                >
                  <Mail size={24} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </motion.div>

            <motion.form variants={fadeInUp} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
                <textarea
                  rows={5}
                  placeholder="Enter your message"
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Send Message
              </button>
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800 bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">&copy; 2025 Harsh Ajmeriya. Built with React.js, Tailwind CSS, and Framer Motion.</p>
          <p className="text-sm mt-2 text-gray-500">B.Tech IT Student | Dharmsinh Desai University | Java Full Stack Developer</p>
        </div>
      </footer>
    </div>
  );
};


export default Portfolio;