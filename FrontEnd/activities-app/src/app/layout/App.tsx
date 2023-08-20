import { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import { Activity } from "../models/activity";
import NavBar from "./NavBar";
import './style.css'
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import agent from "../api/agent";
function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivities] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    agent.Activities.list()
      .then(response => {
        let activities:Activity[] = [];
        response.forEach(item=>{
          item.date = item.date.split("T")[0];
          activities.push(item);
        })
        setActivities(activities);
      });
  }, []);

  const handleSelectedActivity = (id: string) => setSelectedActivities(activities.find(x => x.id === id));

  const handleCancelSelectActivity = () => setSelectedActivities(undefined)

  const handleEditMode = (isEdit: boolean) => setEditMode(isEdit);

  const handleFormOpen = (id?: string) => {
    id ? handleSelectedActivity(id) : handleCancelSelectActivity();
    setEditMode(true);
  };

  const handleFormClose = ()=> setEditMode(false);

  const handleCreateOrEditActivity = (activity: Activity) => {
    activity.id ? setActivities([...activities.filter(x => x.id !== activity.id), activity]) : setActivities([...activities, activity]);
    setEditMode(false);
    setSelectedActivities(activity);
  }

  const handleDeleteActivity = (id: string) => setActivities([...activities.filter(x => x.id !== id)]);

  return (
    <div className="App">
      <NavBar openForm={handleFormOpen}></NavBar>
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashboard
          activities={activities}
          selectedActivity={selectedActivity}
          selectActivity={handleSelectedActivity}
          cancelSelectActivity={handleCancelSelectActivity}
          editMode={editMode}
          handleEditMode={handleEditMode}
          createOrEdit={handleCreateOrEditActivity}
          deleteActivity={handleDeleteActivity}
          openForm={handleFormOpen}
          closeForm={handleFormClose}
        ></ActivityDashboard>
      </Container>
    </div>
  );
}

export default App;
