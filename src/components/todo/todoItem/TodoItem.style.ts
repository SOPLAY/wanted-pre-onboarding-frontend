import styled from 'styled-components';
import tw from 'twin.macro';

export const TodoItemContainer = tw.li`
  flex gap-x-1 justify-between items-center text-xl mt-1
`;

export const Label = tw.label`
  flex gap-x-2 items-center cursor-pointer
`;

interface ITodoText {
  checked: boolean;
}

export const TodoText = styled.span<ITodoText>`
  ${() => tw`block overflow-hidden duration-75 select-none text-ellipsis w-80 `}
  ${({ checked }) => checked && tw`text-gray-400 line-through `}
`;

export const TodoCheckBox = tw.input`
  w-4 h-4 border border-gray-300 
`;

export const TodoInput = tw.input`
  w-80
  
`;

export const Container = tw.div`
  flex text-2xl gap-x-1
`;

export const Button = tw.button`
  
`;
export const PulseDiv = tw.div`bg-gray-500 rounded h-6 w-96 mx-auto mt-2 animate-pulse`;
