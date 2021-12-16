import { useCollection } from '../hooks/useCollection'

// styles & components
import './OnlineUsers.css'
import Avatar from './Avatar'

export default function OnlineUsers() {
const { error, documents } = useCollection('users')
  return (
    <div className="user-list">
      <h2>All Users</h2>
      {error && <div className="error">{error}</div>}
      {documents && documents.map(user => (
        <div key={user.id} className="user-list-item">
          {user.online && <span className="online-user"></span>}
          <span>{user.displayName}</span>
          <Avatar src={user.photoURL} />
        </div>
      ))}      
    </div>
  )
}
