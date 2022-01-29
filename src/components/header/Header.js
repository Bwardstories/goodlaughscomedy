import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import './header.css'
import logo from '../../assets/images/goodlaughslogo.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../../store/index.'
import userLogo from '../../assets/images/user.png'

const Header = props => {
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  const { login, logout, showUserSettings, hideUserSettings } =
    bindActionCreators(actions, dispatch)
  const history = useHistory()
  const {
    loginVisible,
    setLoginVisible,
    eventCalendarVisible,
    setEventCalendarVisible,
    setMailingModalVisible,
  } = props

  const handleMailingModal = e => {
    e.preventDefault()
    e.stopPropagation()
    setMailingModalVisible(true)
  }

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="header">
      <Link to="/">
        <img src={logo} alt="" className="logo_icon" />
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      {state.users.username ? (
        <Navbar.Brand>Welcome Back {state.users.username}</Navbar.Brand>
      ) : (
        ''
      )}
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          {state.users.isAdmin ? (
            <Link className="headerNavLinks" to="/admin">
              Admin
            </Link>
          ) : (
            ''
          )}
          <Link className="headerNavLinks" to="/">
            Home
          </Link>
          <Link className="headerNavLinks" to="/events">
            Upcoming Shows
          </Link>
          <Link className="headerNavLinks" to="/locations">
            Locations
          </Link>
          {/* <p
            className="headerNavLinks"
            onClick={() => setEventCalendarVisible(!eventCalendarVisible)}>
            Event Calendar
          </p> */}
          <Link className="headerNavLinks" to="/aboutUs">
            About Us
          </Link>
          <p
            className="signupLink"
            style={{
              textDecoration: 'none',
              fontSize: '25px',
              color: 'white',
              paddingLeft: '15px',
            }}
            onClick={e => {
              handleMailingModal(e)
            }}>
            Mailing List
          </p>
          {/* <Link className="headerNavLinks" to="/contactUs">
            Contact Us
          </Link> */}
          {!state.users.username ? (
            <p
              className="signupLink"
              style={{
                textDecoration: 'none',
                fontSize: '25px',
                color: 'white',
                paddingLeft: '15px',
              }}
              eventKey={2}
              onClick={e => {
                e.preventDefault()
                setLoginVisible(true)
              }}>
              Login/Signup
            </p>
          ) : (
            <p
              className="signupLink"
              style={{
                textDecoration: 'none',
                fontSize: '25px',
                color: 'white',
                paddingLeft: '15px',
              }}
              eventKey={2}
              onClick={() => {
                showUserSettings()
                console.log(state)
              }}>
              <img className="userLogo" src={userLogo} alt="user logo" />
            </p>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
