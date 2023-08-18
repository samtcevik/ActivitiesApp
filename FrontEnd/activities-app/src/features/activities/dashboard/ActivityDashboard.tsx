import { Grid } from 'semantic-ui-react'
import { Activity } from "../../../app/models/activity";
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetail';
import ActivityForm from '../form/ActivityForm';

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    editMode: boolean,
    handleEditMode: (isEdit: boolean) => void
    createOrEdit : (activity:Activity)=> void;
}

function ActivityDashboard({ activities, selectedActivity, selectActivity, cancelSelectActivity, editMode, handleEditMode, createOrEdit }: Props) {
    return (
        <Grid>
            <Grid.Column width="10">
                <ActivityList activities={activities} selectActivity={selectActivity} handleEditMode={handleEditMode}></ActivityList>
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity && <ActivityDetails activity={selectedActivity} cancelSelectActivity={cancelSelectActivity} handleEditMode={handleEditMode}></ActivityDetails>}
                {editMode && <ActivityForm handleEditMode={handleEditMode} activity={selectedActivity} createOrEdit = {createOrEdit}></ActivityForm>}
            </Grid.Column>
        </Grid>
    )
}

export default ActivityDashboard;