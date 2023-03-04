import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css'
import { FaSchool } from 'react-icons/fa'
// import 'workExperience.css'

const WorkExperience = () => {
  return (
    <div className="workExperience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2010 - 2014"
          iconStyle={{ background: "white", color: "#3e497a" }}
          icon={<FaSchool />}
        >
          <h3 className="vertical-timeline-element-title">Boca Code</h3>
          <p>Software Engineer</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2010 - 2014"
          iconStyle={{ background: "white", color: "#3e497a" }}
          icon={<FaSchool />}
        >
          <h3 className="vertical-timeline-element-title">Palm Beach State College</h3>
          <p>Associate in Arts with Computer Science Minor</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2010 - 2014"
          iconStyle={{ background: "white", color: "#3e497a" }}
          icon={<FaSchool />}
        >
          <h3 className="vertical-timeline-element-title">Inem High School</h3>
          <p>Graduated as Science and Mathematics</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default WorkExperience;