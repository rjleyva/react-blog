import { JSX } from 'react'
import { Link } from 'react-router'
import GithubIcon from '../icons/GithubIcon'
import InstagramIcon from '../icons/InstagramIcon'
import LinkedinIcon from '../icons/LinkedinIcon'
import styles from './social.module.css'

interface SocialProps {
  id: string
  url: string
  target: string
  rel: string
  ariaLabel: string
  className: string
  icon: JSX.Element
}

const Social: SocialProps[] = [
  {
    id: 'GitHub Link',
    url: 'https://github.com/rjleyva/',
    target: '_blank',
    rel: 'noopener noreferrer',
    ariaLabel: 'GitHub Icon',
    className: 'githubIcon',
    icon: (
      <GithubIcon
        width={24}
        height={24}
        color="currentColor"
        ariaLabel="GitHub Icon"
        role="img"
        title="Connect with RJ Leyva on GitHub"
      />
    )
  },
  {
    id: 'LinkedIn Link',
    url: 'https://linkedin.com/rjleyva/',
    target: '_blank',
    rel: 'noopener noreferrer',
    ariaLabel: 'LinkedIn Icon',
    className: 'linkedinIcon',
    icon: (
      <LinkedinIcon
        width={24}
        height={24}
        color="currentColor"
        ariaLabel="LinkedIn Icon"
        role="img"
        title="Connect with RJ Leyva on LinkedIn"
      />
    )
  },
  {
    id: 'Instagram Link',
    url: 'https://instagram.com/slammedwigo/',
    target: '_blank',
    rel: 'noopener noreferrer',
    ariaLabel: 'Instagram Icon',
    className: 'instagramIcon',
    icon: (
      <InstagramIcon
        width={24}
        height={24}
        color="currentColor"
        ariaLabel="Instagram Icon"
        role="img"
        title="Connect with RJ Leyva on Instagram"
      />
    )
  }
]

const Socials = () => {
  return (
    <>
      <ul className={styles.socialList}>
        {Social.map(({ id, url, target, rel, ariaLabel, className, icon }) => (
          <li key={id}>
            <Link
              to={url}
              target={target}
              aria-label={ariaLabel}
              rel={rel}
              className={className}
            >
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Socials
