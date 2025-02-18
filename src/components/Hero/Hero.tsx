import styles from './hero.module.css'

interface HeroProps {
  greeting: string
  bio: string
}

const Hero = ({ greeting, bio }: HeroProps) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.greeting}>{greeting}</h1>

      <p className={styles.bio}>{bio}</p>
    </div>
  )
}

export default Hero
