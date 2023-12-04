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

         <div className = "banner">
          <div className="container text-center pt-5">
              <div class="row align">
                  <div class="col">
                        <div className ="container pr-1.5" >
                      <img src={require("../images/gamestats.png")} className="img-responsive  ml-20" alt={"game stats"} width={"450"} height={"50"}></img>
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
                <Row className="space-x-3 justify-content-lg-center">
                  <Card  className="game3_img" style={{ width: '18rem' }}>

                    <CardImg className="game2_img"/>

                    <img src={require("../images/sre11-fa54ac1fab9be0d19bd113b40cefd5cdca031fa7f5290aa6e42dccca3b02f38f.jpg")} className="img-responsive" alt={"CSGO_Photo"} width={"300"} height={"200"}></img>

                    <Card.Body className="game_text">
                      <Card.Title>Counter-Strike: Global Offensive</Card.Title>

                      <Card.Text>
                        Strategize and plan in the world-renowned first person shooter CSGO.
                      </Card.Text>


                         <Link to="/CSGO">
                            <Button variant="primary">View Game Page</Button>
                          </Link>

                    </Card.Body>
                  </Card>


                  <Card className="game2" style={{ width: '18rem' }}>
                    <CardImg className="game2_img"/>
                    <img src={require("../images/apex_cover.jpeg")} className="img-responsive" alt={"CSGO_Photo"} width={"300"} height={"200"}></img>
                    <Card.Body className="game_text">
                      <Card.Title>APEX LEGENDS</Card.Title>
                      <Card.Text>
                        Squad up with and be the last team standing in the fast paced Battle Royale APEX LEGENDS.
                      </Card.Text>

                            <Link to="/Apex">
                            <Button variant="primary">View Game Page</Button>
                            </Link>




                    </Card.Body>
                  </Card>


                  <Card className="game3" style={{ width: '18rem' }}>
                    <CardImg className="game3_img"/>

                    <img src={require("../images/valorant_cover.jpeg")} className="img-responsive" alt={"CSGO_Photo"} width={"200"} height={"200"}></img>

                    <Card.Body className="game_text">
                      <Card.Title>VALORANT</Card.Title>
                      <Card.Text>
                       Engage in intense team-based battles. Plan with your team to defeat the opposition in VALORANT.
                      </Card.Text>

                         <Link to="/valorant">
                            <Button variant="primary">View Game Page</Button>
                         </Link>

                    </Card.Body>
                  </Card>
                </Row>

              <div className="p-5">

              <h1>General Updates and Patches</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti pariatur magni expedita necessitatibus ab. Magnam, laudantium. Hic nisi laborum, doloribus quibusdam animi sequi, eligendi quam, minima velit maiores reprehenderit modi?</p>


              </div>

              <div className="p-5">
              <h1>Whats Trending</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti pariatur magni expedita necessitatibus ab. Magnam, laudantium. Hic nisi laborum, doloribus quibusdam animi sequi, eligendi quam, minima velit maiores reprehenderit modi?</p>
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