import { HeroSection } from '../components/HeroSection';
import { SectionContainer } from '../components/SectionContainer';
import {
  Zap,
  Users,
  CheckCircle,
  TrendingUp,
  Shield,
  Target,
} from 'lucide-react';

interface WhyUsProps {
  onNavigate: (page: string) => void;
  currentRegion: string;
}

export function WhyUs({ onNavigate }: WhyUsProps) {
  return (
    <div>
      <HeroSection
        title="Why Choose Japan-Hyderabad"
        subtitle="A different approach to outsourcing: founder-led, small team, risk-reduced engagement, disciplined delivery."
        cta={{
          text: 'Start a Pilot',
          action: () => onNavigate('contact'),
        }}
      />

      <SectionContainer
        title="We're Not a Typical Outsourcing Company"
        subtitle="Here's what makes us different"
        background="slate"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {[
              {
                icon: Users,
                title: 'Small, Focused Team',
                description:
                  '8–10 person organization. Not a factory. Every engineer knows your project.',
              },
              {
                icon: Zap,
                title: 'Founder-Led',
                description:
                  'Founder directly involved in project oversight. Your problems are our problems.',
              },
              {
                icon: Shield,
                title: 'Japan-Trained Team',
                description:
                  'Our engineers understand Japanese business practices, communication style, and expectations.',
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex gap-4 bg-white p-6 rounded-lg">
                  <Icon className="w-6 h-6 text-slate-900 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-slate-700 text-sm">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              What You Won't Get
            </h3>
            <ul className="space-y-4">
              {[
                'Fake testimonials or overpromised timelines',
                'Rotating engineers or team instability',
                'Hidden costs or surprise expenses',
                'Buzzword-driven or hype-focused approach',
                'Shallow engagement or low-quality work',
                'Poor communication or timezone struggles',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-slate-900 rounded-full mt-2.5 flex-shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer
        title="The Japan Advantage + India Execution"
        subtitle="Best of both worlds"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Why India for Execution?
            </h3>
            <ul className="space-y-4">
              {[
                {
                  label: 'Cost Efficiency',
                  detail: '40–50% cost savings vs. Japan, without sacrificing quality',
                },
                {
                  label: 'Talent Availability',
                  detail: "Hyderabad is India's tech hub. Deep talent pool, proven capabilities",
                },
                {
                  label: 'Engineering Culture',
                  detail:
                    'Disciplined, process-focused approach to software development',
                },
                {
                  label: 'Timezone Advantage',
                  detail:
                    'Night shift in India = morning progress delivered to your desk',
                },
              ].map((item, i) => (
                <li key={i}>
                  <p className="font-semibold text-slate-900">{item.label}</p>
                  <p className="text-slate-700 text-sm mt-1">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Why Japan-Side Presence?
            </h3>
            <ul className="space-y-4">
              {[
                {
                  label: 'Communication Bridge',
                  detail:
                    'Someone who speaks your language (literally and culturally)',
                },
                {
                  label: 'No Middleman Delays',
                  detail: 'Direct coordination without layers of bureaucracy',
                },
                {
                  label: 'Trust Building',
                  detail:
                    'Face-to-face relationship with founder and your account team',
                },
                {
                  label: 'Accountability',
                  detail: 'Local presence means local responsibility',
                },
              ].map((item, i) => (
                <li key={i}>
                  <p className="font-semibold text-slate-900">{item.label}</p>
                  <p className="text-slate-700 text-sm mt-1">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8 rounded-lg text-center">
          <p className="text-lg leading-relaxed">
            We bridge the gap: Japan-side trust and accountability, India-side
            talent and cost efficiency. You get the best of both.
          </p>
        </div>
      </SectionContainer>

      <SectionContainer
        title="Pilot-First Engagement Model"
        subtitle="Prove value before long-term commitment"
        background="slate"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Why Start with a Pilot?
            </h3>
            <ul className="space-y-3">
              {[
                "Low financial risk: 4–6 weeks, fixed cost",
                "Cultural fit testing: Do we work well together?",
                "Process validation: Does our approach work for you?",
                "Quality assessment: Judge our work directly",
                "Team building: Get to know the people you'll work with",
                "No lock-in: Evaluate after, then decide to scale or extend",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-slate-900 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              Typical Pilot Scope
            </h3>
            <div className="space-y-4">
              {[
                { label: 'Duration', value: '4–6 weeks' },
                { label: 'Team Size', value: '3–5 engineers' },
                { label: 'Deliverable', value: 'MVP or core feature' },
                { label: 'Investment', value: '¥3–5M (all-in)' },
                { label: 'Outcome', value: 'Working software + evaluation' },
              ].map((item, i) => (
                <div key={i} className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-semibold text-slate-900">
                    {item.label}
                  </span>
                  <span className="text-slate-700">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-slate-900">
            After the Pilot: Your Options
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: TrendingUp,
                title: 'Scale',
                description: 'Expand to dedicated team for ongoing development',
              },
              {
                icon: Target,
                title: 'Extend',
                description: 'Continue pilot scope for next phase of work',
              },
              {
                icon: Zap,
                title: 'Evaluate',
                description:
                  'Take time, learn, and reconnect when ready (no commitment)',
              },
            ].map((option, i) => {
              const Icon = option.icon;
              return (
                <div
                  key={i}
                  className="bg-slate-50 p-6 rounded-lg border border-gray-200"
                >
                  <Icon className="w-8 h-8 text-slate-900 mb-3" />
                  <h4 className="font-semibold text-slate-900 mb-2">
                    {option.title}
                  </h4>
                  <p className="text-slate-700 text-sm">{option.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </SectionContainer>

      <SectionContainer
        title="Our Commitment to You"
        subtitle="What you can expect from day one"
      >
        <div className="space-y-4">
          {[
            {
              commitment: 'Transparent Communication',
              detail:
                'No surprises, no hidden costs, honest assessment of risks and capabilities',
            },
            {
              commitment: 'Founder Accountability',
              detail:
                'Direct access to founder for escalations and strategic decisions',
            },
            {
              commitment: 'Consistent Team',
              detail:
                'Same engineers throughout project; no unexpected personnel changes',
            },
            {
              commitment: 'Regular Reporting',
              detail:
                'Weekly status, monthly business review, full code and documentation access',
            },
            {
              commitment: 'Quality Discipline',
              detail:
                'Test-driven development, code review, QA process, performance optimization',
            },
            {
              commitment: 'Knowledge Transfer',
              detail:
                'Complete documentation, architecture guides, and onboarding support',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="border-l-4 border-slate-900 pl-6 py-4 bg-slate-50 p-6 rounded"
            >
              <p className="font-semibold text-slate-900">{item.commitment}</p>
              <p className="text-slate-700 text-sm mt-1">{item.detail}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer
        title="Still Have Questions?"
        subtitle="Let's talk about your specific needs and concerns."
        background="slate"
      >
        <div className="text-center">
          <button
            onClick={() => onNavigate('contact')}
            className="bg-slate-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors"
          >
            Schedule a Consultation
          </button>
        </div>
      </SectionContainer>
    </div>
  );
}
