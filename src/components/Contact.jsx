function Contact({ contact }) {
  const { icon, url, name, title } = contact;
  return (
    <li>
      <a href={url} target="_blank" title={title}>
        <i className={icon}></i>
        {name}
      </a>
      <span></span>
    </li>
  );
}

export default Contact;
