import { useEffect, useState } from "react";
import axios from 'axios'
import { Header, List } from "semantic-ui-react";

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(()=>{
      axios.get('http://localhost:4927/api/activities')
      .then(response => {
        setActivities(response.data);
      });    
  }, []);

  return (
    <div className="App">
      <Header as="h2" icon="users" content="Activities"/>
      <List>
        {activities.map((item : any)=>(
          <List.Item key={item.id}>{item.title}</List.Item>
        ))}
      </List>
    </div>
  );
}

export default App;
