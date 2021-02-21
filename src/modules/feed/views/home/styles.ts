import {StyleSheet} from 'react-native';
import {Padding, BorderWidth} from '../../../../styles/spacing';
import {BgColor, Color, TextColor, BorderColor} from '../../../../styles/color';
import {
  HeaderButtonSize,
  HeaderIconSize,
  ActionIconSize,
} from '../../constants';
import {FontSize, FontWeight} from '../../../../styles/typography';

export const HeaderStyles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: BgColor.white,
    justifyContent: 'space-between',
    paddingHorizontal: Padding.base,
    paddingBottom: Padding.base,
  },
  rightContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.grey,
    marginHorizontal: Padding.small,
    width: HeaderButtonSize,
    height: HeaderButtonSize,
    borderRadius: HeaderButtonSize / 2,
  },
  icon: {
    color: TextColor.normal,
    fontSize: HeaderIconSize,
    lineHeight: HeaderButtonSize,
  },
});

export const ActionBlockStyles = StyleSheet.create({
  container: {
    paddingBottom: Padding.base,
    backgroundColor: BgColor.white,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Padding.base,
    paddingVertical: Padding.vertical,
    borderBottomWidth: BorderWidth.base,
    borderBottomColor: BorderColor.normal,
  },
  title: {
    padding: 0,
    opacity: 0.87,
    fontSize: FontSize.large,
    marginHorizontal: Padding.base,
    color: TextColor.normal,
  },
  avatar: {
    marginHorizontal: Padding.small,
  },
  footerContainer: {
    flexDirection: 'row',
    paddingHorizontal: Padding.base,
    paddingTop: Padding.base,
  },
  actionBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Padding.small / 2,
  },
  actionBorderBox: {
    borderEndWidth: BorderWidth.base,
    borderEndColor: BorderColor.normal,
  },
  liveIcon: {
    paddingHorizontal: Padding.small / 2,
    fontSize: ActionIconSize,
    color: Color.red,
  },
  imagesIcon: {
    paddingHorizontal: Padding.small / 2,
    fontSize: ActionIconSize,
    color: Color.green,
  },
  cameraIcon: {
    paddingHorizontal: Padding.small / 2,
    fontSize: ActionIconSize,
    color: Color.purple,
  },
  actionTitle: {
    color: TextColor.normal,
    fontSize: FontSize.normal,
    fontWeight: FontWeight.bold,
    paddingHorizontal: Padding.small,
  },
});
