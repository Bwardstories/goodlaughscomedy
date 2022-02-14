import React from 'react'
import './contactForm.css'
import { motion } from 'framer-motion'
import Button from 'react-bootstrap/Button'

function ContactForm(props) {
  const { contactFormVisible, setContactFormVisible } = props
  return (
    <motion.div
      className="overlay"
      animate={{
        visibility: contactFormVisible ? 'visible' : 'hidden',
      }}
      transition={{
        duration: 3,
      }}>
      <motion.div
        className="contactFormContainer"
        animate={{
          top: '50%',
          opacity: 1,
        }}
        initial={{
          top: '-50%',
          opacity: 0.1,
        }}
        transition={{
          type: 'spring',
          stiffness: 30,
        }}>
        <section className="contactFormInfo">
          <h2 className="contactFormTitle">Contact Us</h2>
          <p className="contactFormIntro">
            For immediate show info, contact Keith Big Daddy Dee at
            843-259-8972.<br></br>
            Seating is general admission. Larger parties (5 or more) should call
            ahead to arrange seating together, and arrive 30 minutes early to
            claim your table. Reservations will not be held past show start
            time.<br></br>
            For private comedy shows, general questions, and everything else,
            submit message below.
          </p>
        </section>
        <form
          className="contactForm"
          action="https://formsubmit.co/keith@goodlaughscomedy.com"
          method="POST">
          <label htmlFor="contactName">Name</label>
          <input type="text" name="name" id="contactName" required />
          <label htmlFor="contactEmail">Email</label>
          <input type="email" name="email" id="contactEmail" required />
          <label htmlFor="contactMessage">Message</label>
          <textarea
            name="message"
            id="contactMessage"
            cols="15"
            rows="4"></textarea>
          <Button
            variant="primary"
            type="submit"
            className="mt-3 contactButton">
            Send
          </Button>
        </form>
        <button
          className="mailingListCloseButton"
          onClick={() => {
            setContactFormVisible(false)
          }}>
          Close
        </button>
      </motion.div>
    </motion.div>
  )
}

export default ContactForm
