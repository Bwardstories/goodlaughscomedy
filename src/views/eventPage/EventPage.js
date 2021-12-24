import React, { useState, useEffect } from 'react'
import LiveEventCard from '../../components/liveEventCard/LiveEventCard'
import MailingListModal from '../../components/mailingListModal/MailingListModal'
import { useSelector } from 'react-redux'

import './eventPage.css'

const EventPage = () => {
  const state = useSelector(state => state)
  const [subscribeVisible, setSubscribeVisible] = useState(false)
  const [modalClosed, setModalClosed] = useState(false)

  const handleScroll = () => {
    var y = window.scrollY
    if (y >= 300) {
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
        />
      ) : (
        ''
      )}
      <div className="liveEventCardWrapper">
        {state.liveEvents.allLiveEvents.map(event => (
          <LiveEventCard event={event} />
        ))}
      </div>
    </>
  )
}

export default EventPage
