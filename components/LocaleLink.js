import Link from "next/link";

function LocaleLink({ children, ...props }) {
  const locale = "fa";

  return (
    <Link locale={locale} {...props}>
      {children}
    </Link>
  );
}

export default LocaleLink;
