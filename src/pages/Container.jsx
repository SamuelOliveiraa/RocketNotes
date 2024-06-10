function Container({ children, className }) {
  const myClass = ` bg-dark-gray min-w-screen min-h-screen grid-rows-note  ${className}`;
  return <div className={myClass}>{children}</div>;
}

export default Container;
