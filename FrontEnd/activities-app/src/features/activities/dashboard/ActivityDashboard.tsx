import { Grid } from 'semantic-ui-react'
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetail';
import ActivityForm from '../form/ActivityForm';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react';
import Loading from '../../../app/layout/Loading';



function ActivityDashboard() {

    const { activityStore } = useStore();
    const { selectedActivity, editMode } = activityStore;



    useEffect(() => {
      activityStore.loadActivities();
    }, [activityStore]);
  
    
  
    if (activityStore.loadingInitial) return <Loading content="Loading..."></Loading>


    return (
        <Grid>
            <Grid.Column width="10">
                <ActivityList ></ActivityList>
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity && !editMode && <ActivityDetails ></ActivityDetails>}
                {editMode && <ActivityForm></ActivityForm>}
            </Grid.Column>
        </Grid>
    )
}

export default observer(ActivityDashboard);