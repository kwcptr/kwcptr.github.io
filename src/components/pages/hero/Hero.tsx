import { useEffect } from "react";
import ReactGA from "react-ga4";
import Changelog from "components/globals/changelog/Changelog";
import { PageTitle } from "components/globals/pagetitle/PageTitle";  // Importa tu componente de título global

export const Hero = () => {
    useEffect(() => {
        ReactGA.event({
            category: "pagedirectories",
            action: "load",
            label: "home",
        });
    }, []);

    return (
        <>
            {/* Agrega el componente PageTitle para que establezca el título por defecto */}
            <PageTitle />

            <section className="section__hero">
                <div className="hero__container">
                    <h2 className="container__name">Welcome!</h2>
                    <h3 className="container__name2">
                        Use the Menu or the Search bar to look for info.
                    </h3>
                    <Changelog /> {/* Render the Changelog component here */}
                </div>

                {/* Add a section for the Discord widget */}
                <div className="discord__widget">
                    <iframe
                        title="Discord"
                        src="https://discord.com/widget?id=673917009897062411&theme=dark"
                        width="350"
                        height="400"
                        allowTransparency={true}
                        frameBorder="0"
                        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                    ></iframe>
                </div>
            </section>
        </>
    );
};
