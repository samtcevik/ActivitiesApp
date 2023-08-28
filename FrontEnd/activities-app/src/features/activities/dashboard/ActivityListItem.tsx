import { Button, Icon, Item, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { Link } from "react-router-dom";




interface Props {
    activitiy: Activity;
}
export default function ActivityListItem({ activitiy }: Props) {
    

    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size="tiny" circular src="/assets/user.png" />
                        <Item.Content>
                            <Item.Header as={Link} to={`/activities/${activitiy.id}`}>
                                {activitiy.title},
                            </Item.Header>
                            <Item.Description>
                                Hosted By Samet
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name="clock" /> {activitiy.date}
                    <Icon name="marker" /> {activitiy.venue}
                </span>
            </Segment>
            <Segment secondary>
                Attendees go here
            </Segment>
            <Segment clearing>
                <span>{activitiy.description}</span>
                <Button as={Link} to={`/activities/${activitiy.id}`} color="teal" floated="right" content="View">

                </Button>
            </Segment>

        </Segment.Group>

    )
}
