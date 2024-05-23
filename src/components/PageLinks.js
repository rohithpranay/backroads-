function PageLinks({ list, parentClass, childCLass }) {
  return (
    <ul className={parentClass} id={parentClass}>
      {list.map((link) => (
        <li key={link.id}>
          <a href={link.href} className={childCLass}>
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default PageLinks;
