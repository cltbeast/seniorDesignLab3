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
    <div>
      <Link to="/anthonyPage/">Anthony</Link>
      <StaticImage
      src="../images/tigerhawk.png"
      width={300}
      quality={90}
      alt="iowa tigerhawk"
      />
    </div>
    
    <div className="right-container">
      <Link to="/kennethPage/">Kenneth</Link>
      <StaticImage
      src="../images/tigerhawk.png"
      width={300}
      quality={90}
      alt="iowa tigerhawk"
      />
    </div>
    
    <div>
      <Link to="/collinPage/">Collin</Link>
      <StaticImage
      src="../images/tigerhawk.png"
      width={300}
      quality={90}
      alt="iowa tigerhawk"
      />
    </div>
    
    <div className = "right-container">
      <Link to="/waylonPage/">Waylon</Link>
      <br></br>
      <StaticImage
      src="../images/WeiratherHeadshot.jpg"
      width={300}
      quality={90}
      alt="Waylons Picture"
      />
    </div>
  </Layout>
)

export default teamIntroPage