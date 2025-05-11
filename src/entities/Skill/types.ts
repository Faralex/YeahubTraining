export interface SkillItemProps {
  name: string;
  selected?: boolean;
  onClick?: () => void;
}

export interface Skill {
  id: string;
  name: string;
}
