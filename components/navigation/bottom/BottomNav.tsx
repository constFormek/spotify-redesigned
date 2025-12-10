"use client";

import { bottomNavItems } from "./NavConvig";
import NavItem from "./NavItem";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname() || "/";

  return (
    <nav
      className="pt-4 pb-6"
      role="navigation"
      aria-label="Bottom Navigation"
    >
      <div className="max-w-3xl mx-auto flex items-center">
      {bottomNavItems.map((item) => (
        <NavItem
          key={item.href}
          label={item.label}
          href={item.href}
          inactive={item.inactive}
          activeIcon={item.active}
          active={pathname === item.href}
        />
      ))}
      </div>
    </nav>
  );
}
