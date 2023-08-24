import {createBrowserRouter, RouteObject} from 'react-router-dom';
import App from '../layout/App';
import HomePage from '../../features/home/HomePage';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import ActivityForm from '../../features/activities/form/ActivityForm';
import ActivityDetail from '../../features/activities/details/ActivityDetail';

export const routes : RouteObject[] = [
    {
        path: '/',
        element:<App></App>,
        children:[
            {path:'', element:<HomePage></HomePage>},
            {path:'activities', element:<ActivityDashboard></ActivityDashboard>},
            {path:'activities/:id', element:<ActivityDetail></ActivityDetail>},
            {path:'createActivity', element:<ActivityForm></ActivityForm>},
        ]
    }
]

export const router = createBrowserRouter(routes);