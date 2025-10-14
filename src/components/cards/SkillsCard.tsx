import { IconType } from 'react-icons';

type Skill = {
  name: string;
  icon: IconType;
};

const SkillCard = ({ name, icon: Icon }: Skill) => {
  return (
    <div className="cursor-default group flex flex-col items-center justify-center gap-4 p-4 bg-neutral-900 rounded-lg transition-transform duration-300 hover:-translate-y-2">
      <Icon className="size-12 text-purple-400 group-hover:text-purple-500 transition-colors" />
      <p className="text-neutral-300 font-semibold text-center">{name}</p>
      <div className="w-full h-1 bg-neutral-800 rounded-full">
        <div className="h-full bg-purple-600 w-0 group-hover:w-full transition-all duration-300"></div>
      </div>
    </div>
  );
};

export default SkillCard;