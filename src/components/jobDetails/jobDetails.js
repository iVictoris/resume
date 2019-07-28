import React from "react";
import PropTypes from "prop-types";

import './jobDetails.css';

const JobDetails = ({ data }) => {
  // Data will be
  /*
    [{
      title: <job-title>
      company: <job-company>
      start: <start-date>
      end: <end-date> || <current>
      tasks: [
        <task0>,
        <task1>,
        ...
      ],
      description: <job-description>
    }]
  */
  const details = data.map(job => {
    const { title, company, start, end, tasks, description, location } = job;
    const jobTasks = tasks.map(jobTask => {
      return <li key={jobTask.toString(16)}>{jobTask}</li>;
    });

    return (
      <div className="job item shrink" key={company}>
        <header className="fx fdc jcse shrink">
          <h3>Company: {company}</h3>
          <h4>Title: {title}</h4>
          <h5>
            Dates: {start} &mdash; {end}
          </h5>
        </header>
        <section className='shrink'>
          <p>{description}</p>
          <p>Job description ({location}):</p>
          <ul>{jobTasks}</ul>
        </section>
      </div>
    );
  });

  return <div className="job details">{details}</div>;
};

JobDetails.propTypes = {};

export default JobDetails;
