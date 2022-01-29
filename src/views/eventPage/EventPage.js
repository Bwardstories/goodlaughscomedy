import React, { useState, useEffect } from 'react'
import LiveEventCard from '../../components/liveEventCard/LiveEventCard'
import MailingListModal from '../../components/mailingListModal/MailingListModal'
import { useSelector } from 'react-redux'

import './eventPage.css'

const EventPage = props => {
  const {
    subscribeVisible,
    setSubscribeVisible,
    modalClosed,
    setModalClosed,
    setMailingModalVisible,
  } = props
  const state = useSelector(state => state)

  const handleScroll = () => {
    var y = window.scrollY
    if (y >= 100) {
      setSubscribeVisible(true)
    }
  }
  useEffect(() => {
    return window.removeEventListener('scroll', handleScroll)
  }, [])

  window.addEventListener('scroll', handleScroll)
  return (
    <>
      {!state.users.onMailingList && !modalClosed && subscribeVisible ? (
        <MailingListModal
          setModalClosed={setModalClosed}
          setSubscribeVisible={setSubscribeVisible}
          setMailingModalVisible={setMailingModalVisible}
        />
      ) : (
        ''
      )}
      <div className="liveEventCardWrapper">
        <h2 className="secondaryTitle">Charleston comedy</h2>
        {state.liveEvents.allLiveEvents.map(event => (
          <LiveEventCard event={event} />
        ))}
      </div>
    </>
  )
}

export default EventPage
