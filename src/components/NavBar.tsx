import { NavLink, NavLinkRenderProps } from 'react-router-dom';
import clsx from 'clsx';

function NavBar() {
  function getLinkClasses({ isActive }: NavLinkRenderProps) {
    return clsx(
      '-tracking-1 relative leading-5',
      isActive &&
        'after:bg-green after:absolute after:top-6 after:left-1/2 after:size-2 after:-translate-x-1/2 after:rounded-full',
    );
  }

  return (
    <nav>
      <ul className="flex gap-10">
        <li>
          <NavLink className={getLinkClasses} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={getLinkClasses} to="/psychologists">
            Psychologists
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
