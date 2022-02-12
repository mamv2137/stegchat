import { useDisclosure } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const HCollapse: React.FC = ({ children }) => {
  const { getButtonProps, getDisclosureProps, isOpen } = useDisclosure();
  const [hidden, setHidden] = useState(!isOpen);

  return (
    <div>
      <button {...getButtonProps()}>Toggle</button>
      <motion.div
        {...getDisclosureProps()}
        hidden={hidden}
        initial={false}
        onAnimationStart={() => setHidden(false)}
        onAnimationComplete={() => setHidden(!isOpen)}
        animate={{ width: isOpen ? 500 : 0 }}
        style={{
          background: 'red',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          position: 'absolute',
          right: '0',
          height: '100vh',
          top: '0',
        }}>
        {children}
      </motion.div>
    </div>
  );
};

export default HCollapse;
