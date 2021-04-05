const initialState = {
  listPost: {
    data: [],
  },
  loadingPosts: false,
  succesPosts: false,
  messagePosts: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "GET_POSTS_START":
      return {
        ...state,
        loadingPosts: true,
      };
    case "GET_POSTS_SUCCESS":
      return {
        ...state,
        loadingPosts: false,
        succesPosts: true,
        listPost: action.payload,
      };
    case "GET_POSTS_FAILED":
      return {
        ...state,
        loadingPosts: false,
        messagePosts: action.payload,
        succesPosts: false,
      };
    default:
      return state;
  }
}
