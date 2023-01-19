import { tourData } from "../data";
import Tittle from "./Tittle";

const Tours = () => {
  return (
    <div>
      <section className="section" id="tours">
        <Tittle tittle="featured" subtittle="tours" />
        <div className="section-center featured-center">
          {tourData.map((list) => {
            const { id, image, date, tittle, text, country, days, price } =
              list;

            return (
              <article className="tour-card" key={id}>
                <div className="tour-img-container">
                  <img src={image} className="tour-img" alt={image} />
                  <p className="tour-date">{date}</p>
                </div>
                <div className="tour-info">
                  <div className="tour-title">
                    <h4>{tittle}</h4>
                  </div>
                  <p>{text}</p>
                  <div className="tour-footer">
                    <p>
                      <span>
                        <i className="fas fa-map"></i>
                      </span>
                      {country}
                    </p>
                    <p>{days}</p>
                    <p>{price}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};
export default Tours;
