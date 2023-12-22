import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode } from 'react';

type MotionDivProps = {
  children: ReactNode;
  className?: string;
};

function MotionDiv({ className, children }: MotionDivProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.125 } },
  };

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        className={className}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default MotionDiv;
