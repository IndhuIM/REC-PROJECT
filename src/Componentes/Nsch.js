import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaArrowRight } from "react-icons/fa";
import first from './IMG/S-1.png'
import second from './IMG/S-2.png'
import third from './IMG/S3.png'
import third2 from './IMG/S4.png'
import third3 from './IMG/S-5.png'
import third4 from './IMG/S-6.png'
import third5 from './IMG/S-7.png'
import colorimg from './IMG/img1.png'
import colorimg1 from './IMG/cm-2.png'
import colorimg2 from './IMG/cm-3.png'
import colorimg3 from './IMG/cm-4.png'
import colorimg4 from './IMG/cm-5.png'
import colorimg5 from './IMG/cm-6.png'
import colorimg6 from './IMG/cm-7.png'
import longimg from './IMG/longimg.png'
import corimg from './IMG/A-1.png'
import corimg2 from './IMG/A-2.png'
import corimg3 from './IMG/A-3.png'
import corimg4 from './IMG/A-4.png'
import corimg5 from './IMG/A-5.png'
import corimg6 from './IMG/A-6.png'
import corimg7 from './IMG/A-7.png'
import corimg8 from './IMG/A-8.png'
import corimg9 from './IMG/A-9.png'
import corimg10 from './IMG/A-10.png'
import finalimg from './IMG/F-1.png'
import { FaCircleArrowRight } from "react-icons/fa6";

import {
  MinusOutlined,
    PlusOutlined,
  } from "@ant-design/icons";
  import { Collapse } from "antd";


