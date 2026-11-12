import { IconType } from 'react-icons';

type SkillCardProps = {
  name: string;
  icon: IconType;
};

const SkillCard = ({ name, icon: Icon }: SkillCardProps) => {
  return (
    <div className="group flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-neutral-900/65 backdrop-blur-sm border border-white/10 hover:border-violet-500/45 hover:bg-neutral-900/90 shadow-lg shadow-black/20 hover:shadow-violet-950/30 transition-all duration-300 hover:-translate-y-1">
      <div className="p-3 rounded-xl bg-violet-500/10 border border-violet-500/20 group-hover:bg-violet-500/20 group-hover:border-violet-400/40 transition-colors">
        <Icon
          aria-hidden="true"
          className="size-8 text-violet-400 group-hover:text-violet-300 transition-colors"
        />
      </div>
      <p className="text-neutral-200 text-sm font-semibold text-center leading-tight">
        {name}
      </p>
      <div className="w-full h-0.5 bg-white/5 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 w-0 group-hover:w-full transition-all duration-300" />
      </div>
    </div>
  );
};

export default SkillCard;
