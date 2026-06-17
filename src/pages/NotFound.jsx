import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="empty-state">
      <h2>Page not found</h2>
      <p>The requested page does not exist in the notification system.</p>
      <Link to="/">Return to Priority Inbox</Link>
    </section>
  )
}

export default NotFound
