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
        <p>Major: Electrical Engineering</p>
        <p>Skills: Fluent in datasheet and schematic</p>
        <p>Interests: Matching networks and RF design</p>
        <p>Expected Graduation: December 2022</p>
        <p>Contact Me at: abernsleone@uiowa.edu</p>
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
      src="../images/kenneth-photo.jpeg"
      width={300}
      quality={90}
      alt="iowa tigerhawk"
      />
      </div>
      <div class = "column-list">
        <p>Major: Computer Engineering and Electrical Engineering</p>
        <p>Skills: WireShark, ADM, Powershell, Python, C++</p>
        <p>Interests:Robotics, Cybersecurity</p>
        <p>Expected Graduation: May 2023</p>
        <p>Contact Me at: kenneth-horst@uiowa.edu</p>
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
      src="../images/collinHeadshot.jpg"
      width={300}
      quality={90}
      alt="iowa tigerhawk"
      />
      </div>
      <div class = "column-list">
       <p>Major: Computer Science and Engineering</p>
       <p>Skills: Full-stack Development and video games</p>
       <p>Interests: Documentaries and Sports </p>
       <p>Expected Graduation: December 2022</p>
       <p>Contact Me at: collin-thornton@uiowa.edu</p>
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