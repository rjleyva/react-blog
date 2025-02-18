interface LinkedinIconProps {
  width: number
  height: number
  color: string
  ariaLabel: string
  role: string
  title: string
  className: string
}

const LinkedinIcon = ({
  width = 24,
  height = 24,
  color = 'currentColor',
  ariaLabel = 'LinkedIn Icon',
  role = 'img',
  title = 'Connect with RJ Leyva on LinkedIn',
  className = 'linkedinIcon'
}: LinkedinIconProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-label={ariaLabel}
      role={role}
    >
      <title>{title}</title>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export default LinkedinIcon
