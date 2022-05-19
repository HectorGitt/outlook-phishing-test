import {useEffect, useState} from 'react'
import { Container, Button, Navbar, Toast, Card, Image} from 'react-bootstrap'; 
import ToastWrapper from '../layout/ToastWrapper';
import Options from '../buttons/Options';
import ShowMe from '../buttons/ShowMe';
import logo from '../../images/microsoft-logo-png-2396.png'
import outlook from '../../images/outlook.png'
import {BiErrorCircle} from 'react-icons/bi'
import LinkWrapper from '../buttons/LinkWrapper';

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
      window.scrollTo({
        top: document.body.scrollHeight - 200,
        left:0,
        behavior: 'smooth',
      })
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
        <Navbar className="py-2 px-md-5 Navbar">
            <p className="mx-5 text-white">{page}/8</p>
        </Navbar>
        <Container fluid className="h-50 Container d-flex flex-column justify-content-center align-items-center">
            <div className="text-center container-fluid header-text my-5">   
            <h1 className='text-white'>
                    {(step === 0)?
                    "Your account seems to be under attack again." 
                    : (correct)? "Correct! This is legitimate." : "This is actually legitimate." }</h1> 
                {(step === 0)?
                <>
                <p>Or is it?</p>
                <Options handleCorrect={handleCorrect}/> 
                </>
                : 
                ((correct)?
                <>
                <p>It's important to be cautious with these kinds of account access requests though, and to be sure you trust the developer. Check the domain that is displayed, and be sure to click on it for more details.</p>
                <ShowMe handleStep={handleStep} step={step}/>
                </>
                :
                <>
                <p>This phish used a look-alike URL to masquerade as Gmail. In fact, this is almost identical to an attack used to successfully hack politicians’ emails. Always be sure to check URLs carefully!</p>
                <ShowMe handleStep={handleStep} step={step}/>
                </>) 
                }
                
           </div>
        </Container>
        <Container className="vh-75" bg="success">
            <ToastWrapper>

                <Toast.Body>
                <div >
                      <div className='signin-access mx-auto'>
                        <Card className="card-mdf">
                            <Card.Body className='position-relative'>
                                <div className="w-25">
                                    <Image src={logo} fluid alt="" />
                                </div>
                                <h2 className='mt-4'>Hi, {name} </h2>
                                <p>{email}</p>
                                <div className='position-relative'>Tripit <strong>wants to</strong>
                                <Toast show={showpop} className="position-absolute top-25 shadow z-index-5 popup">
                                  <Toast.Body>
                                    <p> This shows you the requesting apps's name, but you should click it to make sure the additional details seem correct.  </p>
                                    <div className="text-right"><Button className="text-right" onClick={handleStep} >Next</Button></div>
                                    
                                  </Toast.Body>
                                </Toast>
                                </div>
                                <p className='mt-2'> <img src={outlook} alt="" className='outlook' /> View your email messages and settings <BiErrorCircle/> </p>
                                <Toast show={showpop2} className="position-absolute top-100 shadow z-index-5 popup">
                                  <Toast.Body>
                                    <p>  This shows what the requesting service can do. Make sure to read it closely before allowing access.  </p>
                                    <div className="text-right"><Button className="text-right" onClick={handleStep} >Next</Button></div>
                                    
                                  </Toast.Body>
                                </Toast>
                                <strong>Allow Tripit to do this?</strong>
                                <div>
                                <small>You may review this app's terms of service and . You can remove this or any other app connected to your account in </small>
                                </div>
                                <LinkWrapper to="http://182.u74.u72389.283o9" message="http://182.u74.u72389.283o9" >Allow</LinkWrapper>
                            
                                
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