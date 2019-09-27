import React from "react";
import ReactDOM from "react-dom";
import "./scss/index.scss"
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom"


function App() {
  return (
    <Router>
    <main className="App">
    <header >
      <nav>
        <div className="logo">
           <h1>Rentch</h1>
        </div>
        <ul className="">
          <li><Link> List a Space</Link></li>
          <li><Link> Properties</Link></li>
          <li><Link> Blog</Link></li>
          <li><Link> Login</Link></li>
          <li><Link> Sign up</Link></li>
      </ul>
      </nav>
          <section className="hero-section">
          </section>
      </header>
        <section className="popular-locations">
        </section>
        <section className="featured-listing">
        </section>
        <section className="featured-people">
        </section>
        <section className="how-it--works">
        </section>
        <section className="testimonials">
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
