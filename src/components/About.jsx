import img1 from '../assets/about_img1.png';
import img2 from '../assets/about_img2.webp';
import img3 from '../assets/about_img3.webp';
import './css/About.css';
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
        <div className='body-about '>
            <div className="about-container bg-gradient-to-b from-gray-900 to-gray-600 ">
                <div className="logo-div text-4xl font-bold">
                    <div>
                    <h2 className=' text-center about-title-name bg-clip-text  text-transparent' style={{ backgroundImage: 'conic-gradient(rgb(243, 244, 246), rgb(253, 186, 116), rgb(240, 171, 252))' }}> GeoWellAdvisor </h2>
                    </div>
                    <div className='ai-div'>
                    <span className=" text-center about-title-ai bg-clip-text  text-transparent" style={{ backgroundImage: 'conic-gradient(rgb(243, 244, 246), rgb(253, 186, 116), rgb(240, 171, 252))' }}>
                        AI
                    </span>
                    </div>
                </div>
                <img src={img1} alt="" />
            </div>
            <div className="table-container">
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