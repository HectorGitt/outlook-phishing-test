import React, { useState, useEffect} from 'react'
import { Navbar, Container, Card,Toast, Button} from 'react-bootstrap'; 
import MailSubject from '../MailSubject';
import Correct from '../Correct';
import Options from '../buttons/Options';
import ShowMe from '../buttons/ShowMe';
import ToastWrapper from '../layout/ToastWrapper';
import { FaRegShareSquare} from "react-icons/fa";
import pdf from "../../images/pdf.png";
import LinkWrapper from '../buttons/LinkWrapper';


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
                {/* <h1 className='text-white'>
                  {(step === 0)?
                  "Let's start with this Outlook Doc email." 
                  : (correct)? <Correct /> : "This is actually a phishing email." }</h1> 
                <p>Be sure to check out link URLs by hovering or using long presses, and to explore the email addresses. Don't worry, none of the links will work - we don't want to send you anywhere funny!</p>
                <p>You must have spotted the look-alike URL. Be cautious about hyperlinks and attachments you open from emails — they may direct you to fraudulent websites where you're asked to input sensitive information.</p>
                {(step === 0)?Options handleCorrect={handleCorrect}/> : <ShowMe handleStep={handleStep} step={step}/>} */}
                <h1 className='text-white'>
                    {(step === 0)?
                    "Let's start with this Outlook Doc email." 
                    : (correct)? <Correct /> : "This is actually a phishing email." }</h1> 
                {(step === 0)?
                <>
                <p>Be sure to check out link URLs by hovering or using long presses, and to explore the email addresses. Don't worry, none of the links will work - we don't want t</p>
                <Options handleCorrect={handleCorrect}/> 
                </>
                : 
                ((correct)?
                <>
                <p>The URL looks correct but is actually a look-alike. Be cautious about hyperlinks and attachments you open from emails — they may direct you to fraudulent websites where you're asked to input sensitive information.</p>
                <ShowMe handleStep={handleStep} step={step}/>
                </>
                :
                <>
                <p>The URL looks correct but is actually a look-alike. Be cautious about hyperlinks and attachments you open from emails — they may direct you to fraudulent websites where you're asked to input sensitive information.</p>
                <ShowMe handleStep={handleStep} step={step}/>
                </>) 
                }
                
           </div>
           <Container fluid className="vh-75 bg-white">
            <ToastWrapper>
                <Toast.Body >
                    <Card.Title >
                    <MailSubject props="Luke Johnson <luke.json8000@gmail.com>" acronym="L" cc="http://182.u74.u72389.283o9" />
                    </Card.Title>
                    <div>
                      <div className='container w-lg-50 w-sm-100 w-100 mx-auto'>
                        <Card className="text-center card-mdf w-lg-50 w-100 mx-auto">
                            <Card.Body >
                                <Card.Title>
                                    <p className='text-primary'> <FaRegShareSquare/> </p>
                                    <p>Someone Shared Something to you</p>
                                </Card.Title>
                                <div>
                                dgdgdggdgd shared "dbjdjhddbbndbndbnbndbndbndbn" to you
                                </div>
                                <div className="attachment">
                                    <img src={pdf} className="fluid" alt="" />
                                    <p>237888839383918727892892.pdf</p>
                                </div>
                                <div className='position-relative mx-auto w-50'>
                                  <LinkWrapper to="http://182.u74.u72389.283o9" message="http://182.u74.u72389.283o9">Open</LinkWrapper>
                                  <Toast show={showpop} className="position-absolute top-25 shadow z-index-5">
                                    <Toast.Body>
                                      <p> Mousing over this link or using a long press will show you that it goes to the insecure imitation domain “drive--outlook.com”. </p>
                                      <div className="text-right"><Button className="text-right" onClick={handleStep} >Next</Button></div>
                                      
                                    </Toast.Body>
                                  </Toast>
                                </div>
                                
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