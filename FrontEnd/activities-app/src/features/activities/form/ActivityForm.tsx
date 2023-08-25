import { Segment, Form, Button } from 'semantic-ui-react'
import { ChangeEvent, useEffect, useState } from 'react'
import { useStore } from '../../../app/stores/store';
import {observer} from 'mobx-react-lite'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Activity } from '../../../app/models/activity';
import Loading from '../../../app/layout/Loading';

function ActivityForm() {
    const{activityStore} = useStore();
    const{ loading, createActivity, updateActivity, loadActivity, loadingInitial} = activityStore;
    const{id} =  useParams()
    const navigate = useNavigate()

    const[activity, setActivity] = useState<Activity>({
        id: "",
        title: "",
        description: "",
        category: "",
        date: "",
        city: "",
        venue: ""
    });

    useEffect(()=>{
        if(id){
            loadActivity(id).then(activity=> setActivity(activity!))
        }
    }, [id, loadActivity])

    const handelOnChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setActivity({ ...activity, [name]: value })
    }


    function handleSubmit(){
       
        activity.id ? updateActivity(activity).then(()=> navigate('/activities')) : createActivity(activity).then(()=> navigate('/activities'));
    }

    if(loadingInitial) return <Loading content='Loading Activity...'></Loading>

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
                <Button as={Link} to='/activities'  floated='right' type='button' content='Cancel' />

            </Form>
        </Segment>
    )
}

export default observer(ActivityForm);