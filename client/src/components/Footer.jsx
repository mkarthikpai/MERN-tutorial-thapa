import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className="footer-main">
      <p className="footer-text">
        &copy; Karthik Infotech <span>{currentYear}</span>
      </p>
    </section>
  );
};

export default Footer;
