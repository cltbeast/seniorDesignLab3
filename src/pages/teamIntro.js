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
    <div class="row-caption">
      <div class = "column-name">
      <Link to="/anthonyPage/">Anthony</Link>
      </div>
    </div>
    <div className = "row">
      <StaticImage
      src="../images/HerkyAndMe.jpg"
      width={300}
      quality={90}
      alt="iowa tigerhawk"
      />
    </div>
    
    <div className="row-caption">
        <div class = "column-name">
          <Link to="/kennethPage/">Kenneth</Link>
        </div>
      <div className = "row">
      <StaticImage
      src="../images/tigerhawk.png"
      width={300}
      quality={90}
      alt="iowa tigerhawk"
      />
      </div>
    </div>
    
    <div class="row-caption">
      <div class = "column-name">
      <Link to="/collinPage/">Collin</Link>
      </div>
    </div>
    <div className = "row">
      <StaticImage
      src="../images/tigerhawk.png"
      width={300}
      quality={90}
      alt="iowa tigerhawk"
      />
    </div>

    <div class="row-caption-last">
      <div class = "column-name">
      <Link to="/waylonPage/">Waylon</Link>
      </div>
    </div>
    <div className = "row">
      <StaticImage
       src="../images/WeiratherHeadshot.jpg"
      width={300}
      quality={90}
      alt="Waylons Picture"
      />
    </div>
    <p className="introPageInfo">
      Major: Electrical Engineering
    </p>
    <p className="introPageInfo">
      Skills: Adjusting phase and backwards Ks
    </p>
    <p className="introPageInfo">
      Interests: Power generation and distribution
    </p>
    <p className="introPageInfo">
      Expected Graduation: December 2022
    </p>
    <p className="introPageInfo">
    Contact Me at: wpweirather@uiowa.edu
    </p>
    <div class = "container">
      <div class = "box">
        <div class = "box-row">
          <div class = "box-cell box1">
            
              Major: Electrical Engineering
            
          </div>
          <div class = "box-cell box2">
            
              Interests: Power generation and distribution
            
          </div>
        </div>
      </div>
    </div>

    
  </Layout>
  
  
)

  


export default teamIntroPage