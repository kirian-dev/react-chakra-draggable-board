import { FC } from 'react';
import { motion } from 'framer-motion';
import { Heading } from '@chakra-ui/react';
import { iridescentVariants } from '../common/utils/animation';

export const MainHeading: FC = () => {
  return (
    <>
      <motion.div animate="animate" variants={iridescentVariants as any}>
        <Heading
          fontSize={{ base: '4xl', sm: '5xl', md: '6xl' }}
          fontWeight="bold"
          textAlign="center"
          bgGradient="linear(to-l, #3928CA, #F40284)"
          bgClip="text"
          mt={4}
          paddingBottom={8}
        >
          Draggable Board
        </Heading>
      </motion.div>
    </>
  );
};
