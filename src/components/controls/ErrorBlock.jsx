import React from 'react';
import styled from 'styled-components';
import { ErrorMessage } from 'formik';

const Wrap = styled.span`
  font-size: 14px;
  line-height: 16px;
  height: 28px;
  padding: 6px 16px;
  color: #ff1744;
  display: block;
`;

function ErrorBlock(props) {
  return (
    <Wrap>
      <ErrorMessage {...props} />
    </Wrap>
  );
}

export default ErrorBlock;
