import Container from './Container.tsx';
import NavBar from './NavBar.tsx';
import Logo from './Logo.tsx';
import AuthNav from './AuthNav.tsx';
import { useAuth } from '../hooks/useAuth.ts';
import UserNav from './UserNav.tsx';

function Header() {
  const { user } = useAuth();

  return (
    <header className="h-24 border-b border-black/10 py-6">
      <Container>
        <div className="flex items-center justify-between">
          <Logo />
          <NavBar isLoggedIn={Boolean(user)} />
          {user ? <UserNav user={user} /> : <AuthNav />}
        </div>
      </Container>
    </header>
  );
}

export default Header;
