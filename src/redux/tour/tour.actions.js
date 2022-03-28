import toursCollectionTypes from "./tour.types"
import axios from "axios"

export const fetchCollectionStart = () => ({
  type: toursCollectionTypes.START_TOUR,
})

export const fetchCollectionSuccess = (tour) => ({
  type: toursCollectionTypes.SUCCESS_TOUR,
  payload: tour,
})

export const fetchCollectionFail = (errMessage) => ({
  type: toursCollectionTypes.FAIL_TOUR,
  payload: errMessage,
})

export const loadTour = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        ` https://xplorer254.herokuapp.com/natours/v1/tours/${id}`
      )
      fetchCollectionStart()
      dispatch(fetchCollectionSuccess(res.data.data.doc))
    } catch (error) {
      dispatch(fetchCollectionFail(error.message))
    }
  }
}
