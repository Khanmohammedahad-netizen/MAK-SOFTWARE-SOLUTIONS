import { useState } from 'react';
import { HeroSection } from '../components/HeroSection';
import { SectionContainer } from '../components/SectionContainer';
import { Mail, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { REGION_BUDGETS } from '../config/budgets';

interface ContactProps {
  onNavigate: (page: string) => void;
  currentRegion: string;
}

export function Contact({ onNavigate, currentRegion }: ContactProps) {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectScope: '',
    budget: '',
    timeline: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

const normalizedRegion = (() => {
  switch (currentRegion.toLowerCase()) {
    case 'japan':
      return 'Japan';
    case 'usa':
    case 'united states':
      return 'USA';
    case 'dubai':
      return 'Dubai';
    case 'uk':
    case 'london':
      return 'UK';
    case 'europe':
    case 'europe (general)':
      return 'Europe';
    default:
      return 'USA';
  }
})();

const budgetConfig =
  REGION_BUDGETS[normalizedRegion as keyof typeof REGION_BUDGETS];


  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (!supabase) {
        throw new Error('Database connection not available. Please try again later.');
      }

      const { error: insertError } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            company: formData.company,
            phone: formData.phone || null,
            project_scope: formData.projectScope,
            budget: formData.budget || null,
            currency: budgetConfig.currency,
            region: currentRegion,
            timeline: formData.timeline || null,

            message: formData.message || null,
            submitted_at: new Date().toISOString(),
          },
        ]);

      if (insertError) throw insertError;

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        projectScope: '',
        budget: '',
        timeline: '',
        message: '',
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Failed to submit form. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <HeroSection
        title="Let's Talk About Your Project"
        subtitle="Share your project scope and let's discuss how we can help."
      />

      <SectionContainer background="slate">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Get in Touch
            </h2>

            {submitted && (
              <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-green-900">
                    Thank you for reaching out!
                  </p>
                  <p className="text-green-800 text-sm mt-1">
                    We'll review your request and respond within 24 hours.
                  </p>
                </div>
              </div>
            )}

            {error && (
              <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-red-900">Error</p>
                  <p className="text-red-800 text-sm mt-1">{error}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-900 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-900 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-900 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                  placeholder="Company Inc."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-900 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                  placeholder="+1-555-xxx-xxxx"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-900 mb-2">
                  Project Scope *
                </label>
                <select
                  name="projectScope"
                  value={formData.projectScope}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                >
                  <option value="">Select a scope...</option>
                  <option value="dedicated-team">Dedicated Development Team</option>
                  <option value="mvp">MVP or Project Development</option>
                  <option value="ai-automation">AI Automation</option>
                  <option value="other">Other / Not Sure</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-900 mb-2">
                  Budget Range
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                >
                  <option value="">Select a range...</option>
{budgetConfig.options.map((option) => (
  <option key={option} value={option}>
    {option}
  </option>
))}
<option value="not-sure">Not Sure Yet</option>

                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-900 mb-2">
                  Timeline
                </label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                >
                  <option value="">Select timeline...</option>
                  <option value="asap">ASAP (next 2 weeks)</option>
                  <option value="1-month">1 Month</option>
                  <option value="2-3-months">2-3 Months</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-900 mb-2">
                  Tell us about your project
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                  placeholder="What's your project about? What problems are you trying to solve?"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-slate-900 text-white py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Submitting...' : 'Start a Pilot Project'}
              </button>

              <p className="text-sm text-slate-700 text-center">
                * Required fields
              </p>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Quick Responses
              </h3>
              <div className="space-y-6 bg-white p-8 rounded-lg border border-gray-200">
                <div className="flex gap-4">
                  <Mail className="w-6 h-6 text-slate-900 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-slate-900">Email</p>
                    <a
                      href="mailto:contact@maksoftware.com"
                      className="text-slate-700 hover:text-slate-900 text-sm mt-1"
                    >
                      contact@maksoftware.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-slate-900 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-slate-900">Phone</p>
                    <p className="text-slate-700 text-sm mt-1">
                      Available for calls during Japan business hours
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-slate-900 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-slate-900">Global Presence</p>
                    <p className="text-slate-700 text-sm mt-1">
                      Development centers in India<br />
                      Regional offices worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-lg">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                What Happens Next
              </h3>
              <ol className="space-y-3 text-sm">
                {[
                  'We review your request within 24 hours',
                  'Founder calls you to discuss your project',
                  'We provide a scope and timeline estimate',
                  'If aligned, we start your pilot project',
                ].map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="font-bold text-slate-900 flex-shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-slate-700">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <p className="text-sm text-blue-900 font-medium mb-2">
                Enterprise Clients:
              </p>
              <p className="text-sm text-blue-900">
                Dedicated account management and priority support available
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer
        title="FAQs About Starting a Pilot"
        subtitle="Common questions we hear"
      >
        <div className="space-y-6 max-w-3xl">
          {[
            {
              q: "How long does a pilot project take?",
              a: "Typically 4-6 weeks. We define clear scope upfront, then deliver working software with testing and documentation.",
            },
            {
              q: "What if we want to extend the pilot?",
              a: "No problem. We can transition to an ongoing engagement (dedicated team) or extend the pilot for another phase.",
            },
            {
              q: "What if we're not happy with the results?",
              a: "The pilot is a mutual evaluation. If we're not the right fit, we'll say so honestly. No lock-in.",
            },
            {
              q: "Do you require a contract for a pilot?",
              a: "Yes, a simple statement of work defining scope, timeline, cost, and deliverables. Standard terms.",
            },
            {
              q: "Can we use our own project management tools?",
              a: "Absolutely. We adapt to your existing workflows—Jira, Asana, Notion, or whatever you use.",
            },
            {
              q: "What about intellectual property?",
              a: "All code and work product belongs to you. We sign NDAs and IP agreements as standard.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="border-l-4 border-slate-900 pl-6 py-4 bg-slate-50 p-6 rounded"
            >
              <p className="font-semibold text-slate-900 mb-2">{item.q}</p>
              <p className="text-slate-700 text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}
