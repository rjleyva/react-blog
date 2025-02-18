import { NavLink } from 'react-router'
import styles from './header.module.css'

interface HeaderProps {
  home: string
}

const Header = ({ home }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink to="/">{home}</NavLink>
      </nav>
    </header>
  )
}

export default Header
