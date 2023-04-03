import { ReactNode } from 'react';

export default function Button({ children }: { children: ReactNode }) {
  return (
    <button className="" type="button">
      {children}
    </button>
  );
}
