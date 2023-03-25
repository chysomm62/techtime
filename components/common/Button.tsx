import { FC, ReactNode } from "react";

interface buttonProps {
  className?: string;
  type?: "submit" | "reset" | "button" | undefined;
  action?: any;
  children: ReactNode;
}

const Button: FC<buttonProps> = ({ className, type, action, children }) => {
  return (
    <button type={type} className={className} onClick={action}>
      {children}
    </button>
  );
};

export default Button;
