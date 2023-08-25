import {Segment, Item} from 'semantic-ui-react';
import { useStore } from "../../../app/stores/store";
import {observer} from 'mobx-react-lite';
import ActivityListItem from './ActivityListItem';


function ActivityList(){
    const {activityStore} = useStore();
    
    return(
        <Segment>
            <Item.Group divided>
                {activityStore.activitiesByDate?.map(activity=>(
                    <ActivityListItem key={activity.id} activitiy={activity}/>
                ))}
            </Item.Group>
        </Segment>
    )
}

export default observer(ActivityList);