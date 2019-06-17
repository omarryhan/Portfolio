export interface ThemeI {
  isDark: boolean;
}

export type IsLoadingType = boolean;

export interface RootStateType {
  theme: ThemeI;
  isLoading: IsLoadingType;
}
