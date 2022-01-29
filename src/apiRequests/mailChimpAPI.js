import axios from 'axios'
import { success, failure } from '../errorHandling/toastMessages'

const baseURL = 'https://damp-plateau-92564.herokuapp.com/api'

// const baseURL = 'http://localhost:4000/api'

export const handleSubmitMailListForm = async mailingListForm => {
  try {
    console.log(mailingListForm)
    let res = await axios.post(
      `${baseURL}/mailchimp/addmember`,
      mailingListForm
    )
    success(res.data)
    console.log(res.data)
    return res.data
  } catch (error) {
    console.log(error)
    if (error.response) {
      console.log(error.response)
      failure(error.response.data.error_description)
    } else {
      throw error
    }
  }
}
