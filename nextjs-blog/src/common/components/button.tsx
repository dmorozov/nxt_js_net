import styled from 'styled-components';

export enum ButtonVariant {
  PRIMARY,
  SECONDARY,
}

interface IProps {
  variant?: ButtonVariant;
}

export const Button = styled.button<IProps>`
  margin: 8px;
  border-radius: ${(props) => props.theme.borderRadius};
  ${(props) => {
    switch (props.variant) {
      case ButtonVariant.SECONDARY:
        return `
          color: ${props.theme.palette.secondary.contrastText};
          background-color: ${props.theme.palette.secondary.main};
        `;
      case ButtonVariant.PRIMARY:
      default:
        return `
          color: ${props.theme.palette.primary.contrastText};
          background-color: ${props.theme.palette.primary.main};
        `;
    }
  }}
`;
