import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Steps = () => {
  return (
    <div className="bg-gray-900 text-white p-10 h-full  w-full">
      <div className='flex w-full text-center justify-center'>
      <h1 className="text-4xl font-bold text-center mb-10">
        You are just 3 Steps away from becoming a part of this{' '}
        <span className="border-b-2 border-white">JOURNEY</span>
      </h1>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#1e293b', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #1e293b' }}
          iconStyle={{ background: '#3b82f6', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Fill in the google form</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#6d28d9', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #6d28d9' }}
       
        >
          <h3 className="vertical-timeline-element-title">You will receive E-Mail</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#1e293b', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #1e293b' }}
          iconStyle={{ background: '#3b82f6', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Get your referral code</h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Steps;
