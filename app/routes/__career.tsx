import JobDescription from "~/components/JobDescription";
import { GENERAC, SHERWA, VIMPLE } from "~/constants/jobs";
import type { Job } from "~/components/JobDescription";

const JOBS: Job[] = [GENERAC, SHERWA, VIMPLE];

export default function Career() {
  return (
    <div id="career" className="pb-14">
      <h2 className="title-text-h1 text-4xl">Career</h2>

      <div className="py-2" />

      {JOBS.map((job, idx) => (
        <div key={`job_${job.title}`}>
          <JobDescription job={job} />
          {idx < JOBS.length ? <br /> : null}
        </div>
      ))}
    </div>
  );
}
