import Calendar from "react-calendar";
import { Header, Menu } from "semantic-ui-react";

function ActivityFilters() {
    return (
        <>
            <Menu vertical size="large" style={{ width: '100%', marginTop:27 }}>
                <Header icon='filter' attached color="teal" content='Filters' />
                <Menu.Item content="All Activities"></Menu.Item>
                <Menu.Item content="I am going"></Menu.Item>
                <Menu.Item content="I am hosting"></Menu.Item>
            </Menu>
            <Calendar/>
        </>


    )
}

export default ActivityFilters;