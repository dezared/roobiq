import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const PrevTab = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 0px 0px;
  gap: 2px;

  width: 102px;
  height: 56px;

  background: #82CDC4;
  border-radius: 8px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const CurrentTab = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 0px 0px;
  gap: 2px;

  width: 102px;
  height: 56px;

  /* Black */

  background: #2E3135;
  border-radius: 8px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const NextTab = styled.div`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  gap: 2px;

  width: 102px;
  height: 56px;

  /* Grey_light 2 */

  background: #F8F8F8;
  border-radius: 8px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

function TabIcon({
  status, children, id, index,
}) {
  if (status === 'next') {
    return <NextTab id={id} index={index}>{children}</NextTab>;
  }
  if (status === 'current') {
    return <CurrentTab id={id} index={index}>{children}</CurrentTab>;
  }
  if (status === 'prev') {
    return <PrevTab id={id} index={index}>{children}</PrevTab>;
  }

  return null;
}

TabIcon.propTypes = {
  status: PropTypes.string,
  children: PropTypes.string,
  id: PropTypes.number,
  index: PropTypes.number,
};
TabIcon.defaultProps = {
  status: 'current',
  children: 'U didn`t write there(',
  id: 2,
  index: 2,
};

export default TabIcon;
