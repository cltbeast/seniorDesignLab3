import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
    //const button = document.createElement('button')
    //button.innerText = 'Click me'

    //button.addEventListener('click',()=>{
    //alert('Button was clicked!')
    //})
    //document.body.appendChild(button)

const waylonPage = () => (
  <Layout>

    <Link to="/">Back to the home page</Link>
    <h1>Waylon Weirather</h1>
    <p className="personalPageInfo"> I am a senior electrical engineering honors student with a focus in power systems at the University of Iowa. 
                                      In the summer I work for Ameren UE, an energy provider for Illinois and Missouri. I work at Ameren's Keokuk Energy 
                                      Center shown in the picture. I have overseen the upgrade of 3 exciter units, assisted with an upgrade to the 
                                      control system for one generator, and assisted with the comissioning of a newly rebuilt unit.  
                                      Please reach out to me at wpweirather@uiowa.edu with any questions, or leave a comment below!</p>
    <div className="image-container">
    <StaticImage
      src="../images/KeokukEnergyCenterNight.jpg"
      width={1000}
      quality={90}
      alt="Keokuk Energy Center"
    />
    </div>
    <p className="personalPageInfo"> Personally, I love to play baseball and coach young pitchers. I also like to work on cars in my free time. Below
                                      is a picture of my dad and I with his 1969 Dodge Daytona Charger at a car show. </p>
    <div className="image-container">
    <StaticImage
      src="../images/CarShowPrep.jpg"
      width={500}
      quality={90}
      alt="Car Show Prep"
    />
    </div>
  </Layout>
)

export default waylonPage
