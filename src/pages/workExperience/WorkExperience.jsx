import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css'
import { FaSchool } from 'react-icons/fa'
import { MdWork } from 'react-icons/md'
import './workExperience.css'

const WorkExperience = () => {
  return (
    <section className="work">
    <div className="workExperience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023"
          iconStyle={{ background: "white", color: "#3e497a" }}
          icon={<MdWork />}
          >
          <h3 className="vertical-timeline-element-title">Allterco Solutions</h3>
          <p>Internship</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023"
          iconStyle={{ background: "white", color: "#3e497a" }}
          icon={<MdWork />}
          >
          <h3 className="vertical-timeline-element-title">Boca Code</h3>
          <p>Developer / Intership</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023 - Present"
          iconStyle={{ background: "white", color: "#3e497a" }}
          icon={<FaSchool />}
          >
          <h3 className="vertical-timeline-element-title">Boca Code</h3>
          <p>Software Engineer Career Course</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2021"
          iconStyle={{ background: "white", color: "#3e497a" }}
          icon={<FaSchool />}
          >
          <h3 className="vertical-timeline-element-title">Palm Beach State College</h3>
          <h6>Associate in Arts with Computer Science Minor</h6>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date=""
          iconStyle={{ background: "white", color: "#3e497a" }}
          icon={<FaSchool />}
          >
          <h3 className="vertical-timeline-element-title">Inem High School</h3>
          <p>Graduated as Science and Mathematics</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
    </section>
  );
};

export default WorkExperience;