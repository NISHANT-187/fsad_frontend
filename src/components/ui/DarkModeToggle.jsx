import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../../styles/DarkMode.css';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('darkMode');
    const isDark = stored === 'true';
    setDarkMode(isDark);
    if (isDark) {
      document.body.classList.add('dark-mode');
    }
  }, []);

  const toggleDarkMode = () => {
    const next = !darkMode;
    setDarkMode(next);
    localStorage.setItem('darkMode', String(next));
    document.body.classList.toggle('dark-mode');
  };

  return (
    <motion.button
      className="dark-mode-toggle"
      onClick={toggleDarkMode}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {darkMode ? '☀️' : '🌙'}
    </motion.button>
  );
};

export default DarkModeToggle;
