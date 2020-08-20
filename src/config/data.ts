import {
  ProfileState,
  SkillState,
  ExperienceState,
  ProjectState,
} from "../redux/types";

export const profile: ProfileState = {
  name: "Timothy Price",
  title: ["Full Stack Developer"],
  desc:
    "My name is Timothy Price. I’m a full stack software developer specializing in React and Node.js",
  desc2:
    "I have 5 years of development experience building fullstack products from scratch, developing and integrating APIs, and developing mobile applications with React Native.",
  photo:
    "https://avatars3.githubusercontent.com/u/63269828?s=460&u=223ffe9bbd1e8b7d01f35043a4fdf912e3db0190&v=4",
  email: "Timc3209@gmail.com",
  github: "https://github.com/Timc3209",
  linkedin: "https://www.linkedin.com/in/timothy-price-887246a8/",
};

export const experience: Array<ExperienceState> = [
  {
    name: "Looptify",
    title: "Full Stack Developer",
    date: "Oct 2017 - Mar 2020",
    location: "Monterey Park, CA",
    lines: [
      "Developed a social e-commerce mobile application (IOS / Android) utilizing React Native, Typescript and Redux. With features such as livestream, real-time messaging and payment processing.",
      "Developed an admin portal with React to manage users, products, orders and to create shipment labels.",
      "Designed and developed restful API using Node.js, Typescript and Express.",
      "Worked with the product manager to help plan and create tight deadlines using sprints. also participated in retrospectives after every sprint.",
    ],
  },
  {
    name: "GoFuze",
    title: "Full Stack Developer",
    date: "Jan 2014 - Sep 2017",
    location: "Los Angeles, CA",
    lines: [
      "Work closely with designers (UI/UX), product manager and developers to develop/improve features for logistics and supply chain management software.",
      "Developed applications using Socket.IO for real-time monitoring of cargo and chat communications ",
      "Conducted several developer sessions to help developers get a better understanding of the systems.",
      "Optimization of Javascript and SQL queries to improve performance of  website and mobile application.",
    ],
  },
];

export const skills: Array<SkillState> = [
  {
    name: "HTML",
    icon: "html5",
    color: "#E44D26",
  },
  {
    name: "CSS",
    icon: "css3",
    color: "#1572B6",
  },
  {
    name: "JavaScript",
    icon: "js",
    color: "#D5B931",
  },
  {
    name: "React",
    icon: "react",
    color: "#53D2FA",
  },
  {
    name: "Redux",
    icon: "redux",
    color: "#7749BD",
  },
  {
    name: "React Native",
    icon: "react",
    color: "#53D2FA",
  },
  {
    name: "Bootstrap",
    icon: "bootstrap",
    color: "#62488A",
  },
  {
    name: "Node.JS",
    icon: "node",
    color: "#77B171",
  },
  {
    name: "MySQL",
    icon: "mysql",
    color: "#00688F",
  },
];

export const projects: Array<ProjectState> = [
  {
    title: "Portfolio App",
    desc:
      "A configurable software developer portfolio that allows you to display your skills, experience and projects.",
    thumb: require("../assets/images/portfolioapp-sq.png"),
    link: "https://timc3209.github.io/portfolio-app/",
    github: "https://github.com/Timc3209/portfolio-app/",
    build: ["React", "Redux", "Typescript", "Bootstrap"],
    background: "#002134",
  },
  {
    title: "Task Board",
    desc:
      "A kanban style task board with features such as adding, updating and deleting tasks, customizable columns and drag-and-drop.",
    thumb: require("../assets/images/taskboard-sq.png"),
    link: "https://simple-task-board.herokuapp.com/",
    github: "https://github.com/Timc3209/task-board",
    build: [
      "React",
      "Redux",
      "Typescript",
      "Bootstrap",
      "Node.JS",
      "Express",
      "MongoDB",
    ],
    background: "#154379",
  },
  {
    title: "Todo App",
    desc:
      "A calendar based todo list mobile application that allows users to view, add, edit and delete items stored in local storage.",
    thumb: require("../assets/images/todoapp.png"),
    link: "",
    github: "https://github.com/Timc3209/TodoApp",
    build: ["React Native", "Redux", "Typescript"],
    background: "#222222",
  },
  {
    title: "Recipe App",
    desc:
      "A React project that allows users to view, add, edit, and delete recipes stored in local storage.",
    thumb: require("../assets/images/recipeapp-sq.png"),
    link: "https://timc3209.github.io/recipe-app",
    github: "https://github.com/Timc3209/recipe-app",
    build: ["React", "Redux", "Typescript", "Bootstrap"],
    background: "#404040",
  },
];
