import { servicesData } from "../data";
import Tittle from "./Tittle";

const Services = () => {
  return (
    <div>
      <section className="section services" id="services">
        <Tittle tittle="our" subtittle="services" />
        <div className="section-center services-center">
          {servicesData.map((list) => {
            return (
              <article className="service">
                <span className="service-icon">
                  <i className={list.icon}></i>
                </span>
                <div className="service-info">
                  <h4 className="service-title">{list.tittle}</h4>
                  <p className="service-text">{list.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};
export default Services;
