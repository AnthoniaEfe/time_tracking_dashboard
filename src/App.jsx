import "./styles/styles.scss"
import ellipsis from "./assets/icon-ellipsis.svg";
import profileImg from "./assets/image-jeremy.png";
import exercise from "./assets/icon-exercise.svg";
import play from "./assets/icon-play.svg";
import selfCare from "./assets/icon-self-care.svg";
import social from "./assets/icon-social.svg";
import study from "./assets/icon-study.svg";
import work from "./assets/icon-work.svg";

function App() {


  return (
    <main>
      <div className="user-card">
        <div className="user-info">
          <img src={profileImg} alt="profile image" />
          <div>
            <p>Report for</p>
            <h1>Jeremy Robson</h1>
        </div>

        <div className="frequency">
          <button id="daily">Daily</button>
          <button id="weekly">Weekly</button>
          <button id="monthly">Monthly</button>
        </div>
        </div>
      </div>

      <div className="card">
        <div className="decoration">
          <img src={work} alt="work" />
          </div>

        <div className="card-info">
          <div className="activity">
            <p className="activity-name"><strong>Work</strong></p>
           <img src={ellipsis} alt="ellipsis" />
            </div>

            <div className="stats">
              <p className="current-time">32hrs</p>
              <p className="previous-time">Last week - 36hrs</p>
            </div>
        </div>
      </div>    
      
      <div className="card">
        <div className="decoration">
          <img src={play} alt="work" />
          </div>

        <div className="card-info">
          <div className="activity">
            <p className="activity-name"><strong>Work</strong></p>
           <img src={ellipsis} alt="ellipsis" />
            </div>

            <div className="stats">
              <p className="current-time">32hrs</p>
              <p className="previous-time">Last week - 36hrs</p>
            </div>
        </div>
      </div>    
      <div className="card">
        <div className="decoration">
          <img src={study} alt="work" />
          </div>

        <div className="card-info">
          <div className="activity">
            <p className="activity-name"><strong>Work</strong></p>
           <img src={ellipsis} alt="ellipsis" />
            </div>

            <div className="stats">
              <p className="current-time">32hrs</p>
              <p className="previous-time">Last week - 36hrs</p>
            </div>
        </div>
      </div>    
      <div className="card">
        <div className="decoration">
          <img src={exercise} alt="work" />
          </div>

        <div className="card-info">
          <div className="activity">
            <p className="activity-name"><strong>Work</strong></p>
           <img src={ellipsis} alt="ellipsis" />
            </div>

            <div className="stats">
              <p className="current-time">32hrs</p>
              <p className="previous-time">Last week - 36hrs</p>
            </div>
        </div>
      </div>    
      <div className="card">
        <div className="decoration">
          <img src={social} alt="work" />
          </div>

        <div className="card-info">
          <div className="activity">
            <p className="activity-name"><strong>Work</strong></p>
           <img src={ellipsis} alt="ellipsis" />
            </div>

            <div className="stats">
              <p className="current-time">32hrs</p>
              <p className="previous-time">Last week - 36hrs</p>
            </div>
        </div>
      </div>    
      <div className="card">
        <div className="decoration">
          <img src={selfCare} alt="work" />
          </div>

        <div className="card-info">
          <div className="activity">
            <p className="activity-name"><strong>Work</strong></p>
           <img src={ellipsis} alt="ellipsis" />
            </div>

            <div className="stats">
              <p className="current-time">32hrs</p>
              <p className="previous-time">Last week - 36hrs</p>
            </div>
        </div>
      </div>      

    </main>
  )
}

export default App
