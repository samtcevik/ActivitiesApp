import { Header } from 'semantic-ui-react';
import { useStore } from "../../../app/stores/store";
import { observer } from 'mobx-react-lite';
import ActivityListItem from './ActivityListItem';
import { Fragment } from 'react';


function ActivityList() {
    const { activityStore } = useStore();

    const renderedGroupedActivities = activityStore.groupedActivities.map(([group, activities]) => {
        return <Fragment key={group}>
            <Header sub color='teal'>
                {group}
            </Header>

            {activities?.map(activity => (
                <ActivityListItem key={activity.id} activitiy={activity} />
            ))}
 
        </Fragment>
    })

    return (
        <>
            {renderedGroupedActivities}
        </>

    )
}

export default observer(ActivityList);