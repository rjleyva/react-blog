import React from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import MoonIcon from '../icons/MoonIcon'
import SunIcon from '../icons/SunIcon'
import styles from './ThemeToggle.module.css'

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className={styles.themeToggle}
    >
      {theme === 'light' ? (
        <MoonIcon
          width={24}
          height={24}
          color="currentColor"
          role="img"
          ariaLabel="Moon Icon"
          title="Switch to Dark Mode"
        />
      ) : (
        <SunIcon
          width={24}
          height={24}
          color="currentColor"
          role="img"
          ariaLabel="Sunn Icon"
          title="Switch to Light Mode"
        />
      )}
    </button>
  )
}
