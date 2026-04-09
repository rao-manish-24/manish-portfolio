"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "domains",
    path: "/domains",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "projects",
    path: "/projects",
  },
  {
    name: "contact",
    path: "/contact",
  },
  {
    name: "ML",
    path: "/ml",
  },
  {
    name: "DevOps",
    path: "/devops",
  },
  {
    name: "System Design",
    path: "/system-design",
  },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            prefetch={true}
            className={`${
              link.path === pathname && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all text-foreground`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
