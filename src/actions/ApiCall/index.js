import axios from "axios"
import {API_ROOT} from 'utilities/constance'

export const fetchBoardDetails = async (id) => {
  const request = await axios.get(`${API_ROOT}/v1/boards/${id}`)
  return request.data
}

export const createNewList = async (data) => {
  const request = await axios.post(`${API_ROOT}/v1/lists`, data)
  return request.data
}

export const updateList = async (id, data) => {
  const request = await axios.put(`${API_ROOT}/v1/lists/${id}`, data)
  return request.data
}
export const createNewTask = async (data) => {
  const request = await axios.post(`${API_ROOT}/v1/tasks`, data)
  return request.data
}
