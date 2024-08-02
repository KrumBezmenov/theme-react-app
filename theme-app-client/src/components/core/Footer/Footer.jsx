function Footer() {
  return (
    <>
      <footer className="footer static bottom-0 bg-yellow-400 text-center text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            TravelGuide Corp.
          </p>
        </aside>
      </footer>
    </>
  );
}

export default Footer;
