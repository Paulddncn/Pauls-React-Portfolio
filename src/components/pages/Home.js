// import logo from './logo.svg';
import '../../App.css';
import profilePic from '../images/Profile.jpg';

function Home() {
  return (
    <>
      <div id="About">
        <img className="profile-pic" src={profilePic} alt="Paul Duncan" />
        <h2>Hello.</h2>
        <p className="intro">Passionate Full Stack Developer | University of Denver Bootcamp Graduate | Seeking innovative projects and collaborations. Let's connect!</p>
      </div>
      <hr />
      <div id="skills">
        <h2>My Skills.</h2>
        <div>
          <h3>Technical Skills</h3>
          <p> HTML, CSS, Javascript, Node.js, Express.js, MySQL, NoSQL, and React.</p>
          <h3>Professional Skills</h3>
          <p>Development, Debugging, Agile, Project Management, Problem Solving, Sales, Leadership.</p>
      
        </div>
      </div>
    </>
  );
}

export default Home;

