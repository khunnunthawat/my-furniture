import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Heart, Menu, Search, ShoppingCart, User2 } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import logo from "@/public/images/furniro-logo.svg";

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white">
      <div className="container flex h-20 items-center justify-between space-x-4 sm:space-x-0">
        <Link href="/" className="cursor-pointer">
          <div className="flex items-center space-x-2">
            <Image
              src={logo}
              alt="furniro logo"
              width={45}
              height={28}
              style={{ width: "auto", height: "auto" }}
            />
            <span className="hidden font-montserrat text-2xl md:inline-block">
              Furniro
            </span>
          </div>
        </Link>
        <nav className="flex items-center space-x-4 font-medium max-lg:hidden lg:space-x-6">
          <Link href="#" className="transition-colors hover:text-primary-500">
            Home
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-primary-500"
          >
            Shop
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-primary-500"
          >
            About
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-primary-500"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-10 max-lg:hidden">
          <User2 className="h-7 w-7" />
          <Search className="h-7 w-7" />
          <Heart className="h-7 w-7" />
          <ShoppingCart className="h-7 w-7" />
        </div>
        <div className="hidden cursor-pointer max-lg:block">
          <Sheet>
            <SheetTrigger asChild>
              <Menu className="fill-current text-gray-300 transition-colors hover:text-gray-500" />
            </SheetTrigger>
            <SheetContent className="w-[268px]">
              <div className="relative my-4 h-[calc(100vh-8rem)] overflow-hidden pb-10 pr-6">
                <div className="flex h-full w-full flex-col justify-between">
                  <div className="flex flex-col space-y-3">
                    <Link
                      href="#"
                      className="transition-colors hover:text-primary-500"
                    >
                      Home
                    </Link>
                    <Link
                      href="#"
                      className="text-muted-foreground transition-colors hover:text-primary-500"
                    >
                      Shop
                    </Link>
                    <Link
                      href="#"
                      className="text-muted-foreground transition-colors hover:text-primary-500"
                    >
                      About
                    </Link>
                    <Link
                      href="#"
                      className="text-muted-foreground transition-colors hover:text-primary-500"
                    >
                      Contact
                    </Link>
                  </div>
                  <div className="flex flex-col space-y-3 pt-6">
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 transition-colors hover:text-primary-500"
                    >
                      <User2 className="h-5 w-5" />
                      <span>My Account</span>
                    </Link>
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 transition-colors hover:text-primary-500"
                    >
                      <Search className="h-5 w-5" />
                      <span>Search</span>
                    </Link>
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 transition-colors hover:text-primary-500"
                    >
                      <Heart className="h-5 w-5" />
                      <span>Wishlist</span>
                    </Link>
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 transition-colors hover:text-primary-500"
                    >
                      <ShoppingCart className="h-5 w-5" />
                      <span>Cart</span>
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
