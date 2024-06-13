function Button({ text, ...rest }) {
  return (
    <button {...rest} className="w-full rounded bg-orange py-3 text-dark-gray font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
      {text}
    </button>
  );
}

export default Button;
