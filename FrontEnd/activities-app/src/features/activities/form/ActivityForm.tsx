import { Segment, Form, Button } from 'semantic-ui-react'
import { ChangeEvent, useState } from 'react'
import { useStore } from '../../../app/stores/store';
import {observer} from 'mobx-react-lite'


function ActivityForm() {

    const{activityStore} = useStore();
    const{selectedActivity, closeForm, loading, createActivity, updateActivity} = activityStore;
    const initialState = selectedActivity ?? {
        id: "",
        title: "",
        description: "",
        category: "",
        date: "",
        city: "",
        venue: ""
    }

    const [activity, SetActivity] = useState(initialState)

    const handelOnChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        SetActivity({ ...activity, [name]: value })
    }


    function handleSubmit(){
        activity.id ? updateActivity(activity) : createActivity(activity);
    }


    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input placeholder='Title' name="title" value={activity?.title} onChange={handelOnChange}></Form.Input>
                <Form.TextArea placeholder='Description' name="description" value={activity?.description} onChange={handelOnChange}></Form.TextArea>
                <Form.Input placeholder='Category' name="category" value={activity?.category} onChange={handelOnChange}></Form.Input>
                <Form.Input type='date' placeholder='Date' name="date" value={activity?.date} onChange={handelOnChange}></Form.Input>
                <Form.Input placeholder='City' name="city" value={activity?.city} onChange={handelOnChange}></Form.Input>
                <Form.Input placeholder='Venue' name="venue" value={activity?.venue} onChange={handelOnChange}></Form.Input>
                <Button loading={loading} floated='right' positive type='submit' content='Submit' />
                <Button onClick={() => closeForm()} floated='right' type='button' content='Cancel' />

            </Form>
        </Segment>
    )
}

export default observer(ActivityForm);