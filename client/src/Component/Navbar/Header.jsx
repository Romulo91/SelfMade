import { Container, Nav, Navbar } from 'react-bootstrap';
import { Component } from 'react';

import './Header.scss';

class Header extends Component {
  // test show
  // renderContent() {
  //   switch (this.props.auth) {
  //     case null:
  //       return;
  //     case false:
  //       return (
  //         <button>
  //           <a href="/auth/google">Login With Google</a>
  //         </button>
  //       );
  //     default:
  //       return (
  //         <>
  //           <span>{this.props.auth.fullName}</span>
  //           <Navbar.Brand>
  //             <img
  //               alt="logo"
  //               src={this.props.auth.photo}
  //               className="d-inline-block align-top"
  //             />
  //           </Navbar.Brand>
  //           <a className="header-link" href="/chat">
  //             chat
  //           </a>
  //           <button>
  //             <a href="/api/logout">Logout</a>
  //           </button>
  //         </>
  //       );
  //   }
  // }
  render() {
    return (
      <nav>
        <Navbar bg="dark" expand="lg" variant="dark">
          <Container>
            <Navbar.Brand href="/">SelfMade</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav
                className="justify-content-end flex-grow-1 pe-3"
                placement="end"
              >
                <Nav.Link href="signup">Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </nav>
    );
  }
}

export default Header;
