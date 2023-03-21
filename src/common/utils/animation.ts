import { headingIridescentColors } from './helpers';

interface IridescentVariants {
  [key: number]: any;
  animate: {
    color: string[];
    transition: {
      duration: number;
      repeat: number;
    };
  };
}

export const iridescentVariants: IridescentVariants = {
  animate: {
    color: headingIridescentColors,
    transition: {
      duration: 4,
      repeat: Infinity,
    },
  },
};
