import React from "react";

const Contact = () => {
    
  return (
    <main className="page-shell inner-page contact-page">
      <section className="contact-intro">
        <span className="eyebrow">WE'RE HERE TO HELP</span>
        <h1>
          Let’s make your day <span>easier.</span>
        </h1>
        <p>
          Have a question about ShopKart? Our friendly team would love to hear
          from you.
        </p>
      </section>
      <section className="contact-layout">
        <div className="contact-options">
          <article>
            <div className="contact-icon">✉</div>
            <div>
              <h3>Email us</h3>
              <p>hello@shopkart.com</p>
              <small>We usually reply within one business day.</small>
            </div>
          </article>
          <article>
            <div className="contact-icon">☎</div>
            <div>
              <h3>Call us</h3>
              <p>+91 9343596661</p>
              <small>Monday to Saturday, 9am–6pm.</small>
            </div>
          </article>
          <article>
            <div className="contact-icon">⌖</div>
            <div>
              <h3>Visit us</h3>
              <p>ShopKart House, Greater Jabalpur MP</p>
              <small>Come say hello during office hours.</small>
            </div>
          </article>
        </div>
        <form className="message-card">
          <span className="eyebrow">SEND A MESSAGE</span>
          <h2>What can we help with?</h2>
          <div className="form-ui">
            <label>
              Your name
              <input className="input-ui" type="text" name="name" placeholder="Enter your name" required />
            </label>
            <label>
              Email address
              <input className="input-ui" type="email" name="email" placeholder="you@example.com" required />
            </label>
            <label>
              How can we help?
              <select className="input-ui" name="subject" defaultValue="">
                <option value="" disabled>Select a topic</option>
                <option>Product enquiry</option>
                <option>Order support</option>
                <option>Feedback</option>
                <option>Other</option>
              </select>
            </label>
            <label>
              Your message
              <textarea className="input-ui textarea-ui" name="message" placeholder="Tell us a little more..." required />
            </label>
            <button className="primary-ui-button full-button" type="submit">
              Send message <span>→</span>
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Contact;
