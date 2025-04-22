import React from 'react';

interface ButtonProps {
  id: string;
  type: "button" | "submit" | "reset";
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
}

function Button({ id, type, children, size = "medium" }: ButtonProps) {
  
  return <button id={id} type={type} className={cn}>{children}he</button>;

}

export default Button;
