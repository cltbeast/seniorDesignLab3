import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"




const collinPage = () => (
  <Layout>
    <Link to="/">Back to the home page</Link>
    <h1>Collin Thornton</h1>
    <p className="personalPageInfo"> Hello, I am a senior Computer Science and Engineering student at the University of Iowa
   with a focus in Software Engineering. I've worked at the Surplus store here at the University of Iowa as a Computer Technician,
   restoring University hard drives and computers. In my free time I enjoy learning new things, hanging out with friends, watching sports, and playing video games.
    Feel free to reach out to me via email at collin-thornton@uiowa.edu.  </p>
    
    <div className="center-container">
    <StaticImage
      src="../images/collinCardinalsGame.jpeg"
      width={300}
      quality={90}
      alt="collin game"
    />
    </div>
    <p className="personalPageCaption"> My cousin, Cameron, and me at Busch Stadium in St. Louis </p>
    <div className="center-container">
    
    <StaticImage
      src="../images/collinFishing.jpg"
      width={300}
      quality={90}
      alt="fishing"
    />
    </div>
    <p className="personalPageCaption"> A successful day of fishing for King Mackerel in St. Augustine, Florida. </p>
    
  
    
  
    
  </Layout>
)
export default collinPage





