import $ from 'jquery'
import 'jquery.easing'
import './js/imagesloaded.pkgd.min.js'
import scrollMonitor from './js/scrollMonitor.min.js'
import './js/three.min.js'
import './js/main.min.js'
import './js/new-age.js'
import React, {Component} from 'react'
import autoBind from 'react-autobind'

class Landing extends Component {
  constructor(props) {
    super(props)
    autoBind(this)
  }

  componentDidMount() {
    imagesLoaded(document.querySelectorAll('img'), () => {
      document.body.classList.remove('loading')
    })
  }

  render() {
    return (
      <div className="loading">
        <main>
          <section className="landing-grid">
            <div className="landing-grid__item landing-grid--left">
              <div className="landing-grid__item-content">
                <img
                  src="img/logo-orange.png"
                  alt="GARDE"
                  width="170px"
                  height="auto"
                />
                <div className="landing-grid__item-intro">
                  <h3 className="landing-grid__item-title">
                    Making public blockchains safe.
                  </h3>
                  <h3 className="landing-grid__item-subtitle">
                    A decentralized network of Gardians who support innovators
                    and protect consumers by improving transparency.
                  </h3>
                  <button className="btn btn-garde-primary-outline">
                    Become a Gardian
                  </button>
                </div>
              </div>
            </div>
            <div className="landing-grid__item landing-grid__item--bg landing-grid--right">
              <div
                className="landing-grid__item-img"
                data-displacement="img/displacement/10.jpg"
                data-intensity="-0.65"
                data-speedIn="1.2"
                data-speedOut="1.2"
              >
                <img src="img/kimon-maritz-183501-unsplash.jpg" alt="Image" />
                <img
                  src="img/daniel-von-appen-276283-unsplash.jpg"
                  alt="Image"
                />
              </div>
              <div className="landing-grid__item-content">
                <nav className="menu" id="mainNav">
                  <button className="btn-nav btn--close">
                    <i className="material-icons">close</i>
                  </button>
                  <ul className="menu__inner" id="menu__inner">
                    <li className="menu__item" scroll-to="#section-certified">
                      <a className="menu__link">get certified</a>
                    </li>
                    <li className="menu__item" scroll-to="#section-bounty">
                      <a className="menu__link">earn bounty</a>
                    </li>
                    <li className="menu__item" scroll-to="#section-listing">
                      <a className="menu__link">search scorecards</a>
                    </li>
                  </ul>
                </nav>
                <button className="btn-nav btn--menu">
                  <i className="material-icons">menu</i>
                </button>
              </div>
            </div>
          </section>
          <section className="landing-mobile">
            <div className="nav-mobile page-padding-x">
              <a href="" target="_blank">
                <img
                  src="img/logo-orange.png"
                  className="logo-mobile"
                  alt="GARDE"
                  width="130px"
                  height="auto"
                />
              </a>
              <nav className="menu-mobile" id="mainNav">
                <button className="btn-nav btn-mobile--close">
                  <i className="material-icons">close</i>
                </button>
                <ul className="menu-mobile__inner" id="menu-mobile__inner">
                  <li
                    className="menu-mobile__item"
                    scroll-to="#section-certified"
                  >
                    <a className="menu-mobile__link">get certified</a>
                  </li>
                  <li className="menu-mobile__item" scroll-to="#section-bounty">
                    <a className="menu-mobile__link">earn bounty</a>
                  </li>
                  <li
                    className="menu-mobile__item"
                    scroll-to="#section-listing"
                  >
                    <a className="menu-mobile__link">search scorecards</a>
                  </li>
                </ul>
              </nav>
              <button className="btn-nav btn-mobile--menu">
                <i className="material-icons">menu</i>
              </button>
            </div>
            <div className="landing-grid__item-intro">
              <h3 className="landing-grid__item-title">
                Making public blockchains safe.
              </h3>
              <h3 className="landing-grid__item-subtitle">
                A decentralized network of Gardians who support innovators and
                protect consumers by improving transparency.
              </h3>
              <button className="btn btn-garde-primary-outline">
                Become a Gardian
              </button>
            </div>
          </section>
          <section
            className="content content--full flexy section-certified"
            id="section-certified"
          >
            <h2 className="content__title content__title--medium">
              <div id="rev-4" className="content__description">
                certify your disclosures
              </div>
              <div className="content__title__inner">
                COMMIT TO TRANSPARENCY
              </div>
              <div id="rev-5" className="content__paragraph">
                Transparency is the bedrock of a healthy crypto ecosystem. With
                Garde, token projects can leverage a community of experts to
                certify the quality and reliability of their disclosures.{' '}
              </div>
              <button
                className="btn btn-garde-secondary"
                id="btn-get-certified"
              >
                get certify now
              </button>
            </h2>
          </section>
          <section
            className="content flexy section-bounty bounty-grid"
            id="section-bounty"
          >
            <div className="bounty-box page-padding--left">
              <h2 className="content__title content__title--small">
                <div className="content__description">limited time only</div>
                <div className="">EARN BOUNTY FOR REVIEWS</div>
                <div id="rev-7" className="content__paragraph full-width">
                  we are giving out bounties for  in-depth reviews of
                  disclosures.
                </div>
                <div id="rev-8" className="content__paragraph full-width">
                  Earn rewards by sucessfully submitting a “Transparency
                  Scorecard”. A Transparency Scorecard is an objective, in-depth
                  assessment of the disclosures provided by a token project.
                </div>
              </h2>
            </div>
            <div className="bounty__inner-grid">
              <div className="bounty-box--inner box--a" id="box--a">
                <div className="box-content">
                  <div className="bounty-project">Civic</div>
                  <div className="bounty-description">
                    Community-curated Newsrooms
                  </div>
                  <div className="bounty-action">expires in 12 days</div>
                </div>
              </div>
              <div className="bounty-box--inner box--b" id="box--b">
                <div className="box-content">
                  <div className="bounty-project">virtue poker</div>
                  <div className="bounty-description">
                    A decentralized P2P platform for poker
                  </div>
                  <div className="bounty-action">expires in 20 days</div>
                </div>
              </div>
              <div className="bounty-box--inner box--c" id="box--c">
                <div className="box-content">
                  <div className="bounty-project">ethereum</div>
                  <div className="bounty-description">
                    Platform for running decentralized applications
                  </div>
                  <div className="bounty-action">expires in 20 days</div>
                </div>
              </div>
              <div className="bounty-box--inner box--d" id="box--d">
                <div className="box-content">
                  <div className="bounty-project">view more ></div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="content flexy section-listing page-padding"
            id="section-listing"
          >
            <h2 className="content__title content__title--small">
              <div className="content__title__inner">SEARCH SCORECARDS</div>
              <div id="rev-9" className="content__paragraph full-width">
                Educate yourself on tokens before buying them. What should one
                look for?<br />We provide a new framework that makes it easier
                to evaluate the quality of a project’s disclosures.
              </div>
            </h2>
            <form className="search-container">
              <input
                type="text"
                id="search-bar"
                placeholder="Find project scorecard"
              />
              <a href="#">
                <img
                  className="search-icon"
                  src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"
                />
              </a>
            </form>
            <ul className="cards">
              <li className="cards-item">
                <div className="card">
                  <div className="card_content">
                    <div className="bounty-project">Civic</div>
                    <div className="bounty-description">
                      Community-curated Newsrooms
                    </div>
                    <div className="bounty-action">expires in 12 days</div>
                  </div>
                </div>
              </li>
              <li className="cards-item">
                <div className="card">
                  <div className="card_content">
                    <div className="bounty-project">virtue poker</div>
                    <div className="bounty-description">
                      A decentralized P2P platform for poker
                    </div>
                    <div className="bounty-action">expires in 20 days</div>
                  </div>
                </div>
              </li>
              <li className="cards-item cards-item--last">
                <div className="card">
                  <div className="card_content">
                    <div className="bounty-project">ethereum</div>
                    <div className="bounty-description">
                      Platform for running decentralized applications
                    </div>
                    <div className="bounty-action">expires in 20 days</div>
                  </div>
                </div>
              </li>
            </ul>
            <a className="link-item">View more ></a>
          </section>
        </main>
        <footer className="page-padding">
          <div>
            <p className="">
              The Garde Network is an initiative by The Brooklyn Project
            </p>
            Copyright © 2018 Garde Network
          </div>
          <div className="logos">
            <a target="_blank" href="https://thebkp.com/">
              <img
                className="bkp-logo"
                src="img/bkp-logo.png"
                alt="the brooklyn project"
              />
            </a>
            <a target="_blank" href="http://www.consensys.net/">
              <img
                className="consensys-logo"
                src="img/consensys-logo-white-transparent.png"
                alt="consensys"
              />
            </a>
          </div>
        </footer>
      </div>
    )
  }
}

export default Landing
