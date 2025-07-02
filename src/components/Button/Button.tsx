import "./Button.css";

interface ButtonProps {
  label: string;
  parentCallback: () => void;
};

export const Button = ({label, parentCallback}: ButtonProps) => {
  return (
    <button className='custom-button' onClick={parentCallback}>
      {label}
    </button> 
  );
}