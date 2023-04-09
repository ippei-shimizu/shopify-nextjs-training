import headerNavLinks from "@/data/headerNavLinks";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <>
      <header>
        <nav>
          <ul>
            {headerNavLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
