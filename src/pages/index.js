import Layout from '@/components/Layout'
import CostCalculator from '@/components/CostCalculator'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout
      title="Invisalign Price London - Clear Smile London | Expert Treatment by Sarah Holmes"
      description="Get transparent Invisalign pricing in London. Expert treatment by Sarah Holmes with 25+ years experience. Free consultation. Monthly payment plans available."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-dental-light to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mb-12 lg:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Invisalign Price London
                <span className="block text-dental-blue">Transparent & Affordable</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Get expert Invisalign treatment in London with clear, upfront pricing. 
                Sarah Holmes has 25+ years of experience and has been transforming smiles 
                with Invisalign since 2006.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/consultation"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-dental-blue hover:bg-dental-dark transition duration-300"
                >
                  Book Free Consultation
                </Link>
                <a
                  href="tel:+442077346421"
                  className="inline-flex items-center justify-center px-8 py-3 border border-dental-blue text-base font-medium rounded-md text-dental-blue bg-white hover:bg-dental-light transition duration-300"
                >
                  Call: 020 7734 6421
                </a>
              </div>
            </div>
            <div className="lg:pl-8">
              <CostCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Sarah Holmes for Invisalign?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-dental-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-dental-blue" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">25+ Years Experience</h3>
              <p className="text-gray-600">
                Sarah Holmes has been providing exceptional dental care since the late 1990s, 
                with extensive experience in orthodontic treatments.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-dental-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-dental-blue" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Invisalign Since 2006</h3>
              <p className="text-gray-600">
                Early adopter of Invisalign technology with nearly two decades of 
                experience using clear aligners to create beautiful smiles.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-dental-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-dental-blue" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Central London Practice</h3>
              <p className="text-gray-600">
                Conveniently located at Carnaby Street Dental, easily accessible 
                from across London with flexible appointment times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Transparent Invisalign Pricing in London
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No hidden fees, no surprises. Get clear pricing for your Invisalign treatment 
              with flexible payment options to suit your budget.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Simple Cases</h3>
              <div className="text-4xl font-bold text-dental-blue mb-2">£3,500</div>
              <div className="text-gray-600 mb-6">or £146/month</div>
              <ul className="text-left space-y-2 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Minor crowding or spacing
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  6-12 month treatment
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Includes all aligners & retainers
                </li>
              </ul>
              <Link href="/invisalign-price" className="inline-block w-full bg-dental-blue text-white py-3 px-6 rounded-md font-semibold hover:bg-dental-dark transition duration-300">
                Learn More
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center border-4 border-dental-blue relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-dental-blue text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Moderate Cases</h3>
              <div className="text-4xl font-bold text-dental-blue mb-2">£4,500</div>
              <div className="text-gray-600 mb-6">or £188/month</div>
              <ul className="text-left space-y-2 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Average complexity cases
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  12-18 month treatment
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Includes all aligners & retainers
                </li>
              </ul>
              <Link href="/invisalign-price" className="inline-block w-full bg-dental-blue text-white py-3 px-6 rounded-md font-semibold hover:bg-dental-dark transition duration-300">
                Learn More
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Complex Cases</h3>
              <div className="text-4xl font-bold text-dental-blue mb-2">£6,500</div>
              <div className="text-gray-600 mb-6">or £271/month</div>
              <ul className="text-left space-y-2 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Severe misalignment
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  18-24+ month treatment
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Includes all aligners & retainers
                </li>
              </ul>
              <Link href="/invisalign-price" className="inline-block w-full bg-dental-blue text-white py-3 px-6 rounded-md font-semibold hover:bg-dental-dark transition duration-300">
                Learn More
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              All prices include consultation, treatment planning, aligners, monitoring visits, and retainers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/cheap-invisalign"
                className="inline-flex items-center justify-center px-8 py-3 border border-dental-blue text-base font-medium rounded-md text-dental-blue bg-white hover:bg-dental-light transition duration-300"
              >
                Affordable Payment Options
              </Link>
              <Link
                href="/consultation"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-dental-blue hover:bg-dental-dark transition duration-300"
              >
                Book Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-dental-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Invisalign Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Book your free consultation with Sarah Holmes today. Get a personalized treatment plan 
            and accurate pricing for your Invisalign treatment in London.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/consultation"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-dental-blue bg-white hover:bg-gray-100 transition duration-300"
            >
              Book Free Consultation
            </Link>
            <a
              href="tel:+442077346421"
              className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-700 transition duration-300"
            >
              Call Now: 020 7734 6421
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}