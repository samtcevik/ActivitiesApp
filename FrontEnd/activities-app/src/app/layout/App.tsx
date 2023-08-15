import { useEffect, useState } from "react";
import axios from 'axios'
import {Container } from "semantic-ui-react";
import { Activity } from "../models/activity";
import NavBar from "./NavBar";
import './style.css'
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:4927/api/activities')
      .then(response => {
        setActivities(response.data);
      });
  }, []);

  return (
    <div className="App">
      <NavBar></NavBar>
      <Container style={{marginTop:"7em"}}>
        <ActivityDashboard activities ={activities}></ActivityDashboard>
      </Container>
    </div>
  );
}

export default App;
