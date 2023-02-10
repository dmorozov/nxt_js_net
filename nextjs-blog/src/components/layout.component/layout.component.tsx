import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: 100vh;
`;
const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  text-decoration: none;
  a {
    color: ${({ theme }) => theme.palette.secondary.main};
    text-decoration: none;
    &:hover,
    :focus,
    :active {
      text-decoration: underline;
    }
  }
`;

const name = '[Your Name]';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }: { children: React.ReactNode; home?: boolean }) {
  return (
    <Container>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learn how to build a personal website using Next.js" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Main>
        <Title>{name}</Title>
        <main>{children}</main>
        {!home && (
          <div>
            <Link href="/">← Back to home</Link>
          </div>
        )}
      </Main>
    </Container>
  );
}
