import { NextPage } from 'next';
import Head from 'next/head';
import { Navbar } from '../ui';

interface Props {
  children: JSX.Element;
}

export const Layout: NextPage<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Cookie Master</title>
      </Head>
      <nav>
        <Navbar />
      </nav>
      <main style={{ padding: '20px 50px' }}>{children}</main>
    </>
  );
};
