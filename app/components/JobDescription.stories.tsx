import type { ComponentStory, ComponentMeta } from "@storybook/react";

import JobDescription from "./JobDescription";
import type { Job } from "./JobDescription";

const mockedJob: Job = {
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
    "Jest",
    "Java",
    "Maven",
    "Spring Boot",
    "AWS",
  ],
  isCurrentJob: true,
};

export default {
  title: "JobDescription",
  component: JobDescription,
  argTypes: {
    control: "object",
  },
  args: { job: mockedJob },
} as ComponentMeta<typeof JobDescription>;

const Template: ComponentStory<typeof JobDescription> = (args) => (
  <JobDescription {...args} />
);

export const CurrentJob = Template.bind({});

export const PreviousJob = Template.bind({});
PreviousJob.args = {
  job: Object.assign({}, mockedJob, { ...mockedJob, isCurrentJob: false }),
};
