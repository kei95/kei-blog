import type { Job } from "~/components/JobDescription";

export const GENERAC: Job = {
  title: "Generac Power Systems",
  period: "Apr 2021 - Now",
  description:
    "As a software developer, thriving to create a customer-facing app called PWRview that lets users check their smart home's status such as monthly/yearly billing data, live data of their PWRcell devices, etc. Also, flexibly jumping around multiple server services to enhance the team's development experience with BFF(Backend-for-frontend) pattern.",
  roles: [
    "Introduced a new branching strategy to improve the team's development experience",
    "Actively introduce and integrate new tools, libraries, and new features of languages to the team",
    `Add a massive amount of automation tests to the project based on the principle of "Refactoring" by Martin Fowler`,
    "Implement the app's features with rich animations",
    "Design software architecture for new features from server side to client side",
  ],
  tools: [
    "TypeScript",
    "React Naive",
    "React-native-testing-library",
    "Java",
    "Maven",
    "Spring Boot",
    "AWS",
  ],
  isCurrentJob: true,
};

export const SHERWA: Job = {
  title: "Sherwa Online Services",
  period: "Oct 2019 - Apr 2021",
  description:
    "Developed an app that allows gamers to connect with each other, facilitating interaction and matchmaking outside of the game's native platform.",
  roles: [
    "Worked closely with the designer team to implement the app's UI/UX from scratch",
    "Helped the back-end team by adding APIs modifying DB",
    "Implemented third-party logins by integrating their API",
    "Created some unit-tests to ensure the product's stability",
  ],
  tools: [
    "TypeScript",
    "React Naive",
    "React-native-testing-library",
    "Node.js",
    "Express.js",
    "PostgresSQL",
  ],
  isCurrentJob: false,
};

export const VIMPLE: Job = {
  title: "Vimple",
  period: "Jan 2019 - Aug 2019",
  description:
    "Developed an app called Base that is a chat application that is specifically for students.",
  roles: [
    "Developed an app for students in Vancouver on both web and mobile using React/React-native.",
    "Learned how development works in the real environment and real product.",
  ],
  tools: ["Typescript", "React Native", "React"],
  isCurrentJob: false,
};
