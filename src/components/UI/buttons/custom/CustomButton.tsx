
interface custom_button_props {
    type?: "submit" | "reset" | "button" | undefined;
    text: string;
    form?: string;
    onClick?: () => void;
}

const CustomButton = ({ type, text, form, onClick, ...props }: custom_button_props) => {
  return (
    <button className="custom_button" type={type} form={form} onClick={onClick} >
      {text}
    </button>
  );
};

export default CustomButton;
