import JobDescription from "~/components/JobDescription";
import { GENERAC, SHERWA, VIMPLE } from "~/constants/jobs";
import type { Job } from "~/components/JobDescription";

const JOBS: Job[] = [GENERAC, SHERWA, VIMPLE];

export default function Career() {
  return (
    <>
      <h2 className="text-4xl font-bold" id="career">
        Career
      </h2>
      <div className="py-2" />
      {JOBS.map((job, idx) => (
        <div key={`job_${job.title}`}>
          <JobDescription job={job} />
          {idx < JOBS.length ? <br /> : null}
        </div>
      ))}
    </>
  );
}
