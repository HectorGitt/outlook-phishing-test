import React from 'react'
import { Toast} from 'react-bootstrap'
import { useState, useEffect } from 'react'

const ToastWrapper = ({children}) => {
    const [showA, setShowA] = useState(false);
    const toggleShowA = () => setShowA(true);
    useEffect(() => {
        toggleShowA();
    }, [])
  return (
    <Toast className="card-lg container w-75 toast-top" show={showA}>
        {children}
    </Toast>
  )
}
export default ToastWrapper;
