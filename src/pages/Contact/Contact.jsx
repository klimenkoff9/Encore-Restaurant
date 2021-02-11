import React from 'react';

import "./Contact.scss";


const Contact = () => {
    return (
        <section className="Home">
          <div className="contact">
            <h1>Contact</h1>
            <p>718-414-4764 (Russian)</p>
            <p>347-431-6620 (English, Russian)</p>
          </div>
          <div className="location">
                <h1>Location</h1>
                <p>10007 4th Avenue <br/> Brooklyn, NY, 11209</p>
          </div>
          <div className="hours">
            <h1>Hours</h1>
            <p>Friday - Sunday <br/> 7pm - until last customer leaves</p>
          </div>
        </section>
    );
}

export default Contact;