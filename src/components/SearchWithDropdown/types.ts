export type ItemDropdown = {
  name: string;
  regularPrice: number;
  salePrice: number;
};

export type State = {
  inputValue: string;
  data: ItemDropdown[];
  matchedItems?: ItemDropdown[];
};

export enum ActionTypes {
  CHANGE_INPUT = "CHANGE_INPUT",
  FIND_MATCH = "FIND_MATCH",
  RESET_MATCHES = "RESET_MATCHES",
}

export interface FindMatchAction {
  type: ActionTypes.FIND_MATCH | ActionTypes.CHANGE_INPUT;
  payload: string;
}

export interface ResetMatchesAction {
  type: ActionTypes.RESET_MATCHES;
}

export type Action = FindMatchAction | ResetMatchesAction;
