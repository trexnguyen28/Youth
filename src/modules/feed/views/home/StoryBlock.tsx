import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import StoryData from '../../../../mock/story.json';
import Story from '../../components/Story';
import StoryCreation from '../../components/StoryCreation';
import {StoryDataType} from '../../types';
import {BgColor} from '../../../../styles/color';
import {Padding} from '../../../../styles/spacing';

interface Props {}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexGrow: 0,
    flexShrink: 0,
    backgroundColor: BgColor.white,
    marginVertical: Padding.base,
  },
  content: {
    paddingVertical: Padding.base,
    paddingHorizontal: Padding.horizontal,
  },
});

const keyExtractor = (item: StoryDataType) => `${item.id}`;

const renderItem = ({item}: {item: StoryDataType}) => {
  return <Story {...item} />;
};

//TODO: Add animation for CreationItem when scrolling
const StoryBlock = (props: Props) => {
  return (
    <FlatList
      horizontal
      data={StoryData}
      renderItem={renderItem}
      style={styles.container}
      keyExtractor={keyExtractor}
      ListHeaderComponent={StoryCreation}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
    />
  );
};

export default StoryBlock;
