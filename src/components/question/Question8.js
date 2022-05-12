import {useEffect, useState} from 'react'
import { Container, Button, Navbar, Toast, Card, Image} from 'react-bootstrap'; 
import ToastWrapper from '../layout/ToastWrapper';
import Options from '../buttons/Options';
import ShowMe from '../buttons/ShowMe';
import logo from '../../images/microsoft-logo-png-2396.png'

const Question8 = ({page, handleNext, handleScore, obj, email, name}) => {
    const [step, setStep] = useState(0)
  const [correct, setCorrect] = useState(false)
  const [showpop, setShowpop] = useState(false)
  const [showpop2, setShowpop2] = useState(false)
  const handleStep = (e) => {
    setStep((step) => step + 1)
    
  }
  const handleCorrect = (e) => {
    if(e.currentTarget.value === obj[page-1]){
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
        <Container fluid className="h-50 Container d-flex flex-column justify-content-center align-items-center">
            <div className="text-center container-fluid form_details my-5">   
            <h1 className='text-white'>
                    {(step === 0)?
                    "Your account seems to be under attack again." 
                    : (correct)? "Correct. This is based on a real warning but links to a fake login page." : "This is actually a phishing email." }</h1> 
                {(step === 0)?
                <>
                <p>Or is it?</p>
                <Options handleCorrect={handleCorrect}/> 
                </>
                : 
                ((correct)?
                <>
                <p>The hackers tried to use Google to hide the actual link, which is from tinyurl. An email similar to this was used to target think tanks and politicians.</p>
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

                <Toast.Body>
                <div >
                      <div className='w-50 mx-auto'>
                        <Card className="card-mdf">
                            <Card.Body className='position-relative'>
                                <div className="w-25">
                                    <Image src={logo} fluid alt="" />
                                </div>
                                <h2 className='mt-4'>Hi, {name} </h2>
                                <p>{email}</p>
                                <small>Tripit <strong>wants to</strong></small>
                                <p>View your email messages and settings</p>
                                <strong>Allow Tripit to do this?</strong>
                                <div>
                                <small>You may review this app's terms of service and . You can remove this or any other app connected to your account in </small>
                                </div>
                                <Toast show={showpop2} className="position-absolute top-25 shadow z-index-5">
                                  <Toast.Body>
                                    <p> Mousing over this link or using a long press will show you that it goes to the insecure imitation domain “drive--outlook.com”. </p>
                                    <div className="text-right"><Button className="text-right" onClick={handleStep} >Next</Button></div>
                                    
                                  </Toast.Body>
                                </Toast>
                                <Button className="mt-4">Allow</Button>
                            
                                
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

export default Question8