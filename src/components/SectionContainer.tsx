import { ReactNode } from 'react';

interface SectionContainerProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  alternateLayout?: boolean;
  background?: 'white' | 'slate';
}

export function SectionContainer({
  title,
  subtitle,
  children,
  background = 'white',
}: SectionContainerProps) {
  return (
    <section
      className={`py-16 md:py-20 ${
        background === 'slate' ? 'bg-slate-50' : 'bg-white'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="mb-12 md:mb-16">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-slate-700 max-w-2xl">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
