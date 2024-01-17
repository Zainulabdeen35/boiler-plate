const links = ["HOME", "ABOUT US", "SERVICES", "PORTFOLIO", "CAREERS"];

export const Links = () => {
  return (
    <ul className="list ml-2 flex flex-col  absolute top-[20%] left-[6%]  text-left w-[85%] md:text-4xl md:left-[10%] md:top-[22%] md:w-[43%] list-none xl:top-[27%]">
      {links.map((item, index) => (
        <li
          key={index}
          className=" h-11 item text-3xl md:text-4xl lg:text-5xl md:h-14 lg:h-16 text-white"
        >
          <a href="*" className="link">
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};
