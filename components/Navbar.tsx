"use client"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        setShowNavbar(false) // hide when scrolling down
      } else {
        setShowNavbar(true) // show when scrolling up
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } h-20 navbar-gradient navbar-backdrop`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-center h-full">
          
          {/* All logos centered */}
          <div className="navbar-center-logos">
            <Image
              src="/jamialogo.png"
              alt="Jamia Logo"
              width={50}
              height={50}
              className="object-contain navbar-logo"
            />
            <Image
              src="/nadidawa.png"
              alt="Nadidawa Logo"
              width={50}
              height={50}
              className="object-contain navbar-logo"
            />
            <Image
              src="/sahalogo.png"
              alt="Main Logo"
              width={140}
              height={45}
              className="object-contain center-logo navbar-logo"
            />
          </div>
          
        </div>
      </div>
    </nav>
  )
}