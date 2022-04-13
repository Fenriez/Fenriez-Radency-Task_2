interface modal_types {
  children: JSX.Element;
  active: boolean;
}

const CustomModal = ({ children, active }: modal_types) => {
  const root_classes: string[] = ["custom_modal"];

  if (active) {
    root_classes.push("active");
  }

  return (
    <div className={root_classes.join(" ")}>
      <div className="custom_modal__content">{children}</div>
    </div>
  );
};

export default CustomModal;
