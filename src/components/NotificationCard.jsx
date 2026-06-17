function formatDate(timestamp) {
  return new Intl.DateTimeFormat('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(timestamp))
}

function NotificationCard({ notification }) {
  const { title, eventType, timestamp, priorityScore } = notification
  const badgeClassName = `badge badge-${eventType.toLowerCase()}`

  return (
    <article className="notification-card">
      <div className="card-header">
        <h3>{title}</h3>
        <span className={badgeClassName}>{eventType}</span>
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
