import { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import { Activity } from "../models/activity";
import NavBar from "./NavBar";
import './style.css'
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import agent from "../api/agent";
import Loading from "./Loading";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";

function App() {
  const { activityStore } = useStore();

  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivities] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

 
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

  if (activityStore.loadingInitial) return <Loading content="Loading..."></Loading>

  return (
    <div className="App">
      <NavBar ></NavBar>
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashboard
          activities={activityStore.activities}
          createOrEdit={handleCreateOrEditActivity}
          deleteActivity={handleDeleteActivity}
          submitting={submitting}
        ></ActivityDashboard>
      </Container>
    </div>
  );
}

export default observer(App);
