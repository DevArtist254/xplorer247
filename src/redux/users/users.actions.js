import userCollectionTypes from "./users.types"
import axios from "axios"

export const fetchCollectionStart = () => ({
  type: userCollectionTypes.START_USER,
})

export const fetchCollectionSuccess = (tour) => ({
  type: userCollectionTypes.SUCCESS_USER,
  payload: tour,
})

export const fetchCollectionFail = (errMessage) => ({
  type: userCollectionTypes.FAIL_USER,
  payload: errMessage,
})

export const loadCurrentUser = (token) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        ` https://xplorer254.herokuapp.com/natours/v1/users/me`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      fetchCollectionStart()
      dispatch(fetchCollectionSuccess(res.data.data.doc[0]))
    } catch (error) {
      dispatch(fetchCollectionFail(error.message))
    }
  }
}
