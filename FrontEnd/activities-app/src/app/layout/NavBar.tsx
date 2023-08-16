import { Menu, Container, Button } from 'semantic-ui-react'

function NavBar() {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src='/assets/logo.png' alt="logo" style={{marginRight:"10px"}}></img>
                    Activities Dashboard
                </Menu.Item>
                <Menu.Item name='Activities'></Menu.Item>
                <Menu.Item>
                    <Button positive content="Create Activity"></Button>
                </Menu.Item>
            </Container>
        </Menu>
    )
}

export default NavBar