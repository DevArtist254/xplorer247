import {connect} from "react-redux"
import {useEffect} from "react"
import axios from "axios"
import useFirebaseStorage from "./../hooks/useFirebaseStorage"

const Progress = ({files, token}) => {
  const {progress, url} = useFirebaseStorage(files)
  useEffect(() => {
    const photoObj = {
      photo: url,
    }

    const URL = JSON.stringify(photoObj)
    async function upLoadPhoto(URL) {
      try {
        const res = await axios.patch(
          ` https://xplorer254.herokuapp.com/natours/v1/users/updateMe`,
          URL,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        )

        console.log(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    upLoadPhoto(URL)
  }, [url, token])

  return (
    <div
      style={{
        width: `${progress}%`,
        backgroundColor: `#000`,
        height: `10px`,
      }}
    ></div>
  )
}

const mapStateToProps = ({auth}) => ({
  token: auth.token,
})

export default connect(mapStateToProps)(Progress)
