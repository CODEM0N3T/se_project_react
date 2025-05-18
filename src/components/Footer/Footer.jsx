import "./Footer.css";
function Footer() {
  const currentDate = new Date().getFullYear();
  return (
    <div className="footer__content">
      <p className="footer__caption">Developed by Monet Howson</p>
      <p className="footer__year">{currentDate}</p>
    </div>
  );
}
export default Footer;
