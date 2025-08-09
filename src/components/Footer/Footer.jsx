import "./Footer.css";
function Footer() {
  const currentDate = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="footer__caption">Developed by Monet Howson</p>
      <p className="footer__year">{currentDate}</p>
    </footer>
  );
}
export default Footer;
