// import logo from './logo.svg';
import '../../App.css';
import profilePic from '../images/Profile.jpg';

function About() {
  return (
    <>
      <div id="About">
        <img className="profile-pic" src={profilePic} alt="Paul Duncan" />
        <h2>Hello.</h2>
        <p className="intro">Experienced project manager. Aspiring web developer. Humble human.</p>
      </div>
      <hr />
      <div id="skills">
        <h2>My Skills.</h2>
        <div className="skill-row">
          <h3>Web Development Skills</h3>
          <ul id="ul" style={{ listStyle: 'none'}}>
            <li className="list">
              HTML5
            </li>
            <li className="list">
              CSS - bootstrap
            </li>
            <li className="list">
              Javascript
            </li>
            <li className="list">
              Node JS
            </li>
            <li className="list">
              Express
            </li>
            <li className="list">
              MYSQL
            </li>
            <li className="list">
              Mongodb
            </li>
            <li className="list">
              React
            </li>
          </ul>
        </div>
        <div className="skill-row">
          <h3>Previous Experience</h3>
          <p>In the previous chapter of my career, I worked as a project manager in the commercial door industry. The following skills I have acquired through my time in construction are working with Microsoft and Excel. I also worked with sales and have experience with full life cycle projects.</p>
        </div>
      </div>
    </>
  );
}

export default About;

