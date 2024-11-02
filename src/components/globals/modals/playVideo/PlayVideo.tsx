// Reproductor media

interface Video {
    url: string;
    title: string;
}

export const PlayVideo = ({url, title}:Video) =>{

    return(
        <div className="modal__container playModal">
            <iframe 
                loading="lazy" 
                width="560" 
                height="315" 
                src={url} 
                title={title} 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen/>
        </div>
    );
}