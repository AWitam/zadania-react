import { useReducer } from "react";
import { DropdownList } from "./DropdownList";
import { searchData } from "./searchData";
import { Action, ActionTypes, State } from "./types";
import "./searchWithDropdown.scss";

const initialState = {
  inputValue: "",
  data: searchData,
};

const SearchBoxReducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_INPUT:
      return { ...state, inputValue: action.payload };
    case ActionTypes.RESET_MATCHES:
      return { ...state, matchedItems: [] };
    case ActionTypes.FIND_MATCH:
      const matches = state.data.filter((item) =>
        item.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      return { ...state, matchedItems: matches };
    default:
      return state;
  }
};

export const SearchWithDropdown = () => {
  const [{ inputValue, matchedItems }, dispatch] = useReducer(
    SearchBoxReducer,
    initialState
  );

  const handleInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    const isRequiredLength = inputValue.length >= 4;

    if (isRequiredLength) {
      dispatch({ type: ActionTypes.FIND_MATCH, payload: inputValue });
      return;
    }

    dispatch({ type: ActionTypes.RESET_MATCHES });
  };

  return (
    <div className="search-dropdown search-dropdown__wrapper">
      <div className="search-dropdown__input">
        <input
          id="search-input"
          autoComplete="off"
          name="search"
          placeholder="Search"
          onChange={(e) =>
            dispatch({
              type: ActionTypes.CHANGE_INPUT,
              payload: e.currentTarget.value,
            })
          }
          onKeyUp={handleInput}
          value={inputValue}
        />
        <span id="icon">🔍</span>
      </div>

      {matchedItems && (
        <DropdownList dropdownItems={matchedItems} boldPhrase={inputValue} />
      )}
    </div>
  );
};
