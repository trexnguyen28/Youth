import React from 'react';
import {
  StyleSheet,
  ViewStyle,
  ImageStyle,
  NativeScrollEvent,
  View,
  TextStyle,
} from 'react-native';
import Story from '../../components/Story';
import StoryCreation from '../../components/StoryCreation';
import {StoryDataType} from '../../types';
import {BgColor} from '../../../../styles/color';
import {Padding, BorderWidth} from '../../../../styles/spacing';
import {FlatList} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import {
  StoryWidth,
  StoryAspectRatio,
  StoryDefaultBorder,
  StoryAnimatedBorderRadius,
  StoryAvatarMinSize,
  StoryMinWidth,
  StoryMinHeight,
  HeaderButtonSize,
} from '../../constants';
import {FontSize} from '../../../../styles/typography';

const StoryData: Array<StoryDataType> = require('../../../../mock/story.json');

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
  headerAlt: {
    backgroundColor: 'transparent',
    width: StoryWidth,
    margin: Padding.small,
  },
});

const keyExtractor = (item: StoryDataType) => `${item.id}`;

const renderItem = ({item}: {item: StoryDataType}) => {
  return <Story {...item} />;
};

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const ListHeaderComponent = () => <View style={styles.headerAlt} />;

//TODO Check TS here
const StoryBlock = (props: Props) => {
  const xOffset = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((e: NativeScrollEvent) => {
    xOffset.value = e.contentOffset.x;
  });

  const creationContainerStyle = useAnimatedStyle<ViewStyle>(() => {
    const width = interpolate(
      xOffset.value,
      [0, StoryWidth],
      [StoryWidth, StoryMinWidth],
      Extrapolate.CLAMP,
    );
    const height = interpolate(
      xOffset.value,
      [0, StoryWidth],
      [StoryWidth / StoryAspectRatio, StoryMinHeight],
      Extrapolate.CLAMP,
    );

    const top = interpolate(
      xOffset.value,
      [0, StoryWidth],
      [
        Padding.base * 2,
        Padding.vertical * 2 +
          StoryWidth / (2 * StoryAspectRatio) -
          StoryMinHeight / 2,
      ],
      Extrapolate.CLAMP,
    );

    const left = interpolate(
      xOffset.value,
      [0, StoryWidth],
      [Padding.vertical, 0],
      Extrapolate.CLAMP,
    );

    const borderRightRadius = interpolate(
      xOffset.value,
      [0, StoryWidth],
      [StoryDefaultBorder, StoryAnimatedBorderRadius],
      Extrapolate.CLAMP,
    );
    const borderLeftRadius = interpolate(
      xOffset.value,
      [0, StoryWidth],
      [StoryDefaultBorder, 0],
      Extrapolate.CLAMP,
    );

    return {
      width,
      height,
      borderTopLeftRadius: borderLeftRadius,
      borderBottomLeftRadius: borderLeftRadius,
      borderTopRightRadius: borderRightRadius,
      borderBottomRightRadius: borderRightRadius,
      margin: xOffset.value <= 0 ? Padding.small : 0,
      left:
        xOffset.value < 0 ? Math.abs(xOffset.value) + Padding.vertical : left,
      top,
    };
  });

  const creationImageStyle = useAnimatedStyle<ImageStyle>(() => {
    const width = interpolate(
      xOffset.value,
      [0, StoryWidth],
      [StoryWidth - BorderWidth.small, StoryAvatarMinSize],
      Extrapolate.CLAMP,
    );
    const height = interpolate(
      xOffset.value,
      [0, StoryWidth],
      [
        (((StoryWidth - BorderWidth.small) / StoryAspectRatio) * 2) / 3,
        StoryAvatarMinSize,
      ],
      Extrapolate.CLAMP,
    );
    const borderRadius = interpolate(
      xOffset.value,
      [0, StoryWidth],
      [0, StoryAvatarMinSize / 2],
      Extrapolate.CLAMP,
    );

    const tx = interpolate(
      xOffset.value,
      [0, StoryWidth],
      [0, StoryMinWidth - StoryAvatarMinSize - Padding.base],
      Extrapolate.CLAMP,
    );
    const ty = interpolate(
      xOffset.value,
      [0, StoryWidth],
      [0, (StoryMinHeight - StoryAvatarMinSize) / 2],
      Extrapolate.CLAMP,
    );

    return {
      width: width,
      height: height,
      borderTopLeftRadius:
        xOffset.value <= 0 ? StoryDefaultBorder : borderRadius,
      borderTopRightRadius:
        xOffset.value <= 0 ? StoryDefaultBorder : borderRadius,
      borderBottomRightRadius: borderRadius,
      borderBottomLeftRadius: borderRadius,
      transform: [{translateX: tx}, {translateY: ty}],
    };
  });

  const creationTitleStyle = useAnimatedStyle<TextStyle>(() => {
    const opacity = interpolate(
      xOffset.value,
      [0, StoryMinWidth],
      [1, 0],
      Extrapolate.CLAMP,
    );
    const fontSize = interpolate(
      xOffset.value,
      [0, StoryMinWidth],
      [FontSize.normal, FontSize.normal / 2],
      Extrapolate.CLAMP,
    );

    return {opacity, fontSize};
  });

  const creationIconStyle = useAnimatedStyle<TextStyle>(() => {
    const top = interpolate(
      xOffset.value,
      [0, StoryWidth],
      [
        ((StoryWidth / StoryAspectRatio - HeaderButtonSize) * 2) / 3,
        StoryMinHeight / 3,
      ],
      Extrapolate.CLAMP,
    );
    const left = interpolate(
      xOffset.value,
      [0, StoryWidth],
      [(StoryWidth - HeaderButtonSize) / 2, (1 * StoryAvatarMinSize) / 2],
      Extrapolate.CLAMP,
    );
    const scale = interpolate(
      xOffset.value,
      [0, StoryWidth],
      [1, 0.375],
      Extrapolate.CLAMP,
    );

    return {top, left, transform: [{scale}]};
  });

  return (
    <View>
      <AnimatedFlatList
        horizontal
        data={StoryData}
        renderItem={renderItem}
        style={styles.container}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        keyExtractor={keyExtractor}
        ListHeaderComponent={ListHeaderComponent}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.content}
      />
      <StoryCreation
        containerStyle={creationContainerStyle}
        imageStyle={creationImageStyle}
        titleStyle={creationTitleStyle}
        iconStyle={creationIconStyle}
      />
    </View>
  );
};

export default StoryBlock;
