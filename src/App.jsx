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
      <div id="grid-container">
      <div className="user-card">
        <div className="user-info">
          <img src={profileImg} alt="profile image" />
          <div>
            <p>Report for</p>
            <h2>Jeremy Robson</h2>
        </div>
        </div>
        <div className="user-freq">
          <button id="daily">Daily</button>
          <button id="weekly">Weekly</button>
          <button id="monthly">Monthly</button>
        </div>
       
      </div>

      <div className="card" id="work-card">
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
      
      <div className="card" id="play-card">
        <div className="decoration">
          <img src={play} alt="play" />
          </div>

        <div className="card-info">
          <div className="activity">
            <p className="activity-name"><strong>Play</strong></p>
           <img src={ellipsis} alt="ellipsis" />
            </div>

            <div className="stats">
              <p className="current-time">32hrs</p>
              <p className="previous-time">Last week - 36hrs</p>
            </div>
        </div>
      </div>    

      <div className="card" id="study-card">
        <div className="decoration">
          <img src={study} alt="study" />
          </div>

        <div className="card-info">
          <div className="activity">
            <p className="activity-name"><strong>Study</strong></p>
           <img src={ellipsis} alt="ellipsis" />
            </div>

            <div className="stats">
              <p className="current-time">32hrs</p>
              <p className="previous-time">Last week - 36hrs</p>
            </div>
        </div>
      </div>    

      <div className="card" id="exercise-card">
        <div className="decoration">
          <img src={exercise} alt="exercise" />
          </div>

        <div className="card-info">
          <div className="activity">
            <p className="activity-name"><strong>Exercise</strong></p>
           <img src={ellipsis} alt="ellipsis" />
            </div>

            <div className="stats" >
              <p className="current-time">32hrs</p>
              <p className="previous-time">Last week - 36hrs</p>
            </div>
        </div>
      </div>  

      <div className="card" id="social-card">
        <div className="decoration">
          <img src={social} alt="social" />
          </div>

        <div className="card-info">
          <div className="activity">
            <p className="activity-name"><strong>Social</strong></p>
           <img src={ellipsis} alt="ellipsis" />
            </div>

            <div className="stats">
              <p className="current-time">32hrs</p>
              <p className="previous-time">Last week - 36hrs</p>
            </div>
        </div>
      </div>    

      <div className="card" id="self-care-card">
        <div className="decoration">
          <img src={selfCare} alt="self care" />
          </div>

        <div className="card-info">
          <div className="activity">
            <p className="activity-name"><strong>Self Care</strong></p>
           <img src={ellipsis} alt="ellipsis" />
            </div>

            <div className="stats">
              <p className="current-time">32hrs</p>
              <p className="previous-time">Last week - 36hrs</p>
            </div>
        </div>
      </div>      
      </div>
    </main>
  )
}

export default App
