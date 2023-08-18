import { Activity } from "../../../app/models/activity";
import {Segment, Item, Button, Label} from 'semantic-ui-react'
interface Props{
    activities:Activity[],
    selectActivity : (id:string) => void;
    handleEditMode : (isEdit : boolean) => void;
}



function ActivityList({activities, selectActivity, handleEditMode}:Props){
    const handleOnclick = (id:string)=>{
        selectActivity(id);
        handleEditMode(false);
    }
    return(
        <Segment>
            <Item.Group divided>
                {activities.map(item=>(
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
                                <Button onClick = {()=>handleOnclick(item.id)} floated="right" content="View" color="blue"></Button>
                                <Label basic content={item.category}></Label>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}

export default ActivityList;