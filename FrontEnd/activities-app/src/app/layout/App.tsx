import { useEffect} from "react";
import { Container } from "semantic-ui-react";
import NavBar from "./NavBar";
import './style.css'
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import Loading from "./Loading";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";

function App() {
  const { activityStore } = useStore();


  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  

  if (activityStore.loadingInitial) return <Loading content="Loading..."></Loading>

  return (
    <div className="App">
      <NavBar ></NavBar>
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashboard
        ></ActivityDashboard>
      </Container>
    </div>
  );
}

export default observer(App);
