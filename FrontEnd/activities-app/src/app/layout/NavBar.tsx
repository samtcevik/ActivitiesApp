import { Menu, Container, Button } from 'semantic-ui-react'

interface Props{
    openForm: (id?: string) => void;
}
function NavBar({openForm}:Props) {
    
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src='/assets/logo.png' alt="logo" style={{marginRight:"10px", backgroundColor:"#0000EE;"}}></img>
                    Activities Dashboard
                </Menu.Item>
                <Menu.Item name='Activities'></Menu.Item>
                <Menu.Item>
                    <Button onClick={()=>openForm()} positive content="Create Activity"></Button>
                </Menu.Item>
            </Container>
        </Menu>
    )
}

export default NavBar