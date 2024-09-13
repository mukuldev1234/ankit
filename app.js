import React from 'react';
import './App.css';
export default function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo">goodspace</div>
        <nav className="nav">
          <a href="#company">Company</a>
          <a href="#pricing">Pricing</a>
        </nav>
        <div className="buttons">
          <button className="btn-demo">Book Demo</button>
          <button className="btn-login">Login/Signup</button>
          <button className="btn-job">Looking for a job?</button>
        </div>
      </header>

      <section className="hero">
        <h1>Close your hiring in less than <span className="highlight">24 Hours</span></h1>
        <p>
          An AI powered recruiting platform that sources, shortlists, interviews, 
          and evaluates potential candidates specific to your hiring needs - in just a day!
        </p>
        <div className="cta">
          <select className="country-code">
            <option value="IN">IN +91</option>
            {/* Add other country codes here */}
          </select>
          <input type="text" placeholder="Enter your contact number" />
          <button className="btn-start">Start Hiring</button>
        </div>
      </section>
          <section className="company-section">
        <div className="company-logos">
          <img src="https://logo.com/cognizant.png" alt="Cognizant" />
          <img src="https://logo.com/paytm.png" alt="Paytm" />
          <img src="https://logo.com/mobikwik.png" alt="Mobikwik" />
          <img src="https://logo.com/zomato.png" alt="Zomato" />
          <img src="https://logo.com/flipkart.png" alt="Flipkart" />
          <img src="https://logo.com/hdfc.png" alt="HDFC Bank" />
        </div>
      </section>

      <section className="why-section">
        <h2>Why companies across India are choosing <span className="highlight">GoodSpace</span></h2>
        <nav className="tabs">
          <button className="tab active">AI Finder</button>
          <button className="tab">AI Shortlister</button>
          <button className="tab">AI Interviewer</button>
          <button className="tab">AI Evaluator</button>
        </nav>

        <div className="ai-shortlister">
          <h3>AI Shortlister</h3>
          <p>
            AI Shortlister leverages advanced analytics to accurately evaluate 
            candidates against 50+ parameters, ensuring only the most qualified 
            applicants are prioritized for further evaluation.
          </p>
          <img src="https://profile.com/sample.png" alt="AI Shortlister" className="ai-img" />
        </div>
      </section>
    </div>
  );
}
