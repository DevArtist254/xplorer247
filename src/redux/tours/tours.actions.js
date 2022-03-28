import toursCollectionTypes from "./tours.types"
import axios from "axios"

export const fetchCollectionsStart = () => ({
  type: toursCollectionTypes.START,
})

export const fetchCollectionsSuccess = (tours) => ({
  type: toursCollectionTypes.SUCCESS,
  payload: tours,
})

export const fetchCollectionsFail = (errMessage) => ({
  type: toursCollectionTypes.FAIL,
  payload: errMessage,
})

export const loadToursAsync = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        " https://xplorer254.herokuapp.com/natours/v1/tours"
      )
      fetchCollectionsStart()
      dispatch(fetchCollectionsSuccess(res.data.data.doc))
    } catch (error) {
      dispatch(fetchCollectionsFail(error.message))
    }
  }
}
