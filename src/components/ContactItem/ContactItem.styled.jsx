import styled from '@emotion/styled'

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  font-size: 12px;
`;

export const Button = styled.button`
  margin-left: 20px;
  cursor: pointer;
  font-size: 10px;

  border-radius: 4px;
  border: 1px solid #986969;
  background-color: #E0D2D5;

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }

  
`;