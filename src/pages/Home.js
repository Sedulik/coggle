import React, { Component } from "react";
import Features from "./features/Features";

import "../App.css";

class Home extends Component {
  render() {
    const { classes, theme } = this.props;
    return (
      <div>
        <div className="main fullpage">
          <div className="middle">
            <div className="section">
              <img
                src="https://static.coggle.it/img/coggle-2x-white.png?_v=1530374966"
                alt="Coggle logo"
                className="logo"
              />
              <div className="tagline light">
                The clear way to share complex information.
              </div>
              <div className="video">
                <iframe
                  width="448"
                  height="252"
                  src="https://www.youtube-nocookie.com/embed/iL40u0uNYa8?showinfo=0"
                  frameBorder="0"
                  allowFullScreen=""
                />
              </div>
              <div className="login-button-container">
                <a href="/login" className="login button outline">
                  <div
                    data-l10n-id="index-signupnow"
                    className="signup-button-content"
                  >
                    Sign Up Now
                  </div>
                </a>
              </div>
              <p>
                <a href="/login" data-l10n-id="index-login">
                  Already signed up? Log in here.
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="last">
          <section className="front-content">
            <a href="/gallery" className="screenshot" />
            <div className="intro-content">
              <h1 data-l10n-id="index-unleash" className="light doublespaced">
                Unleash your creativity
              </h1>
              <p data-l10n-id="index-blurb">
                Produce beautiful notes quickly and easily. Share them with
                friends and colleagues to work on your ideas together.
              </p>
              <a
                href="/login?redirectTo=%2fwelcome"
                data-l10n-id="index-signupnow"
                className="login button"
              >
                Sign Up Now
              </a>
              <p data-l10n-id="index-viewgallery">
                Or take a look at the <a href="/gallery">Coggle Gallery</a> for
                inspiration.
              </p>
            </div>
          </section>
          <section className="about-container">
            <div data-l10n-id="index-colab-mindmaps" className="about section">
              <h1 className="light">Collaborative Mind Maps</h1>
              <p className="emphasis">
                Coggle is an online tool for creating and sharing mindmaps. It
                works online in your browser: there is nothing to download or
                install. <a href="/login">Log in</a> to start mind-mapping now!
              </p>
              <p>
                Whether you are taking notes, brainstorming, planning, or doing
                something awesomely creative, it is super simple to visualise
                your ideas with Coggle. Share with as many friends or colleagues
                as you like. Changes you make will show up instantly in their
                browser, wherever they are in the world.
              </p>
            </div>
          </section>
          <section className="features-container">
            <div className="features container-fluid">
              <div className="recording fullwidth">
                <img src="https://static.coggle.it/img/features/adjust-thickness.gif" />
                <div>
                  <a
                    href="/login"
                    data-l10n-id="index-signupnow"
                    className="login button"
                  >
                    Sign Up Now
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div id="features">
          <Features />
        </div>
        <footer>
          <section className="intro-uses">
            <div className="container">
              <div data-l10n-id="index-use-notes" className="usecase col-sm-4">
                <div className="icon">
                  <img src="https://static.coggle.it/img/usecases/notes.png?_v=1531144965" />
                </div>
                <h2>Take Notes</h2>
                Open up Coggle in a meeting, during your revision or wherever
                inspiration strikes to create beautiful, structured notes.
              </div>
              <div data-l10n-id="index-use-brainstorm" className="usecase col-sm-4">
                <div className="icon">
                  <img src="https://static.coggle.it/img/usecases/brainstorm.png?_v=1531144965" />
                </div>
                <h2>Brainstorm</h2>
                Take the start of an idea, water it with Coggle and watch it
                grow into a fully fledged plan, clearly laid out and ready to
                share.
              </div>
              <div data-l10n-id="index-use-share" className="usecase col-sm-4">
                <div className="icon">
                  <img src="https://static.coggle.it/img/usecases/sharing.png?_v=1531144965" />
                </div>
                <h2>Share Information</h2>
                Distill your topic into a Coggle, include all the details and
                share with your team, your classmates or the world!
              </div>
            </div>
            <div className="login-button-container">
              <a href="/login" className="login button outline">
                <div
                  data-l10n-id="index-signupnow"
                  className="signup-button-content"
                >
                  Sign Up Now
                </div>
              </a>
            </div>
          </section>
        </footer>

        <nav className="footer col-xs-12">
          <span>
            <p>
              <a
                href="/what-is-mindmapping"
                data-bypass=""
                data-l10n-id="footer-what-is-mindmapping"
              >
                What is Mindmapping?
              </a>
              <a
                href="/top-mindmap-uses"
                data-bypass=""
                data-l10n-id="footer-top-uses"
              >
                Top Mindmap Uses
              </a>
              <a
                href="/gallery"
                data-bypass=""
                data-l10n-id="footer-find-templates"
              >
                Mind Map Templates and Examples
              </a>
            </p>
            <p>
              <a href="/about" data-bypass="" data-l10n-id="footer-about">
                about
              </a>
              <a href="/about" data-bypass="" data-l10n-id="footer-contact">
                contact
              </a>
              <a
                href="https://www.facebook.com/coggleit"
                data-bypass=""
                data-l10n-id="footer-facebook"
              >
                facebook
              </a>
              <a
                href="https://twitter.com/CoggleIt"
                data-bypass=""
                data-l10n-id="footer-twitter"
              >
                twitter
              </a>
              <a href="/privacy" data-bypass="" data-l10n-id="footer-privacy">
                privacy
              </a>
              <a href="/terms" data-bypass="" data-l10n-id="footer-terms">
                terms
              </a>
              <a href="/press" data-bypass="" data-l10n-id="footer-press">
                press
              </a>
            </p>
          </span>
        </nav>
      
      </div>
    );
  }
}

export default Home;
