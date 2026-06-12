import { useEffect, useState } from 'react';

interface NavLink {
  label: string;
  href: string;
}

interface Props {
  links: NavLink[];
  phone: string;
  phoneHref: string;
}

export default function MobileNav({ links, phone, phoneHref }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="mobile-nav">
      <button
        type="button"
        className="mobile-nav__toggle"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(!open)}
      >
        <span className="mobile-nav__bars" aria-hidden="true">
          {open ? '✕' : '☰'}
        </span>
        <span className="sr-only">Menu</span>
      </button>
      {open && (
        <nav id="mobile-menu" className="mobile-nav__menu" aria-label="Mobile">
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a className="mobile-nav__phone" href={phoneHref}>
                Call {phone}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
