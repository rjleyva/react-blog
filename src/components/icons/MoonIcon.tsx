interface MoonIconProps {
  width: number
  height: number
  color: string
  ariaLabel: string
  role: string
  title: string
}

const MoonIcon = ({
  width = 24,
  height = 24,
  color = 'currentColor',
  ariaLabel = 'Moon Icon',
  role = 'img',
  title = 'Switch to Dark Mode'
}: MoonIconProps) => {
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
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )
}

export default MoonIcon
