interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

const SectionHeading = ({ title, subtitle, light }: SectionHeadingProps) => (
  <div className="text-center mb-16 animate-in">
    <h2 className={`font-serif text-4xl md:text-5xl font-bold mb-4 ${light ? "text-cream" : "text-foreground"}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`text-lg max-w-2xl mx-auto ${light ? "text-cream/70" : "text-muted-foreground"}`}>
        {subtitle}
      </p>
    )}
    <div className="mt-6 mx-auto w-20 h-1 rounded-full bg-navy" />
  </div>
);

export default SectionHeading;
