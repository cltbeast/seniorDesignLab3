import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <link rel="stylesheet" href = "../components/layout.css"></link>
    <h1 className = 'header'>Click the links below to learn more about us!</h1>
    <div className = 'linkRefs'>
    <p>
      <Link className = 'navBarLink' to="/teamIntro/">Team Introduction</Link>
      <Link className = 'navBarLink' to="/anthonyPage/">Anthony Berns-Leone</Link> 
      <Link className = 'navBarLink'to="/kennethPage/">Kenneth Horst</Link>
      <Link className = 'navBarLink' to="/collinPage">Collin Thornton</Link>
      <Link className = 'navBarLink' to="/waylonPage">Waylon Weirather</Link>
    </p>
    <p className="teamDescription">
    Welcome to Team Top 3 && !(2||3)'s Home Page!
    </p>
    <p className="teamDescription">
    Feel free to click around and get to know our team members
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
