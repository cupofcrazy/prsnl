export const containerVariants = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: .05,
    }
  },
}

export const itemVariant = {
  hidden: {
    y: 30,
    opacity: 0
  },
  show: {
    y: 0,
    opacity: 1,
  },
}