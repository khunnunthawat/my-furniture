import React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  AccountAlert,
  HamburgerIcon,
  HeartIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@/components/icons";
import logo from '@/public/images/furniro-logo.svg'

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white">
      <div className="container flex h-20 items-center justify-between space-x-4 sm:space-x-0">
        <Link href="/" className="cursor-pointer">
          <div className="flex items-center space-x-2">
            <Image src={logo} alt="furniro logo" width={45} height={28} />
            <span className="hidden font-montserrat text-2xl md:inline-block">
              Furniro
            </span>
          </div>
        </Link>
        <nav className="flex items-center space-x-4 font-medium max-lg:hidden lg:space-x-6">
          <Link href="#" className="transition-colors hover:text-primary">
            Home
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            Shop
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            About
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-10 max-lg:hidden">
          <AccountAlert className="h-7 w-7 fill-current text-black" />
          <SearchIcon className="h-7 w-7 fill-none" />
          <HeartIcon className="h-7 w-7 fill-none" />
          <ShoppingCartIcon className="h-7 w-7 fill-none" />
        </div>
        <div className="hidden cursor-pointer max-lg:block">
          <HamburgerIcon className="h-6 w-6"/>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
