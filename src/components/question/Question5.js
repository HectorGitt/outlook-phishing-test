import React, {useEffect, useState} from 'react'
import { Container, Button, Card, Toast, Navbar} from 'react-bootstrap'; 
import MailSubject from '../MailSubject';
import ToastWrapper from '../layout/ToastWrapper';
import pdf from "../../images/pdf.png"
import Correct from '../Correct';
import Options from '../buttons/Options';
import ShowMe from '../buttons/ShowMe';

const Question5 = ({page, handleNext, obj, handleScore }) => {
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
    <Container fluid className='Container2' >
        <Navbar className="p-4 Navbar">
            <p className="mx-5 text-white">{page}/8</p>
        </Navbar>
        <Container fluid className="h-50 Container d-flex flex-column justify-content-center align-items-center">
            <div className="text-center container-fluid form_details my-5 ">   
                <h1 className='text-white'>
                    {(step === 0)?
                    "You’ve received a new kind of report from the school." 
                    : (correct)? <Correct /> : "This is actually a phishing email." }</h1> 
                {(step === 0)?
                <>
                <p>Usually their emails come from “sharon.mosley@westmountschool.org”.</p>
                <Options handleCorrect={handleCorrect}/> 
                </>
                : 
                ((correct)?
                <>
                <p>This was a complicated phish! PDFs can contain malware or viruses — always be certain you trust the sender and use your browser or an online service such as Google Drive to open them safely.</p>
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
          <ToastWrapper >
                <Toast.Body>
                    <Card.Title className='position-relative'>
                        <MailSubject props="Sharon Mosley <sharon.mosley@westmountdayschool.org>" acronym="S" />
                        <Toast show={showpop} className="position-absolute top-25 shadow z-index-5">
                          <Toast.Body>
                            <p>The from address is slightly different from what you’d seen in the past: “sharon.mosley@westmountschool.org”.</p>
                            <div className="text-right"><Button className="text-right" onClick={handleStep} >Next</Button></div>
                            
                          </Toast.Body>
                        </Toast>
                    </Card.Title>
                    <Card.Text >
                        <p>Good day peppower</p>
                        <p>Please find attached the 2022 financial activity report for your persual</p>
                        <p>Thanks and regards,</p>
                        <p>Mrs Sharon Mosley</p>
                        <p>Westmount Day School</p>
                        <hr />
                        <p>Click here to download pictures. To help protect your privacy, Outlook prevented automatic download of some pictures of this message.</p>
                        <div className='d-flex' >
                            <div className='attachment'>
                                <img src={pdf} alt="jhk" />
                                <div>
                                    <span>PPT_Vendor_Matrix_US</span>
                                    <span>758kb</span>
                                </div>
                                arrr
                            </div>
                            <div className='attachment'>
                                <img src={pdf} alt="hj" />
                                <div>
                                    <span>PPT_Vendor_Matrix_US</span>
                                    <span>758kb</span>
                                </div>
                                arrr
                            </div>
                        </div>
                        <Toast show={showpop2} className="position-absolute top-25 shadow z-index-5">
                        <Toast.Body>
                            <p>Be careful when opening PDFs, especially if you dont expect them.</p>
                            <div className="text-right"><Button className="text-right" onClick={handleStep} >Next</Button></div>
                            
                          </Toast.Body>
                        </Toast>
                    </Card.Text>
                </Toast.Body>
            </ToastWrapper>
        </Container>
    </Container>
  )
}

export default Question5