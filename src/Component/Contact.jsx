// src/components/Contact.js
// import React from 'react';

// const Contact = () => {
//   return (
//     <section id="contact">
//       <h2>Contact Me</h2>
//       <p>Email: sahilkumar@example.com</p>
//       <p>LinkedIn: <a href="https://linkedin.com/in/sahilkumar">linkedin.com/in/sahilkumar</a></p>
//       <p>GitHub: <a href="https://github.com/sahilkumar">github.com/sahilkumar</a></p>
//     </section>
//   );
// }

// export default Contact;
import React from 'react';
import './CSS/Contact.css';

const Contact = () => {
    return (
        <section className="contact-me" id="contact">
            <div className="container">
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/sahilkumar28/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://github.com/sk6138" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="mailto:sk8877532873@gmail.com">Email</a>
                </div>
            </div>
        </section>
    );
};

export default Contact;

