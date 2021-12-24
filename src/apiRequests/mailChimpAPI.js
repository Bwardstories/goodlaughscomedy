import axios from 'axios'
import { success, failure } from '../errorHandling/toastMessages'

const baseURL = 'https://damp-plateau-92564.herokuapp.com/api/'

export const handleSubmitMailListForm = async mailingListForm => {
  try {
    let res = await axios.post(
      `${baseURL}/mailchimp/addmember`,
      mailingListForm
    )
    success(`Subscribed Successfully`)
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
