import { Activity } from "../../../app/models/activity";
import {Segment, Item, Button, Label} from 'semantic-ui-react'
interface Props{
    activities:Activity[]
}

function ActivityList({activities}:Props){
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
                                <Button floated="right" content="View" color="blue"></Button>
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