import { HeroSection } from '../components/HeroSection';
import { SectionContainer } from '../components/SectionContainer';
import { Clock, Users, CheckCircle, BarChart3, AlertCircle, Zap } from 'lucide-react';

interface HowWeWorkProps {
  onNavigate: (page: string) => void;
  currentRegion: string;
}

export function HowWeWork({ onNavigate }: HowWeWorkProps) {
  return (
    <div>
      <HeroSection
        title="How We Work"
        subtitle="Founder-led coordination on the Japan side, disciplined execution in Hyderabad, transparent communication throughout."
        cta={{
          text: 'Start a Pilot',
          action: () => onNavigate('contact'),
        }}
      />

      <SectionContainer
        title="Japan-Side Coordination"
        subtitle="Your single point of contact for all project matters"
        background="slate"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: Users,
              title: 'Dedicated Coordinator',
              description:
                'Your primary contact for all communication. Manages timelines, escalations, and team alignment.',
            },
            {
              icon: Clock,
              title: 'Japan Timezone Coverage',
              description:
                'Morning standups with your team in Japan time. Async documentation for decisions and updates.',
            },
            {
              icon: AlertCircle,
              title: 'Founder Involvement',
              description:
                'Founder conducts weekly check-ins and monthly business reviews. Accountable for delivery.',
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="bg-white p-6 rounded-lg border border-gray-200">
                <Icon className="w-8 h-8 text-slate-900 mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-700 text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-8 rounded-lg border border-gray-200">
          <h3 className="font-semibold text-slate-900 mb-4">
            Communication Cadence
          </h3>
          <ul className="space-y-3">
            {[
              {
                freq: 'Daily (async)',
                detail: 'Standup updates via Slack or email',
              },
              { freq: 'Weekly', detail: 'Status meeting with your team + our team' },
              { freq: 'Monthly', detail: 'Business review with founder' },
              { freq: 'As-needed', detail: 'Problem-solving calls and escalations' },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="w-4 h-4 bg-slate-900 rounded-full mt-1.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-slate-900">{item.freq}</p>
                  <p className="text-slate-700 text-sm">{item.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </SectionContainer>

      <SectionContainer
        title="Hyderabad Execution"
        subtitle="Small, focused team with clear ownership and accountability"
      >
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">
            Team Structure
          </h3>
          <div className="space-y-4">
            {[
              {
                role: 'Tech Lead',
                responsibility:
                  'Architecture, code review, technical decisions, quality control',
              },
              {
                role: 'Senior/Mid Engineers (2–3)',
                responsibility:
                  'Feature development, testing, documentation, knowledge sharing',
              },
              {
                role: 'QA Engineer',
                responsibility:
                  'Test planning, automation, regression testing, bug triage',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-4 p-4 border-l-4 border-slate-900 bg-white rounded"
              >
                <div>
                  <p className="font-semibold text-slate-900">{item.role}</p>
                  <p className="text-slate-700 text-sm">{item.responsibility}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-50 p-8 rounded-lg">
          <h3 className="font-semibold text-slate-900 mb-4">
            What This Means for You
          </h3>
          <ul className="space-y-3">
            {[
              'No task is anonymous—clear ownership and accountability',
              'Tech lead is your primary technical contact',
              'Same team throughout project—no person turnover mid-stream',
              'Direct visibility into code, architecture, and progress',
              'Predictable quality and delivery discipline',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-slate-900 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </SectionContainer>

      <SectionContainer
        title="Development Process"
        subtitle="Disciplined, predictable delivery"
        background="slate"
      >
        <div className="space-y-6">
          {[
            {
              phase: 'Requirements & Planning (Week 1)',
              details: [
                'Detailed requirements gathering and clarification',
                'Technical architecture and design review',
                'Sprint planning and task breakdown',
                'Risk assessment and mitigation plan',
              ],
            },
            {
              phase: 'Development (Weeks 2–N)',
              details: [
                '2-week sprints with clear deliverables',
                'Daily standups (async) and code reviews',
                'Continuous integration and testing',
                'Weekly demo of completed work',
              ],
            },
            {
              phase: 'Testing & QA (Ongoing)',
              details: [
                'Test planning per sprint',
                'Automated and manual testing',
                'Bug triage and prioritization',
                'Regression testing before releases',
              ],
            },
            {
              phase: 'Handoff & Documentation (Final Week)',
              details: [
                'Complete code documentation',
                'Architecture overview and guides',
                'Deployment runbook and operations guide',
                'Knowledge transfer session',
              ],
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg border border-gray-200"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  {i + 1}
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold text-slate-900 mb-3">
                    {item.phase}
                  </h3>
                  <ul className="space-y-2">
                    {item.details.map((detail, j) => (
                      <li key={j} className="flex items-start gap-2 text-slate-700 text-sm">
                        <Zap className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer
        title="Reporting & Transparency"
        subtitle="You know exactly where we stand"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              What You Receive
            </h3>
            <ul className="space-y-4">
              {[
                {
                  item: 'Weekly Status Report',
                  detail: 'Completed work, blockers, next steps, metrics',
                },
                {
                  item: 'Sprint Demo',
                  detail: 'Live working software every 2 weeks',
                },
                {
                  item: 'Monthly Business Review',
                  detail: 'Milestones, burn-down, roadmap, risks',
                },
                {
                  item: 'Code Access',
                  detail: 'Git repository with full visibility',
                },
              ].map((item, i) => (
                <li key={i}>
                  <p className="font-semibold text-slate-900">{item.item}</p>
                  <p className="text-slate-700 text-sm">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              Metrics We Track
            </h3>
            <div className="space-y-4">
              {[
                'Sprint velocity (tasks completed per sprint)',
                'Bug escape rate (post-launch defects)',
                'Code quality (test coverage, review feedback)',
                'Delivery reliability (on-time milestone delivery)',
                'Communication effectiveness (response time, clarity)',
              ].map((metric, i) => (
                <div key={i} className="flex items-start gap-3">
                  <BarChart3 className="w-5 h-5 text-slate-900 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">{metric}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer title="Quality Assurance" background="slate">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              Our QA Approach
            </h3>
            <ul className="space-y-3">
              {[
                'Test-driven development (tests written before code)',
                'Code review on every change (tech lead + peer)',
                'Automated test suite (unit, integration, E2E)',
                'Staging environment matching production',
                'Security review for all data-handling code',
                'Performance testing before launch',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-slate-900 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">
              QA Checklist (per Sprint)
            </h3>
            <ol className="space-y-3 text-sm text-slate-700">
              <li className="flex gap-3">
                <span className="font-bold text-slate-900 flex-shrink-0">1.</span>
                <span>Requirements reviewed and tests written</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-slate-900 flex-shrink-0">2.</span>
                <span>Feature development and code review complete</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-slate-900 flex-shrink-0">3.</span>
                <span>All automated tests passing</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-slate-900 flex-shrink-0">4.</span>
                <span>Manual testing and edge cases verified</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-slate-900 flex-shrink-0">5.</span>
                <span>Performance baseline validated</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-slate-900 flex-shrink-0">6.</span>
                <span>Ready for production deployment</span>
              </li>
            </ol>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer title="What We Need from You">
        <div className="bg-slate-50 p-8 rounded-lg space-y-4">
          {[
            {
              title: 'Clear Requirements',
              description:
                'What problems are we solving? What are success metrics?',
            },
            {
              title: 'Availability for Reviews',
              description:
                'Weekly demos and monthly business reviews with decision-makers',
            },
            {
              title: 'Prompt Feedback',
              description:
                'Decisions and clarifications within 1–2 business days',
            },
            {
              title: 'Access to Stakeholders',
              description:
                'For interviews, testing, and sign-off on deliverables',
            },
          ].map((item, i) => (
            <div key={i} className="border-l-4 border-slate-900 pl-4">
              <p className="font-semibold text-slate-900">{item.title}</p>
              <p className="text-slate-700 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer title="Ready to Get Started?" background="slate">
        <div className="text-center">
          <button
            onClick={() => onNavigate('contact')}
            className="bg-slate-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors"
          >
            Start a Pilot Project
          </button>
        </div>
      </SectionContainer>
    </div>
  );
}
