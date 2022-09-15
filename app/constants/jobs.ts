import type { Job } from "~/components/JobDescription";

export const GENERAC: Job = {
  title: "Generac Power Systems",
  period: "Apr 2021 - Now",
  description:
    "As a software developer, primary developing an app that allows a user to monitor his/her energy consumption and bill estimation.",
  roles: [
    "Implement the app's features with rich animations",
    "Design software architecture for new features from server side to client side",
    "Add new APIs to the server and maintain existing ones",
    "Led the team to add tests to the project and reduced the rate of bug report",
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
    "Developed an app that is focused on helping gamers to match up and interact with each other outside of the games' native platform",
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
