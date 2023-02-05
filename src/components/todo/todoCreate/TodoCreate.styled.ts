import tw from 'twin.macro';

export const TodoCreateContainer = tw.div`
  w-96 text-xl py-5 mx-auto
`;

export const Form = tw.form`
  flex gap-x-5
`;

export const Button = tw.button`
  font-bold text-3xl duration-200 ease-in-out  hover:(scale-110 text-green-600)
`;
