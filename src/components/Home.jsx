import './css/NavBar.css';
import image from '../assets/home_img.jpg';
import img_collective_action from '../assets/collective-action.svg';
import img_nature_conservation from '../assets/nature-conversation.svg';
import img_rural_agricultural from '../assets/rural-agricultral.svg';
import { Link } from 'react-router-dom';
import illustration from '../assets/home-illustration.png';

import './css/Home.css';

const Home = () => {

    return (
        <div className=" home-body  bg-gradient-to-r from-blue-950 to-black ...">
            {/* bg-gradient-to-r from-blue-950 to-black */}

            <div className='front-div'>
                <div>
                    <h3 className="front-text text-4xl font-bold text-center leading-20 ">
                        <section>DECISIONS WITH DATA FOR</section>
                        <div className='up-down'>
                            <div>
                                <section>OUR PANCHAYAT</section>
                                <section>OUR TALUKA</section>
                                <section>OUR VILLAGE</section>
                            </div>
                        </div>
                    </h3>
                </div>
                <img className='front-img' src={illustration} alt="image" />
                <div className="text-center text-gray-700 dark:text-gray-100">
                    <p>The data platform houses various datasets on social, economic, and ecological parameters and serves as a data visualization platform promoting an interdisciplinary, spatial, and temporal understanding.</p>
                </div>
                <img className='home_img' src={image} alt="image" />
                <Link to='/project'><button type="button" class="text-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">
                    <p>GET STARTED</p>
                </button></Link>
            </div>

            <div className="img-text">
                <div className='child-div-img-text'>
                    <div className="heading">
                        <h2 class="text-4xl dark:text-white">India Observatory aims to make data useful for local communities so that they can make informed decisions about</h2>
                    </div>
                    <div className='div-row'>
                        <div>
                            <img className='' src={img_collective_action} alt="image" />
                            <p>COLLECTIVE ACTION</p>
                        </div>
                        <div>
                            <img className='' src={img_nature_conservation} alt="image" />
                            <p>NATURE CONSERVATION AND NATURAL RESOURCE MANAGEMENT</p>
                        </div>
                        <div>
                            <img className='' src={img_rural_agricultural} alt="image" />
                            <p>RURAL LIVELIHOOD</p>
                        </div>
                    </div>
                </div>
                <Link to='/about'><button type="button" class="text-1200 border border-700 hover:bg-white hover:text-06A779 focus:ring-4 focus:outline-none focus:ring-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:text-white dark:border-dark-500 dark:hover:text-06A779 dark:hover:bg-white dark:focus:ring-800 transition-all duration-400">Learn More</button></Link>
            </div>

            <div className='end-info'>
                <div className='para'>
                    <h3 class="text-center dark:text-white">Our tools are reliable go-to instruments that enhance access to social, economic, ecological information for nature conservation, natural resource management, local governance, and rural development</h3>
                </div>
                <div className='yt-video'>
                    <iframe width="660" height="415" src="https://www.youtube.com/embed/92J5kdxLH-k?si=AiwA3ufKGM4OEPJG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

                <Link to="/project"><button class="bg-transparent hover:bg-blue-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Get Started</button></Link>

                <div className='last-info '>
                    <div className='last-info-heading'>
                        <h1>
                            Technology that serves nature
                        </h1>
                    </div>
                    <div className='last-info-para'>
                        <p>
                            By bringing together a unique ecosystem of tools, India Observatory helps visualize location-specific data and analytics on shared natural resources, supporting rural communities in effective management of their resources and enabling improved local livelihoods with the added incentive of living in harmony with nature.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
