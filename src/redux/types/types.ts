export interface ProfileState {
  name: string;
  desc: string;
  photo: string;
  email: string;
  github: string;
  skills: string[];
}

export interface ProjectState {
  title: string;
  desc: string;
  thumb: string;
  link: string;
  github: string;
  category: string;
}

export interface CategoryState {
  name: string;
  icon: string;
  iconPrefix: string;
  enabled: boolean;
}

export interface AppState {
  profile: ProfileState;
  projects: Array<ProjectState>;
  categories: Array<CategoryState>;
}

export interface ActionType {
  type: string;
  payload: string;
}
