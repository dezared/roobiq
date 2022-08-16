/* eslint-disable react/prop-types */
import React from 'react';
import TextActionBlock from './TextActionBlock';
import { ActionType } from '../../../configs/scenarios';
import TextArrayActionBlock from './TextArrayActionBlock';
import ObjectArrayActionBlock from './ObjectArrayActionBlock';

function ActionBlock({
  actionType, actionName, payload, onChange,
}) {
  switch (actionType) {
    case ActionType.text:
      return <TextActionBlock actionName={actionName} onChange={onChange} />;
    case ActionType.textArray:
      return <TextArrayActionBlock actionName={actionName} payload={payload} onChange={onChange} />;
    case ActionType.objectArray:
      return (
        <ObjectArrayActionBlock
          actionName={actionName}
          payload={payload}
          onChange={onChange}
        />
      );
    default:
      throw new Error(`Action type "${actionType}" does not exists`);
  }
}

export default ActionBlock;
