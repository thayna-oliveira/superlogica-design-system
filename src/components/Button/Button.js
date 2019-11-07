import styled from "styled-components";

const Button = styled.button`
    border: 0;
    border-radius: 3px;
    color: #FDFDFD;
    font-size: 1.2rem;
    margin: 1rem;
    padding: 1rem 1.5rem;
    ${props => {
      if (props.primary) {
        return `
          background: #006aff;
      `
      } else if (props.success) {
        return `
          background: #1adf79;
      `
      } else {
        return `
          background: #333a46; 
      `
      }
    }}
`;

export default Button;