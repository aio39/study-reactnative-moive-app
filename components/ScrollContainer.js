import React, { useState } from 'react';
import { ActivityIndicator, RefreshControl, ScrollView } from 'react-native';
import Proptypes from 'prop-types';

const ScrollContainer = ({
  loading,
  children,
  contentContainerStyle,
  refreshFn,
}) => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    await refreshFn();
    setRefreshing(false);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          onRefresh={onRefresh}
          refreshing={refreshing}
          tintColor={'#39c5bb'}
        />
      }
      style={{
        backgroundColor: 'black',
      }}
      contentContainerStyle={{
        flex: loading ? 1 : 0,
        justifyContent: loading ? 'center' : 'flex-start',
        ...contentContainerStyle,
      }}
    >
      {loading ? <ActivityIndicator colorr="white" size="small" /> : children}
    </ScrollView>
  );
};

ScrollContainer.Proptypes = {
  loading: Proptypes.bool.isRequired,
  children: Proptypes.node.isRequired,
  contentContainerStyle: Proptypes.object,
  refreshFn: Proptypes.func.isRequired,
};

export default ScrollContainer;
