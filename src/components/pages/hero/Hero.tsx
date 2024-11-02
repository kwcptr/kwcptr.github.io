/* Img */
// import logo from './img/logo.png'
/* Components */
// import {Search} from 'components'
import { useEffect } from "react";
import ReactGA from "react-ga4";
import videoBg from "./img/videoBg.mp4"
import Changelog from "components/globals/changelog/Changelog";
export const Hero = () => {

    useEffect(() => {
        ReactGA.event({
            category: "pagedirectories",
            action: "load",
            label: "home",
        });
        }, []);

    return (
        <section className="section__hero">
            <div className="hero__container">
                <h2 className="container__name">Welcome!</h2>
                <h3 className="container__name2">Use the Menu or the Search bar to look for info.</h3>
                <Changelog /> {/* Render the Changelog component here */}
            </div>
        </section>
    )
}