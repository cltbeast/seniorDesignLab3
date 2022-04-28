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
    
    <div class="row">
        <div class="column">
        <StaticImage
          src="../images/collinCardinalsGame.jpeg"
          width={300}
          quality={90}
          alt="cardinals game"
        />
        </div>
        <div>
        </div>
        <div class="column">
          <StaticImage
          src="../images/collinFishing.jpg"
          width={300}
          height={225}
          quality={90}
          alt="cardinals game"
          />
        </div>
    </div>
    
    <div class="row-caption">
      <div class = "column-caption">
      <p className = "photo-caption">A photo of my cousin, Cameron, and me at Busch Stadium in St. Louis.</p>
      </div>
      <div class = "column-caption">
      <p className = "photo-caption-right">Another photo</p>
      </div>
    </div>
    
  
    
  </Layout>
)
export default collinPage





