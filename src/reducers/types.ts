export interface ThemeType {
  isDark: boolean;
}

export type isLoadingType = boolean;

export interface RootStateType {
  theme: ThemeType;
  isLoading: isLoadingType;
}
