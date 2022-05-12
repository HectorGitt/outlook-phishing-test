import React from 'react'
import { Navbar, Container} from 'react-bootstrap'; 

const Layout = ({children}) => {
  return (
    <Container fluid className="Container2 vh-100">
        <Navbar className="p-4 Navbar">
            
        </Navbar>
        {children}
    </Container>
  )
}

export default Layout