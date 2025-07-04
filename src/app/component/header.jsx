'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Menu,
  X,
  Home,
  User,
  Briefcase,
  Mail
} from 'lucide-react';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  useEffect(() => {
    const saved = localStorage.getItem('theme') === 'dark';
    setDarkMode(saved);
    document.documentElement.classList.toggle('dark', saved);
  }, []);

  const links = [
    { name: 'Home', href: '#home', icon: <Home size={18} /> },
    { name: 'About', href: '#about', icon: <User size={18} /> },
    { name: 'Projects', href: '#projects', icon: <Briefcase size={18} /> },
    { name: 'Contact', href: '#contact', icon: <Mail size={18} /> },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white/30 dark:bg-[#0e0e0e]/30 backdrop-blur-md border-b border-white/20 dark:border-gray-800 shadow-sm transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
          Sameer<span className="text-gray-600 dark:text-gray-300">.dev</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {links.map(link => (
            <Link
              key={link.name}
              href={link.href}
              className="group flex items-center gap-1 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 relative font-medium transition-all"
            >
              {link.icon}
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="text-xl ml-4 hover:scale-110 transition-transform"
        >
          {darkMode ? '🌞' : '🌙'}
        </button>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden ml-2">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 py-4 bg-white dark:bg-[#0e0e0e] border-t border-gray-200 dark:border-gray-700 space-y-3 transition-all">
          {links.map(link => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
