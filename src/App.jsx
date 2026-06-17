import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import AllNotifications from './pages/AllNotifications'
import NotFound from './pages/NotFound'
import PriorityInbox from './pages/PriorityInbox'

function App() {
  return (
    <main className="app">
      <div className="app-shell">
        <header className="site-header">
          <div>
            <h1>Campus Notification System</h1>
            <p className="subtitle">Stage 2 - Priority Inbox with Navigation</p>
          </div>

          <nav className="site-nav" aria-label="Main navigation">
            <NavLink to="/">Priority Inbox</NavLink>
            <NavLink to="/notifications">All Notifications</NavLink>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<PriorityInbox />} />
          <Route path="/notifications" element={<AllNotifications />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </main>
  )
}

export default App
