import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick?: () => void;
  clickable?: boolean;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  onClick,
  clickable = false,
}: FeatureCardProps) {
  return (
    <div
      onClick={onClick}
      className={`p-6 rounded-lg border border-gray-200 bg-white hover:border-slate-400 hover:shadow-md transition-all ${
        clickable ? 'cursor-pointer' : ''
      }`}
    >
      <div className="mb-4">
        <Icon className="w-8 h-8 text-slate-900" />
      </div>
      <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-700 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
