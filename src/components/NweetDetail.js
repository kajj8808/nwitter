import { useState } from 'react';
import styled from 'styled-components';

const Test = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: blue;
`;

const NweetDetail = () => {
  console.log('test')
  return (
    <>
      <Test></Test>
      <h1>tttt</h1>
    </>
  );
};

export default NweetDetail;
