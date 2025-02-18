interface InstagramIconProps {
  width: number
  height: number
  color: string
  ariaLabel: string
  role: string
  title: string
}

const InstagramIcon = ({
  width = 24,
  height = 24,
  color = 'currentColor',
  ariaLabel = 'Instagram Icon',
  role = 'img',
  title = 'Connect with RJ Leyva on Instagram'
}: InstagramIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-label={ariaLabel}
      role={role}
    >
      <title>{title}</title>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

export default InstagramIcon
