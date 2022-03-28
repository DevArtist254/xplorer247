import authCurrentUser from "./auth.types"
import axios from "axios"

export const fetchAuthorizedUser = () => ({
  type: authCurrentUser.START_LOADING_USER,
})

export const fetchSuccessAuthUser = (token) => ({
  type: authCurrentUser.SUCCESS_CURRENT_USER,
  payload: token,
})

export const fetchFailAuthUser = (errMessage) => ({
  type: authCurrentUser.FAIL_CURRENT_USER,
  payload: errMessage,
})

export const loadAuthUser = (formData) => {
  return async (dispatch) => {
    try {
      if (!formData.fullName) {
        const res = await axios.post(
          ` https://xplorer254.herokuapp.com/natours/v1/users/login`,
          formData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        fetchAuthorizedUser()
        dispatch(fetchSuccessAuthUser(res.data.data.user))
      } else {
        const res = await axios.post(
          ` https://xplorer254.herokuapp.com/natours/v1/users/signup`,
          formData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        fetchAuthorizedUser()
        dispatch(fetchSuccessAuthUser(res.data.data.user))
      }
    } catch (error) {
      dispatch(fetchFailAuthUser(error.message))
    }
  }
}
