import { useState } from 'react'
import './index.css';
import Card from './card';

function Contact() {

  return (
    <>
      <div className='contact-body'>
        <h1 className="heading ">Meet the <span className="span text-transparent bg-clip-text ">Team</span> </h1>
          <div className='contact-container'>
              <Card name="Tanishq Agarwal" title="Team Lead | Back-End Developer" image="https://media.licdn.com/dms/image/D4D03AQErSFQvvNkzmA/profile-displayphoto-shrink_800_800/0/1691864426120?e=1700697600&v=beta&t=fAHj6Y4YyA5r2M3jGr4WKPYX30q_M0qhcyjmzDg_LYs" />
              <Card name="Ayushi Dwivedi" title="ML Developer" image="https://media.licdn.com/dms/image/D4D03AQHVTV78NLknYg/profile-displayphoto-shrink_200_200/0/1692426271520?e=1700697600&v=beta&t=2XU-p1GfC9oH6LFZg5BfTez9QLDwvvEdt_YpB90vK0k"/>
              <Card name="Satyam Gupta" title="Front-End Developer" image="https://i.ibb.co/DbqxFmG/profile-photo.jpg"/>
          </div>
          <div className='contact-container'>
              <Card name="Satyam Singh" title="Front-End Developer" image="https://media.licdn.com/dms/image/D4D03AQHjyLJxN6LLZw/profile-displayphoto-shrink_800_800/0/1686240990025?e=1700697600&v=beta&t=cVEbwbNDjLklxD8S4qt8EanDOPC0veMUDVla5cWWYzI"/>
              <Card name="Aditya Sachan" title="Flutter Developer"  image="https://media.licdn.com/dms/image/D4D03AQHp8s78Z3z9sA/profile-displayphoto-shrink_800_800/0/1688918247577?e=1700697600&v=beta&t=NVcnBJlEJ59MXVh42vn92Gph3A_MbYJTRQG5auDqdHE"/>
              <Card name="Avni Jain" title="ML Developer" image="https://media.licdn.com/dms/image/C4D03AQHHLpk1-jpxXg/profile-displayphoto-shrink_800_800/0/1654345583174?e=1700697600&v=beta&t=u4-j1jFzESadoLIXpdoRJeapn6E_d6WO1mynvoWga9E"/>
          </div>
      </div>

    </>
  )
}

export default Contact;
