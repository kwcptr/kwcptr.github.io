/* React */
  import React from "react";
  import ReactDOM from "react-dom/client";

/* Estilos */
  import "../src/styles/imports.scss";
  import "./index.css";
//  import 'rsuite/dist/rsuite.min.css';

/* Rutas */
  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
  import routesItems from './routes/routesItems'
  import routesArticles from './routes/routesArticles'

/* Components */
  import {Nav, Media, Hero, Items, ClassGuides, /* Videos, */ NotFound, New, News} from 'components'

/* WebVitals */
  import reportWebVitals from "./reportWebVitals";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Nav/>
      <Media/>
      <Routes>
          <Route path="/" element={<Hero/>}/>
          <Route path="/home" element={<Hero/>}/>
          <Route path="/" element={<New/>}/>
          <Route path="/articles" element={<News/>}/>
          <Route path="/items" element={<Items/>}/>
          <Route path="/class_guides" element={<ClassGuides/>}/>
          {/* <Route path="/videos" element={<Videos/>}/> */}
          <Route path="*" element={<NotFound/>} />
          
          {routesItems}
          {routesArticles}
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
