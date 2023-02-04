import styled from 'styled-components';
import tw from 'twin.macro';
export const container = tw.div`
  w-full
  h-full
  flex
  justify-center
  items-center
`;
export const title = tw.h2`
mb-8
`;

export const form = styled.form`
  ${() => tw`p-4 border shadow-md w-96`}
`;

export const label = tw.label`
  block
  mb-4
`;
