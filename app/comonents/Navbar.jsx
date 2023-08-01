'use client'
import React from 'react'
import { BiBook, BiHelpCircle } from 'react-icons/bi'
import { BsFacebook, BsGithub } from 'react-icons/bs'
import { AiOutlineMenu } from 'react-icons/ai'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'

function Navbar() {
    var router = useRouter()
    var pathname = usePathname()
    console.log(pathname)

    return (
        <nav className="top-0 sticky z-50 w-full flex  items-center justify-between px-2 py-3 navbar-expand-lg bg-gray-800">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start ">
                    <Link className="text-sm font-bold leading-relaxed flex items-center justify-center  mr-4 py-2 whitespace-nowrap uppercase text-white" href="/">
                        <img className='h-8' src="https://i.ibb.co/Gp9Rcb9/geosuchana-1.png" alt="geosuchana" />
                    </Link>
                    <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" onclick="toggleNavbar('example-collapse-navbar')">
                        <i className="text-white fas fa-bars">
                            <AiOutlineMenu />
                        </i>
                    </button>
                </div>
                <div className="lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none hidden" id="example-collapse-navbar">
                    <ul className="flex flex-col lg:flex-row list-none mr-auto">
                        <li className="flex items-center">
                            <Link className={`lg:text-white lg:hover:text-gray-200  px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold ${(pathname == '/documentation' ? 'lg:text-yellow-200' : 'lg:text-white')}`} href="/documentation"><i className="lg:text-gray-200 text-gray-400 text-lg leading-lg mr-2">
                                <BiBook />
                            </i>
                                Docs</Link>
                        </li>
                        <li className="flex items-center">
                            <Link className={`lg:text-white lg:hover:text-gray-200 text-gray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold ${(pathname == '/about' ? 'lg:text-yellow-200' : 'lg:text-white')}`} href="/about"><i className="lg:text-gray-200 text-gray-400 text-lg leading-lg mr-2">
                                <BiHelpCircle />
                            </i>
                                About</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none hidden" id="example-collapse-navbar">
                <ul className="flex flex-col lg:flex-row list-none mr-auto">
                    <li className="flex items-center">
                        <Link className="lg:text-white lg:hover:text-gray-200 text-gray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" href="https://www.github.com" target='_blank'><i className="lg:text-gray-200 text-gray-400 text-lg leading-lg mr-2">
                            <BsGithub />
                        </i>
                        </Link>
                    </li>
                </ul>

            </div>
        </nav>

    )
}

export default Navbar