import {useEffect, useState} from 'react'
import { Container, Button, Card, Navbar, Toast} from 'react-bootstrap'; 
import MailSubject from '../MailSubject';
import ToastWrapper from '../layout/ToastWrapper';
import Correct from '../Correct';
import Options from '../buttons/Options';
import ShowMe from '../buttons/ShowMe';

const Question6 = ({page, handleNext, handleScore, obj}) => {
    const [step, setStep] = useState(0)
  const [correct, setCorrect] = useState(false)
  const [showpop, setShowpop] = useState(false)
  const [showpop2, setShowpop2] = useState(false)
  const handleStep = (e) => {
    setStep((step) => step + 1)
    
  }
  const handleCorrect = (e) => {
    if(e.target.value === obj[page-1]){
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
    <Container fluid className='Container2'>
        <Navbar className="p-4 Navbar">
            <p className="mx-5 text-white">{page}/8</p>
        </Navbar>
        <Container fluid className="h-50 Container d-flex flex-column justify-content-center align-items-center">
            <div className="text-center container-fluid form_details my-5 ">   
                <h1 className='text-white'>
                    {(step === 0)?
                    "Someone has been trying to access your account." 
                    : (correct)? <Correct /> : "This is actually a phishing email." }</h1> 
                {(step === 0)?
                <>
                <p>Look carefully before changing your password.</p>
                <Options handleCorrect={handleCorrect}/> 
                </>
                : 
                ((correct)?
                <>
                <p>This phish used a look-alike URL to masquerade as Gmail. In fact, this is almost identical to an attack used to successfully hack politicians’ emails. Always be sure to check URLs carefully!</p>
                <ShowMe handleStep={handleStep}/>
                </>
                :
                <>
                <p>This phish used a look-alike URL to masquerade as Gmail. In fact, this is almost identical to an attack used to successfully hack politicians’ emails. Always be sure to check URLs carefully!</p>
                <ShowMe handleStep={handleStep}/>
                </>) 
                }

           </div>
        </Container>
        <Container className="vh-75" bg="success">
            <ToastWrapper>
                <Card.Body>
                    <Card.Title className='position-relative'>
                        <MailSubject/>
                        <Toast show={showpop} className="position-absolute top-25 shadow z-index-5">
                          <Toast.Body>
                            <p>The sender address “google.support” isn’t used.</p>
                            <div className="text-right"><Button className="text-right" onClick={handleStep} >Next</Button></div>
                            
                          </Toast.Body>
                        </Toast>                        
                    </Card.Title>
                    <Card.Text >
                        <h4>Someone has your password</h4>
                        <p>Hi,</p>
                        <p>Someone just used your password to try to sign in to your Outlook account.</p>
                        <div>
                            <h5>Information:</h5>
                            <p>Tuesday,10 May 2022 at 23:58:03 GMT +01:00</p>
                            <p>Slatina, Romania</p>
                            <p>Firefox Browser</p>
                        </div>
                        <div>
                        <Button className="">Change     Password</Button>
                        <Toast show={showpop2} className="position-absolute top-25 shadow z-index-5">
                          <Toast.Body>
                            <p> This link points to a subdomain of “ml-security.org”, not Google. </p>
                            <div className="text-right"><Button className="text-right" onClick={handleStep} >Next</Button></div>
                            
                          </Toast.Body>
                        </Toast>  
                        </div>
                        <p>Best,</p>
                        <p>The Mail Team</p>
                        
                    </Card.Text>
                </Card.Body>
            </ToastWrapper>
        </Container>
    </Container>
  )
}

export default Question6