
const AboutUs = () => {
    return (

    <section id="Our-Mission1">
      <div className = "section1">
          <div className="container text-center pt-5">
              <div class="row align">
                  <div class="col">

                      <div className = "container uppercase">
                      <h1> Our Mission </h1>
                      </div>

                      <div className ="container text-left" >
                      <p>At FragPulse, our story is one fueled by innovation and collaboration in the dynamic world of gaming. Born out of a shared passion for pushing boundaries and exploring new horizons in the gaming industry, FragPulse is a diverse team of creative minds united by the thrill of turning gaming concepts into reality.  Join our community as FragPulse pioneers the future of gaming, where creativity knows no bounds, and every pulse is a beat towards a more immersive gaming universe.</p>
                      </div>

                  </div>

                  <div className="col">
                        <img src={require("../images/company_photo.jpeg")} className="img-responsive img-circle rounded-lg" width={"300"} height={"50"}></img>
                  </div>
              </div>
          </div>
      </div>






       <div className = "container text-center ">
           <div class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
        </div>


                      <div className = "container uppercase">
                       <h1> Meet the team </h1>
                      </div>



       </div>



    <div  class = "Team ">
      <div className = "member1 py-11 ">
          <div className="container text-center">
              <div class="row align">
                  <div class="col">
                      <h1> Steven Awakem </h1>

                      <div className ="container text-left" >
                      <p> Hi, I'm Steven Awakem. I’m currently pursuing a Bachelor's Degree in Computer Engineering at San Diego State University. I’m currently learning Web Design and Database, Operating Systems, and the Basys 3. I’m looking to collaborate on projects that aims to enhance the customer experience.Fun fact: I was born in Greece, Athens. </p>
                      </div>
                  </div>

                  <div className="col">
                        <img src={require("../images/Steven.png")} className="img-responsive img-circle  rounded-full " width={"300"} height={"50"}></img>
                  </div>
              </div>
          </div>
      </div>


      <div className = "member2 py-11">
          <div className="container text-center">
              <div class="row align">
                  <div class="col ">

                      <h1> Luis Bello </h1>
                      <div className ="container text-left" >
                      <p>Hi, I'm Luis Bello V. I'm interested in Embedded Systems, Cloud Systems, Web Development, Network Engineering, and OS Systems. Looking to collaborate on projects that blends creativity and computer technology. I’m pursuing a Bachelor's Degree in Electrical and Computer Engineering</p>
                      </div>
                  </div>

                     <div className="col">
                       <img src={require("../images/Luis.png")} className="img-responsive img-circle  rounded-full " width={"300"} height={"50"}></img>
                  </div>
              </div>
          </div>
      </div>

      <div className = "member3 py-11">
          <div className="container text-center">
              <div class="row align">
                  <div class="col">
                      <h1> Lance Reyes </h1>
                      <div className ="container text-left" >
                      <p>Hi, I'm Lance Reyes, I’m a computer engineering major at San Diego State Univeristy. I’m currently learning Web Programming and Embedded Operating systems. Interested in software development.</p>
                      </div>
                  </div>

                 <div className="col">
                  <img src={require("../images/Lance.png")} className="img-responsive img-circle  rounded-full " width={"300"} height={"50"}></img>
                  </div>
              </div>
          </div>
      </div>

      <div className = "member4 py-11">
          <div className="container text-center">
              <div class="row align">
                  <div class="col">
                      <h1> Miguel Corral  </h1>

                      <div className ="container text-left" >
                      <p> Hi, I’m Miguel Corral.I’m interested in automation, AI learning, learning new coding languages, video games, card games, and anything tech related. I’m currently refreshing on python. I’m looking to collaborate on anything that looks interesting and or helps daily activities. How to reach me: discord, phone or email</p>
                      </div>
                  </div>

                <div className="col ">
                   <img src={require("../images/OldphotoWebsite.jpg")} className="img-responsive img-circle  rounded-full " width={"300"} height={"50"}></img>
                  </div>
              </div>
          </div>
      </div>


      <div className = "member5 py-11">
          <div className="container text-center">
              <div class="row align">
                  <div class="col">
                      <h1> Jesus Sandoval </h1>
                      <div className ="container text-left" >
                      <p> Hi, I am Jesus Angel Sandoval. My interests include computer logic design, embedded systems, and backend web development. I am a Project Engineering Assistant at Solar Turbines. I will receive a Bachelor's degree in Computer Engineering from SDSU.</p>
                      </div>
                  </div>

                <div className="col">
                  <img src={require("../images/Jesus.png")} className="img-responsive img-circle  rounded-full " width={"300"} height={"50"}></img>
                  </div>

              </div>
          </div>
      </div>

</div>


    </section>

    )
}

export default AboutUs
