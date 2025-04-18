import { User } from 'firebase/auth';
import { signOutUser } from '../firebase/services/auth.ts';

interface Props {
  user: User;
}

function UserNav({ user }: Props) {
  return (
    <div className="flex items-center gap-7">
      <div className="flex items-center gap-3.5">
        <img src="/icons/user.svg" alt="" />
        <div className="-tracking-1 leading-5 font-medium">
          {user.displayName}
        </div>
      </div>
      <button
        onClick={signOutUser}
        className="-tracking-1 rounded-4xl border border-black/20 px-[2.438rem] py-3.5 leading-5 font-medium"
      >
        Log out
      </button>
    </div>
  );
}

export default UserNav;
