"use client";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { LogOut, Menu } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { isUserSubscribed } from "@/app/premium/actions";
import { useState } from "react";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "#team",
    label: "Team",
  },
  {
    href: "#testimonials",
    label: "Testimonials",
  },
];

export const Navbar = () => {
  const { isAuthenticated } = useKindeBrowserClient();

  const { data } = useQuery({
    queryKey: ["isUserSubscribed"],
    queryFn: async () => isUserSubscribed(),
  });

  const isSubscribed = data?.subscribed;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-1 left-1/2 transform -translate-x-1/2 z-40 rounded-full shadow-lg border dark:border-slate-700 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      style={{
        boxShadow: 'inset 0 1px 15px rgba(255, 255, 255, 0.1)',
      }}
    >
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-12 flex items-center justify-between px-4">
          <a rel="noreferrer noopener" href="/" className="ml-2 font-bold text-xl flex">
            <Image src="/stripintlogo.png" width={150} height={150} alt="logo" />
          </a>

          <button
            className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>

          <nav
            className={`md:flex gap-2 ${
              isMobileMenuOpen ? "block absolute top-12 left-0 w-full bg-background rounded shadow-lg p-4" : "hidden"
            } md:static md:bg-transparent md:shadow-none md:p-0`}
          >
            {routeList.map((route: RouteProps, i) => (
              <Link
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`text-[15px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </Link>
            ))}
            {isAuthenticated && isSubscribed && (
              <Link
                rel="noreferrer noopener"
                href={"process.env.NET_PUBLIC_STRIPE_CUSTOMER_PORTAL_URL!"}
                target="_blank"
                className={`text-[15px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                Billing Portal
              </Link>
            )}

            {isAuthenticated && (
              <Link
                rel="noreferrer noopener"
                href="/api/auth/logout"
                className={`border ${buttonVariants({ variant: "secondary" })}`}
              >
                Logout
                <LogOut className="w-4 h-4 ml-2" />
              </Link>
            )}

            {!isAuthenticated && (
              <Link
                rel="noreferrer noopener"
                href="/api/auth/login"
                className={`border ${buttonVariants({ variant: "secondary" })}`}
              >
                Login
              </Link>
            )}

            {isAuthenticated && isSubscribed && (
              <Link
                rel="noreferrer noopener"
                href="/premium"
                className={`border bg-gradient-to-r from-[#667EEA] to-[#764BA2] text-white ${buttonVariants(
                  {
                    variant: "secondary",
                  }
                )}`}
              >
                Premium ✨
              </Link>
            )}
            <ModeToggle />
          </nav>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
