import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun } from 'react-feather';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button 
      onClick={toggleTheme} 
      style={themeSwitcherStyle}
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
};

const themeSwitcherStyle: React.CSSProperties = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: 'var(--link-color)',
    padding: '0',
    fontFamily: 'source-sans-pro, sans-serif',
    display: 'flex',
    alignItems: 'center',
  };

export default ThemeSwitcher;