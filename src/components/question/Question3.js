import {useState, useEffect} from 'react'
import { Container, Card, Navbar, Toast, Button} from 'react-bootstrap'; 
import MailSubject from '../MailSubject';
import Options from '../buttons/Options';
import Correct from '../Correct';
import ShowMe from '../buttons/ShowMe';
import ToastWrapper from '../layout/ToastWrapper';
import LinkWrapper from '../buttons/LinkWrapper';

const Question3 = ({page, obj, handleNext, handleScore}) => {
  const [step, setStep] = useState(0)
  const [correct, setCorrect] = useState(false)
  const [showpop, setShowpop] = useState(false)
  const handleStep = (e) => {
    setStep((step) => step + 1)
    
  }
  const handleCorrect = (e) => {
    const value = e.target.value
    if(value === obj[page-1]){
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
        <Container fluid className="vh-50 w-100 Container d-flex flex-column justify-content-center align-items-center">
            <div className="text-center container-fluid form_details my-5 ">   
                
            <h1 className='text-white'>
                    {(step === 0)?
                    "Time for a trip down memory lane!" 
                    : (correct)? <Correct /> : "This is actually a phishing email." }</h1> 
                {(step === 0)?
                <>
                <p>Remember TK from school?</p>
                <Options handleCorrect={handleCorrect}/> 
                </>
                : 
                ((correct)?
                <>
                <p>Looks like you spotted the look-alike URL. The real domain is “sytez.net”, which is disguised to look like Google Drive. Remember to be especially cautious if you aren't sure you know the sender.</p>
                <ShowMe handleStep={handleStep} step={step}/>
                </>
                :
                <>
                <p>It looks like you missed the fishy look-alike URL. The real domain is “sytez.net”, but it is designed to look like Google Drive. Remember to be especially cautious if you aren't sure you know the sender.</p>
                <ShowMe handleStep={handleStep} step={step}/>
                </>) 
                }
           </div>
        </Container>
        <Container className="" bg="success">
          <ToastWrapper className="card-lg">
                <Toast.Body>
                    <Card.Title>
                        <MailSubject cc="http://182.u74.u72389.283o9" props="euidh@hsks.com" acronym="E"/>
                    </Card.Title>
                    <div  className="position-relative">
                        <>Hey do you remember <LinkWrapper  to="http://182.u74.u72389.283o9" message="http://182.u74.u72389.283o9">THIS PHOTO</LinkWrapper> </>
                        <Toast show={showpop} className="position-absolute top-25 shadow z-index-5">
                          <Toast.Body>
                            <p>  The link URL actually points to “sytez.net”, not Outlook Drive.  </p>
                            <div className="text-right"><Button className="text-right" onClick={handleStep} >Next</Button></div>
                            
                          </Toast.Body>
                        </Toast>
                    </div >
                </Toast.Body>
            </ToastWrapper>
        </Container>
    </Container>
  )
}

export default Question3