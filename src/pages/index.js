import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <link rel="stylesheet" href = "../components/layout.css"></link>
    <h1 className = 'header'>Welcome to Team Top 3 && !(2||3)'s Home Page!</h1>
    <div className = 'linkRefs'>
    <p>
      <Link className = 'navBarLink' to="/teamIntro/">Team Introduction</Link>
      <Link className = 'navBarLink' to="/anthonyPage/">Anthony Berns-Leone</Link> 
      <Link className = 'navBarLink'to="/kennethPage/">Kenneth Horst</Link>
      <Link className = 'navBarLink' to="/collinPage">Collin Thornton</Link>
      <Link className = 'navBarLink' to="/waylonPage">Waylon Weirather</Link>
    </p>
    <p className="teamDescription">
    Feel free to click around and get to know the team behind the Pitcher's Plate (pictured below)<br></br>
    The Pitcher's Plate is an affordable baseball pitch identifying system that uses high tech laser sensors
    to call balls and strikes during baseball practice. Pitchers can now practice on their own with just a ball,
    a phone, and the Pitcher's Plate. Please reach out to any of our members or leave a comment below!
    </p>
    </div>
    <div className = 'center-container'>
    <StaticImage
      src="../images/PitchersPlate1.jpg"
      width={300}
      quality={90}
      alt="Pitcher's Plate 3d Model"
    />
    </div>
  </Layout>
)

export default IndexPage
