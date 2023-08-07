// import logo from './logo.svg';
import '../../App.css';
import React, { useState } from 'react';

const About = () => {

function handleDownload() {
  const content = "//Assets/Resume.pdf";
  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Resume.pdf';
  a.click();
  URL.revokeObjectURL(url);
}


  return (
    <>
          <div className="skill-row">
          <h3>My Story</h3>
          <p>
I embarked on my software development journey in early 2022, starting with YouTube tutorials and crafting engaging applications to refine my frontend design abilities. As the year drew to a close, I elevated my capabilities by enrolling in the University of Denver's Full Stack Program. This experience marked a transformative phase, enabling me to amplify my frontend prowess and cultivate backend expertise.

Throughout the program, I delved into over 20 distinct projects, both collaborative team efforts and individual undertakings. My transition into tech follows a diverse background – I formerly served as a construction project manager. In that role, I oversaw entire project lifecycles, navigated unforeseen challenges with innovative solutions, and contributed to business development through collaborative sales efforts.

My journey in software development is poised for further elevation. If you're interested in collaboration, please don't hesitate to reach out.</p>
        </div>
      <button  onClick={handleDownload}>Download Resume</button>
    </>
  );
};

export default About;

