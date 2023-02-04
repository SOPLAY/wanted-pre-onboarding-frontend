import styled from 'styled-components';
import tw from 'twin.macro';

export interface IButtonProps {
  size: 'sm' | 'md' | 'xl';
  color: 'error' | 'success' | 'disable';
}

const height = {
  sm: tw`h-6 text-sm`,
  md: tw`h-10 text-lg`,
  xl: tw`text-2xl h-14`,
};
const colors = {
  error: tw`bg-red-500 hocus:bg-red-600`,
  success: tw`bg-green-400 hocus:bg-green-600`,
  disable: tw`text-gray-500 border-2 border-gray-500`,
};

export const button = styled.button<IButtonProps>`
  ${() => tw`w-full duration-300 ease-in-out`}
  ${({ color }) => colors[color]}
  ${({ size }) => height[size]}
`;
