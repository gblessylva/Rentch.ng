import React from "react";
import ReactDOM from "react-dom";
import "./scss/index.scss"
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom"


function App() {
  return (
    <Router>
    <main>
    <header >
      <div className="header-overlay">
      <nav>
        <div className="logo">
           <h1>Rentch</h1>
        </div>
        <ul className="">
          <li><Link> List a Space</Link></li>
          <li><Link> Properties</Link></li>
          <li><Link> Blog</Link></li>
          <li><Link> Login</Link></li>
          <li className="login-btn"><Link> Sign up</Link></li>
      </ul>
      </nav>
        <section className="hero-section">
          <h2>Search and Find <span>Living Apartments</span></h2>
            <div className="filter-wrapper">
              <div className="select">
                <select >
                  <option>Space Type</option>
                </select>
              </div>
               <div className="select">
                <select >
                  <option>Location</option>
                </select>
              </div>
             <div className="select">
              <select >
                <option>Category</option>
              </select>
              </div>
              <button className="filter-search">
                Search
              </button>
              
            </div>
        </section>
        </div>
      </header>
        <section className="popular-locations">
          <h3> Popular Locations</h3>
          <hr />
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
          <div className="four-row">
            <div className="row-card">
            </div>
            <div className="row-card">
            </div>
            <div className="row-card">
            </div>
            <div className="row-card">
            </div>
          </div>
        </section>
        <section className="featured-listing">
          <h3> Featured Exclusives</h3>
          <hr />
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
          <div className="three-row">
            <div className="row-card">
            </div>
            <div className="row-card">
            </div>
            <div className="row-card">
            </div>
          </div>
        </section>
        <section className="featured-people">
          <h3> Featured People</h3>
          <hr />
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
          <div className="three-row">
            <div className="people-card">
            </div>
            <div className="people-card">
            </div>
            <div className="people-card">
            </div>
            </div>
        </section>
        <section className="how-it--works">
        <div className="work-overlay">
          <h3> How it Works</h3>
          <hr />
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
          <div className="works-row">
            <div className="work-card">
              <div className="work-icon">
              </div>
              <h4> Search for a Space</h4>
             <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            </div>
            <div className="work-card">
                <div className="work-icon">
                </div>
                <h4> Book a Tour</h4>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            </div>
            <div className="work-card"> 
              <div className="work-icon">
              </div>
              <h4> Move in</h4>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            </div>
          </div>
          </div>
        </section>
        <section className="testimonials">
            <h3> Testimonial</h3>
            <hr />
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
            <div className="testimonial-row">
              <div className="testimonial-card">
                <h5>"</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eni</p>
                <hr />
                <div className="testi-image">
                </div>
                <h4> Tony Stark</h4>
              </div>
              <div className="testimonial-card">
                <h5>"</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eni</p>
                <hr />
                <div className="testi-image">
                </div>
                <h4> Tony Stark</h4>
              </div>
              <div className="testimonial-card">
                <h5>"</h5> 
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eni</p>
                <hr />
                <div className="testi-image">
                </div>
                <h4> Tony Stark</h4>
              </div>
              <button> &#x203a;</button>
          </div>
        </section>
        <section className="blog">
        </section>
        <section className="earn">
        </section>
        <footer >
        </footer>
    </main>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
