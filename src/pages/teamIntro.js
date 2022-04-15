import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const teamIntroPage = () => (
  <Layout>
    <Link to="/">Back to the home page</Link>
    <h1>Meet Top 3 && !(2||3)</h1>
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
      <StaticImage
      src="../images/tigerhawk.png"
      width={300}
      quality={90}
      alt="iowa tigerhawk"
      />
    </div>
  </Layout>
)

export default teamIntroPage