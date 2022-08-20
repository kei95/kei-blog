import { render } from "@testing-library/react";
import JobDescription, { JOB_DESCRIPTION_TEST_ID } from "./JobDescription";
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

describe("<JobDescription / >", () => {
  test("given current job - it should render with given props and ANIMATED circle", () => {
    const { getByTestId } = render(<JobDescription job={mockedJob} />);

    expect(getByTestId(JOB_DESCRIPTION_TEST_ID)).toMatchSnapshot();
  });

  test("given previous job - it should render with given props and REGULAR circle", () => {
    const { getByTestId } = render(<JobDescription job={mockedJob} />);

    expect(getByTestId(JOB_DESCRIPTION_TEST_ID)).toMatchSnapshot();
  });
});
