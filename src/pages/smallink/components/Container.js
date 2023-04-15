import React from 'react';

const StyledDiv = styled.div`
  display: flex;
  height: 100vh;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = ({ children }) => {
    return <StyledDiv>{children}</StyledDiv>;
};

export default Container;