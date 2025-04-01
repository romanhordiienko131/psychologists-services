function AuthNav() {
  return (
    <ul className="flex items-center gap-2">
      <li>
        <button className="-tracking-1 rounded-4xl border border-black/20 px-[2.438rem] py-3.5 leading-5 font-medium">
          Log In
        </button>
      </li>
      <li>
        <button className="-tracking-1 bg-green rounded-4xl px-10 py-3.5 leading-5 font-medium text-white">
          Registration
        </button>
      </li>
    </ul>
  );
}

export default AuthNav;
