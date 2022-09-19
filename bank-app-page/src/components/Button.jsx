const Button = ({ styles }) => {
  return (
    <button
      type='button'
      className={`py-4 px-6 mt-6 rounded-xl bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none transition-all duration-500 ease-in-out transform hover:-translate-y-3  ${styles}}`}
    >
      Get Started
    </button>
  );
};

export { Button };
