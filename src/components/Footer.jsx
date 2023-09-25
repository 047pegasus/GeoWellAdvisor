import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="w-full bg-black p-10 pr-10 pl-5">
      <div className="flex flex-col md:flex-row md:items-center justify-center gap-y-6 gap-x-12 bg-black text-white text-center md:justify-between">
        <h1 className="mb-2 text-lg font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-3xl">
          <span className="span-app text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">GeoWellAdvisor</span> AI
        </h1>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Link to="/about" className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500">
              <Typography
                as="a"
                href="#"
                color="white"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                About Us
              </Typography>
            </Link>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="white"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="white"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="white"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Developers
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-white" />
      <Typography color="white" className="text-center font-normal">
        &copy; 2023 GeoWellAdvisor
      </Typography>
    </footer>
  );
}

export default Footer;
