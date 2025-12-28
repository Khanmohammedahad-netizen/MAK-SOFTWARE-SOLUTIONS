interface HeroSectionProps {
  title: string;
  subtitle: string;
  cta?: {
    text: string;
    action: () => void;
  };
  secondary?: {
    text: string;
    action: () => void;
  };
}

export function HeroSection({
  title,
  subtitle,
  cta,
  secondary,
}: HeroSectionProps) {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl text-slate-700 mb-8 leading-relaxed max-w-2xl">
            {subtitle}
          </p>
          {(cta || secondary) && (
            <div className="flex flex-col sm:flex-row gap-4">
              {cta && (
                <button
                  onClick={cta.action}
                  className="bg-slate-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors"
                >
                  {cta.text}
                </button>
              )}
              {secondary && (
                <button
                  onClick={secondary.action}
                  className="border-2 border-slate-900 text-slate-900 px-6 py-3 rounded-lg font-medium hover:bg-slate-50 transition-colors"
                >
                  {secondary.text}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
