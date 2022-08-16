import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TabIcon from './Tabs';

const TabCont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 16px 0px 16px 16px;
  gap: 12px;

  
  width: 375px;
  height: 88px;
  left: 0px;
  top: 44px;
`;

function TabsContainer({ tabs }) {
  return (
    <TabCont>

      {tabs.map((tab, index) => <TabIcon status={tab.status} index={index} key={tab.id}>{tab.children}</TabIcon>)}
    </TabCont>
  );
}

TabsContainer.propTypes = {
  tabs: PropTypes.array,
};

TabsContainer.defaultProps = {
  tabs: [
    {
      status: 'prev', id: 1, index: 3, children: 'Problem',
    },
    {
      status: 'current', id: 2, index: 2, children: 'solution',
    },
    {
      status: 'next', id: 3, index: 3, children: 'target',
    },
  ],
};

export default TabsContainer;
