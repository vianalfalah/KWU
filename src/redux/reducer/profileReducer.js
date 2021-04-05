const initialState = {
  user: {
    data: [],
  },
  loadingProfile: false,
  successProfile: false,
  messageProfile: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "GET_PROFILE_START":
      return {
        ...state,
        loadingProfile: true,
      };
    case "GET_PROFILE_SUCCESS":
      return {
        ...state,
        loadingProfile: false,
        successProfile: true,
        user: action.payload,
      };
    case "GET_PROFILE_FAILED":
      return {
        ...state,
        loadingProfile: false,
        successProfile: false,
        messageProfile: action.payload,
      };

    default:
      return state;
  }
}
