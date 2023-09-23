import img1 from '../assets/about_img1.png';
import img2 from '../assets/about_img2.webp';
import img3 from '../assets/about_img3.webp';
import './css/About.css';
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
        <div className='body-about '>
            <div className="about-container  ">
            {/* bg-gradient-to-b from-gray-900 to-gray-600 */}
                <div className="logo-div text-4xl font-bold">
                    <div className='logo-name-about'>
                    <h2 className=' text-center-name about-title-name bg-clip-text  text-transparent' style={{ backgroundImage: 'conic-gradient(rgb(243, 244, 246), rgb(253, 186, 116), rgb(240, 171, 252))' }}> GeoWellAdvisor </h2>
                    </div>
                    <div className='ai-div'>
                    <span className=" text-center about-title-ai bg-clip-text  text-transparent" style={{ backgroundImage: 'conic-gradient(rgb(243, 244, 246), rgb(253, 186, 116), rgb(240, 171, 252))' }}>
                        AI
                    </span>
                    </div>
                </div>
                <img src={img1} alt="" />
            </div>
            {/* <div className="table-container">
                <span className='table-heading' >Powerful AI Insights:)</span>
                <div className='parent-container'>
                        <div className='box'>
                            <h2>Suitability Analysis</h2>
                            <p>Discover the most suitable locations for water well placement.</p>
                        </div>
                        <div className="box">
                            <h2>Drilling Techniques</h2>
                            <p>Learn the best drilling methods for optimized water extraction.</p>
                        </div>
                        <div className="box">
                            <h2>Depth Prediction</h2>
                            <p>Uncover the ideal depth for your water well based on location data.</p>
                        </div>
                        <div className="box">
                            <h2>Discharge Estimation</h2>
                            <p>Maximize the water discharge rate using our sophisticated AI models.</p>
                        </div>
                        <div className="box">
                            <h2>Groundwater Quality</h2>
                            <p>Obtain vital information about the groundwater quality in your area.</p>
                        </div>
                        <div className="box">
                            <h2>User-Friendly Interface</h2>
                            <p>Enjoy a seamless experience with our intuitive and interactive platform.</p>
                        </div>
                </div>
            </div> */}
                <div className="features">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 items-center">
                        <div className="flex flex-col justify-center space-y-8 text-center">
                            <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                                Discover Our Unique Features
                            </h1>
                            <p className="max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto">
                                Our features are designed to enhance your productivity and streamline your workflow.
                            </p>
                            </div>
                            <div className="w-full max-w-full space-y-4 mx-auto">
                            <div className="grid grid-cols-3 gap-8">
                                <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                                <div className="p-2 bg-black bg-opacity-50 rounded-full">
                                <svg
                                    className=" text-white h-6 w-6 mb-2 opacity-75"
                                    fill="none"
                                    height="24"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                                    <circle cx="12" cy="12" r="3" />
                                    </svg>
                                </div>
                                <h2 className="text-xl font-bold text-white">Suitability Analysis</h2>
                                <p className="text-zinc-200 dark:text-zinc-100">
                                    Discover the most suitable locations for water well placement.
                                </p>
                                </div>
                                <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                                <div className="p-2 bg-black bg-opacity-50 rounded-full">
                                    <svg
                                    className=" text-white h-6 w-6 mb-2 opacity-75"
                                    fill="none"
                                    height="24"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                                    <circle cx="12" cy="12" r="3" />
                                    </svg>
                                </div>
                                <h2 className="text-xl font-bold text-white">Drilling Techniques</h2>
                                <p className="text-zinc-200 dark:text-zinc-100">
                                     Learn the best drilling methods for optimized water extraction.
                                </p>
                                </div>
                                <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                                <div className="p-2 bg-black bg-opacity-50 rounded-full">
                                <svg
                                    className=" text-white h-6 w-6 mb-2 opacity-75"
                                    fill="none"
                                    height="24"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path d="m8 6 4-4 4 4" />
                                    <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" />
                                    <path d="m20 22-5-5" />
                                    </svg>

                                </div>
                                <h2 className="text-xl font-bold text-white">Depth Prediction</h2>
                                <p className="text-zinc-200 dark:text-zinc-100">
                                    Uncover the ideal depth for your water well based on location data.
                                </p>
                                </div>
                                <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                                <div className="p-2 bg-black bg-opacity-50 rounded-full">
                                    <svg
                                    className=" text-white h-6 w-6 mb-2 opacity-75"
                                    fill="none"
                                    height="24"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <circle cx="11" cy="11" r="8" />
                                    <path d="m21 21-4.3-4.3" />
                                    </svg>
                                </div>
                                <h2 className="text-xl font-bold text-white">Discharge Estimation</h2>
                                <p className="text-zinc-200 dark:text-zinc-100">
                                     Maximize the water discharge rate using our sophisticated AI models.
                                </p>
                                </div>
                                <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                                <div className="p-2 bg-black bg-opacity-50 rounded-full">
                                    <svg
                                    className=" text-white h-6 w-6 mb-2 opacity-75"
                                    fill="none"
                                    height="24"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <rect height="11" rx="2" ry="2" width="18" x="3" y="11" />
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                    </svg>
                                </div>
                                <h2 className="text-xl font-bold text-white">Groundwater Quality</h2>
                                <p className="text-zinc-200 dark:text-zinc-100">
                                    Obtain vital information about the groundwater quality in your area.
                                </p>
                                </div>
                                <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                                <div className="p-2 bg-black bg-opacity-50 rounded-full">
                                    <svg
                                    className=" text-white h-6 w-6 mb-2 opacity-75"
                                    fill="none"
                                    height="24"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path d="m8 6 4-4 4 4" />
                                    <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" />
                                    <path d="m20 22-5-5" />
                                    </svg>
                                </div>
                                <h2 className="text-xl font-bold text-white">User-Friendly Interface</h2>
                                <p className="text-zinc-200 dark:text-zinc-100">
                                    Enjoy a seamless experience with our intuitive and interactive platform.
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            <div className='photo-para-parentdiv bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-500 to-indigo-900 '>
                <div className='photo-para'>

                    <div className='text'>
                        <h1>Transform Water Well Decisions</h1>
                        <p>Harness the power of CGWB's NAQUIM data and revolutionize your approach to water well decisions. GeoWellAdvisor's AI-driven platform is specifically designed for India's unique groundwater landscape.</p>
                    </div>

                    <img className='image' src={img2} alt="" />

                    <img className='image' src={img3} alt="" />
                    <div className='text'>
                        <h1 className=''>
                            Dynamic Platform, Structured Feedback
                        </h1>
                        <p>GeoWellAdvisor prioritizes user satisfaction, offering a dynamic and responsive platform for all your water well needs. We actively encourage structured feedback to continually improve our service.</p>
                    </div>

                </div>
                <Link to='/project'><button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Get Started</button></Link>
            </div>




        </div>
        </>
    
  );
}
export default About;
