function GenericInput({ Icon, placehoder, text, value, setValue }) {
  return (
    <div className="flex gap-2 text-base items-center bg-input rounded-sm text-gray w-full p-2">
      <label htmlFor={text} className="sr-only">
        E-mail
      </label>
      {Icon && <Icon />}
      {text === "textarea" ? (
        <textarea
          required
          className="bg-input rounded-md  placeholder-gray w-full resize-none h-28"
          placeholder={placehoder}
          value={value}
          name={text}
          onChange={e => setValue(e.target.value)}
        ></textarea>
      ) : (
        <input
          type={text}
          className="bg-input rounded-md  placeholder-gray w-full"
          name={text}
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder={placehoder}
          required
        />
      )}
    </div>
  );
}

export default GenericInput;
