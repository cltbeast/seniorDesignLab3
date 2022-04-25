import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Video from "../components/video"

const kennethPage = () => (
  <Layout>
    <Link to="/">Back to the home page</Link>
    <h1>Kenneth Horst</h1>
    <p className="personalPageInfo"> Hi!  I am a Computer Engineering and Electrical Engineering double major student at the University of Iowa with focusses on Computer Networking.  My work experience consists of 22 years working in the Air Force as a medic.  I have worked as a compliance inspector in Infection Control, a Paramedic in multiple ERs, and an ICU technician.  Over the years I have seen the worst of two wars, broken bodies, broken spirits, and many people on the verge of death.  This has taken its own toll on my mind and body.  To this, I have recommitted to a childhood passion of working with and on computers. In what little freetime I have, I enjoy building electronic projects, learning more about cybersecurity, and playing games to destress.  I have a wife and two daughters, Kira, 19 and Alexis, 7, who try to occupy as much free time as I can give along with two dogs, Niko and Abe, three cats, Hunter, Shadow and Camille.</p>

  <div className="image-container">
    <StaticImage
      src="../images/family.jpg"
      quality={90}
      
      alt="Family" />
  </div>

  [YOUTUBE EMBED: my video](https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ)
  [embed: my video](https://www.youtube.com/embed/dQw4w9WgXcQ)
  </Layout>


)

export default kennethPage
