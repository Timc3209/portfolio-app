export interface ProfileState {
  name: string;
  title: string[];
  desc: string;
  desc2: string;
  photo: string;
  email: string;
  github: string;
  linkedin: string;
}

export interface ProjectState {
  title: string;
  desc: string;
  thumb: string;
  link: string;
  github: string;
  build: string[];
  background: string;
}

export interface ExperienceState {
  name: string;
  title: string;
  date: string;
  location: string;
  lines: string[];
}

export interface SkillState {
  name: string;
  icon: string;
  color: string;
}

export interface AppState {
  profile: ProfileState;
  skills: Array<SkillState>;
  experience: Array<ExperienceState>;
  projects: Array<ProjectState>;
}

export interface ActionType {
  type: string;
  payload: string;
}
