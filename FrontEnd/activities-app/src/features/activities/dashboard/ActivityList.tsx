import { Activity } from "../../../app/models/activity";
import {Segment, Item, Button, Label} from 'semantic-ui-react'
import { useStore } from "../../../app/stores/store";
import {observer} from 'mobx-react-lite'

interface Props{
    activities?:Activity[],
    deleteActivity : (id?: string) => void;
    submitting:boolean;

}

function ActivityList({activities, deleteActivity, submitting}:Props){
    const {activityStore} = useStore();

    const handleOnclick = (id?:string)=>{
        activityStore.editMode = false;
        activityStore.selectActivity(id);
    }
    
    return(
        <Segment>
            <Item.Group divided>
                {activities?.map(item=>(
                    <Item key={item.id}>
                        <Item.Content>
                            <Item.Header as="a">{item.title}</Item.Header>
                            <Item.Meta>{item.date}</Item.Meta>
                            <Item.Description>
                                 <div>
                                    {item.description}
                                 </div>
                                 <div>
                                    {item.city}, {item.venue} 
                                 </div>
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick = {()=>handleOnclick(item?.id)} floated="right" content="View" color="blue"></Button>
                                <Button loading={submitting} onClick = {()=>deleteActivity(item?.id)} floated="right" content="Delete" color="red"></Button>
                                <Label basic content={item.category}></Label>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}

export default observer(ActivityList);