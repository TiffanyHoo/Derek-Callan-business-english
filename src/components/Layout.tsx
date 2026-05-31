import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import DonateButton from './DonateButton'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
      <DonateButton />
    </div>
  )
}
