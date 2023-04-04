import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css'
import { FaGraduationCap } from 'react-icons/fa'
import { MdWork } from 'react-icons/md'
import './workExperience.css'

const WorkExperience = () => {
  return (
    <section className="work">
    <div className="workExperience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date={<span style={{ color: "#1e386c" }}>Jan to March 2023</span>}
          iconStyle={{ background: "#1e386c", color: "rgba(255, 255, 255, 0.648)" }}
          icon={<MdWork />}
          >
          <h3 className="vertical-timeline-element-title">IoT Intern - ALLTERCO-SHELLY ROBOTICS (Boca Raton, FL)</h3>
          <p>Created NodeJS/Express APIs for IoT devices (plugs, lamps, relays) to exchange real-time data efficiently, and build full-stack software for local device control.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Jan 2023 to Present"
          iconStyle={{ background: "#1e386c", color: "rgba(255, 255, 255, 0.648)" }}
          icon={<MdWork />}
          >
          <h3 className="vertical-timeline-element-title">Software Engineering Intern - BOCA CODE (Boca Raton, FL)</h3>
          <p>Assisted over 15 students in improving software engineering skills in FrontEnd and BackEnd development.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Summer 2022"
          iconStyle={{ background: "#1e386c", color: "lightblue" }}
          icon={<FaGraduationCap />}
          >
          <h3 className="vertical-timeline-element-title">Boca Code</h3>
          <p>Software Engineer Career Course</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2021"
          iconStyle={{ background: "#1e386c", color: "lightblue" }}
          icon={<FaGraduationCap />}
          >
          <h3 className="vertical-timeline-element-title">Palm Beach State College</h3>
          <h6>Associate in Arts with Computer Science Minor</h6>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 2020"
          iconStyle={{ background: "#1e386c", color: "rgba(255, 255, 255, 0.648)" }}
          icon={<MdWork />}
          >
          <h3 className="vertical-timeline-element-title">Math Tutor - PALM BEACH STATE COLLEGE (Lake Worth, FL)</h3>
          <p>Tutored 400+ students in areas such as algebraic methods and statistics resulting in 80% higher test results and GPA.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
    </section>
  );
};

export default WorkExperience;