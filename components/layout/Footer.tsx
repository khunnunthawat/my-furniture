import React from "react";
import Link from "next/link";

import { Button } from "@/components/ui";

const navigation = {
  links: [
    { name: "home", href: "#" },
    { name: "shop", href: "#" },
    { name: "about", href: "#" },
    { name: "contact", href: "#" },
  ],
  help: [
    { name: "payment options", href: "#" },
    { name: "returns", href: "#" },
    { name: "privacy policies", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="debug-screens">
      <div className="container">
        <div className="mb-16 xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-2 md:space-y-4">
            <h2 className="text-2xl font-bold">Funiro.</h2>
            <p className="max-w-[285px] text-gray-100">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 xl:col-span-2 xl:mt-0">
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2 md:space-y-4">
                <h3 className="h-8 font-medium text-gray-100">Links</h3>
                <ul role="list" className="list-none space-y-4">
                  {navigation.links.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="h-6 capitalize transition-colors hover:text-primary-500"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-2 md:space-y-4">
                <h3 className="h-8 font-medium text-gray-100">Support</h3>
                <ul role="list" className="space-y-4">
                  {navigation.help.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="h-6 capitalize transition-colors hover:text-primary-500"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-2 md:space-y-4">
              <h3 className="h-8 font-medium text-gray-100">Newsletter</h3>
              <form className="sm:flex sm:max-w-md">
                <input
                  type="email"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  required
                  className="w-full min-w-0 appearance-none text-sm"
                  placeholder="Enter Your Email Address"
                />
                <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                  <Button link underline className="text-sm">
                    SUBSCRIBE
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-100 pt-2 md:pt-8">
          <p className="mt-4 text-gray-300 md:mt-6">
            &copy; 2023 furino. All rights reverved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
