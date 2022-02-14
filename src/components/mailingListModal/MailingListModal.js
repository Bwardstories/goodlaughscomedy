import React, { useState } from 'react'
import MailingListForm from '../mailingListForm/MailingListForm'
import './mailingListModal.css'
import { motion } from 'framer-motion'

const MailingListModal = props => {
  const {
    setSubscribeVisible,
    setModalClosed,
    setMailingModalVisible,
    mailingModalVisible,
  } = props
  const [mailingFormVisible, setMailingFormVisible] = useState(false)
  return (
    <motion.div
      className="overlay"
      animate={{
        visibility: mailingModalVisible ? 'visible' : 'hidden',
      }}
      transition={{
        duration: 3,
      }}>
      <motion.div
        className="modalWrapper"
        animate={{
          top: mailingModalVisible ? '50%' : '-50%',
        }}
        initial={{
          top: '-50%',
        }}
        transition={{
          type: 'spring',
          stiffness: 30,
        }}>
        {mailingFormVisible ? (
          <MailingListForm
            setMailingModalVisible={setMailingModalVisible}
            setSubscribeVisible={setSubscribeVisible}
          />
        ) : (
          <>
            <p className="modalContent">
              Want to be the first to get notified about Upcoming Shows?
            </p>
            <p
              className="mailingListLink"
              onClick={() => {
                setMailingFormVisible(true)
              }}>
              Subscribe to our mailing list
            </p>
          </>
        )}
        <p
          className="mailingListCloseButton"
          onClick={() => {
            setMailingModalVisible(!mailingModalVisible)
          }}>
          Close
        </p>
      </motion.div>
    </motion.div>
  )
}

export default MailingListModal
