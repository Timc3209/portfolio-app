import { ProfileState, CategoryState, ProjectState } from "../redux/types";

export const profile: ProfileState = {
  name: "Timothy Price",
  desc:
    "I'm a full-stack developer who focuses on writing clean, elegant and efficent code.",
  photo:
    "https://avatars1.githubusercontent.com/u/63269828?s=460&u=699c143f5e9e9d4412c0f1704df517723828d232&v=4",
  email: "Timc3209@gmail.com",
  github: "https://github.com/Timc3209",
  skills: [
    "React",
    "React Native",
    "Redux",
    "Typescript",
    "Javascript",
    "Node.js",
    "MySql",
  ],
};

export const categories: Array<CategoryState> = [
  {
    name: "React",
    icon: "react",
    iconPrefix: "fab",
    enabled: true,
  },
  {
    name: "React Native",
    icon: "mobile",
    iconPrefix: "fas",
    enabled: true,
  },
];

export const projects: Array<ProjectState> = [
  {
    title: "Task Board",
    desc: "A kanban taskboard built with React and Redux.",
    thumb: require("../assets/images/taskboard.png"),
    link: "https://simple-task-board.herokuapp.com/",
    github: "https://github.com/Timc3209/task-board",
    category: "React",
  },
  {
    title: "Recipe App",
    desc:
      "A React project that allow users to view, add, edit and delete recipes.",
    thumb: require("../assets/images/recipeapp.png"),
    link: "https://timc3209.github.io/recipe-app",
    github: "https://github.com/Timc3209/recipe-app",
    category: "React",
  },
  {
    title: "Todo App",
    desc: "TodoApp is a simple to-do list manager app built with react native.",
    thumb: require("../assets/images/todoapp.png"),
    link: "https://github.com/Timc3209/TodoApp",
    github: "https://github.com/Timc3209/TodoApp",
    category: "React Native",
  },
];
