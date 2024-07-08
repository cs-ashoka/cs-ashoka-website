import { Poppins, Bayon, IM_Fell_DW_Pica } from 'next/font/google';

export const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const bayon = Bayon({
  subsets: ['latin'],
  weight: '400',
});

export const IM = IM_Fell_DW_Pica({
  subsets: ['latin'],
  weight: '400',
  style: ['normal','italic'],
});
