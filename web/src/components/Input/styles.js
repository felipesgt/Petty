import styled from 'styled-components';

export const InputBlock = styled.div`
    margin-top: 1.4rem;
    :focus-within::after{
      width: calc(100% - 3.2rem);
      height: 2px;
      content: '';
      position: absolute;
      left: 1.6rem;
      right: 1.6rem;
      bottom: 0;
    }
`;
export const Field = styled.input` 
  width: 100%;
  height: 3.6rem;
  margin-top: 0.8rem;
  border-radius: 0.7rem;
  outline: 0;
  padding: 0 1.6rem;
  font-size: 1.6rem;
`;
export const Label = styled.label` 
  font-size: 1.4rem;

`;
