import Layout from '@/components/Layout'
import LeadForm from '@/components/LeadForm'

export default function Consultation() {
  return (
    <Layout
      title="Book Free Invisalign Consultation London - Sarah Holmes"
      description="Book your free Invisalign consultation in London with Sarah Holmes. Get expert assessment, accurate pricing, and treatment plan. Call 020 7734 6421 or book online."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-dental-light to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Book Your Free
              <span className="block text-dental-blue">Invisalign Consultation</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Get expert assessment and personalized treatment planning from Sarah Holmes. 
              Discover if Invisalign is right for you with no obligation and no cost.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                What to Expect at Your Consultation
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-dental-blue text-white rounded-full flex items-center justify-center text-lg font-bold">1</div>
                  <div className="ml-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Comprehensive Examination</h3>
                    <p className="text-gray-600">
                      Sarah will thoroughly examine your teeth, gums, and bite to assess your 
                      orthodontic needs and overall oral health.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-dental-blue text-white rounded-full flex items-center justify-center text-lg font-bold">2</div>
                  <div className="ml-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital Imaging & Scans</h3>
                    <p className="text-gray-600">
                      State-of-the-art 3D scanning technology creates precise digital models 
                      of your teeth for accurate treatment planning.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-dental-blue text-white rounded-full flex items-center justify-center text-lg font-bold">3</div>
                  <div className="ml-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Treatment Options Discussion</h3>
                    <p className="text-gray-600">
                      Review different treatment approaches including Invisalign, traditional braces, 
                      and other options that might suit your case.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-dental-blue text-white rounded-full flex items-center justify-center text-lg font-bold">4</div>
                  <div className="ml-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Treatment Plan</h3>
                    <p className="text-gray-600">
                      Receive a detailed treatment plan with timeline, expected results, 
                      and accurate pricing tailored to your specific needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-dental-blue text-white rounded-full flex items-center justify-center text-lg font-bold">5</div>
                  <div className="ml-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Questions & Next Steps</h3>
                    <p className="text-gray-600">
                      Discuss payment options, insurance coverage, and schedule your first 
                      treatment appointment if you decide to proceed.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-dental-light rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Sarah Holmes, BDS</h3>
                <p className="text-gray-600 mb-4">
                  Sarah has been providing exceptional dental care in London for over 25 years. 
                  She has been using Invisalign to transform smiles since 2006 and has extensive 
                  experience with complex orthodontic cases.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="text-sm text-gray-600">
                    <strong>Practice:</strong> Carnaby Street Dental
                  </div>
                  <div className="text-sm text-gray-600">
                    <strong>Location:</strong> Central London
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              <div className="sticky top-8">
                <LeadForm 
                  title="Book Your Free Consultation"
                  buttonText="Schedule Appointment"
                />
                
                <div className="mt-8 bg-white rounded-lg shadow-lg p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Prefer to Call?
                  </h3>
                  <div className="mb-4">
                    <a 
                      href="tel:+442077346421"
                      className="text-3xl font-bold text-dental-blue hover:text-dental-dark"
                    >
                      020 7734 6421
                    </a>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Monday - Friday: 9:00 AM - 6:00 PM<br/>
                    Saturday: 9:00 AM - 3:00 PM
                  </p>
                  <p className="text-gray-500 text-xs">
                    Same-day appointments often available for urgent cases
                  </p>
                </div>

                <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-green-800">No Obligation</p>
                      <p className="text-sm text-green-700">Free consultation with no pressure to proceed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose a Free Consultation?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-dental-blue mb-4">
                <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Assessment</h3>
              <p className="text-gray-600">
                Get professional evaluation of your orthodontic needs from an experienced 
                Invisalign provider with 25+ years of expertise.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-dental-blue mb-4">
                <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Accurate Pricing</h3>
              <p className="text-gray-600">
                Receive transparent, personalized pricing with no hidden fees. 
                Understand all costs upfront before making any decisions.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-dental-blue mb-4">
                <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">See Your Future Smile</h3>
              <p className="text-gray-600">
                Advanced 3D technology lets you preview your results before treatment begins. 
                See exactly how your smile will look.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Convenient Central London Location
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Carnaby Street Dental</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-dental-blue mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">Carnaby Street, London W1F</p>
                    <p className="text-sm text-gray-500">Exact address provided when booking</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-dental-blue mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <a href="tel:+442077346421" className="text-dental-blue hover:text-dental-dark">
                      020 7734 6421
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-dental-blue mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a href="mailto:enquiries@carnabystreetdentist.co.uk" className="text-dental-blue hover:text-dental-dark">
                      enquiries@carnabystreetdentist.co.uk
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-dental-blue mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Hours</p>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 3:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-gray-900 mb-3">Transport Links</h4>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <p><strong>Tube:</strong> Oxford Circus</p>
                    <p><strong>Bus:</strong> Multiple routes</p>
                  </div>
                  <div>
                    <p><strong>Parking:</strong> NCP Car Parks nearby</p>
                    <p><strong>Walking:</strong> 2 mins from Oxford Street</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <p>Interactive map will be embedded here</p>
                <p className="text-sm">Showing Carnaby Street Dental location</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dental-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Book your free Invisalign consultation today and take the first step 
            towards the confident smile you've always wanted.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#consultation-form"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-dental-blue bg-white hover:bg-gray-100 transition duration-300"
            >
              Book Online Now
            </a>
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