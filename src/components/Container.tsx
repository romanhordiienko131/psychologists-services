import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function Container({ children }: Props) {
  return <div className="mx-auto px-4 2xl:container">{children}</div>;
}

export default Container;
