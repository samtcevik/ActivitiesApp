import { Container } from "semantic-ui-react";
import NavBar from "./NavBar";
import './style.css'
import { observer } from "mobx-react-lite";
import {Outlet} from 'react-router-dom'

function App() {


  return (
    <div className="App">
      <NavBar ></NavBar>
      <Container style={{ marginTop: "7em" }}>
        <Outlet></Outlet>
      </Container>
    </div>
  );
}

export default observer(App);
