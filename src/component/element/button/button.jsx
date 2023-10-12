const Button = (props) => {
  // memberikan nilai default untuk props yang tidak di isi
  const { children, classname = 'bg-black', onClick = () => {}, type = 'button' } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`}
      type={type}
      // event handling
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
