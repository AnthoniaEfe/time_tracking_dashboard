
import "./styles/styles.scss"
import ellipsis from "./assets/icon-ellipsis.svg";
import profileImg from "./assets/image-jeremy.png";
import data from "../data.json";
import { useState } from "react";

function App() {
const [timeFrame, setTimeFrame]= useState("weekly");


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
          <button id="daily" onClick={()=>setTimeFrame("daily")}>Daily</button>
          <button id="weekly" onClick={()=>setTimeFrame("weekly")}>Weekly</button>
          <button id="monthly" onClick={()=>setTimeFrame("monthly")}>Monthly</button>
        </div>
      </div>

      {data.map((activity, index) => (
      <div key={index} className="card" id={activity.title}>
        <div className="decoration">
   
          </div>

        <div className="card-info">
          <div className="activity">
            <h3 className="activity-name">{activity.title}</h3>
           <img src={ellipsis} alt="ellipsis" />
            </div>

            <div className="stats">
              <p className="current-time">{activity.timeframes[timeFrame].current}</p>
              <p className="previous-time">{timeFrame === "daily" ? "Yesterday" :
               timeFrame === "weekly" ? "Last Week" : 
               "Last Month" } - {activity.timeframes[timeFrame].previous}</p>
            </div>
        </div>
      </div> ))}   
    
      </div>
    </main>
  )
}

export default App
