import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const kennethPage = () => (
  <Layout>
    <Link to="/">Back to the home page</Link>
    <h1>Kenneth Horst</h1>
    <p className="personalPageInfo"> Kenneth's bio</p>
    <div className="image-container">
    <StaticImage
      src="../images/tigerhawk.png"
      width={300}
      quality={90}
      alt="iowa tigerhawk"
    />
    </div>
  </Layout>
)

export default kennethPage
