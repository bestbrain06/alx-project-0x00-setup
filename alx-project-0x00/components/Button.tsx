import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, className }) => {
  return (
    <button
      className={`px-4 py-2 text-white font-semibold bg-blue-500 hover:bg-blue-600 ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
