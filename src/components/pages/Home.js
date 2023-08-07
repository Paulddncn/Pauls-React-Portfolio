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
        <div className="skill-row">
          <h3>Web Development Skills</h3>
          <p> HTML5, CSS, Javascript, Node.js, Express.js, MYSQL, MongodB, and React.</p>
      
        </div>
      </div>
    </>
  );
}

export default Home;

