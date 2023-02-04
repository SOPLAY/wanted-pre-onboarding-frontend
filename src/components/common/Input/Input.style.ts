import styled from 'styled-components';
import tw from 'twin.macro';
interface IInput {
  isValid: boolean;
}
export const input = styled.input<IInput>`
  ${() => tw`w-full px-2 py-1 duration-150 ease-in-out border`}

  ${({ isValid }) => !isValid && tw`bg-red-200`}
`;
