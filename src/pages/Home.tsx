import {
  Zap,
  Users,
  CheckCircle,
  Target,
  Shield,
  Code2,
  Cpu,
} from 'lucide-react';
import { HeroSection } from '../components/HeroSection';
import { SectionContainer } from '../components/SectionContainer';
import { FeatureCard } from '../components/FeatureCard';
import { getRegionContent } from '../lib/regionContent';

interface HomeProps {
  onNavigate: (page: string) => void;
  currentRegion: string;
}

export function Home({ onNavigate, currentRegion }: HomeProps) {
  const content = getRegionContent(currentRegion);

  return (
    <div>
      <HeroSection
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        cta={{
          text: 'Get Started',
          action: () => onNavigate('contact'),
        }}
        secondary={{
          text: 'How We Work',
          action: () => onNavigate('how-we-work'),
        }}
      />

      <SectionContainer
        title="Enterprise-Grade Software Development"
        subtitle="Delivering custom solutions with proven methodologies and transparent processes."
        background="slate"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            icon={Target}
            title="Strategic Approach"
            description="Architecture-first development with clear milestones and defined success criteria."
          />
          <FeatureCard
            icon={Users}
            title="Dedicated Teams"
            description="Experienced engineers committed to your project with consistent communication and accountability."
          />
          <FeatureCard
            icon={Zap}
            title="Delivery Excellence"
            description="Agile methodology with rigorous quality assurance and regular stakeholder reporting."
          />
        </div>
      </SectionContainer>

      <SectionContainer
        title="Our Approach"
        subtitle="Enterprise software development built on proven methodologies and clear accountability."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              {content.approach.title}
            </h3>
            <ul className="space-y-3">
              {[
                content.approach.communication,
                content.approach.workStyle,
                content.approach.expectations,
                'Executive-level reporting and project governance',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-slate-900 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-50 p-8 rounded-lg">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Technical Excellence
            </h3>
            <p className="text-slate-700 text-sm mb-4">
              Experienced engineering teams with deep expertise across modern technology stacks:
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <Code2 className="w-4 h-4" /> Full-stack web and mobile development
              </li>
              <li className="flex items-center gap-2">
                <Cpu className="w-4 h-4" /> AI/ML integration and automation
              </li>
              <li className="flex items-center gap-2">
                <Shield className="w-4 h-4" /> Enterprise systems and cloud infrastructure
              </li>
            </ul>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer
        title="What We Offer"
        subtitle="Three service models to match your needs"
        background="slate"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            icon={Users}
            title="Dedicated Teams"
            description="Embedded engineering teams working exclusively on your projects with full integration into your workflow."
            clickable
            onClick={() => onNavigate('services')}
          />
          <FeatureCard
            icon={Zap}
            title="Custom Development"
            description="End-to-end software development from requirements to deployment with ongoing support."
            clickable
            onClick={() => onNavigate('services')}
          />
          <FeatureCard
            icon={Cpu}
            title="AI Integration"
            description="Implement AI-powered solutions to automate processes and enhance business capabilities."
            clickable
            onClick={() => onNavigate('services')}
          />
        </div>
        <div className="mt-10 text-center">
          <button
            onClick={() => onNavigate('services')}
            className="text-slate-900 font-medium hover:text-slate-700"
          >
            Explore all services →
          </button>
        </div>
      </SectionContainer>

      <SectionContainer
        title="Why Choose MAK Software"
        subtitle="Enterprise-focused. Quality-driven. Globally experienced."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              What Sets Us Apart
            </h3>
            <ul className="space-y-4">
              {[
                {
                  label: 'Enterprise Experience',
                  description: content.whyChoose.culture,
                },
                {
                  label: 'Quality Standards',
                  description: content.whyChoose.businessPractice,
                },
                {
                  label: 'Global Coverage',
                  description: content.whyChoose.timezone,
                },
                {
                  label: 'Proven Process',
                  description:
                    'Established methodologies with track record of successful enterprise delivery.',
                },
              ].map((item, i) => (
                <li key={i} className="border-l-4 border-slate-900 pl-4">
                  <h4 className="font-semibold text-slate-900 mb-1">
                    {item.label}
                  </h4>
                  <p className="text-slate-700 text-sm">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-slate-900 mb-6">
              Engagement Process
            </h3>
            <ol className="space-y-4">
              {[
                { num: '1', title: 'Discovery', desc: 'Comprehensive requirements analysis and technical assessment' },
                { num: '2', title: 'Team Assembly', desc: 'Dedicated engineers with relevant domain expertise' },
                { num: '3', title: 'Agile Delivery', desc: 'Sprint-based development with regular stakeholder reviews' },
                { num: '4', title: 'Quality Assurance', desc: 'Rigorous testing and performance validation' },
                { num: '5', title: 'Ongoing Support', desc: 'Maintenance, optimization, and enhancement' },
              ].map((step, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-sm">
                    {step.num}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{step.title}</p>
                    <p className="text-slate-700 text-sm">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer
        title="Ready to Build?"
        subtitle="Let's discuss how we can support your enterprise software needs."
        background="slate"
      >
        <div className="text-center">
          <button
            onClick={() => onNavigate('contact')}
            className="bg-slate-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors inline-block"
          >
            Get Started
          </button>
        </div>
      </SectionContainer>
    </div>
  );
}
