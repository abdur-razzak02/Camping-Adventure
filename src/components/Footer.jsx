import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <div className="bg-base-100">
      <footer className="footer text-base-content py-10 w-11/12 mx-auto grid sm:grid-cols-5 gap-5">
        <aside className="sm:col-span-2 mb-5 sm:mb-0">
          <img src={logo} alt="logo" className="w-28" />
          <h1 className="font-semibold text-xl text-gray-500 font-play">
            Camping Adventure
          </h1>
          <p>Providing reliable camping services since 2017</p>
          <div className="flex gap-2 *:w-5">
            <img src="https://cdn-icons-png.flaticon.com/128/733/733547.png" alt="facebook icon" />
            <img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" alt="instagram icon" />
            <img src="https://cdn-icons-png.flaticon.com/128/5968/5968830.png" alt="twiter icon" />
            <img src="https://cdn-icons-png.flaticon.com/128/3536/3536661.png" alt="telegram icon" />
          </div>
        </aside>
        <nav className="col-span-1 mb-3 sm:mb-0">
          <h6 className="text-base font-semibold text-gray-500 uppercase">Services</h6>
          <a className="link link-hover">Tent Sites</a>
          <a className="link link-hover">Playgrounds</a>
          <a className="link link-hover">Equipment Rentals</a>
          <a className="link link-hover">Cooking Facilities</a>
        </nav>
        <nav className="col-span-1 mb-3 sm:mb-0">
          <h6 className="text-base font-semibold text-gray-500 uppercase">Camp Site</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
        </nav>
        <nav className="col-span-1">
          <h6 className="text-base font-semibold text-gray-500 uppercase">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
