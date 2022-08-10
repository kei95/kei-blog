import Button from "~/components/Button";
import Header from "~/components/Header";
import JobDescription from "~/components/JobDescription";
import type { Job } from "~/components/JobDescription";

// TODO: move this one to constants folder
const GENERAC: Job = {
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
};

export default function Index() {
  return (
    <>
      <Header />
      <div className="container mx-auto max-w-7xl">
        {/* First section */}
        <div className="flex flex-col m-auto items-center h-screen max-h-[950px] justify-center">
          <h1 className="title-text">Hi. It's Kei.</h1>
          <h1 className="title-text">A developer.</h1>
          <br />
          <p>🌧 Located in Vancouver 🌧</p>
        </div>

        {/* Second section */}
        <>
          <h2 className="text-4xl font-bold">Career</h2>
          <div className="py-4" />
          <JobDescription job={GENERAC} />
        </>

        <Button text="TEST BUTTON" />
      </div>
    </>
  );
}
