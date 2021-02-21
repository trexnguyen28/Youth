import {WindowWidth, WindowHeight, Padding} from '../../styles/spacing';

export const HeaderButtonSize = 46;

export const HeaderIconSize = 26;

export const ActionAvatarSize = 60;

export const ActionIconSize = 22;

export const StoryPerLines = 3.75;

export const StoryWidth = Math.round(
  Math.min(WindowWidth, WindowHeight) / StoryPerLines,
);

export const StoryAspectRatio = 9 / 16;

export const StoryAvatarSize = Math.round(
  (StoryWidth - Padding.horizontal) / 2,
);

export const FeedAvatarSize = 54;

export const FeedMenuIconSize = 22;

export const FeedPhotoAspeectRatio = 16 / 9;
