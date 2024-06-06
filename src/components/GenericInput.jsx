function GenericInput({ Icon, placehoder, text }) {
  return (
    <div className="flex gap-2 text-base items-center bg-custom-input rounded-sm text-custom-gray w-full p-2">
      <label htmlFor={text} className="sr-only">
        E-mail
      </label>
      <Icon />
      <input type={text} className="bg-custom-input rounded-md  placeholder-custom-gray w-full" name={text} id={text} placeholder={placehoder} />
    </div>
  );
}

export default GenericInput;
