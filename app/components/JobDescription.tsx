export interface Job {
  title: string;
  period: string;
  description: string;
  roles: string[];
  tools: string[];
}

interface JobDescriptionProps {
  job: Job;
}

export default function JobDescription({ job }: JobDescriptionProps) {
  const { title, period, description, roles, tools } = job;
  return (
    <div className="max-w-screen-sm">
      <div className="flex items-end">
        <h3 className="pr-4">{title}</h3>
        <p>{period}</p>
      </div>

      <p className="pb-3">{description}</p>

      <ul className="list-disc list-inside pb-3">
        <p className="font-bold">Key roles</p>
        {roles.map((role, idx) => (
          <li key={`${idx}_${role}`}>{role}</li>
        ))}
      </ul>

      <span className="font-bold">
        Tools:{" "}
        {tools.map((tool, idx) => (
          <span key={tool} className="pr-1 font-normal">
            {idx < tools.length - 1 ? `${tool},` : tool}
          </span>
        ))}
      </span>
    </div>
  );
}