const Nsch = () => {
  const items2 = [
    {
      key: "1",
      label:
        "As a fresher it is good to do a full-stack developer course to get a good job?",
      children: (
        <div>
          <div className="border-l-4 border-[#49adcc] p-3 text-base pl-3 bg-[#49adcc8f] content ">
            Not the fresher or the well-trained developer, if you up skill your
            knowledge in a full stack course then definitely you will find a
            better career.
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: "What does a full-stack developer do?",
      children: (
        <div>
          <div className="border-l-4 border-[#49adcc] p-3 text-base pl-3 bg-[#49adcc8f] content ">
            A full-stack developer is a professional who can handle back-end
            development tasks such as databases, servers, and systems engineering,
            as well as front-end web development and UI work. Depending on the
            project, your work might include a mobile stack, a web stack, or a
            native application stack.
          </div>
        </div>
      ),
    },
    {
      key: "3",
      label: "Who should take up full stack development training?",
      children: (
        <div>
          <div className="border-l-4 border-[#49adcc] p-3 text-base pl-3 bg-[#49adcc8f] content ">
            Undergraduates and fresher looking to make their career in full stack
            and MEAN stack. Developers, Designers and freelancers who want to
            build their own apps.
          </div>
        </div>
      ),
    },
    {
      key: "4",
      label:
        "What are the prerequisites for taking up a full stack development course?",
      children: (
        <div>
          <div className="border-l-4 border-[#49adcc] p-3 text-base pl-3 bg-[#49adcc8f] content ">
            We do not enforce any pre-requisites for learners who want to up skill
            their knowledge. Everybody is welcome to enroll in this course.
          </div>
        </div>
      ),
    },
    {
      key: "5",
      label:
        "What kind of projects are included as part of the full stack development training?",
      children: (
        <div>
          <div className="border-l-4 border-[#49adcc] p-3 text-base pl-3 bg-[#49adcc8f]">
            N-school Academy offers you the most updated, relevant and high value
            real-time projects as part of the training program.
          </div>
        </div>
      ),
    },
    {
      key: "6",
      label: "Do you provide a discount?",
      children: (
        <div>
          <div className="border-l-4 border-[#49adcc] p-3 text-base pl-3 bg-[#49adcc8f] content ">
            Sometimes we do have discounts for our courses and make some offer
            announcements during the festival time
          </div>
        </div>
      ),
    },
  ];
  return (
    <Container fluid className='mt-5' >
      <Container>
      <Row>
        <Col lg={6} className='mt-5 headingone'>
          <h3><b> KITKAT Software Technologies </b></h3>
          <h3> <b>you a seamless process of </b></h3>
          <h3><b>Internship in a company like </b></h3>
          <h3><b>collaborative environment. </b></h3>
          <p className='mt-5'>Choose an Internship role, access learning resources, get skilled mentor support, and complete the
            assigned project within the Target.</p>
          <button className='mt-5 Enquiryicon '>Enquiry Now < FaArrowRight /></button>

        </Col>
        <Col lg={6}>
          <img src={first} alt='' style={{ width: "100%" }}/>
        </Col>

      </Row>
      </Container>
    

      <Row className='mt-5 text-center'>
        <Col lg={12}>
          <h1><b>Best Internship Training Program at  KITKAT Academy</b></h1>
          <p>Get into Top emerging roles by learning from scratch and build real-time projects.</p>
        </Col>
      </Row>

      <Row className='mt-5'>
        <Col lg={6}>
          <img src={second} style={{ width: "100%" }} alt='' />
        </Col>
        <Col lg={6} className='mt-5'>
          <p>At   KITKAT, we frame well-developed IT internship programs in Coimbatore for undergraduate and postgraduate students. The internship program is a unique learning platform for students to experience the corporate world and sharpen their technical skills.</p>
          <p>Our student internship program in Coimbatore is more than just theoretical exposure. As an   KITKAT intern, students have the chance to be a part of a prominent organisation and actively participate in making decisions that shape the company’s outcome.</p>
          <p>From working on real time projects to sharing ideas and insights that are instrumental in achieving the business goals, our IT internship programs prepare students for a successful career.</p>
        </Col>
      </Row>

<Container fluid className='Domain'>
<Row className='text-center mt-5'>
        <h1><b>Dominance of Internships in Your Academic Career</b></h1>
        <p>An internship program is a gateway to numerous opportunities and here at   KITKAT, we offer students an excellent way of mastering key skills in the IT industry.</p>
      </Row>

      <Row className='mt-3 fiveimg text-center'>
        <Col lg={2} className='Srow '>
          <img src={third} className='Smallimg  mt-5' alt=''/>
          <h6 className='mt-3'><b>Profile Enhancement</b></h6>
          <p className='text-center mt-3'>Internships are a great way to apply the knowledge from the classroom to real-world experience. Learning is a thing, but taking those skills into the workforce and applying them is a great way to explore profile and its specializations.</p>
        </Col>
        <Col lg={2} className='Srow'>
          <img src={third2} className='Smallimg  mt-5' alt=''/>
          <h6 className='mt-3 ms-3'><b>Adopt new technologies</b></h6>
          <p className='text-center mt-3'>Having an internship gives you experience in the IT field you want to pursue. It also helps in preparing you for the IT expectations and boosts your confidence to work professionally.</p>
        </Col>
        <Col lg={2} className='Srow'>
          <img src={third3} className='Smallimg  mt-5' alt=''/>
          <h6 className=' mt-3 ms-3'><b>Learn the Professional Workplace</b></h6>
          <p className='text-center mt-3'>Get set to feel the Internship training to learn more about workplace culture, employee relations, and leadership structure which help you to an onboard professional career.</p>
        </Col>
        <Col lg={2} className='Srow' >
          <img src={third4} className='Smallimg  mt-5' alt=''/>
          <h6 className='mt-3 ms-3'><b>Build Resume</b></h6>
          <p className='text-center mt-3'>Resumes holding Internship experience are more valuable and considerable. They actually consider you as professionally trained for just entry positions. Resume preparation and Resume model is also preached in our Internship training.</p>
        </Col>
        <Col lg={2} className='Srow'>
        <img src={third5} className='Smallimg  mt-5' alt=''/>
        <h6 className='mt-3 ms-3'><b>Grab Your Dream Job</b></h6>
        <p className='text-center mt-3'>After going through all these practices, you will finally land up in your dream job at your dream company. Internships professionally train you right during your academic period.</p>
        </Col>
      </Row>

</Container>
     

<Container>
<Row>
  <h1 className='text-center mt-5'><b>WHY   KITKAT ACADEMY FOR INTERNSHIPS?</b></h1>

  <Col lg={6}>
    <p> <FaCircleArrowRight />  KITKAT follows a structured process of executing the internship training. Build a promising career path by exploring the  KITKAT IT internship programs in Coimbatore. KITKAT follows a structured process of executing the internship training. Build a promising career path by exploring the   KITKAT IT internship programs in Coimbatore programs in Coimbatore..</p>
    <p> <FaCircleArrowRight /> Attend a face-to-face interview (C, C++, Java).</p>
    <p><FaCircleArrowRight />  Choose from technologies like Android, iOS, PHP, JAVA & Software testing , etc., subjected to your interests in the internship.</p>
    <p><FaCircleArrowRight /> Six months hands-on training is provided.</p>
    <p><FaCircleArrowRight /> During the Training Period assigned to a new real-time project, either individually or as a group and the project modules are explained.</p>
    <p> <FaCircleArrowRight />At the end of the project, interns are provided with the internship certificate.</p>
    <p> <FaCircleArrowRight /> Placement assistance is provided at the end of the training program.</p>
  </Col>
  <Col lg={3}>
   <div className='box1'>
      <div className='firstbox'>
       <h5>100% handson training</h5>
      <img src={colorimg} alt=''/>
      </div>
      <br/>
      <div className='firstbox1'>
       <h5>Live Exposure to R&D Projects</h5>
      <img src={colorimg1} alt=''/>
      </div>
      <br/>
      
      <div className='firstbox2'>
       <h5>1 day to any Number of days</h5>
      <img src={colorimg2} alt=''/>
      </div>
      <br/>
      
      <div className='firstbox3'>
       <h5>Complete Project Guidance / Creation</h5>
      <img src={colorimg3} alt=''/>
      </div>
   </div>
  </Col>
  <Col lg={3}>
  <div className='box2'>
      <div className='firstbox4'>
       <h5>Training by MNC Trainers</h5>
      <img src={colorimg4} alt=''/>
      </div>
      <br/>
      <div className='firstbox6'>
       <h5>Industry Recognized Certificate</h5>
      <img src={colorimg5} alt=''/>
      </div>
      <br/>

      <div className='firstbox7'>
       <h5>Placement Training</h5>
      <img src={colorimg6} alt=''/>
      </div>
      <br/>

      <div className='firstbox8'>
       <h5>Internship report Support</h5>
      <img src={colorimg6} alt=''/>
      </div>
   </div>
    </Col>

</Row>
</Container>


<Container>
<Row className='text-center mt-5'>
  <h1><b>Our Internship Training Process</b></h1>
  <p> KITKAT Academy follows a structured process of executing the Internship Training. Build a promising career path by exploring our   KITKAT Academy IT Internship programs in Coimbatore.</p>
 <div className='text-center'>
 <img src={longimg} style={{width:"80%"}} alt=''/>
 </div>
  <h1 className='text-cener mt-5'><b>Internship Courses</b></h1>
  <p>Our Internship training tailors your needs to quench your IT thirst related to IT courses, Management courses, and Data Science courses. Our training practice on the below courses are perfectly blended with options for effective e-learning also.</p>
  </Row>

<Container>
<Row className='coretitle'>

<Col lg={3} className='corimg'>
    <img src={corimg} alt=''/>
    <h5><b>Full Stack Development</b></h5>
    <p className='mt-5'>Read More < FaArrowRight /></p>
  </Col>

  <Col lg={3} className='corimg'>
  <img src={corimg3} alt=''/>
  <h5><b>IOS Training</b></h5>
  <p className='mt-5'>Read More  < FaArrowRight /></p>
  </Col>

  <Col lg={3} className='corimg'>
  <img src={corimg4} alt=''/>
  <h5><b>Android Training</b></h5>
  <p className='mt-5'>Read More < FaArrowRight /></p>
  </Col>

  <Col lg={3} className='corimg'>
  <img src={corimg5} alt=''/>
  <h5><b>Python Development</b></h5>
  <p className='mt-5'>Read More < FaArrowRight /> </p>
  </Col>

</Row>
</Container>

<Container>
<Row className='coretitle'>

  <Col lg={3} className='corimg'>
    <img src={corimg6} alt=''/>
    <h5><b>PHP Development</b></h5>
  <p className='mt-5'>Read More < FaArrowRight /> </p>
  </Col>

  <Col lg={3} className='corimg'>
  <img src={corimg7} alt=''/>
  <h5><b>Node js Development</b></h5>
  <p className='mt-5'>Read More < FaArrowRight /> </p>
  </Col>

  <Col lg={3} className='corimg'>
  <img src={corimg9} alt=''/>
  <h5><b>React js Training</b></h5>
  <p className='mt-5'>Read More < FaArrowRight /> </p>
  </Col>

  <Col lg={3} className='corimg'>
  <img src={corimg10} alt=''/>
  <h5><b>DevOps Training</b></h5>
  <p className='mt-5'>Read More < FaArrowRight /> </p>
  </Col>

</Row>
</Container>
</Container>

<Row className='Team mt-5 '>
  <Col lg={6} className='team1 '>
    <h2 className='mt-5 text-white text-decoration-underline'><b>JOIN OUR TEAM</b></h2>
    <p className='text-center mt-5 text-white'>Our Technical team is so energetic and filled with positive vibes all over. We feel thrilled to accompany you in our Internship training program. Collaborate with our Innovators at   KITKAT Academy and mould a successful developer in you.</p>
    <br/>
    <button className='contact mt-5'>CONTACT US</button>

  </Col>
  <Col lg={6} className='team2'>
    <img src={finalimg} style={{width:"70%"}} alt=''/>
  </Col>
</Row>

<Container fluid >
<div className="text-3xl font-semibold mt-14 mb-6 qustion ">
            Frequently Asked Questions
          </div>
          <div className='ant'>
            <Collapse
              items={items2}
              expandIcon={({ isActive }) => (
                <div>
                  {!isActive ? (
                    <PlusOutlined className="text-white" />
                  ) : (
                    <MinusOutlined className="text-white" />
                  )}
                </div>
              )}
              accordion
            />
          </div>
</Container>


    </Container>

  )
}

export default Nsch
