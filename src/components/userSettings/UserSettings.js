import React from 'react'
import './userSettings.css'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { bindActionCreators } from 'redux'
import { actions } from '../../store/index.'
import Button from 'react-bootstrap/Button'
import { logout } from '../../store/actions'

const UserSettings = () => {
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  const { logout, showUserSettings, hideUserSettings } = bindActionCreators(
    actions,
    dispatch
  )
  const history = useHistory()

  return (
    <div className="overlay">
      <div className="userSettingsWrapper">
        <h3 className="settingsTitle">Account Settings</h3>
        <div className="settingsNameContainer">
          <p className="settingsUsername">{state.users.username}</p>
          <p className="settingsEmail">{state.users.email}</p>
        </div>
        <p
          className="hideUserSettingsButton"
          onClick={() => hideUserSettings()}
          variant="danger">
          Close
        </p>
        {/* <p className="mailingListButton">Subscribe to Mailing List</p> */}
        <p
          className="logoutButton"
          onClick={() => {
            logout()
            hideUserSettings()
            history.push('/')
          }}
          variant="warning">
          Logout
        </p>
      </div>
    </div>
  )
}

export default UserSettings
