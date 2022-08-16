import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TabIcon from './Tabs';

const TabCont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 16px 0 16px 16px;
  gap: 12px;
  overflow-y: hidden;
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
  
  width: 100%;
  
  &::-webkit-scrollbar {
    display: none;  /* Safari and Chrome */
  }
`;

function TabsContainer({ tabs }) {
  return (
    <TabCont>
      {tabs.map((tab, index) => (
        <TabIcon status={tab.status} index={index} key={tab.id}>{tab.children}</TabIcon>
      ))}
    </TabCont>
  );
}

TabsContainer.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
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
    {
      status: 'next', id: 3, index: 3, children: 'target',
    },
    {
      status: 'next', id: 3, index: 3, children: 'target',
    },
  ],
};

export default TabsContainer;
