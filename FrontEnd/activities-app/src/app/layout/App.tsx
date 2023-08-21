import { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import { Activity } from "../models/activity";
import NavBar from "./NavBar";
import './style.css'
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import agent from "../api/agent";
import Loading from "./Loading";
function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivities] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    agent.Activities.list()
      .then(response => {
        let activities: Activity[] = [];
        response.forEach(item => {
          item.date = item.date.split("T")[0];
          activities.push(item);
        })
        setActivities(activities);
        setLoading(false);
      });
  }, []);

  const handleSelectedActivity = (id?: string) => setSelectedActivities(activities.find(x => x.id === id));

  const handleCancelSelectActivity = () => setSelectedActivities(undefined)

  const handleEditMode = (isEdit: boolean) => setEditMode(isEdit);

  const handleFormOpen = (id?: string) => {
    id ? handleSelectedActivity(id) : handleCancelSelectActivity();
    setEditMode(true);
  };

  const handleFormClose = () => setEditMode(false);

  const handleCreateOrEditActivity = (activity: Activity) => {
    setSubmitting(true);
    if (activity.id) {
      agent.Activities.update(activity).then(() => {
        setActivities([...activities.filter(x => x.id !== activity.id), activity]);
        setSelectedActivities(activity);
        setEditMode(false);
        setSubmitting(false);
      }).catch((e) => {
        console.log(e);
      });
    }
    else {
      activity.id = "0";
      agent.Activities.create(activity).then(() => {
        setActivities([...activities, activity]);
        setSelectedActivities(activity);
        setEditMode(false);
        setSubmitting(false);
      }).finally(() => {
        setSubmitting(false);
        setEditMode(false);
      });
    }
  }

  const handleDeleteActivity = (id?: string) => {
    setSubmitting(true);
    agent.Activities.delete(id).then(() => {
      setActivities([...activities.filter(x => x.id !== id)]);
      setSubmitting(false);

    })

  };

  if (loading) return <Loading content="Loading..."></Loading>

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
          submitting={submitting}
        ></ActivityDashboard>
      </Container>
    </div>
  );
}

export default App;
