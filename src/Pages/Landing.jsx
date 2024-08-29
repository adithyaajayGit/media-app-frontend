import React from 'react';
import { Col, Row, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import audioplayerinteractionfinal from '../assets/audioplayerinteractionfinal.gif';

const Landing = () => {
  const navigatebyURL = useNavigate()
  return (
    <>
      <Row className='mt-5 align-items-center justify-content-between w-100'>
        <Col></Col>
        <Col lg={5}>
          <h1 style={{ color: "blueviolet", fontSize: "40px" }}>
            Welcome To <span className='text-warning'>Media Player</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore sapiente obcaecati atque est quos asperiores magni omnis temporibus optio, ratione ipsam libero quo tenetur recusandae neque suscipit, sequi pariatur esse.
            Nostrum laboriosam cumque dolor eos in odit est vero temporibus sit pariatur! Neque facilis debitis quaerat nam officiis sequi distinctio fugit, quibusdam natus quis, temporibus nihil nostrum, expedita ratione saepe.
            Aliquam, laborum eaque accusamus nisi quam libero. A, quod voluptatum est similique unde in eius aspernatur distinctio officiis earum maxime quae eos, sint aut! Ad unde iusto quod sint hic.
            Sapiente laboriosam hic iste enim ullam,ucimus fugit mollitia voluptatem quaerat facilis, dolore dolor exercitationem eligendi odit nihil atque assumenda expedita nam, quae ex maiores. Fugiat accusamus amet minima suscipit!
          </p>
          <Button onClick={() => navigatebyURL('/home')} className='btn-btn-info'>Get Started</Button>

        </Col>
        <Col lg={5}>
          <img
            src={audioplayerinteractionfinal}
            alt="Audio Player Interaction"
            className='mb-5 rounded-5'
            style={{ width: '100%', height: 'auto' }}
          />
        </Col>

        <Col></Col>
      </Row>

      <div className='container mb-5 mt-5'>
        <h2 className='text-center mb-4' style={{ color: 'orange' }}>Features</h2>
        <Row className='d-flex justify-content-center'>
          <Col lg={4} md={6} sm={12} className='mb-4'>
            <Card style={{ width: '23rem' }}>
              <Card.Img variant="top" src="https://images.pexels.com/photos/3784566/pexels-photo-3784566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <Card.Body>
                <Card.Title style={{ color: 'white' }} >Categorized Video</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12} className='mb-4'>
            <Card style={{ width: '23rem' }}>
              <Card.Img variant="top" src="https://images.pexels.com/photos/3784221/pexels-photo-3784221.jpeg?auto=compress&cs=tinysrgb&w=600" />
              <Card.Body>
                <Card.Title style={{ color: 'white' }} >Watch History</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12} className='mb-4'>
            <Card style={{ width: '23rem' }}>
              <Card.Img variant="top" src="https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <Card.Body>
                <Card.Title style={{ color: 'white' }} >Managing Videos</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>


      <div className="container mb-5 border rounded p-4 border-white mt-5 d-flex justify-content-center align-items-center">
        <div className='col-lg-5'>
          <h4>
            <span className='text-warning'>Simple & Fast</span>
          </h4>
          <h6 className='mb-5 mt-4'>
            <span className='text-primary'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla doloribus consequuntur, unde corporis fugit odit tenetur laudantium nostrum ullam voluptates. Exercitationem libero autem aspernatur fugit optio beatae, sint culpa facilis.
              Tenetur dolor, ad repellendus iusto aliquid, fugiat eius dicta, adipisci ratione nisi facilis tempora sunt vel eveniet voluptates aut facere? Consequuntur obcaecati illo tempora dicta reiciendis iste ratione molestiae temporibus!
            </span>
          </h6>
          <h4>
            <span className='text-warning'>Simple & Fast</span>
          </h4>
          <h6 className='mb-5 mt-4'>
            <span className='text-primary'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla doloribus consequuntur, unde corporis fugit odit tenetur laudantium nostrum ullam voluptates. Exercitationem libero autem aspernatur fugit optio beatae, sint culpa facilis.
              Tenetur dolor, ad repellendus iusto aliquid, fugiat eius dicta, adipisci ratione nisi facilis tempora sunt vel eveniet voluptates aut facere? Consequuntur obcaecati illo tempora dicta reiciendis iste ratione molestiae temporibus!
            </span>
          </h6>
          <h4>
            <span className='text-warning'>Simple & Fast</span>
          </h4>
          <h6 className='mb-5 mt-4'>
            <span className='text-primary'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla doloribus consequuntur, unde corporis fugit odit tenetur laudantium nostrum ullam voluptates. Exercitationem libero autem aspernatur fugit optio beatae, sint culpa facilis.
              Tenetur dolor, ad repellendus iusto aliquid, fugiat eius dicta, adipisci ratione nisi facilis tempora sunt vel eveniet voluptates aut facere? Consequuntur obcaecati illo tempora dicta reiciendis iste ratione molestiae temporibus!
            </span>
          </h6>

        </div>
        <div className='col-lg-5 mx-5'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/a3Ue-LN5B9U?si=70CaErRstRolZuWp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

      </div>

    </>
  );
}

export default Landing;
