
import { NavLink } from 'react-router-dom';
import './Navabar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function MyNavbar(){
    const expand = 'md'
    return(
        <Navbar style={{backgroundColor: '#7fadcd'}} key={expand}  expand={expand}  className=" mb-3">
          <Container >
            <Navbar.Brand style={{fontFamily:'Lalehzar',fontSize:'25px'}} href="#">فرست آیدی شاپ</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink to='/' className='nav-link'>صفحه اصلی</NavLink>
                  <NavLink to='/about' className='nav-link'> درباره ما</NavLink>
                  <NavLink to='/article' className='nav-link'> مقالات</NavLink>
                  <NavLink to='/panel' className='nav-link'> پنل</NavLink>
                  <NavLink to='/login' className='nav-link'> ورود</NavLink>
                  
                  
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    )
}
export default MyNavbar