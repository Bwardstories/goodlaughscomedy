import React, { useState } from 'react'
import { handleSubmitMailListForm } from '../../apiRequests/mailChimpAPI'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './mailingListForm.css'

const initialFormState = {
  firstname: '',
  lastname: '',
  email: '',
}

const MailingListForm = props => {
  const { setSubscribeVisible } = props
  const [mailingListForm, setMailingListForm] = useState(initialFormState)

  const handleChange = event => {
    setMailingListForm({
      ...mailingListForm,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    handleSubmitMailListForm(mailingListForm).then(() =>
      setSubscribeVisible(false)
    )
  }

  return (
    <div>
      <Form onSubmit={handleSubmit} className="">
        <Form.Group className="w-100">
          <h4>
            Please Enter the information below to subscribe to our mailing list
          </h4>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="First Name"
            name="firstname"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="w-100">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Last Name"
            name="lastname"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className=" w-100" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Subscribe
        </Button>
      </Form>
    </div>
  )
}

export default MailingListForm
