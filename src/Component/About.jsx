// src/components/About.js
// import React from 'react';

// const About = () => {
//   return (
//     <section id="about">
//       <h2>About Me</h2>
//       <p>I have experience in building responsive websites using modern front-end technologies like React, and backend expertise in Java Spring Boot.</p>
//       <p>I love solving complex problems and creating visually appealing, functional web applications.</p>
//     </section>
//   );
// }

// export default About;

import React from 'react';
import './CSS/About.css';

const About = () => {
    return (
        <section className="about-me" id="about">
            <div className="container">
                <h2>About Me</h2>
                <p>
                    Hello! I’m Sahil Kumar, a passionate and skilled full-stack developer with a strong focus on both front-end and back-end development. With a deep love for coding, I specialize in crafting seamless, user-centric web applications using the latest technologies.
                </p>
                <p>
                    On the front-end, I bring designs to life with React, ensuring that every interaction feels natural and responsive. My expertise extends to creating visually appealing, responsive UIs that deliver exceptional user experiences. On the back-end, I’m well-versed in Java Spring Boot, where I build robust, scalable, and secure APIs that drive the core functionality of applications. 
                </p>
                <p>
                    I have a strong foundation in databases like MySQL and PostgreSQL, allowing me to manage data effectively and ensure seamless communication between the front-end and back-end. My passion for learning keeps me on the cutting edge of technology, and I’m constantly seeking new challenges that allow me to grow as a developer.
                </p>
                <p>
                    When I’m not coding, I’m either exploring new technology trends, working on open-source projects, or honing my skills in competitive programming. I believe that great software development requires not just technical skills, but also creativity, problem-solving, and a relentless drive for excellence. 
                </p>
                <p>
                    Let’s connect and build something amazing together!
                </p>
            </div>
        </section>
    );
};

export default About;

