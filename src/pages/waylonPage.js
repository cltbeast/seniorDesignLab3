import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const waylonPage = () => (
  <Layout>
    <Link to="/">Back to the home page</Link>
    <h1>Waylon Weirather</h1>
    <p className="personalPageInfo"> I am a senior electrical engineering honors student with a focus in power systems at the University of Iowa. In the summer I work for Ameren UE, an energy provider for Illinois and Missouri. I work at the Keokuk Energy Center shown in the picture. I have overseen the upgrade of 3 exciter units, assisted with an upgrade to the control system for one generator, and assisted with the commissining of a newly rebuilt unit. Personally, I love to play baseball and coach young pitchers. Please reach out to me at wpweirather@uiowa.edu with any questions, or leave a comment below!</p>
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

export default waylonPage
