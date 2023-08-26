import { Button, Icon, Item, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { Link } from "react-router-dom";
import { useStore } from "../../../app/stores/store";
import { SyntheticEvent, useState } from "react";



interface Props {
    activitiy: Activity;
}
export default function ActivityListItem({ activitiy }: Props) {
    const { activityStore } = useStore();
    const [target, setTarget] = useState('');

    const handleDeleteActivity = (e: SyntheticEvent<HTMLButtonElement>, id: string) => {
        setTarget(e.currentTarget.name);
        activityStore.deleteActivity(id);
    }

    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item.Image size="tiny" circular src="/assets/user.png/">
                        <Item.Content>
                            <Item.Header as={Link} to={`/activities/${activitiy.id}`}>{activitiy.title}</Item.Header>
                        </Item.Content>
                        <Item.Description>
                            Hosted By Samet
                        </Item.Description>
                    </Item.Image>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name="clock"/> {activitiy.date}
                    <Icon name="marker"/> {activitiy.venue}
                </span>
            </Segment>
            <Segment secondary>
                Attendees go here
            </Segment>
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
                            color="blue" />

                        <Button name={activitiy.id}
                            loading={activityStore.loading && target === activitiy.id}
                            onClick={(e) => handleDeleteActivity(e, activitiy?.id)}
                            floated="right"
                            content="Delete"
                            color="red" />
                        <Label basic content={activitiy.category}></Label>
                    </Item.Extra>
                </Item.Content>
            </Item>

        </Segment.Group>

    )
}
