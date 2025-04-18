export function getBackgroundColor(pathname: string) {
  switch (pathname) {
    case '/':
      return 'bg-white';
    case '/psychologists':
      return 'bg-[#f3f3f3]';
    case '/favorites':
      return 'bg-[#f3f3f3]';
    default:
      return 'bg-white';
  }
}
