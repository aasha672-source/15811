import { useMemo, useState } from 'react'
import NotificationCard from '../components/NotificationCard'
import { notifications } from '../data/notifications'

const eventTypes = ['All', 'Placement', 'Internship', 'Exam', 'Academic', 'General']

function AllNotifications() {
  const [selectedType, setSelectedType] = useState('All')

  const sortedNotifications = useMemo(
    () =>
      [...notifications].sort((a, b) => {
        if (a.isRead !== b.isRead) {
          return a.isRead ? 1 : -1
        }

        return b.priorityScore - a.priorityScore
      }),
    [],
  )

  const filteredNotifications =
    selectedType === 'All'
      ? sortedNotifications
      : sortedNotifications.filter(
          (notification) => notification.eventType === selectedType,
        )

  return (
    <section className="content-section">
      <div className="section-heading">
        <h2>All Notifications</h2>
        <p>Review every campus update by category and read status.</p>
      </div>

      <div className="filter-bar" aria-label="Filter notifications by type">
        {eventTypes.map((eventType) => (
          <button
            className={selectedType === eventType ? 'filter active' : 'filter'}
            key={eventType}
            onClick={() => setSelectedType(eventType)}
            type="button"
          >
            {eventType}
          </button>
        ))}
      </div>

      <div className="notification-list">
        {filteredNotifications.map((notification) => (
          <NotificationCard
            key={notification.id}
            notification={notification}
            showStatus
          />
        ))}
      </div>
    </section>
  )
}

export default AllNotifications
