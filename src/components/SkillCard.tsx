interface SkillCardProps {
  name: string;
  icon: string;
  level: number;
  category: string;
}

const SkillCard = ({ name, icon, level, category }: SkillCardProps) => {
  const levelLabel = level >= 85 ? "Advanced" : level >= 60 ? "Intermediate" : "Beginner";

  return (
    <div className="glass-card rounded-xl p-6 card-hover group cursor-default">
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <h3 className="font-serif text-lg font-semibold mb-1">{name}</h3>
      <p className="text-xs text-muted-foreground mb-4">{category}</p>
      <div className="w-full h-2 rounded-full bg-secondary overflow-hidden">
        <div
          className="h-full rounded-full bg-navy transition-all duration-700 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
      <p className="text-xs text-muted-foreground mt-2">{levelLabel} — {level}%</p>
    </div>
  );
};

export default SkillCard;
