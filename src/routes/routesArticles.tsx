/* Rutas */
  import { Route } from "react-router-dom";

/* Templates */
  import {  
            Article1, Article2, Article3, Article4
  } from "templates";

/* Components */
  import {New} from 'components'

const routes = 
  <>

    <Route path="/articles/class-update-mystic-muse" element={<New><Article1/></New>}/>
    <Route path="/articles/class-update-duelist" element={<New><Article2/></New>}/>
    <Route path="/articles/class-update-archers" element={<New><Article3/></New>}/>
    <Route path="/articles/new-race-high-elves" element={<New><Article4/></New>}/>

  </>

export default routes