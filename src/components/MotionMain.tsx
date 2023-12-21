import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type MotionMainProps = {
  children: ReactNode;
};

function MotionMain({ children }: MotionMainProps) {
  return (
    <motion.main
      className="min-w-screen flex min-h-screen flex-col items-center justify-center gap-6 font-arima"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.main>
  );
}

export default MotionMain;
