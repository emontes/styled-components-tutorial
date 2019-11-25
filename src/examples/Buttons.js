import styled from 'styled-components';

const color = 'yellow';
const padding = 'padding:1rem';
const margin = 'margin:1rem';
const border = width => {
    return `border:solid ${width = "3px"} red`;
}

export const Button = styled.button `
${padding};
${margin};
  color: red;
  background: blue;
  text-transform: uppercase;
  ${border("10px")};
`;

export const SecondButton = styled.button `
${padding};
${margin};
  color: ${color};
  background: var(--primaryColor);
  text-transform: uppercase;
  ${border()}
`;