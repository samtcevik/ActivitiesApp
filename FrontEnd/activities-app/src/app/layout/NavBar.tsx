import { Menu, Container, Button } from 'semantic-ui-react'
import { useStore } from '../stores/store'


function NavBar() {
    const {activityStore} = useStore();
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src='/assets/logo.png' alt="logo" style={{marginRight:"10px", backgroundColor:"#0000EE"}}></img>
                    Activities Dashboard
                </Menu.Item>
                <Menu.Item name='Activities'></Menu.Item>
                <Menu.Item>
                    <Button onClick={()=> activityStore.openForm()} positive content="Create Activity"></Button>
                </Menu.Item>
            </Container>
        </Menu>
    )
}

export default NavBar