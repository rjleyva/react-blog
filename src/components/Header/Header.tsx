import { NavLink } from 'react-router'
import Socials from '../Socials/Socials'
import { ThemeToggle } from '../Theme/ThemeToggle'
import styles from './header.module.css'

interface HeaderProps {
  home: string
}

const Header = ({ home }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink to="/">{home}</NavLink>

        <div className={styles.iconsContainer}>
          <ThemeToggle />
          <Socials />
        </div>
      </nav>
    </header>
  )
}

export default Header
