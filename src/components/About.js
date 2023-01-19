import about from "../images/about.jpeg";
import Tittle from "./Tittle";
const About = () => {
  return (
    <div>
      <section className="section" id="about">
        <Tittle tittle="about" subtittle="us" />

        <div className="section-center about-center">
          <div className="about-img">
            <img src={about} className="about-photo" alt="awesome beach" />
          </div>
          <article className="about-info">
            <h3>explore the difference</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur quisquam harum nam cumque temporibus explicabo dolorum
              sapiente odio unde dolor?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur quisquam harum nam cumque temporibus explicabo dolorum
              sapiente odio unde dolor?
            </p>
            <a href="#services" className="btn">
              read more
            </a>
          </article>
        </div>
      </section>
    </div>
  );
};
export default About;
