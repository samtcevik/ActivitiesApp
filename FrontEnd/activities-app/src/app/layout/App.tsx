import { useEffect, useState } from "react";
import axios from 'axios'
import { Container } from "semantic-ui-react";
import { Activity } from "../models/activity";
import NavBar from "./NavBar";
import './style.css'
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivities] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:4927/api/activities')
      .then(response => {
        setActivities(response.data);
      });
  }, []);

  const handleSelectedActivity = (id: string) => {
    setSelectedActivities(activities.find(x => x.id === id));
  }

  const handleCancelSelectActivity = () => {
    setSelectedActivities(undefined)
  }

  const handleEditMode = (isEdit:boolean)=>{
      setEditMode(isEdit);
  }
  return (
    <div className="App">
      <NavBar setEditMode = {handleEditMode}></NavBar>
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashboard
          activities={activities}
          selectedActivity={selectedActivity}
          selectActivity={handleSelectedActivity}
          cancelSelectActivity={handleCancelSelectActivity}
          editMode = {editMode}></ActivityDashboard>
      </Container>
    </div>
  );
}

export default App;
