import { observer } from 'mobx-react-lite'
import { Segment, Header, Comment, Form, Button } from 'semantic-ui-react'



function ActivityDetailedChat() {
    return (
        <>
            <Segment
                textAlign='center'
                attached='top'
                inverted
                color='teal'
                style={{ border: 'none' }}
            >
                <Header>Chat about this event</Header>
            </Segment>
            <Segment attached >
                <Comment.Group>
                    <Comment>
                        <Comment.Avatar src='/assets/user.png' />
                        <Comment.Content>
                            <Comment.Author as='a' >Samet Çevik</Comment.Author>
                            <Comment.Metadata>
                                <div>Today at 5:00 pm</div>
                            </Comment.Metadata>
                            <Comment.Text >How artistic</Comment.Text>
                            <Comment.Actions>
                                <Comment.Action>Reply</Comment.Action>
                            </Comment.Actions>
                        </Comment.Content>
                    </Comment>
                    <Comment>
                        <Comment.Avatar src='/assets/user.png' />
                        <Comment.Content>
                            <Comment.Author as='a' >Esma Küçük</Comment.Author>
                            <Comment.Metadata>
                                <div>Today at 6:00 pm</div>
                            </Comment.Metadata>
                            <Comment.Text >Dude, this is awsome. Thank so much</Comment.Text>
                            <Comment.Actions>
                                <Comment.Action>Reply</Comment.Action>
                            </Comment.Actions>
                        </Comment.Content>
                    </Comment>
                    <Form reply>
                        <Form.TextArea></Form.TextArea>
                        <Button content="Add reply" labelPosition="left" icon="edit" primary>

                        </Button>
                    </Form>
                </Comment.Group>
            </Segment>
        </>

    )
}

export default observer(ActivityDetailedChat);