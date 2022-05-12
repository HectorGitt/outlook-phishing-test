import React, {useState, useEffect} from 'react'
import { Container, Button, Card, Navbar, Toast} from 'react-bootstrap'; 
import {FaDropbox} from "react-icons/fa"
import MailSubject from '../MailSubject';
import Correct from '../Correct';
import Options from '../buttons/Options';
import ShowMe from '../buttons/ShowMe';
import ToastWrapper from '../layout/ToastWrapper';

const Question4 = ({page, handleNext, obj, handleScore}) => {
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
    <Container fluid className='Container2'>
        <Navbar className="p-4 Navbar">
            <p className="mx-5 text-white">{page}/8</p>
        </Navbar>
        <Container fluid className="vh-50 w-100 Container d-flex flex-column justify-content-center align-items-center">
            <div className="text-center container-fluid form_details my-5 ">   
                <h1 className='text-white'>
                    {(step === 0)?
                    "Uh oh! It looks like you're out of storage!" 
                    : (correct)? <Correct /> : "This is actually a phishing email." }</h1> 
                {(step === 0)?
                <>
                <p>I wonder what it costs to upgrade?</p>
                <Options handleCorrect={handleCorrect}/> 
                </>
                : 
                ((correct)?
                <>
                <p>This is a legitimate Dropbox communication. The sender is “dropboxmail.com”, which is unusual but legitimate, and the URL is a secure link (https) to “dropbox.com”. If you are unsure about a domain, you can use a search engine to find out more information.</p>
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
        <Container fluid className="" bg="success">
          <ToastWrapper >
                <Card.Body>
                    <Card.Title>
                        <MailSubject/>
                    </Card.Title>
                    <Card.Text className='position relative' >
                        <p className="text-center text-lg"> <FaDropbox/> </p>
                        <p>Hi,</p>
                        <p>Your Dropbox is full and is no longer syncing files. New files added to your Dropbox folder wont be accessible on your other devices and wont be backed up online</p>
                        <p>Upgrade your dropbox today and get 1 TB(1000GB) of space and powerful sharing features.</p>
                        <Button className="mx-auto w-50 text-center">Upgrade Your Dropbox</Button>
                        <Toast show={showpop2} className="position-absolute top-25 shadow z-index-5">
                          <Toast.Body>
                            <p>   The URL is a legitimate, secure link to “dropbox.com”.   </p>
                            <div className="text-right"><Button className="text-right" onClick={handleStep} >Next</Button></div>
                            
                          </Toast.Body>
                        </Toast>
                        <p>For otherways to get more space. Visit our Get More Space page</p>
                        <p>Happy Dropboxing!</p>
                        <p>- The Dropbox Team</p>
                        <p>P.S. If you need the biggest plan we've got, check out Dropbox for Business</p>
                    </Card.Text>
                </Card.Body>
            </ToastWrapper>
        </Container>
    </Container>
  )
}

export default Question4