import React, { useState } from 'react'
import MailingListForm from '../mailingListForm/MailingListForm'
import './mailingListModal.css'
import { motion } from 'framer-motion'

const MailingListModal = props => {
  const { setSubscribeVisible, setModalClosed, setMailingModalVisible } = props
  const [mailingFormVisible, setMailingFormVisible] = useState(false)
  return (
    <div className="overlay">
      <motion.div
        className="modalWrapper"
        animate={{
          top: '50%',
        }}
        initial={{
          top: '-50%',
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
            setMailingModalVisible(false)
            setSubscribeVisible(false)
            setModalClosed(true)
          }}>
          Close
        </p>
      </motion.div>
    </div>
  )
}

export default MailingListModal
