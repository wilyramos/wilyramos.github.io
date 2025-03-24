import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Bars3Icon } from '@heroicons/react/20/solid'

export default function NavMenu() {

    return (
        <Popover className="">
            <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 p-1 rounded-lg hover:shadow-xl">
                <Bars3Icon className='w-8 h-8' />
            </Popover.Button>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
            >
                <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen lg:max-w-min -translate-x-1/2 lg:-translate-x-48">
                    <div className="w-full lg:w-56 shrink rounded-xl bg-white p-4 text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5">
                        <Link
                            to='/about'
                            className='block p-2 hover:text-purple-950'
                        >Sobre mi</Link>
                        <Link
                            to='/proyectos'
                            className='block p-2 hover:text-purple-950'
                        >Mis Proyectos</Link>
                    
                        <button
                            className='block p-2 hover:text-purple-950'
                            type='button'
                            onClick={() => {
                                window.open('https://www.linkedin.com/in/wily-ramos/', '_blank')
                            }}

                        > 
                            LinkedIn
                            
                        </button>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}