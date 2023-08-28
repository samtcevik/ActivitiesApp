import { Grid } from 'semantic-ui-react'
import ActivityList from './ActivityList';

import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react';
import Loading from '../../../app/layout/Loading';
import ActivityFilters from './ActivityFilters';



function ActivityDashboard() {
    const { activityStore } = useStore();

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
                <ActivityFilters/>
            </Grid.Column>
        </Grid>
    )
}

export default observer(ActivityDashboard);