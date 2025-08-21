import type { ReactNode } from "react";
import "./Button.css";
import type React from "react";

interface ButtonProps {
  children: ReactNode;
  parentMethod: () => void
};

interface childrenProps {
  children: ReactNode;
}

export const ChildrenButton = ({ children }: childrenProps) => {

  return (<>{children} </>)
}

export const Button = ({ children, parentMethod }: ButtonProps) => {
  return (
    <button className="button" onClick={parentMethod}>
      {children}
    </button>
  );
};