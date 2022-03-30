import { useEffect, useReducer } from "react";

type State = {
  geoData?: Partial<GeolocationCoordinates>;
  isListening: boolean;
  statusMessage?: string;
};

enum ActionTypes {
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
  TOGGLE_LISTENING = "TOGGLE_LISTENING",
}

interface ToggleAction {
  type: ActionTypes.TOGGLE_LISTENING;
}

interface StatusAction {
  type: ActionTypes.ERROR;
  payload: string;
}

interface GeoDataAction {
  type: ActionTypes.SUCCESS;
  payload: Partial<GeolocationCoordinates>;
}

type Action = StatusAction | ToggleAction | GeoDataAction;

function geolocationStatusReducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionTypes.TOGGLE_LISTENING:
      return { ...state, isListening: !state.isListening };
    case ActionTypes.ERROR:
      return { ...state, isListening: false, statusMessage: action.payload };
    case ActionTypes.SUCCESS:
      return { ...state, geoData: action.payload };
    default:
      return state;
  }
}

const initialState = {
  geoData: {
    longitude: -0.118092, // Londyn
    latitude: 51.509865,
  },
  isListening: false,
};

export const useGeo = () => {
  const [{ geoData, isListening, statusMessage }, dispatch] = useReducer(
    geolocationStatusReducer,
    initialState
  );

  const toggleListening = () => {
    dispatch({ type: ActionTypes.TOGGLE_LISTENING });
  };

  const success = (position: GeolocationPosition) =>
    dispatch({ type: ActionTypes.SUCCESS, payload: position.coords });

  const error = (e: GeolocationPositionError) =>
    dispatch({ type: ActionTypes.ERROR, payload: e.message });

  useEffect(() => {
    if (!navigator.geolocation) {
      dispatch({
        type: ActionTypes.ERROR,
        payload: "Geolocation is not supported in your browser!",
      });
    } else {
      isListening && navigator.geolocation.getCurrentPosition(success, error);
    }
  }, [isListening]);

  return { geoData, isListening, statusMessage, toggleListening };
};
