import React, { useState, useEffect } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import AdminRoute from './protectedRoutes/AdminRoute'
import Home from './views/home/Home'
import AboutUs from './views/aboutUs/AboutUs'
import Locations from './views/locations/Locations'
import Admin from './views/admin/Admin'
import EventPage from './views/eventPage/EventPage'
import Header from './components/header/Header'
import LoginModal from './components/loginModal/LoginModal'
import UserSettings from './components/userSettings/UserSettings'
import EventCalendar from './components/eventCalendar/EventCalendar'
import MailingListModal from './components/mailingListModal/MailingListModal'
import { getActiveEvents } from './apiRequests/eventBriteApi'
import { bindActionCreators } from 'redux'
import { actions } from './store/index.'
import { Route, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.min.css'

function App() {
  const [apiSwitch, setApiSwitch] = useState(false)
  const [subscribeVisible, setSubscribeVisible] = useState(false)
  const [modalClosed, setModalClosed] = useState(false)

  const [mailingModalVisible, setMailingModalVisible] = useState(false)
  const [loginVisible, setLoginVisible] = useState(false)
  const [eventCalendarVisible, setEventCalendarVisible] = useState(false)
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  const { loadLiveEvents } = bindActionCreators(actions, dispatch)

  const fetchEventData = async () => {
    if (apiSwitch) {
      return
    }

    let res = await getActiveEvents()
    let liveEvents = await res.data.events
      .filter(event => {
        return event.status === 'live'
      })
      .reverse()
    loadLiveEvents(liveEvents)
    setApiSwitch(true)
    console.log('calling the api')
  }

  useEffect(() => {
    fetchEventData()
  }, [])
  console.log(modalClosed, subscribeVisible, mailingModalVisible)
  return (
    <div className="app">
      <Header
        setMailingModalVisible={setMailingModalVisible}
        setModalClosed={setModalClosed}
        loginVisible={loginVisible}
        setLoginVisible={setLoginVisible}
        eventCalendarVisible={eventCalendarVisible}
        setEventCalendarVisible={setEventCalendarVisible}
      />

      {mailingModalVisible ? (
        <MailingListModal
          setModalClosed={setModalClosed}
          setSubscribeVisible={setSubscribeVisible}
          setMailingModalVisible={setMailingModalVisible}
        />
      ) : (
        ''
      )}
      <ToastContainer />
      {loginVisible ? (
        <LoginModal
          loginVisible={loginVisible}
          setLoginVisible={setLoginVisible}
        />
      ) : (
        ''
      )}
      {state.userSettings.visible && <UserSettings />}
      {eventCalendarVisible && (
        <EventCalendar
          eventCalendarVisible={eventCalendarVisible}
          setEventCalendarVisible={setEventCalendarVisible}
        />
      )}

      <Switch>
        <Route exact path="/" component={Home} />
        <AdminRoute
          exact
          path="/admin"
          component={Admin}
          isAdmin={state.users.isAdmin}
        />
        <Route
          path="/events"
          component={() => (
            <EventPage
              subscribeVisible={subscribeVisible}
              setModalClosed={setModalClosed}
              modalClosed={modalClosed}
              setSubscribeVisible={setSubscribeVisible}
              setMailingModalVisible={setMailingModalVisible}
            />
          )}
        />
        <Route path="/locations" component={Locations} />
        <Route path="/aboutUs" component={AboutUs} />
      </Switch>
    </div>
  )
}

export default App
