type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="space-y-2">
      <h2 className="text-3xl font-semibold tracking-tight text-graphite sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="text-base text-slate/70">{subtitle}</p>}
    </div>
  );
}
