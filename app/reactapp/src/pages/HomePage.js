import React, {Component} from 'react';
import {Container, Row, Col, Form, Button, Card, CardImg} from "react-bootstrap";
import { Link } from "react-router-dom"

class HomePage extends Component {
    render() {
        return (

       <Container fluid>

       <div>
      <label htmlFor="Search Players" className="block text-sm font-medium leading-6 text-gray-900">

      </label>
      <div className="relative mt-2 text-center pt-5">
        <div className="text-center pt-5 pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className=" text-gray-500 sm:text-sm"></span>
        </div>
        <input
          type="text"
          name="Search"
          id="Search"
          className="w-10/12 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 "
          placeholder="Search Players"
        />

        <div className="absolute inset-y-0 right-0 flex items-center">

          <label htmlFor="Find" className="sr-only">
           Players
          </label>
          <div className="text-center pt-5">

            <Button variant="secondary" className=" sticky top-0 "> Search</Button>

            </div>
        </div>

      </div>
    </div>

     <div className="w-25 p-3"></div>

         <div className = "banner border border-gray bg-gray-400 pb-2 pt-2">
             <div className ="tracking text-center pt-3">
    <h1> Players online: 9,767,564,897</h1>
    </div>
    <div className="w-25 p-3"></div>
          <div className="container text-center pb-2 ">
              <div class="md: flex">
                  <div class="col">
                        <div className ="container pr-1.5" >
                      <img src={require("../images/gamestats.png")} className="img-responsive  ml-20" alt={"game stats"} width={"375"} height={"50"}></img>
                         </div>
                  </div>

                  <div className="col">

                      <div className = "container text-left">
                      <h1> Jump into the action!</h1>
                      </div>

                      <div className ="container text-left" >
                      <p>Track and analyze your victories and defeats, climb the leaderboards. Elevate your gaming experience with real-time stats. Level up your play, even the playing field!</p>
                      </div>

                  </div>
              </div>
          </div>
      </div>





              <div className="w-25 p-5"></div>
                <Row className="space-x-4 justify-content-lg-center">
                  <Card  className="game3_img p-3" style={{ width: '18rem' }}>

                    <CardImg className="game2_img"/>

                    <div class = "flex justify-center items-center">
                    <img src={require("../images/sre11-fa54ac1fab9be0d19bd113b40cefd5cdca031fa7f5290aa6e42dccca3b02f38f.jpg")} className="img-responsive" alt={"CSGO_Photo"} width={"300"} height={"200"}></img>
                     </div>

                    <Card.Body className="game_text pt-4">
                      <Card.Title>Counter-Strike: Global Offensive</Card.Title>

                      <Card.Text>
                        Strategize and plan in the world-renowned first person shooter CSGO.
                      </Card.Text>

                        <div className="pt-2">
                         <Link to="/CSGO">
                            <Button variant="danger">View Game Page</Button>
                          </Link>
                            </div>
                    </Card.Body>
                  </Card>


                  <Card className="game2 p-3" style={{ width: '18rem' }}>
                    <CardImg className="game2_img"/>
                    <div class = "flex justify-center items-center">
                    <img src={require("../images/apex_cover.jpeg")} className="img-responsive" alt={"CSGO_Photo"} width={"300"} height={"200"}></img>
                    </div>
                    <Card.Body className="game_text">
                      <Card.Title>APEX LEGENDS</Card.Title>
                      <Card.Text>
                        Squad up and be the last team standing in the fast paced Battle Royale APEX LEGENDS.
                      </Card.Text>

                               <div className="pt-4">
                            <Link to="/Apex">
                            <Button variant="danger">View Game Page</Button>
                            </Link>
                            </div>



                    </Card.Body>
                  </Card>


                  <Card className="game3 p-3" style={{ width: '18rem' }}>
                    <CardImg className="game3_img"/>

                     <div class = "flex justify-center items-center">
                    <img src={require("../images/valorant_cover.jpeg")} className="img-responsive" alt={"CSGO_Photo"} width={"175"} height={"200"}></img>
                    </div>
                    <Card.Body className="game_text pt-4">
                      <Card.Title>VALORANT</Card.Title>
                      <Card.Text>
                       Engage in intense team-based battles. Plan with your team to defeat the opposition in VALORANT.
                      </Card.Text>

                         <div className="pt-1">
                         <Link to="/valorant">
                            <Button variant="danger">View Game Page</Button>
                         </Link>
                           </div>
                    </Card.Body>
                  </Card>
                </Row>

              <div className="p-5">

              <h1>General Updates and Patches</h1>
              <p> Dive into Valorant, CSGO, and APEX Legends with our compact coverage of the most recent updates and patches. Expect new agents and strategies in Valorant, weapon tweaking and consistent anti-cheat mechanisms in CSGO, and a fresh battle royale experience in APEX Legends. Stay informed with gaming communities with FragPulse. </p>


              </div>

              <div className="p-5">
              <h1>Whats Trending</h1>
              <p>Find the latest and trending topics on FragPulse. Consume the latest content of Valorant, CSGO, and APEX Legends. Find out about the latest buzz on your favorite pro-players or the newest viral gameplay. </p>
              </div>

                <div className="p-5">
               <table class="table table-striped ">
                <thead>
                    <tr>
                    <th class="border border-slate-600 ...">Friends</th>
                    <th class="border border-slate-600 ...">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                      <td class="border border-slate-700 ...">User1</td>
                      <td class="border border-slate-700 ...">Online</td>
                    </tr>
                    <tr>
                      <td class="border border-slate-700 ...">User2</td>
                      <td class="border border-slate-700 ...">Offline</td>
                    </tr>
                    <tr>
                      <td class="border border-slate-700 ...">User3</td>
                      <td class="border border-slate-700 ...">Online</td>
                    </tr>
                  </tbody>
                </table>
                </div>

            <div className="p-5">
            </div>


            </Container>



        );
    }
}

export default HomePage;