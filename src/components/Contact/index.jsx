import { useState, useEffect } from 'react'
import './index.css';
import Card from './card';
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {

  useEffect(() => {
    AOS.init({
        duration: 1500,
        delay: 500,
        once: true,
        easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className='contact-body'>
        <h1 className="heading" data-aos="zoom-out">Meet the <span className="span text-transparent bg-clip-text ">Team</span> </h1>
          <div className='contact-container' data-aos="fade-in" data-aos-delay="1000">
              <Card name="Tanishq Agarwal" title="Front-End Developer" image="https://media.licdn.com/dms/image/D4D03AQErSFQvvNkzmA/profile-displayphoto-shrink_800_800/0/1691864426120?e=1701302400&v=beta&t=lnPeW4M6mbORNwgcYZXLW1ABT9y6oaklbUCmaKhPmxc" />
              <Card name="Ayushi Dwivedi" title="ML Developer" image="https://media.licdn.com/dms/image/D4D03AQHVTV78NLknYg/profile-displayphoto-shrink_800_800/0/1692426271520?e=1701302400&v=beta&t=I7XJI1KBGO4B9MWzvtKTvdWkF4cEI3VXSQDJtKdQcaw"/>
              <Card name="Satyam Gupta" title="Front-End Developer" image="https://i.ibb.co/DbqxFmG/profile-photo.jpg"/>
          </div>
          <div className='contact-container' data-aos="fade-in" data-aos-delay="2000">
              <Card name="Satyam Singh" title="Front-End Developer" image="https://media.licdn.com/dms/image/D4D03AQHjyLJxN6LLZw/profile-displayphoto-shrink_800_800/0/1686240990025?e=1701302400&v=beta&t=sTTrISVOArn3QGzr_SwURpInpKOvMOTQcLgv7LqrSxk"/>
              <Card name="Aditya Sachan" title="Flutter Developer"  image="https://media.licdn.com/dms/image/D4D03AQHp8s78Z3z9sA/profile-displayphoto-shrink_800_800/0/1688918247577?e=1701302400&v=beta&t=2WBSZW8DKUW71FmGrIC5lbhns1HK1jySJ4HSSi5UpGw"/>
              <Card name="Avni Jain" title="ML Developer" image="https://media.licdn.com/dms/image/C4D03AQHHLpk1-jpxXg/profile-displayphoto-shrink_800_800/0/1654345583174?e=1701302400&v=beta&t=c5LbGJVI0lFClKrnGks_b3seoO4o-pkC2mhZL7i_ufI"/>
          </div>
      </div>

    </>
  )
}

export default Contact;
