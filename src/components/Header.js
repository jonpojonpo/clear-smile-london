import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="text-2xl font-bold text-dental-blue">
              Clear Smile London
            </Link>
          </div>
          
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
          <nav className="hidden md:flex space-x-10">
            <Link href="/invisalign-price" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Pricing
            </Link>
            <Link href="/invisalign-vs-braces" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Invisalign vs Braces
            </Link>
            <Link href="/cheap-invisalign" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Affordable Options
            </Link>
            <Link href="/consultation" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Book Consultation
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link
              href="tel:+442077346421"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-dental-blue hover:bg-dental-dark"
            >
              Call Now: 020 7734 6421
            </Link>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-dental-blue">Clear Smile London</span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    <Link href="/invisalign-price" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                      <span className="ml-3 text-base font-medium text-gray-900">Pricing</span>
                    </Link>
                    <Link href="/invisalign-vs-braces" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                      <span className="ml-3 text-base font-medium text-gray-900">Invisalign vs Braces</span>
                    </Link>
                    <Link href="/cheap-invisalign" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                      <span className="ml-3 text-base font-medium text-gray-900">Affordable Options</span>
                    </Link>
                    <Link href="/consultation" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                      <span className="ml-3 text-base font-medium text-gray-900">Book Consultation</span>
                    </Link>
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <Link
                  href="tel:+442077346421"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-dental-blue hover:bg-dental-dark"
                >
                  Call Now: 020 7734 6421
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}