export const initialState = {
  id: 1,
  name: "",
  email: "",
  gender: null,
  password: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "FILL":
      return { ...state, [action.payload.label]: action.payload.data };
    default:
      return state;
  }
};
