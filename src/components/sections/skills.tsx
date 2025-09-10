import Marquee from 'react-fast-marquee';
import { skillsData } from '@/lib/data';
import Section from '@/components/shared/section';
import type { IconType } from 'react-icons';

export default function Skills() {
  const allSkills = skillsData.categories.flatMap(category => category.skills);
  const firstRow = allSkills.slice(0, Math.ceil(allSkills.length / 2));
  const secondRow = allSkills.slice(Math.ceil(allSkills.length / 2));

  const SkillItem = ({ skill }: { skill: (typeof allSkills)[0] }) => {
    const Icon = skill.icon as IconType | undefined;
    return (
      <div className="mx-4 flex flex-col items-center justify-center gap-2 text-center">
        {Icon && <Icon className="h-16 w-16" style={{ color: skill.color }} />}
        <span className="font-code text-sm font-semibold">{skill.name}</span>
      </div>
    );
  };

  return (
    <Section id="skills">
      <div className="text-center">
        <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl">
          {skillsData.title}
        </h2>
      </div>
      <div className="mt-12 space-y-8">
        <Marquee gradient={false} speed={50} pauseOnHover>
          {firstRow.map(skill => (
            <SkillItem key={skill.name} skill={skill} />
          ))}
        </Marquee>
        <Marquee gradient={false} speed={50} pauseOnHover direction="right">
          {secondRow.map(skill => (
            <SkillItem key={skill.name} skill={skill} />
          ))}
        </Marquee>
      </div>
    </Section>
  );
}
