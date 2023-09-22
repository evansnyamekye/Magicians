function Footer() {
  const footerYear = new Date().getFullYear();
  return (
    <footer className="footer p-10 bg-gray-600 text-primary-content footer-center text-gray-400">
      <div>

        <p>
          Copyright &copy;
          {footerYear}
          {' '}
          All right reserve
        </p>
      </div>
    </footer>
  );
}

export default Footer;
