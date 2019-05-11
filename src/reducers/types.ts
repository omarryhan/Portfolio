export interface ThemeType {
  isDark: boolean;
}

export type IsLoadingType = boolean;

export interface RootStateType {
  theme: ThemeType;
  isLoading: IsLoadingType;
}
