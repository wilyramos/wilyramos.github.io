import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
export default function layout() {
    return (
        <>
            <div className='bg-gradient-to-b from-slate-950 to-slate-900 text-gray-200 min-h-screen sm:h-screen'>
                <Navbar />
                <Outlet />
            </div>
        </>
    )
}
