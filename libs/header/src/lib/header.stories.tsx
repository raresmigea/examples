import  React  from 'react';
import { Header, HeaderProps } from './header';

export default {
  component: Header,
  title: 'Header',
};

export const primary = () => {
  const props: HeaderProps = {};

  return <Header />;
}
