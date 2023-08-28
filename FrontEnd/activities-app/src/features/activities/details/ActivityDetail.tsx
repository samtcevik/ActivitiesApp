import { Grid } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store';
import Loading from '../../../app/layout/Loading';
import { observer } from 'mobx-react-lite'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import ActivityDetailedHeader from './ActivityDetailedHeader';
import ActivityDetailedInfo from './ActivityDetailedInfo';
import ActivityDetailedChat from './ActivityDetailedChat';
import ActivityDetailedSideBar from './ActivityDetailedSideBar';


function ActivityDetails() {
    const { activityStore } = useStore();
    const { selectedActivity: activity } = activityStore;
    const { id } = useParams();


    useEffect(() => {
        if (id) activityStore.loadActivity(id);
    }, [id, activityStore.loadActivity, activityStore])


    if (activityStore.loadingInitial || !activity) return <Loading></Loading>;

    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityDetailedHeader activity={activity}/>
                <ActivityDetailedInfo activity={activity}/>
                <ActivityDetailedChat/>
            </Grid.Column>
            <Grid.Column width={6}>
                <ActivityDetailedSideBar/>
            </Grid.Column>
        </Grid>
    )
}

export default observer(ActivityDetails)