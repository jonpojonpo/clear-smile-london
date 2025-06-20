import { useState } from 'react'

export default function CostCalculator() {
  const [complexity, setComplexity] = useState('moderate')
  const [duration, setDuration] = useState('12-18')
  const [payment, setPayment] = useState('monthly')
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const calculateCost = () => {
    const baseCosts = {
      simple: 3500,
      moderate: 4500,
      complex: 6500
    }
    
    const durationMultiplier = {
      '6-12': 0.9,
      '12-18': 1.0,
      '18-24': 1.2,
      '24+': 1.4
    }
    
    const totalCost = baseCosts[complexity] * durationMultiplier[duration]
    const monthlyPayment = totalCost / 24 // 24 month plan
    
    return {
      total: Math.round(totalCost),
      monthly: Math.round(monthlyPayment)
    }
  }

  const cost = calculateCost()

  const handleGetQuote = () => {
    setShowForm(true)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    // Here you would integrate with your form handler (Netlify, Formspree, etc.)
    console.log('Form submitted:', formData)
    alert('Thank you! We will contact you soon with a detailed quote.')
    setShowForm(false)
    setFormData({ name: '', email: '', phone: '' })
  }

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Get Your Invisalign Cost Estimate
      </h3>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Treatment Complexity
          </label>
          <select
            value={complexity}
            onChange={(e) => setComplexity(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dental-blue"
          >
            <option value="simple">Simple (Minor crowding/spacing)</option>
            <option value="moderate">Moderate (Average complexity)</option>
            <option value="complex">Complex (Severe misalignment)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Expected Treatment Duration
          </label>
          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dental-blue"
          >
            <option value="6-12">6-12 months</option>
            <option value="12-18">12-18 months</option>
            <option value="18-24">18-24 months</option>
            <option value="24+">24+ months</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Payment Preference
          </label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                value="full"
                checked={payment === 'full'}
                onChange={(e) => setPayment(e.target.value)}
                className="mr-2"
              />
              Full Payment
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="monthly"
                checked={payment === 'monthly'}
                onChange={(e) => setPayment(e.target.value)}
                className="mr-2"
              />
              Monthly Plan
            </label>
          </div>
        </div>

        <div className="bg-dental-light rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-dental-blue mb-2">
            {payment === 'monthly' ? `£${cost.monthly}/month` : `£${cost.total}`}
          </div>
          <div className="text-sm text-gray-600">
            {payment === 'monthly' ? 
              `Total: £${cost.total} (24 month plan)` : 
              'One-time payment'
            }
          </div>
          <div className="mt-4 text-xs text-gray-500">
            *Estimate only. Final cost determined at consultation
          </div>
        </div>

        {!showForm ? (
          <button
            onClick={handleGetQuote}
            className="w-full bg-dental-blue text-white py-3 px-6 rounded-md font-semibold hover:bg-dental-dark transition duration-300"
          >
            Get Accurate Quote - Book Free Consultation
          </button>
        ) : (
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dental-blue"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dental-blue"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dental-blue"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-dental-blue text-white py-3 px-6 rounded-md font-semibold hover:bg-dental-dark transition duration-300"
            >
              Get My Personalized Quote
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="w-full text-gray-600 py-2 text-sm hover:text-gray-800"
            >
              Back to Calculator
            </button>
          </form>
        )}
      </div>
    </div>
  )
}