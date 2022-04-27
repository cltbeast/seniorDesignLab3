import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const anthonyPage = () => (
  <Layout>
    <Link to="/">Back to the home page</Link>
    <h1>Anthony Berns-Leone</h1>
    <p className="personalPageInfo">Hello! I am a senior Electrical Engineering student at the University of Iowa with a focus in Communication Systems. My work experience consists of 5+ years in the audio, video,
        and lighting industry managing business accounts and designing AVL systems with clients.</p>
    <div className="image-container">
    <StaticImage
      src="../images/AcousticGuitarImg.jpg"
      width={300}
      quality={90}
      alt="iowa tigerhawk"
    />

    </div>
    <p className="personalPageInfo">In my free time I enjoy writing and playing music, playing soccer, and spoiling my cat, Sergio.  Want to know more? Ask!</p>
    <div className="image-container">
    <StaticImage
      src="../images/SoccerPic.jpg"
      width={300}
      quality={90}
      alt="iowa tigerhawk"
    />
    </div>
  </Layout>
)

export default anthonyPage
