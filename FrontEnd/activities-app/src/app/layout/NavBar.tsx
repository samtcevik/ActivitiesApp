import { Menu, Container, Button } from 'semantic-ui-react'

interface Props{
    setEditMode : (isEdit:boolean)=> void
}
function NavBar({setEditMode}:Props) {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src='/assets/logo.png' alt="logo" style={{marginRight:"10px", backgroundColor:"#0000EE;"}}></img>
                    Activities Dashboard
                </Menu.Item>
                <Menu.Item name='Activities'></Menu.Item>
                <Menu.Item>
                    <Button onClick={()=>setEditMode(true)} positive content="Create Activity"></Button>
                </Menu.Item>
            </Container>
        </Menu>
    )
}

export default NavBar