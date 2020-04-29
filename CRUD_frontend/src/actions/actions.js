import { add_Data, edit_Data, delete_data } from "./types"
import axios from 'axios'

export const addData = (data) => {
  return async dispatch => {
    const response = await axios.post('http://192.168.1.7:3000/data', data)
    const elements = response.data
    dispatch({
      type: add_Data,
      payload: elements
    })
  }
}

export const editData = (data) => {
  console.log('Edit action', data)
  return async dispatch => {
    const response = await axios.post(`http://192.168.1.7:3000/data`, data)
    const elements = response.data
    dispatch({
      type: edit_Data,
      payload: {
        elements
      }
    })
  }
}

export const deleteData = (dbId) => {
  return async dispatch => {
    const response = await axios.delete(`http://192.168.1.7:3000/data/${id}`)
    dispatch({
      type: delete_data,
      payload: { dbId }
    })
  }
}