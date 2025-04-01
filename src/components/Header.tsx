import Container from './Container.tsx';
import NavBar from './NavBar.tsx';
import Logo from './Logo.tsx';
import AuthNav from './AuthNav.tsx';

function Header() {
  return (
    <header className="h-24 border-b border-black/10 py-6">
      <Container>
        <div className="flex items-center justify-between">
          <Logo />
          <NavBar />
          <AuthNav />
        </div>
      </Container>
    </header>
  );
}

export default Header;
