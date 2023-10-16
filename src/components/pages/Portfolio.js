import '../../App.css';
import daysSheduler from '../images/dayscheduler.png';
import timedQuiz from '../images/timedquiz.png';
import jate from '../images/jate.png';
import travelForecast from '../images/travelforecast.png';
import employeeTracker from '../images/employeetracker.png';
import socialNetwork from '../images/socialnetwork.png';




function Portfolio() {
  return (
    <>
      <div id="Portfolio">
        <h2>My Portfolio</h2>
        <table style={{ margin: 'auto' }}>
          <tbody>
            <tr>
              <td className="container" >
                <p>
                  <a href="https://paulddncn.github.io/Schedule-Organizer/" target="_blank" rel="noopener noreferrer">Schedule Organizer</a>
                </p>
                <img className="portfolio" src={daysSheduler} alt="day scheduler"></img>
                <p>
                  <a href="https://github.com/Paulddncn/Schedule-Organizer" target="_blank" rel="noopener noreferrer">Schedule Organizer GitHub</a>
                </p>
              </td>
              <td className="container">
                <p>
                  <a href="https://paulddncn.github.io/Pauls-Timed-Quiz/" target="_blank" rel="noopener noreferrer">Timed Quiz</a>
                </p>
                <img className="portfolio" src={timedQuiz} alt="timed quiz"></img>
                <p>
                  <a href="https://github.com/Paulddncn/Pauls-Timed-Quiz" target="_blank" rel="noopener noreferrer">Timed Quiz GitHub</a>
                </p>
              </td>
              <td className="container">
                <p>
                  {/*  */}
                  <a href="https://paulddncn.github.io/Travel-Forecast/" target="_blank" rel="noopener noreferrer">Travel Forecast</a>
                </p>
                <img className="portfolio" src={travelForecast} alt="travel forecast"></img>
                <p>
                  <a href="https://github.com/Paulddncn/Travel-Forecast" target="_blank" rel="noopener noreferrer">Travel Forecast GitHub</a>
                </p>
              </td>
            </tr>
            <tr>
              <td className="container">
                <p>
                  <a href="https://github.com/Paulddncn/pauls-employee-tracker" target="_blank" rel="noopener noreferrer">Employee Tracker GitHub</a>
                </p>
                <img className="portfolio" src={employeeTracker} alt="employee tracker"></img>
                <p>
                  <a href="https://drive.google.com/file/d/1MX1uGfo0NvHaVPzlsbfspri6QvmMw_i0/view" target="_blank" rel="noopener noreferrer">Walkthrough Video</a>
                </p>
              </td>
              <td className="container">
                <p>
                  <a href="https://github.com/Paulddncn/Pauls-social-network-API" target="_blank" rel="noopener noreferrer">Social Network Repo</a>
                </p>
                <img className="portfolio" src={socialNetwork} alt="social network"></img>
                <p>
                  <a href="https://drive.google.com/file/d/1ZKpPPkTdQ1-XA_dYPHUajWBnVv1nGkhT/view" target="_blank" rel="noopener noreferrer">Walkthrough Video</a>
                </p>
              </td>
              <td className="container">
                <p>
                  <a href="https://pauls-text-editor.herokuapp.com/" target="_blank" rel="noopener noreferrer">Text Editor</a>
                </p>
                <img className="portfolio" src={jate} alt="jate"></img>
                <p>
                  <a href="https://github.com/Paulddncn/PWA-Text-Editor" target="_blank" rel="noopener noreferrer">Text Editor GitHub</a>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Portfolio;
