import NotificationCard from './components/NotificationCard'
import { notifications } from './data/notifications'
import './App.css'

function App() {
  const unreadNotifications = notifications.filter(
    (notification) => !notification.isRead,
  )

  const priorityNotifications = [...unreadNotifications]
    .sort((a, b) => b.priorityScore - a.priorityScore)
    .slice(0, 10)

  return (
    <main className="app">
      <section className="inbox-container">
        <header className="app-header">
          <h1>Campus Notification System</h1>
          <p className="subtitle">Priority Inbox - Top 10 Important Unread Notifications</p>
        </header>

        <section className="summary" aria-label="Notification summary">
          <div className="summary-box">
            <span className="summary-label">Total Notifications</span>
            <strong>{notifications.length}</strong>
          </div>
          <div className="summary-box">
            <span className="summary-label">Unread Notifications</span>
            <strong>{unreadNotifications.length}</strong>
          </div>
        </section>

        <section className="priority-section">
          <div className="section-heading">
            <h2>Priority Inbox</h2>
            <p>Top 10 Important Unread Notifications</p>
          </div>

          <div className="notification-list">
            {priorityNotifications.map((notification) => (
              <NotificationCard
                key={notification.id}
                notification={notification}
              />
            ))}
          </div>
        </section>
      </section>
    </main>
  )
}

export default App
