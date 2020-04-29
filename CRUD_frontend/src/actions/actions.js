import { add_Data, edit_Data, delete_data } from "./types"
import axios from 'axios'

export const addData =  (data) => {
  return async dispatch => {
    const response = await axios.post('http://192.168.1.7:3000/data', data)
    console.log("RES", response.data)
    const elements = response.data
    dispatch({
      type: add_Data,
      payload :elements
    })
  }
}

export const editData = (elements) => {
  console.log('Edit action', elements)
  return {
    type: edit_Data,
    payload: {
      elements
    }
  }
}

export const deleteData = (id) => {
  return {
    type: delete_data,
    payload: { id }
  }
}