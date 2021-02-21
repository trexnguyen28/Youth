import React from 'react';
import {StyleSheet, SafeAreaView, FlatList} from 'react-native';

import Header from '../views/home/Header';
import ActionBlock from '../views/home/ActionBlock';
import StoryBlock from '../views/home/StoryBlock';
import {FeedDataType} from '../types';
import {BgColor} from '../../../styles/color';
import Feed from '../components/Feed';

const FeedMockData: Array<FeedDataType> = require('../../../mock/feed.json');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  listContainer: {
    backgroundColor: BgColor.ground,
  },
  content: {
    backgroundColor: BgColor.ground,
  },
});

const ListHeaderComponent = () => {
  return (
    <>
      <ActionBlock />
      <StoryBlock />
    </>
  );
};

const keyExtractor = (item: FeedDataType) => `${item.id}`;

const renderItem = ({item}: {item: FeedDataType}) => {
  return <Feed {...item} />;
};

export const HomeFeedScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FlatList
        data={FeedMockData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.listContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
        ListHeaderComponent={ListHeaderComponent}
      />
    </SafeAreaView>
  );
};
