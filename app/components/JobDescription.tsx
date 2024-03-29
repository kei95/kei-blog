import RadioWaveButton from "~/assets/radioWaveCircleIcon";

export const JOB_DESCRIPTION_TEST_ID = "job_description";

export interface Job {
  title: string;
  period: string;
  description: string;
  roles: string[];
  tools: string[];
  isCurrentJob: boolean;
}

interface JobDescriptionProps {
  job: Job;
}

export default function JobDescription({
  job,
}: JobDescriptionProps): JSX.Element {
  const { title, period, description, roles, tools, isCurrentJob } = job;

  return (
    <div className="flex flex-row" data-testid={JOB_DESCRIPTION_TEST_ID}>
      {/* Left side */}
      <div className="flex flex-col items-start">
        <RadioWaveButton
          animationState={isCurrentJob ? "ACTIVE" : "INACTIVE"}
          animationSize={20}
          buttonSize={8}
          className="-mt-1.5 -ml-6"
        />

        {/* vertical line */}
        <div className=" border-l-2 mt-1 ml-2.5 border-l-white h-full" />
      </div>

      {/* Right side */}
      <div className="flex-wrap overflow-hidden">
        <div className="flex flex-row ">
          <h3>{title}</h3>
          <p className=" pl-4 text-textAccent">{period}</p>
        </div>

        <p className="pb-3">{description}</p>

        {/* roles list */}
        <p className="font-bold text-textAccent">Key roles</p>
        <ul className="list-disc list-inside pb-3">
          {roles.map((role, idx) => (
            <li key={`${idx}_${role}`}>{role}</li>
          ))}
        </ul>

        {/* tools list */}
        <span className="font-bold text-textAccent">Tools: </span>
        {tools.map((tool, idx) => (
          <span key={tool} className="pr-1 font-normal">
            {idx < tools.length - 1 ? `${tool},` : tool}
          </span>
        ))}
      </div>
    </div>
  );
}
