import { Card, Button, Image } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store';
import Loading from '../../../app/layout/Loading';
import {observer} from 'mobx-react-lite'


function ActivityDetails() {
    const {activityStore} = useStore();
    const {selectedActivity: activity} = activityStore;

    if(!activity) return<Loading></Loading>;

    return (
        <Card fluid>
            <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
            <Card.Content>
                <Card.Header>{activity.title}</Card.Header>
                <Card.Meta>
                    <span className='date'>{activity.date}</span>
                </Card.Meta>
                <Card.Description>
                    {activity.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths="2">
                    <Button basic color="blue" content="Edit" ></Button>
                    <Button basic color="grey" content="Cancel" ></Button>
                </Button.Group>
            </Card.Content>
        </Card>
    )
}

export default observer(ActivityDetails)