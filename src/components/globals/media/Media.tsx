/* Imgs */
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    import { faDiscord } from '@fortawesome/free-brands-svg-icons'
    import { faYoutube } from '@fortawesome/free-brands-svg-icons'
    import { faTwitch } from '@fortawesome/free-brands-svg-icons'
/* Routes */
    import { Link } from "react-router-dom";


export const Media = () => {
    
    return(
        <nav className="media">
            <ol>
                <li><Link to="https://discord.com/invite/RKMz5gC" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faDiscord} /></Link></li>
                <li><Link to="https://www.youtube.com/@kwcptr" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faYoutube} /></Link></li>
                <li><Link to="https://www.twitch.tv/kwcptr" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faTwitch} /></Link></li>
            </ol>
        </nav> 
    )
}

