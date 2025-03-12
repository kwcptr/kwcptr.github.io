/* Rutas */
  import { Route } from "react-router-dom";

/* Templates */
  import {  
            Article1, Article2, Article3, Article4, Article5, Article6, Article7, Article8, Article9,
  } from "templates";

/* Components */
  import {New} from 'components'

const routes = 
  <>

    <Route path="/articles/class-update-mystic-muse" element={<New><Article1/></New>}/>
    <Route path="/articles/class-update-duelist" element={<New><Article2/></New>}/>
    <Route path="/articles/class-update-archers" element={<New><Article3/></New>}/>
    <Route path="/articles/new-race-high-elves" element={<New><Article4/></New>}/>
    <Route path="/articles/class-update-cardinal" element={<New><Article5/></New>}/>
    <Route path="/articles/new-class-varkas" element={<New><Article6/></New>}/>
    <Route path="/articles/class-update-elemental-master" element={<New><Article7/></New>}/>
    <Route path="/dolls" element={<New><Article8/></New>}/>
    <Route path="/articles/class-update-elders" element={<New><Article9/></New>}/>

  </>

export default routes