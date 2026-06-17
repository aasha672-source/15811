function formatDate(timestamp) {
  return new Intl.DateTimeFormat('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(timestamp))
}

function NotificationCard({ notification, showStatus = false }) {
  const { title, eventType, timestamp, isRead, priorityScore } = notification
  const badgeClassName = `badge badge-${eventType.toLowerCase()}`

  return (
    <article className={isRead ? 'notification-card read' : 'notification-card'}>
      <div className="card-header">
        <h3>{title}</h3>
        <div className="card-badges">
          <span className={badgeClassName}>{eventType}</span>
          {showStatus && (
            <span className={isRead ? 'status read-status' : 'status unread-status'}>
              {isRead ? 'Read' : 'Unread'}
            </span>
          )}
        </div>
      </div>

      <div className="card-details">
        <p>
          <span>Type:</span> {eventType}
        </p>
        <p>
          <span>Priority Score:</span> {priorityScore}
        </p>
        <p>
          <span>Date:</span> {formatDate(timestamp)}
        </p>
      </div>
    </article>
  )
}

export default NotificationCard
