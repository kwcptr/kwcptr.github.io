import { Link } from 'react-router-dom';

export const News = () => {
  return (
    <section className="section__news">
      <br /><br /><br /><br />
      <h2 className="news__title">Articles</h2>
      <div className="news__background">
        <div className="news__container">
          <div className="news__article">
            <Link to="/articles/class-update-orc-shamans"><span className='news__articlename'>Class Update: Orc Shamans</span></Link>
            <span className="news__date">March 12, 2025</span>
          </div>
          <div className="news__article">
            <Link to="/articles/class-update-elders"><span className='news__articlename'>Class Update: Elders</span></Link>
            <span className="news__date">March 11, 2025</span>
          </div>
          <div className="news__article">
            <Link to="/articles/class-update-elemental-master"><span className='news__articlename'>Class Update: Elemental Master</span></Link>
            <span className="news__date">November 16, 2024</span>
          </div>
          <div className="news__article">
            <Link to="/articles/new-class-varkas"><span className='news__articlename'>New Class: Varkas</span></Link>
            <span className="news__date">November 4, 2024</span>
          </div>
          <div className="news__article">
            <Link to="/articles/class-update-cardinal"><span className='news__articlename'>Class Update: Cardinal</span></Link>
            <span className="news__date">November 3, 2024</span>
          </div>
          <div className="news__article">
            <Link to="/articles/new-race-high-elves"><span className='news__articlename'>New Race: High Elves</span></Link>
            <span className="news__date">October 25, 2023</span>
          </div>
          <div className="news__article">
            <Link to="/articles/class-update-mystic-muse"><span className='news__articlename'>Class Update: Mystic Muse</span></Link>
            <span className="news__date">September 20, 2023</span>
          </div>
          <div className="news__article">
            <Link to="/articles/class-update-duelist"><span className='news__articlename'>Class Update: Duelist</span></Link>
            <span className="news__date">July 27, 2023</span>
          </div>
          <div className="news__article">
            <Link to="/articles/class-update-archers"><span className='news__articlename'>Class Update: Archers</span></Link>
            <span className="news__date">June 21, 2023</span>
          </div>
          {/* Agrega más enlaces según sea necesario */}
        </div>
      </div>
    </section>

  );
};