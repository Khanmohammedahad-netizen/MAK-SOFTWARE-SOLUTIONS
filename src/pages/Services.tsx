import { HeroSection } from '../components/HeroSection';
import { SectionContainer } from '../components/SectionContainer';
import { FeatureCard } from '../components/FeatureCard';
import { Users, Zap, Cpu, CheckCircle, Clock, Target } from 'lucide-react';
import { useState } from 'react';

interface ServicesProps {
  onNavigate: (page: string) => void;
  currentRegion: string;
}

export function Services({ onNavigate }: ServicesProps) {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const services = [
    {
      id: 'dedicated',
      icon: Users,
      title: 'Dedicated Development Teams',
      shortDesc: '3-5 engineers dedicated to your product',
      details:
        'A stable team assigned to your project, working on your roadmap and priorities. You have full control over tasks and direction.',
      benefits: [
        'Consistent team members and communication',
        'Deep familiarity with your codebase and product',
        'Flexible scope — adjust priorities as needed',
        'Transparent, hourly-based billing',
        'Scalable — add or reduce team size',
      ],
      costs: [
        'Development engineer: ¥350,000–500,000/month',
        'Senior engineer: ¥500,000–700,000/month',
        'Minimum team: 3 engineers',
      ],
      timeline: 'Starts in 2–3 weeks',
      bestFor:
        'Ongoing product development, scaling your engineering capacity, building new features.',
    },
    {
      id: 'mvp',
      icon: Zap,
      title: 'MVP & Project Development',
      shortDesc: 'Build products or systems in 4–12 weeks',
      details:
        'Fixed-scope projects with clear deliverables. From requirements to working software with testing and documentation.',
      benefits: [
        'Fixed timeline and budget',
        'Clear requirements and milestones',
        'Founder-led project oversight',
        'Weekly status meetings and updates',
        'Complete handoff and documentation',
      ],
      costs: [
        'Simple MVP: ¥3–5M (4-6 weeks)',
        'Complex project: ¥5–10M (8-12 weeks)',
        'Pilot pricing: 20% discount for first engagement',
      ],
      timeline: '2 weeks discovery, 4–12 weeks delivery',
      bestFor:
        'New product launch, internal system development, proof-of-concept projects.',
    },
    {
      id: 'ai',
      icon: Cpu,
      title: 'AI Automation & Integration',
      shortDesc: 'Operationalize AI for your business',
      details:
        'Design and build AI workflows: customer service automation, document processing, operational efficiency, data analysis.',
      benefits: [
        'Problem-to-implementation consulting included',
        'Choice of models and platforms (OpenAI, Claude, etc.)',
        'Integration with your existing systems',
        'Ongoing optimization and monitoring',
        'Knowledge transfer and team training',
      ],
      costs: [
        'Consulting + simple automation: ¥2–3M',
        'Complex integration: ¥5–8M',
        'Ongoing support: ¥500K–1M/month',
      ],
      timeline: 'Scoped in 1–2 weeks, built in 4–8 weeks',
      bestFor:
        'Reducing operational costs, improving response times, automating repetitive tasks.',
    },
  ];

  return (
    <div>
      <HeroSection
        title="Services Built for Japanese SMEs"
        subtitle="Three ways to work with us: dedicated teams for ongoing development, projects for time-bound goals, or AI automation for operational efficiency."
        cta={{
          text: 'Start a Pilot',
          action: () => onNavigate('contact'),
        }}
      />

      <SectionContainer title="Our Services" background="slate">
        <div className="space-y-6">
          {services.map((service) => {
            const isExpanded = expandedService === service.id;
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="border border-gray-200 rounded-lg bg-white overflow-hidden"
              >
                <button
                  onClick={() =>
                    setExpandedService(isExpanded ? null : service.id)
                  }
                  className="w-full p-6 flex items-start gap-4 hover:bg-slate-50 transition-colors text-left"
                >
                  <Icon className="w-6 h-6 text-slate-900 flex-shrink-0 mt-1" />
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-slate-900 mb-1">
                      {service.title}
                    </h3>
                    <p className="text-slate-700">{service.shortDesc}</p>
                  </div>
                  <div className="text-slate-700 font-semibold">
                    {isExpanded ? '−' : '+'}
                  </div>
                </button>

                {isExpanded && (
                  <div className="border-t border-gray-200 p-6 bg-slate-50">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">
                          Overview
                        </h4>
                        <p className="text-slate-700 text-sm leading-relaxed">
                          {service.details}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                            <CheckCircle className="w-4 h-4" />
                            What's Included
                          </h4>
                          <ul className="space-y-2">
                            {service.benefits.map((benefit, i) => (
                              <li key={i} className="text-slate-700 text-sm">
                                • {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                            <Target className="w-4 h-4" />
                            Pricing
                          </h4>
                          <ul className="space-y-2 mb-4">
                            {service.costs.map((cost, i) => (
                              <li key={i} className="text-slate-700 text-sm">
                                • {cost}
                              </li>
                            ))}
                          </ul>
                          <p className="text-sm text-slate-600 mt-4 pt-4 border-t border-gray-300">
                            <Clock className="w-4 h-4 inline mr-2" />
                            {service.timeline}
                          </p>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-gray-300">
                        <p className="text-sm text-slate-700 mb-4">
                          <strong>Best for:</strong> {service.bestFor}
                        </p>
                        <button
                          onClick={() => onNavigate('contact')}
                          className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
                        >
                          Discuss This Service
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </SectionContainer>

      <SectionContainer
        title="Engagement Process"
        subtitle="How we work together, regardless of service type"
      >
        <div className="space-y-8">
          {[
            {
              step: '1',
              title: 'Initial Consultation',
              description:
                'Founder call to understand your goals, constraints, and timeline. No sales pitch—just honest assessment of fit.',
            },
            {
              step: '2',
              title: 'Scope & Proposal',
              description:
                'Clear scope, timeline, team size, and cost. Written proposal with defined milestones.',
            },
            {
              step: '3',
              title: 'Pilot Project',
              description:
                'Start with a 4-6 week engagement to prove value and alignment. Low-risk way to evaluate partnership.',
            },
            {
              step: '4',
              title: 'Ongoing Delivery',
              description:
                'Weekly status meetings, transparent reporting, founder check-ins, and continuous optimization.',
            },
          ].map((phase, i) => (
            <div key={i} className="flex gap-6">
              <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                {phase.step}
              </div>
              <div className="pt-1">
                <h3 className="font-semibold text-slate-900 mb-2">
                  {phase.title}
                </h3>
                <p className="text-slate-700">{phase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer title="Technology Stack" background="slate">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              category: 'Frontend',
              techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
            },
            {
              category: 'Backend',
              techs: ['Node.js', 'Python', 'PostgreSQL', 'AWS/GCP'],
            },
            {
              category: 'AI & Data',
              techs: ['OpenAI', 'LangChain', 'RAG', 'Data pipelines'],
            },
          ].map((group, i) => (
            <div key={i} className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-slate-900 mb-4">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.techs.map((tech, j) => (
                  <li key={j} className="text-slate-700 text-sm flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-slate-900 rounded-full" />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer title="Questions?">
        <div className="bg-slate-50 p-8 rounded-lg text-center">
          <p className="text-slate-700 mb-6">
            Not sure which service is right for you? Let's discuss your specific needs.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-slate-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors"
          >
            Get in Touch
          </button>
        </div>
      </SectionContainer>
    </div>
  );
}
