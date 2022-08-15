import React from 'react';
import TextActionBlock from './TextActionBlock';
import { ActionType } from '../../../configs/scenarios';

// eslint-disable-next-line react/prop-types
function ActionBlock({ actionType, actionName, onChange }) {
  switch (actionType) {
    case ActionType.text:
      return <TextActionBlock actionName={actionName} onChange={onChange} />;
    default:
      throw new Error(`Action type "${actionType}" does not exists`);
  }
}

export default ActionBlock;
