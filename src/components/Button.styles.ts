import styled, { css } from "styled-components";

export type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  variant: ButtonVariant;
}

const buttonVariant = {
  primary: {
    backgroundColor: "blue",
    textColor: "white",
  },
  secondary: {
    backgroundColor: "white",
    textColor: "blue",
  },
};

export const ButtonContainer = styled.button<ButtonProps>`
  width: 100px;
  height: 40px;

  ${(props) => {
    return css`
      background-color: ${buttonVariant[props.variant].backgroundColor};
    `;
  }}
`;
