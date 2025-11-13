import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  href?: string
  className?: string
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  type = 'button',
  onClick,
  href,
  className = ''
}: ButtonProps) => {
  const baseStyles =
    "font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center"

  const variants = {
    primary:
      "text-black hover:bg-blue-600 hover:text-white focus:ring-primary dark:text-white dark:hover:bg-blue-600 dark:hover:text-white",
    secondary:
      "bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-black dark:hover:text-white",
  }

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg",
  }

  const Component: React.ElementType = href ? 'a' : 'button'

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Component
        href={href}
        onClick={onClick}
        type={!href ? type : undefined} // ✅ only add type for <button>
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      >
        {children}
      </Component>
    </motion.div>
  )
}
