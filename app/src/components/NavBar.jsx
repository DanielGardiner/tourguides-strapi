import useLogout from '@/hooks/useLogout';
import useUser from '@/hooks/useUser';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import TravelICon from '/public/icons/travel-icon.svg';

function NavBar() {
  const { data: user } = useUser();
  const { mutate: doLogout, isLoading } = useLogout();

  const handleLogout = async () => {
    doLogout();
  };

  return (
    <>
      <Navbar className="border-bottom border-gray">
        <Container>
          <Navbar.Brand>
            <Link href="/" className="text-decoration-none">
              <Image src={TravelICon} alt="Travel Icon" width={45} height={45} />
            </Link>
          </Navbar.Brand>
          <Nav>
            {user ? (
              <Button variant="outline-secondary" onClick={handleLogout} disabled={isLoading}>
                Logout
              </Button>
            ) : (
              <Button variant="outline-primary" >
                <Link href="/login" className="text-decoration-none hover-text-light">
                  Login
                </Link>
              </Button>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;