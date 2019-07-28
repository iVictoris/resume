import React from "react";
import PropTypes from "prop-types";
import Title from "../title/title";

const certificates = [
  {
    name: "HAZWOPER 40-hour",
    date: "8/2018"
  },
  {
    name: "HAZWOPER 8-hour Refresher",
    date: "7/2019"
  }
];

const schools = [
  {
    name: "Pinellas Park High",
    date: "1/13",
    degree: "High School Diploma"
  }
];

const EducationExperience = props => {
  const certs = certificates.map(c => {
    const { name, date } = c;
    return (
      <li>
        {name} &mdash; {date}
      </li>
    );
  });

  const school = schools.map(s => {
    const { name, date, degree } = s;

    return (
      <React.Fragment>
        <div>{degree}</div>
        <ul>
          <li>School Name: {name}</li>
          <li>Graduated: {date}</li>
        </ul>
      </React.Fragment>
    );
  });

  return (
    <section className="education experience">
      <Title name="Education" />
      <section className="certificates shrink">
        <h3>Certificates:</h3>
        <ul>{certs}</ul>
      </section>

      <section className="school shrink">
        <h3>Degrees</h3>
        <section className="details fx fdc">{school}</section>
      </section>
    </section>
  );
};

EducationExperience.propTypes = {};

export default EducationExperience;
