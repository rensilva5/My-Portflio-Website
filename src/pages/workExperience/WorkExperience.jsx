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
          <h3 className="vertical-timeline-element-title">Ramdom school</h3>
          <p>Inem JMS</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2010 - 2014"
          iconStyle={{ background: "white", color: "#3e497a" }}
          icon={<FaSchool />}
        >
          <h3 className="vertical-timeline-element-title">Ramdom school</h3>
          <p>Inem JMS</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2010 - 2014"
          iconStyle={{ background: "white", color: "#3e497a" }}
          icon={<FaSchool />}
        >
          <h3 className="vertical-timeline-element-title">Ramdom school</h3>
          <p>Inem JMS</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default WorkExperience;
