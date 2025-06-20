import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="text-white text-2xl font-bold">
              Clear Smile London
            </div>
            <p className="text-gray-300 text-base">
              Expert Invisalign treatment in London with transparent pricing. 
              Sarah Holmes has 25+ years of dental experience and has been providing 
              Invisalign treatments since 2006.
            </p>
            <div className="flex space-x-6">
              <a href="tel:+442077346421" className="text-gray-300 hover:text-white">
                <span className="sr-only">Phone</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </a>
              <a href="mailto:enquiries@carnabystreetdentist.co.uk" className="text-gray-300 hover:text-white">
                <span className="sr-only">Email</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Services
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/invisalign-price" className="text-base text-gray-300 hover:text-white">
                      Invisalign Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="/invisalign-vs-braces" className="text-base text-gray-300 hover:text-white">
                      Invisalign vs Braces
                    </Link>
                  </li>
                  <li>
                    <Link href="/cheap-invisalign" className="text-base text-gray-300 hover:text-white">
                      Affordable Invisalign
                    </Link>
                  </li>
                  <li>
                    <Link href="/consultation" className="text-base text-gray-300 hover:text-white">
                      Free Consultation
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Areas
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/areas/soho" className="text-base text-gray-300 hover:text-white">
                      Soho
                    </Link>
                  </li>
                  <li>
                    <Link href="/areas/covent-garden" className="text-base text-gray-300 hover:text-white">
                      Covent Garden
                    </Link>
                  </li>
                  <li>
                    <Link href="/areas/west-end" className="text-base text-gray-300 hover:text-white">
                      West End
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Contact
                </h3>
                <ul className="mt-4 space-y-4">
                  <li className="text-base text-gray-300">
                    <strong>Sarah Holmes</strong><br />
                    Carnaby Street Dental
                  </li>
                  <li className="text-base text-gray-300">
                    Phone: <a href="tel:+442077346421" className="hover:text-white">020 7734 6421</a>
                  </li>
                  <li className="text-base text-gray-300">
                    Email: <a href="mailto:enquiries@carnabystreetdentist.co.uk" className="hover:text-white">enquiries@carnabystreetdentist.co.uk</a>
                  </li>
                  <li className="text-base text-gray-300">
                    <a href="https://carnabystreetdentist.co.uk" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                      carnabystreetdentist.co.uk
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2025 Clear Smile London. All rights reserved. Invisalign® is a registered trademark of Align Technology, Inc.
          </p>
        </div>
      </div>
    </footer>
  )
}