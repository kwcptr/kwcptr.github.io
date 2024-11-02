import {Modals, PlayVideo} from 'components'
import {useModals} from '../../../hooks/useModals'

export const Videos = () => {
    const [isActiveVideo, openVideo, closeVideo] = useModals();

    const styledBtn = {
        border: '0.1em solid red',
        cursor: 'pointer'    
    }

    return(
        <section className="section__videos">
            <h2>Videos</h2>

            <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/4aDKCQdyWUU" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>
            </iframe>
            <button style={styledBtn} onClick={() => openVideo}>Open local video</button>

            <Modals active={isActiveVideo} close={closeVideo}>
                <PlayVideo
                    url="https://www.youtube.com/embed/4aDKCQdyWUU"
                    title="Video" />
            </Modals>  
        </section>
    )
}


