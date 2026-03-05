import { useState } from 'react'
import { Sidebar } from './components/layout/Sidebar'
import ChatPage from './pages/Index'
import { Dashboard } from './pages/Dashboard'
import { Profile } from './pages/Profile'

function App() {
  const [activeView, setActiveView] = useState('chat')

  const renderView = () => {
    switch (activeView) {
      case 'chat':
        return <ChatPage />
      case 'dashboard':
        return <Dashboard />
      case 'profile':
        return <Profile />
      default:
        return <ChatPage />
    }
  }

  return (
    <div className="flex h-screen bg-background">
      <Sidebar activeView={activeView} onNavigate={setActiveView} />
      <main className="flex-1 overflow-hidden">
        {renderView()}
      </main>
    </div>
  )
}

export default App
