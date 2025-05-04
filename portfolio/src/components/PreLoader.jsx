import { motion } from 'framer-motion'

function PreLoader() {
  return (
    <motion.div 
      className="fixed inset-0 flex items-center justify-center bg-background z-50"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <motion.div className="relative flex items-center justify-center">
        <motion.div
          className="absolute w-32 h-32 border-t-4 border-b-4 border-primary rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 1.5, ease: "linear", repeat: Infinity },
            scale: { duration: 1, repeat: Infinity }
          }}
        />
        
        <motion.div
          className="absolute w-24 h-24 border-l-4 border-r-4 border-primary rounded-full"
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 2, ease: "linear", repeat: Infinity },
            scale: { duration: 1.5, repeat: Infinity, delay: 0.2 }
          }}
        />
        
        <motion.div 
          className="text-2xl font-bold text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Loading
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >.</motion.span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
          >.</motion.span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
          >.</motion.span>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default PreLoader
