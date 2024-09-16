import React from 'react';
import { work_process } from '../../constants/data';
import "./WorkProcess.css";

const WorkProcess = () => {
  return (
    <div className='workprocess section-p bg-white' id="workprocess">
      <div className='container'>
        <div className='workprocess-content'>
          <div className='section-title'>
            <h3 className='text-brown'>Our <span className='text-dark'>Works</span></h3>
            <p className='text'>
              Experience Unparalleled Reliability and Punctuality with Our Jewelry Services, where we prioritize your satisfaction by delivering exceptional craftsmanship and timely solutions that surpass your expectations.
            </p>
          </div>

          <div className='workprocess-list grid'>
            {work_process.map((workprocess, index) => (
              <div className='workprocess-item text-center' key={index}>
                <div className='workprocess-item-title flex'>
                  <h3 className='text-dark fw-5'>{workprocess.title}</h3>
                </div>
                <p className='text'>{workprocess.paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkProcess;