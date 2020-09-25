import React from 'react';
import { ActivityIndicator, ScrollView } from 'react-native';
import Proptypes from 'prop-types';

const ScrollContainer = ({ loading, children }) => (
  <ScrollView
    style={{
      backgroundColor: 'black',
    }}
    contentContainerStyle={{
      flex: loading ? 1 : 'auto',
      justifyContent: loading ? 'center' : 'flex-start',
    }}
  >
    {loading ? <ActivityIndicator colorr="white" size="small" /> : children}
  </ScrollView>
);

ScrollContainer.Proptypes = {
  loading: Proptypes.bool.isRequired,
  children: Proptypes.node.isRequired,
};

export default ScrollContainer;
