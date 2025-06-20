import { useState } from 'react'

export default function LeadForm({ title = "Get Your Free Invisalign Consultation", buttonText = "Book Free Consultation", compact = false }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    source: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Add source page information
      const submitData = {
        ...formData,
        source: window.location.pathname,
        timestamp: new Date().toISOString()
      }
      
      // Here you would integrate with your form handler
      // For now, we'll simulate the submission
      console.log('Form submitted:', submitData)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setIsSubmitted(true)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: '', email: '', phone: '', message: '', source: '' })
      }, 3000)
      
    } catch (error) {
      console.error('Form submission error:', error)
      alert('There was an error submitting your form. Please try again or call us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (isSubmitted) {
    return (
      <div className={`bg-green-50 border border-green-200 rounded-lg p-6 text-center ${compact ? 'max-w-md' : 'max-w-lg'}`}>
        <div className="text-green-600 mb-4">
          <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-600">
          We've received your inquiry and will contact you within 24 hours to schedule your free consultation.
        </p>
        <p className="text-sm text-gray-500 mt-4">
          For immediate assistance, call us at <a href="tel:+442077346421" className="text-dental-blue hover:underline">020 7734 6421</a>
        </p>
      </div>
    )
  }

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${compact ? 'max-w-md' : 'max-w-lg'}`}>
      <h3 className={`font-bold text-gray-900 mb-6 text-center ${compact ? 'text-lg' : 'text-xl'}`}>
        {title}
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dental-blue focus:border-transparent"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dental-blue focus:border-transparent"
            placeholder="Enter your email address"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dental-blue focus:border-transparent"
            placeholder="Enter your phone number"
          />
        </div>

        {!compact && (
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dental-blue focus:border-transparent"
              placeholder="Tell us about your smile goals or any questions you have..."
            />
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-dental-blue text-white py-3 px-6 rounded-md font-semibold hover:bg-dental-dark transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
              </svg>
              Submitting...
            </span>
          ) : (
            buttonText
          )}
        </button>

        <p className="text-xs text-gray-500 text-center">
          By submitting this form, you consent to be contacted about Invisalign treatment. 
          We respect your privacy and will never share your information.
        </p>
      </form>
    </div>
  )
}