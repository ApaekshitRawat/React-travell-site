import { pageLinks, socialLinks } from "../data";

const Footer = () => {
  return (
    <div>
      <footer className="section footer">
        <ul className="footer-links">
          {pageLinks.map((list) => {
            const { id, href, text } = list;
            return (
              <li key={id}>
                <a href={href} className="footer-link">
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="footer-icons">
          {socialLinks.map((list) => {
            const { href, id, icon } = list;

            return (
              <li key={id}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-icon"
                >
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date">{new Date().getFullYear()}</span> all rights reserved
        </p>
      </footer>
    </div>
  );
};
export default Footer;
