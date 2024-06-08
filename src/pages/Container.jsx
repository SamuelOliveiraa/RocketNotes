function Container({ children, className }) {
  const myClass = ` bg-dark-gray w-screen h-screen ${className}`;
  return <div className={myClass}>{children}</div>;
}

export default Container;
