"use client"
import Image from "next/image"

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 h-20 navbar-gradient navbar-backdrop">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid place-items-center h-full w-full">
          
          {/* All logos centered */}
          <div className="navbar-center-logos flex items-center gap-4">
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
