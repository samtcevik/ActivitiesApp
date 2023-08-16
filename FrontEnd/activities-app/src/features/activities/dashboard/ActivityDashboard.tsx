import { Grid } from 'semantic-ui-react'
import { Activity } from "../../../app/models/activity";
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetail';

interface Props {
    activities: Activity[];
}

function ActivityDashboard({activities}:Props) {
    return (
        <Grid>
            <Grid.Column width="10">
                <ActivityList activities={activities}></ActivityList>
            </Grid.Column>
            <Grid.Column width='6'>
                {activities[0] && <ActivityDetails activity={activities[0]}></ActivityDetails>}
            </Grid.Column>
        </Grid>
    )
}

export default ActivityDashboard;