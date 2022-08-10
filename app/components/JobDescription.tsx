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

      <br />
      <p>{description}</p>

      <br />
      <ul className="list-disc list-inside">
        {roles.map((role, idx) => (
          <li key={`${idx}_${role}`}>{role}</li>
        ))}
      </ul>

      <p>
        Tools:{" "}
        {tools.map((tool, idx) => (
          <span key={tool} className="pr-1">
            {idx < tools.length - 1 ? `${tool},` : tool}
          </span>
        ))}
      </p>
    </div>
  );
}
