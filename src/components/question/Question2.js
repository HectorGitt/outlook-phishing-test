import React, {useEffect, useState} from 'react'
import { Container, Button, Card, Navbar, Toast} from 'react-bootstrap'; 
import MailSubject from '../MailSubject';
import Correct from '../Correct';
import ToastWrapper from '../layout/ToastWrapper';
import Options from '../buttons/Options';
import ShowMe from '../buttons/ShowMe';
import LinkWrapper from '../buttons/LinkWrapper';


const Question2 = ({page, handleScore, handleNext, obj}) => {
  const [step, setStep] = useState(0)
  const [correct, setCorrect] = useState(false)
  const [showpop, setShowpop] = useState(false)
  const [showpop2, setShowpop2] = useState(false)
  const handleStep = (e) => {
    setStep((step) => step + 1)
    
  }
  const handleCorrect = (e) => {
    if(e.target.value === obj[page]){
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
    }
    else if (step === 3){
      setShowpop(false)
      setShowpop2(true)
      window.scrollTo({
        top: document.body.scrollHeight + 200,
        left:0,
        behavior: 'smooth',
      })
    }
    else if (step ===4) {
      handleNext()
    }

    
  }, [step, page, handleNext, showpop])
  return (
    <Container fluid className="Container2">
        <Navbar className="p-4 Navbar">
            <p className="mx-5 text-white">{page}/8</p>
        </Navbar>
        <Container fluid className="vh-50 w-100 Container d-flex flex-column justify-content-center align-items-center">
            <div className="text-center container-fluid form_details my-5 ">   
                <h1 className='text-white'>
                    {(step === 0)?
                    "You've received a fax!" 
                    : (correct)? <Correct /> : "This is actually a phishing email." }</h1> 
                {(step === 0)?
                <>
                <p>We know you're excited, but take your time.</p>
                <Options handleCorrect={handleCorrect}/> 
                </>
                : 
                ((correct)?
                <>
                <p>Well spotted! As you saw, the sender's email domain is misspelled as “efacks” and the link actually points to “mailru382.co”. Phishing often tries to trick you with look-alike URLs.</p>
                <ShowMe handleStep={handleStep} step={step}/>
                </>
                :
                <>
                <p>The sender's email domain is misspelled as “efacks” and the link actually points at “mailru382.co”. Phishing often tries to trick you with look-alike URLs.</p>
                <ShowMe handleStep={handleStep} step={step}/>
                </>) 
                }
                
           </div>
        </Container>
        <Container fluid className="vh-75" bg="success">
          <ToastWrapper>
                <Toast.Body>
                    <Card.Title>
                        <MailSubject cc="http://182.u74.u72389.283o9" props="euidh@hsks.com" acronym="E"/>
                        <Toast  show={showpop} className="position-absolute top-25 shadow z-index-5">
                          <Toast.Body>
                            <p> The sender address is “efacks.com”, which is misspelled. On the next question, try exploring the header for more details.</p>
                            <div className="text-right"><Button className="text-right" onClick={handleStep} >Next</Button></div>
                            
                          </Toast.Body>
                        </Toast>  
                    </Card.Title>
                    <div >
                      <div>
                        <Card className="card-mdf">
                          <Card.Body>
                            <Card.Title>
                            <p className='bg-primary py-3 m-0 text-white container-fluid'>Alliance Mechanical Services, LLC</p>
                              <div className='flex-mdf d-flex justify-content-around m-0 align-items-center'>
                                <div className="d-flex  align-items-center">
                                  <div className='d-flex flex-column justify-content-end'>
                                    <h4>Invoice</h4>
                                    <p>321464</p>
                                  </div>
                                  <p className='text-danger px-4'>Due: 07/15/2021</p>
                                </div>
                                <h3 >Amount Due: <span className='text-success'>$8,015.50</span></h3>                                
                              </div>
                            </Card.Title>
                            <div>
                              <h4>Dear Vendor:</h4>
                              <p>Your invoice paymenr is attached. Please review payment confirmation at your earliest convenience</p>
                              <p>Thank you for your business, we appreciate it very much</p>
                              <p>Sincerely,</p>
                              <h4>Alliance Mechanical Services, LLC</h4>
                              <LinkWrapper to="http://182.u74.u72389.283o9" message="http://182.u74.u72389.283o9" >Open this fax</LinkWrapper>
                              <Toast show={showpop2} className="position-absolute top-25 shadow z-index-5">
                                <Toast.Body>
                                  <p>  The link is actually “mailru382.co”, which you can see at the end of the domain name — not at all what you’d expect. </p>
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
  )
}

export default Question2