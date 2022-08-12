import styled from 'styled-components';
import TextField from '@mui/material/TextField';

export default styled(TextField)`
  background-color: #F7F7F7;
  height: 48px;
  border-radius: 16px;
  padding: 12px 16px;
  
  & input {
    height: 48px;
    box-sizing: border-box;
    font-size: 16px;
    line-height: 24px;
    color: #020B0F;
    
    &::placeholder {
      color: #8B8F94;
    }
  }
  
  & fieldset {
    border: 0;
  }
`;
