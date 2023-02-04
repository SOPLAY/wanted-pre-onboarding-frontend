import { createGlobalStyle } from 'styled-components';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';

const CustomStyles = createGlobalStyle({
  body: {
    ...tw`antialiased`,
    ...tw`font-mono`,
  },

  h1: {
    ...tw`text-3xl`,
  },
  h2: {
    ...tw`text-2xl`,
  },
  h3: {
    ...tw`text-xl`,
  },
});

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
