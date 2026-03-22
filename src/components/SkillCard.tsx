/*interface SkillCardProps {
  name: string;
  icon?: string;
  image?: string;
  level: number;
  category: string;
}

const SkillCard = ({ name, icon, level, category }: SkillCardProps) => {
  const levelLabel = level >= 85 ? "Advanced" : level >= 60 ? "Intermediate" : "Beginner";

  return (
  
    <div className="mb-4 flex justify-center items-center h-12"> {icon ? ( <i className={`${icon} text-4xl group-hover:scale-110 transition-transform duration-300`}></i> ) : image ? ( <img src={image} alt={name} className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300" /> ) : null} </div>
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
      <p className="text-xs text-muted-foreground mt-2">{levelLabel}</p>
    </div>
  );
};

export default SkillCard;
*/

interface SkillCardProps {
  name: string;
  icon?: React.ReactNode;   // for devicon class
  image?: string;  // for custom images
  level: number;
  category: string;
}

const SkillCard = ({ name, icon, image, level, category }: SkillCardProps) => {
  const levelLabel =
    level >= 85 ? "Advanced" : level >= 60 ? "Intermediate" : "Beginner";

  return (
    <div className="glass-card rounded-xl p-6 card-hover group cursor-default">

      {/* ICON / IMAGE */}
      <div className="mb-6 flex justify-center items-center h-28">
        {icon ? (
  <div className="w-24 h-24 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
    {icon}
  </div>
) : image ? (
  <img
    src={image}
    alt={name}
    className="w-24 h-24 object-contain group-hover:scale-110 transition-transform duration-300"
  />
) : null}
      </div>

      {/* NAME */}
      <h3 className="font-serif text-lg font-semibold mb-1 text-center">
        {name}
      </h3>

      {/* CATEGORY */}
      <p className="text-xs text-muted-foreground mb-4 text-center">
        {category}
      </p>

      {/* LEVEL BAR */}
      <div className="w-full h-2 rounded-full bg-secondary overflow-hidden">
        <div
          className="h-full rounded-full bg-navy transition-all duration-700 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>

      {/* LEVEL TEXT */}
      <p className="text-xs text-muted-foreground mt-2 text-center">
        {levelLabel}
      </p>
    </div>
  );
};

export default SkillCard;