function GenericInput({ Icon, placehoder, text, value, setValue }) {
  return (
    <div className="flex gap-2 text-base items-center bg-input rounded-sm text-gray w-full p-2">
      <label htmlFor={text} className="sr-only">
        E-mail
      </label>
      <Icon />
      <input
        type={text}
        className="bg-input rounded-md  placeholder-gray w-full"
        name={text}
        id={text}
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder={placehoder}
        required
      />
    </div>
  );
}

export default GenericInput;
