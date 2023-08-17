import { Grid } from 'semantic-ui-react'
import { Activity } from "../../../app/models/activity";
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetail';
import ActivityForm from '../form/ActivityForm';

interface Props {
    activities: Activity[];
    selectedActivity : Activity | undefined;
    selectActivity : (id:string) => void;
    cancelSelectActivity : () => void;
    editMode : boolean
}

function ActivityDashboard({activities,selectedActivity, selectActivity , cancelSelectActivity, editMode}:Props) {
    return (
        <Grid>
            <Grid.Column width="10">
                <ActivityList activities={activities} selectActivity={selectActivity}></ActivityList>
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity && <ActivityDetails activity={selectedActivity} cancelSelectActivity = {cancelSelectActivity}></ActivityDetails>}
                {editMode && <ActivityForm cancelSelectActivity ={cancelSelectActivity}></ActivityForm>}
            </Grid.Column>
        </Grid>
    )
}

export default ActivityDashboard;