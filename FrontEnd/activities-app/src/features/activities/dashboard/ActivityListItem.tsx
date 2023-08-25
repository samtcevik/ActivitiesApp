import { Button, Item, Label } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { Link } from "react-router-dom";
import { useStore } from "../../../app/stores/store";
import { SyntheticEvent, useState } from "react";


interface Props{
    activitiy:Activity;
}
export default function ActivityListItem({activitiy}:Props) {
    const {activityStore} = useStore();
    const [target, setTarget] = useState('');

    const handleDeleteActivity = (e:SyntheticEvent<HTMLButtonElement>, id:string)=>{
        setTarget(e.currentTarget.name);
        activityStore.deleteActivity(id);
    }

    return (
        <div>
            <Item key={activitiy.id}>
                <Item.Content>
                    <Item.Header as="a">{activitiy.title}</Item.Header>
                    <Item.Meta>{activitiy.date}</Item.Meta>
                    <Item.Description>
                        <div>
                            {activitiy.description}
                        </div>
                        
                        <div>
                            {activitiy.city}, {activitiy.venue}
                        </div>
                    </Item.Description>
                    <Item.Extra>
                        <Button as={Link} 
                                to={`/activities/${activitiy.id}`} 
                                floated="right" 
                                content="View" 
                                color="blue"/>

                        <Button name={activitiy.id} 
                                loading={activityStore.loading && target === activitiy.id}
                                onClick={(e) => handleDeleteActivity(e,activitiy?.id)} 
                                floated="right" 
                                content="Delete" 
                                color="red"/>
                        <Label basic content={activitiy.category}></Label>
                    </Item.Extra>
                </Item.Content>
            </Item>
        </div>
    )
}
