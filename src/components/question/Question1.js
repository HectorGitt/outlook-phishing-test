import React, { useState, useEffect} from 'react'
import { Navbar, Container, Card,Toast, Button} from 'react-bootstrap'; 
import MailSubject from '../MailSubject';
import Correct from '../Correct';
import Options from '../buttons/Options';
import ShowMe from '../buttons/ShowMe';
import ToastWrapper from '../layout/ToastWrapper';
import { FaRegShareSquare, FaFilePdf } from "react-icons/fa";


const Question1 = ({handleNext,page, obj, handleScore}) => {
  const [step, setStep] = useState(0)
  const [correct, setCorrect] = useState(false)
  const [showpop, setShowpop] = useState(false)
  const handleStep = (e) => {
    setStep((step) => step + 1)
    
  }
  const handleCorrect = (e) => {
    const value = e.target.value
    if(value === obj[page]){
      handleScore()
      setCorrect(true)
      
    }
    handleStep()
  }
  useEffect(()=> {
    
    if (step === 1){
      
    }
    else if (step === 2){
      console.log(showpop)
      setShowpop(true)
      window.scrollTo({
        top: document.body.scrollHeight + 200,
        left:0,
        behavior: 'smooth',
      })

    }
    else if (step === 3){
      handleNext()
    }
 
    
  }, [step, page, handleNext, showpop])
  
  return (
    <Container fluid className="Container2">
        <Navbar className="p-4 Navbar">
            <p className="mx-5 text-white">{page}/8</p>
        </Navbar>
        <Container fluid className="vh-75 w-100 Container d-flex flex-column justify-content-center align-items-center">
            <div className="text-center container-fluid form_details my-5 ">   
                <h1 className='text-white'>
                  {(step === 0)?
                  "Let's start with this Outlook Doc email." 
                  : (correct)? <Correct /> : "This is actually a phishing email." }</h1> 
                <p>Be sure to check out link URLs by hovering or using long presses, and to explore the email addresses. Don't worry, none of the links will work - we don't want to send you anywhere funny!</p>
                {(step === 0)?<Options handleCorrect={handleCorrect}/> : <ShowMe handleStep={handleStep}/>}
                
           </div>
           <Container fluid className="vh-75 bg-white">
            <ToastWrapper>
                <Toast.Body >
                    <Card.Title >
                    <MailSubject />
                    </Card.Title>
                    <div >
                      <div className='w-50 mx-auto'>
                        <Card className="text-center card-mdf">
                            <Card.Body className='position-relative'>
                                <Card.Title>
                                    <p> <FaRegShareSquare/> </p>
                                    <p>Someone Shared Something to you</p>
                                </Card.Title>
                                <div>
                                dgdgdggdgd shared "dbjdjhddbbndbndbnbndbndbndbn" to you
                                </div>
                                <div className="attachment">
                                    <p> <FaFilePdf/> </p>
                                    <p>adjfjjff.pdf</p>
                                </div>
                                <Button variant="primary">Open</Button>
                                <Toast show={showpop} className="position-absolute top-25 shadow z-index-5">
                                  <Toast.Body>
                                    <p> Mousing over this link or using a long press will show you that it goes to the insecure imitation domain “drive--outlook.com”. </p>
                                    <div className="text-right"><Button className="text-right" onClick={handleStep} >Next</Button></div>
                                    
                                  </Toast.Body>
                                </Toast>
                            </Card.Body>
                        </Card>
                      </div>
                    </div>
                </Toast.Body>
            </ToastWrapper>
        </Container>
    </Container>
        </Container>
        
  )
}

export default Question1;