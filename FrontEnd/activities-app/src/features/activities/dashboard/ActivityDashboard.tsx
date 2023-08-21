import { Grid } from 'semantic-ui-react'
import { Activity } from "../../../app/models/activity";
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetail';
import ActivityForm from '../form/ActivityForm';

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id?: string) => void;
    cancelSelectActivity: () => void;
    editMode: boolean,
    handleEditMode: (isEdit: boolean) => void
    createOrEdit : (activity:Activity)=> void;
    deleteActivity : (id?: string) => void;
    openForm: (id?: string) => void;
    closeForm: () => void;
    submitting:boolean;
}

function ActivityDashboard({ activities, selectedActivity, selectActivity, cancelSelectActivity, editMode, handleEditMode, createOrEdit, deleteActivity, openForm, closeForm, submitting }: Props) {
    return (
        <Grid>
            <Grid.Column width="10">
                <ActivityList activities={activities} selectActivity={selectActivity} handleEditMode={handleEditMode} deleteActivity = {deleteActivity} submitting={submitting}></ActivityList>
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity && !editMode &&<ActivityDetails 
                activity={selectedActivity} 
                cancelSelectActivity={cancelSelectActivity} 
                openForm={openForm}
                ></ActivityDetails>}

                {editMode && <ActivityForm 
                handleEditMode={handleEditMode} 
                activity={selectedActivity} 
                createOrEdit = {createOrEdit}
                closeForm={closeForm} 
                submitting={submitting}></ActivityForm>}
            </Grid.Column>
        </Grid>
    )
}

export default ActivityDashboard;