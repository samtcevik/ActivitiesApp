import {Dimmer, Loader} from 'semantic-ui-react'
import {observer} from 'mobx-react-lite'

interface Props{
    inverted?: boolean;
    content?:string;
}


function Loading({inverted = true, content = "Loading..."}:Props) {
  return (
    <Dimmer active={true} inverted={inverted}>
        <Loader content={content}/>
    </Dimmer>
  )
}

export default observer(Loading)
