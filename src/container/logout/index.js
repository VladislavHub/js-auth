import { saveSession } from '../../script/session'

document.addEventListener('DOMContentloaded', () => {
  saveSession(null)

  location.assign('/')
})
