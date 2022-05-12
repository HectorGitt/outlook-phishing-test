import {useState, useEffect} from 'react'
import { Container, Card, Navbar, Toast, Button} from 'react-bootstrap'; 
import MailSubject from '../MailSubject';
import Options from '../buttons/Options';
import Correct from '../Correct';
import ShowMe from '../buttons/ShowMe';

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
      console.log(value)
      console.log(obj[page-1])
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
                <ShowMe handleStep={handleStep}/>
                </>
                :
                <>
                <p>It looks like you missed the fishy look-alike URL. The real domain is “sytez.net”, but it is designed to look like Google Drive. Remember to be especially cautious if you aren't sure you know the sender.</p>
                <ShowMe handleStep={handleStep}/>
                </>) 
                }
           </div>
        </Container>
        <Container className="" bg="success">
          <Card className="card-lg">
                <Card.Body>
                    <Card.Title>
                        <MailSubject/>
                    </Card.Title>
                    <Card.Text className="position-relative">
                        <>Hey do you remember <span>THIS PHOTO</span> </>
                        <Toast show={showpop} className="position-absolute top-25 shadow z-index-5">
                          <Toast.Body>
                            <p>  The link URL actually points to “sytez.net”, not Outlook Drive.  </p>
                            <div className="text-right"><Button className="text-right" onClick={handleStep} >Next</Button></div>
                            
                          </Toast.Body>
                        </Toast>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    </Container>
  )
}

export default Question3