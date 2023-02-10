import Link from 'next/link';
import styled from 'styled-components';
import { UrlObject } from 'url';

const StyledA = styled.a`
  margin: 0 0 1rem 0;
  font-size: 1rem;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

export const StyledLink = ({ href, name }: { href: string | UrlObject; name: string }) => (
  <Link href={href} passHref legacyBehavior>
    <StyledA>{name}</StyledA>
  </Link>
);
