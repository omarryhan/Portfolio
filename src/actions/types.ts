export interface SetIsDarkActionI {
  readonly type: string;
  readonly value: boolean;
}

export interface SetIsLoadingActionI {
  readonly type: string;
  readonly value: boolean;
}

export type Action =
  | SetIsDarkActionI
  | SetIsLoadingActionI;
