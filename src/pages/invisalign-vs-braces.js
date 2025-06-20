import Layout from '@/components/Layout'
import LeadForm from '@/components/LeadForm'
import Link from 'next/link'

export default function InvisalignVsBraces() {
  return (
    <Layout
      title="Invisalign vs Braces London - Which is Better? Expert Comparison 2025"
      description="Compare Invisalign vs traditional braces in London. Expert analysis of cost, treatment time, comfort & results by Sarah Holmes. Book free consultation to decide."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-dental-light to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Invisalign vs Braces
              <span className="block text-dental-blue">Which is Right for You?</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Expert comparison of Invisalign clear aligners vs traditional braces in London. 
              Get professional advice from Sarah Holmes, who has been using both treatments 
              for over 25 years.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Side-by-Side Comparison
            </h2>
            <p className="text-xl text-gray-600">
              Compare the key differences between Invisalign and traditional braces
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-dental-blue text-white">
                <tr>
                  <th className="py-4 px-6 text-left">Feature</th>
                  <th className="py-4 px-6 text-center">Invisalign</th>
                  <th className="py-4 px-6 text-center">Traditional Braces</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-4 px-6 font-semibold text-gray-900">Appearance</td>
                  <td className="py-4 px-6 text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      Nearly Invisible
                    </span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                      Highly Visible
                    </span>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-4 px-6 font-semibold text-gray-900">Comfort</td>
                  <td className="py-4 px-6 text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      Smooth Plastic
                    </span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                      Metal Wires/Brackets
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-gray-900">Removability</td>
                  <td className="py-4 px-6 text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      Removable
                    </span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                      Fixed
                    </span>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-4 px-6 font-semibold text-gray-900">Eating Restrictions</td>
                  <td className="py-4 px-6 text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      None
                    </span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                      Many Foods Avoided
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-gray-900">Oral Hygiene</td>
                  <td className="py-4 px-6 text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      Normal Brushing
                    </span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                      Difficult Cleaning
                    </span>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-4 px-6 font-semibold text-gray-900">Treatment Time</td>
                  <td className="py-4 px-6 text-center">12-18 months average</td>
                  <td className="py-4 px-6 text-center">18-24 months average</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-gray-900">Cost in London</td>
                  <td className="py-4 px-6 text-center">£3,999 (fixed price)</td>
                  <td className="py-4 px-6 text-center">£2,500 - £5,000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-4 px-6 font-semibold text-gray-900">Appointments</td>
                  <td className="py-4 px-6 text-center">Every 6-8 weeks</td>
                  <td className="py-4 px-6 text-center">Every 4-6 weeks</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Detailed Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Invisalign Advantages
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <svg className="w-6 h-6 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    Nearly Invisible Treatment
                  </h3>
                  <p className="text-gray-600">
                    Clear aligners are virtually undetectable, allowing you to straighten your teeth 
                    without the self-consciousness that often comes with traditional metal braces. 
                    Perfect for professionals and adults who want to maintain their confidence.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <svg className="w-6 h-6 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    Removable for Eating & Cleaning
                  </h3>
                  <p className="text-gray-600">
                    Remove aligners for meals and special occasions. No food restrictions means you can 
                    continue enjoying all your favorite foods. Oral hygiene remains simple with normal 
                    brushing and flossing.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <svg className="w-6 h-6 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    Enhanced Comfort
                  </h3>
                  <p className="text-gray-600">
                    Smooth plastic aligners eliminate the mouth sores and irritation common with 
                    metal brackets and wires. No emergency visits for broken brackets or poking wires.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <svg className="w-6 h-6 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    Predictable Results
                  </h3>
                  <p className="text-gray-600">
                    3D treatment planning lets you see your final result before treatment begins. 
                    Digital precision ensures accurate, predictable tooth movement.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                When Braces Might Be Better
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <svg className="w-6 h-6 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                    </svg>
                    Severe Orthodontic Issues
                  </h3>
                  <p className="text-gray-600">
                    Complex cases involving significant vertical tooth movement, severe rotations, 
                    or major bite corrections may be better suited to traditional braces, though 
                    Invisalign can handle most cases effectively.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <svg className="w-6 h-6 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                    </svg>
                    Compliance Concerns
                  </h3>
                  <p className="text-gray-600">
                    Invisalign requires wearing aligners 20-22 hours daily. Patients who may not 
                    be compliant with this requirement might achieve better results with fixed braces.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <svg className="w-6 h-6 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                    </svg>
                    Budget Considerations
                  </h3>
                  <p className="text-gray-600">
                    Traditional braces typically cost £1,000-£1,500 less than Invisalign. 
                    However, many patients find the benefits of Invisalign justify the additional cost.
                  </p>
                </div>

                <div className="mt-8">
                  <LeadForm 
                    title="Get Expert Advice"
                    buttonText="Book Consultation"
                    compact
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Experience */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What to Expect During Treatment
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-dental-blue mb-6">Invisalign Experience</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-dental-blue text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Initial Consultation</h4>
                    <p className="text-gray-600">Digital scans and 3D treatment planning</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-dental-blue text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Custom Aligners</h4>
                    <p className="text-gray-600">Receive your series of custom-made aligners</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-dental-blue text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Wear 20-22 Hours Daily</h4>
                    <p className="text-gray-600">Remove only for eating, drinking, and cleaning</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-dental-blue text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Change Every 1-2 Weeks</h4>
                    <p className="text-gray-600">Progress through your aligner series</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-dental-blue text-white rounded-full flex items-center justify-center text-sm font-bold">5</div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Regular Check-ups</h4>
                    <p className="text-gray-600">Monitor progress every 6-8 weeks</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-700 mb-6">Traditional Braces Experience</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Initial Consultation</h4>
                    <p className="text-gray-600">X-rays, impressions, and treatment planning</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Bracket Placement</h4>
                    <p className="text-gray-600">Brackets bonded to teeth, wires attached</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Continuous Wear</h4>
                    <p className="text-gray-600">Braces remain fixed throughout treatment</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Dietary Restrictions</h4>
                    <p className="text-gray-600">Avoid hard, sticky, and chewy foods</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm font-bold">5</div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Frequent Adjustments</h4>
                    <p className="text-gray-600">Wire tightening every 4-6 weeks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Opinion */}
      <section className="py-16 bg-dental-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Expert Opinion from Sarah Holmes
            </h2>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-dental-blue rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>
              <div className="ml-6">
                <blockquote className="text-lg text-gray-700 italic mb-4">
                  "In my 25+ years of practice, I've seen orthodontics evolve dramatically. 
                  Today, I recommend Invisalign for about 85% of my patients because of the 
                  superior patient experience and excellent results. The technology has advanced 
                  to the point where we can treat almost all cases that traditional braces can handle."
                </blockquote>
                <cite className="text-dental-blue font-semibold">
                  Sarah Holmes, BDS
                  <span className="block text-gray-600 text-sm">25+ Years Experience, Invisalign Provider Since 2006</span>
                </cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decision Guide */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Which Option is Right for You?
            </h2>
            <p className="text-xl text-gray-600">
              Use this guide to help determine the best orthodontic treatment for your needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-green-800 mb-4">Choose Invisalign If:</h3>
              <ul className="space-y-2 text-green-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  You want nearly invisible treatment
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  You have a professional lifestyle
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  You want maximum comfort
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  You don't want food restrictions
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  You value predictable results
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  You can commit to wearing aligners 20+ hours daily
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Consider Braces If:</h3>
              <ul className="space-y-2 text-blue-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  You have severe orthodontic issues
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Budget is a primary concern
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  You prefer a "set and forget" approach
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Compliance might be an issue
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  You need complex bite correction
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dental-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get Expert Advice on Your Best Option
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Book a free consultation with Sarah Holmes to discuss which treatment 
            option is best for your specific case and lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/consultation"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-dental-blue bg-white hover:bg-gray-100 transition duration-300"
            >
              Book Free Consultation
            </Link>
            <Link
              href="/invisalign-price"
              className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-700 transition duration-300"
            >
              Compare Pricing
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}