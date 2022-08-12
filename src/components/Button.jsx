import styled from 'styled-components';
import { Button } from '@mui/material';
import { rgba } from 'polished';

const theme = {
  primary: {
    color: '#345CCE',
    hoverColor: rgba('#345CCE', 0.85),
  },
  secondary: {
    color: '#919FC7',
    hoverColor: rgba('#919FC7', 0.85),
  },
};

export default styled(Button)`
  &.MuiButtonBase-root {
    background: ${(props) => theme[props.color]?.color || theme.primary.color};
    height: 48px;
    border-radius: 32px;
    border: 0;
    font-size: 16px;
    line-height: 24px;
    padding: 12px 16px;
    text-transform: none;
    color: #FFFFFF;
    
    &:hover {
      background: ${(props) => theme[props.color]?.hoverColor || theme.primary.hoverColor};
    }
  }
`;
