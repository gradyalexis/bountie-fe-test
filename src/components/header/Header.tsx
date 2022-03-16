import * as React from 'react';
import {
  Navbar,
  NavbarBrand,
  Container,
} from 'reactstrap';
import Logo from '../../assets/img/logo.png';

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
    return (
      <Container>
        <Navbar className="flex w-full" style={{
          height: '120px',
        }}>
            <NavbarBrand href="/" className="mx-auto">
            <img src={Logo} className="h-24" alt="logo"/>
            </NavbarBrand>
        </Navbar>
      </Container>
    );
  }

export default Header;