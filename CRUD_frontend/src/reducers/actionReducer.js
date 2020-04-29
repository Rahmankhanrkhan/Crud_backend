import { add_Data, edit_Data, delete_data, } from "../actions/types";

export const actionReducer =  (state = [], action) => {
  switch (action.type) {
    case add_Data:
      console.log('Reducer', action.payload)
      const { title, author } =  action.payload;
      console.log('ACTION REDUCER', title)
      return [...state, {
        title,
        author,
        id: new Date().getTime()
      }];
    case edit_Data:
      console.log('action reducer', action)
      return state.map(data => data.id === action.payload.elements.id
        ? action.payload.elements : data
      )
    case delete_data:
      return state.filter(data => data.id !== action.payload.id)
    default:
      return state;
  }
}