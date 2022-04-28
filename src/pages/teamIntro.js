import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"



const teamIntroPage = () => (
  <Layout>
    <Link to="/">Back to the home page</Link>
    <h1>Meet Top 3 && !(2||3)</h1>
    <p className="teamDescription">
    We are a group of 4 computer science and electrical engineering majors at the University of Iowa. 
    Read a summary of our information below and click on each member's link to get to know them.
    </p>
    <div className="row-caption">
        <div class = "column-name">
          <Link to="/anthonyPage/">Anthony</Link>
        </div>
        </div>
      <div className = "row">
      <div class="column-photo">
      <StaticImage
      src="../images/HerkyAndMe.jpg"
      width={300}
      quality={90}
      alt="iowa tigerhawk"
      />
      </div>
      <div class = "column-list">
        <p>Major:</p>
        <p>Skills:</p>
        <p>Interests:</p>
        <p>Expected Graduation:</p>
        <p>Contact Me at:</p>
      </div>
    </div>
    
    <div className="row-caption">
        <div class = "column-name">
          <Link to="/kennethPage/">Kenneth</Link>
        </div>
        </div>
      <div className = "row">
      <div class="column-photo">
      <StaticImage
      src="../images/tigerhawk.png"
      width={300}
      quality={90}
      alt="iowa tigerhawk"
      />
      </div>
      <div class = "column-list">
        <p>Major:</p>
        <p>Skills:</p>
        <p>Interests:</p>
        <p>Expected Graduation:</p>
        <p>Contact Me at:</p>
      </div>
    </div>
    
    <div className="row-caption">
        <div class = "column-name">
          <Link to="/collinPage/">Collin</Link>
        </div>
        </div>
      <div className = "row">
      <div class="column-photo">
      <StaticImage
      src="../images/tigerhawk.png"
      width={300}
      quality={90}
      alt="iowa tigerhawk"
      />
      </div>
      <div class = "column-list">
        <p>Major:</p>
        <p>Skills:</p>
        <p>Interests:</p>
        <p>Expected Graduation:</p>
        <p>Contact Me at:</p>
      </div>
    </div>

    <div className="row-caption">
        <div class = "column-name">
          <Link to="/waylonPage/">Waylon</Link>
        </div>
        </div>
      <div className = "row">
      <div class="column-photo">
      <StaticImage
      src="../images/WeiratherHeadshot.jpg"
      width={300}
      quality={90}
      alt="iowa tigerhawk"
      />
      </div>
      <div class = "column-list">
        <p>Major: Electrical Engineering</p>
        <p>Skills: Adjusting phase and backwards Ks</p>
        <p>Interests: Power generation and distribution</p>
        <p>Expected Graduation: December 2022</p>
        <p>Contact Me at: wpweirather@uiowa.edu</p>
      </div>
    </div>
    
  </Layout>
  
  
)

  


export default teamIntroPage