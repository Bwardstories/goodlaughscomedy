import React, { useState } from 'react'
import MailingListForm from '../mailingListForm/MailingListForm'
import './mailingListModal.css'

const MailingListModal = props => {
  const { setSubscribeVisible, setModalClosed, setMailingModalVisible } = props
  const [mailingFormVisible, setMailingFormVisible] = useState(false)
  return (
    <div className="overlay">
      <div className="modalWrapper">
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
      </div>
    </div>
  )
}

export default MailingListModal
