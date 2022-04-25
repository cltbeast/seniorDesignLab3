import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"



const collinPage = () => (
  <Layout>
    <Link to="/">Back to the home page</Link>
    <h1>Collin Thornton</h1>
    <p className="personalPageInfo"> Hello, I am a senior Computer Science and Engineering student at the University of Iowa
    with a focus in Software Engineering.  </p>
    <div className="image-container">
    <StaticImage
      //src="../images/collinCardinalsGame.jpg"
      src="../images/collinCardinalsGame.jpeg"
      width={300}
      quality={90}
      alt="iowa tigerhawk"
    />
    </div>
  </Layout>
)
export default collinPage





