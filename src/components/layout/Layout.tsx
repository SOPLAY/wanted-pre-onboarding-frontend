import Header from './header/Header';
import * as S from './Layout.style';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <S.rootContainer>
      <Header />
      <S.bodyContainer>{children}</S.bodyContainer>
    </S.rootContainer>
  );
};

export default Layout;
