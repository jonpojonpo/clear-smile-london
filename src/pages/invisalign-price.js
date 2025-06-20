import Layout from '@/components/Layout'
import LeadForm from '@/components/LeadForm'
import CostCalculator from '@/components/CostCalculator'
import Link from 'next/link'

export default function InvisalignPrice() {
  return (
    <Layout
      title="Invisalign Price & Cost London 2025 - Monthly Payment Plans Available"
      description="Transparent Invisalign pricing in London from £3,500. Monthly payment plans from £146/month. Get your accurate quote from Sarah Holmes, expert Invisalign provider since 2006."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-dental-light to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Invisalign Price London
              <span className="block text-dental-blue">Comprehensive Cost Guide 2025</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Get transparent, upfront pricing for Invisalign treatment in London. 
              No hidden fees, flexible payment plans, and expert care from Sarah Holmes 
              with 25+ years of experience.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Pricing */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Complete Invisalign Pricing Breakdown
              </h2>
              
              <div className="space-y-8">
                <div className="bg-white rounded-lg shadow-lg border-l-4 border-dental-blue p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Simple Cases - £3,500</h3>
                  <div className="mb-4">
                    <span className="text-lg font-semibold text-dental-blue">Monthly: £146 (24 months)</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Perfect for minor corrections with minimal tooth movement required.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span>Minor crowding or spacing issues</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span>6-12 month treatment duration</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span>10-20 aligner sets typically required</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-lg border-l-4 border-dental-blue p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Moderate Cases - £4,500</h3>
                  <div className="mb-4">
                    <span className="text-lg font-semibold text-dental-blue">Monthly: £188 (24 months)</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Most common treatment type for average complexity orthodontic issues.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span>Moderate crowding, spacing, or bite issues</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span>12-18 month treatment duration</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span>20-40 aligner sets typically required</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-lg border-l-4 border-dental-blue p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Complex Cases - £6,500</h3>
                  <div className="mb-4">
                    <span className="text-lg font-semibold text-dental-blue">Monthly: £271 (24 months)</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Comprehensive treatment for severe orthodontic problems requiring extensive movement.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span>Severe crowding, significant bite correction</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span>18-24+ month treatment duration</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span>40+ aligner sets typically required</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              <div className="sticky top-8">
                <CostCalculator />
                <div className="mt-8">
                  <LeadForm 
                    title="Get Your Exact Invisalign Quote"
                    buttonText="Book Free Assessment"
                    compact
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What's Included in Your Invisalign Price
            </h2>
            <p className="text-xl text-gray-600">
              Transparent pricing with no hidden fees - everything you need for successful treatment
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-dental-blue mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Initial Consultation</h3>
              <p className="text-gray-600">
                Comprehensive examination, digital scans, treatment planning, and discussion of your goals.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-dental-blue mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Digital Treatment Plan</h3>
              <p className="text-gray-600">
                3D imaging, ClinCheck treatment simulation, and preview of your final smile.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-dental-blue mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">All Aligners</h3>
              <p className="text-gray-600">
                Complete set of custom Invisalign aligners, including any refinements needed.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-dental-blue mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 102 0V3h2v1a1 1 0 102 0V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm2.707 7.707a1 1 0 00-1.414-1.414L4 12.586l-1.293-1.293a1 1 0 00-1.414 1.414L3 14.414l2.707-2.707z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Regular Check-ups</h3>
              <p className="text-gray-600">
                Progress monitoring appointments every 6-8 weeks throughout your treatment.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-dental-blue mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Attachments & IPR</h3>
              <p className="text-gray-600">
                Composite attachments and interproximal reduction if required for optimal results.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-dental-blue mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Retainers Included</h3>
              <p className="text-gray-600">
                Fixed and removable retainers to maintain your beautiful new smile long-term.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Flexible Payment Options
            </h2>
            <p className="text-xl text-gray-600">
              Making Invisalign treatment affordable for everyone in London
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="text-dental-blue mb-4">
                <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Full Payment</h3>
              <p className="text-gray-600 mb-4">
                Pay for your treatment upfront and save money with our full payment discount.
              </p>
              <div className="text-2xl font-bold text-dental-blue mb-2">5% Discount</div>
              <p className="text-sm text-gray-500">Save up to £325 on treatment</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center border-2 border-dental-blue">
              <div className="text-dental-blue mb-4">
                <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Monthly Plans</h3>
              <p className="text-gray-600 mb-4">
                Spread the cost over 12, 18, or 24 months with 0% interest financing.
              </p>
              <div className="text-2xl font-bold text-dental-blue mb-2">From £146/month</div>
              <p className="text-sm text-gray-500">0% APR available</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="text-dental-blue mb-4">
                <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Insurance & HSA</h3>
              <p className="text-gray-600 mb-4">
                Many dental insurance plans cover Invisalign. HSA/FSA funds can be used.
              </p>
              <div className="text-2xl font-bold text-dental-blue mb-2">Up to £1,500</div>
              <p className="text-sm text-gray-500">Typical insurance coverage</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/cheap-invisalign"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-dental-blue hover:bg-dental-dark transition duration-300"
            >
              Learn About Affordable Options
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Invisalign Pricing FAQ
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Why does Invisalign cost vary between patients?
              </h3>
              <p className="text-gray-600">
                Invisalign pricing depends on the complexity of your case, treatment duration, 
                and number of aligners required. Simple cases requiring fewer aligners cost less 
                than complex cases needing extensive tooth movement and longer treatment times.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Are there any additional costs during treatment?
              </h3>
              <p className="text-gray-600">
                Our prices are all-inclusive. There are no extra charges for monitoring visits, 
                refinement aligners, or retainers. The only additional cost might be if you lose 
                or damage your aligners, which can be replaced for a small fee.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How does Invisalign pricing compare to traditional braces?
              </h3>
              <p className="text-gray-600">
                Invisalign is typically comparable to or slightly more expensive than traditional braces. 
                However, the convenience, comfort, and aesthetic benefits often make it worthwhile. 
                Our flexible payment plans make treatment affordable for most budgets.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Can I use my dental insurance for Invisalign?
              </h3>
              <p className="text-gray-600">
                Many dental insurance plans cover Invisalign treatment, typically providing 
                similar coverage to traditional braces. We'll help you understand your benefits 
                and maximize your insurance coverage during your consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dental-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get Your Exact Invisalign Price Today
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Book your free consultation with Sarah Holmes and get a personalized 
            treatment plan with accurate pricing for your specific case.
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
              Call: 020 7734 6421
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}