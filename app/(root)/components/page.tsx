import { Search } from "lucide-react";

import { Button, Input } from "@/components/ui";
import { AccountAlertIcon } from "@/components/icons";

export default function ComponentsPage() {
  return (
    <div className="flex min-h-screen">
      <div className="container py-14">
        <span>button primary</span>
        <div className="mb-14 flex flex-row space-x-4">
          <Button size="small">Small</Button>
          <Button>Explore More</Button>
          <Button size="middle">BUY NOW</Button>
          <Button size="middle" className="font-normal">
            Add to Cart
          </Button>
          <Button size="middle" variant="ghost">
            Outline
          </Button>
        </div>
        <span>button secondary</span>
        <div className="mb-14 flex flex-row space-x-4">
          <Button size="small" variant="secondary">
            Small
          </Button>
          <Button variant="secondary">Explore More</Button>
          <Button size="middle" variant="secondary">
            BUY NOW
          </Button>
          <Button size="middle" variant="secondary" className="font-normal">
            Add to Cart
          </Button>
          <Button size="middle" variant="outline">
            Outline
          </Button>
        </div>
        <span>button default</span>
        <div className="mb-14 flex flex-row space-x-4">
          <div className="h-12 w-32">
            <div className="relative flex h-16 w-full flex-row rounded-lg border border-gray-100 bg-white text-base">
              <button className="w-20 cursor-pointer outline-none">
                <span className="m-auto">-</span>
              </button>
              <div className="flex w-full cursor-default items-center justify-center text-center">
                99
              </div>
              <button className="w-20 cursor-pointer outline-none">
                <span className="m-auto">+</span>
              </button>
            </div>
          </div>
          <Button size="large" variant="default" shape="round">
            Add To Cart
          </Button>
          <Button size="large" variant="default" shape="round">
            <span className="mr-2">+</span> Compare
          </Button>
          <Button size="large" variant="default" shape="round">
            Place order
          </Button>
          <Button size="default" variant="default" shape="round">
            Check Out
          </Button>
        </div>
        <span>button link</span>
        <div className="mb-14 flex flex-row space-x-4">
          <Button link underline className="text-sm">
            SUBSCRIBE
          </Button>
          <Button link underline className="text-sm text-gray-300">
            View More
          </Button>
        </div>
        <span>button full shape</span>
        <div className="mb-14 flex flex-row space-x-4">
          <Button size="small" variant="default" shape="circle">
            Cart
          </Button>
          <Button size="small" variant="default" shape="circle">
            Checkout
          </Button>
          <Button size="small" variant="default" shape="circle">
            Comparison
          </Button>
        </div>
        <p>pagination</p>
        <div className="mb-14 flex flex-row space-x-4">
          <Button className="h-10 w-10">1</Button>
          <Button className="h-10 w-10">2</Button>
          <Button className="h-10 w-10">3</Button>
          <Button className="h-10 w-10">4</Button>
        </div>
        <p>icon</p>
        <div className="mb-14 flex flex-row space-x-4">
          <Button size="icon" shape="circle">
            <AccountAlertIcon className="fill-current" />
          </Button>
          <Button size="icon" shape="circle" variant="secondary">
            <AccountAlertIcon className="fill-current" />
          </Button>
          <Button size="icon" shape="circle" variant="ghost">
            <AccountAlertIcon className="fill-current" />
          </Button>
          <Button size="icon" shape="circle" variant="outline">
            <AccountAlertIcon className="fill-current" />
          </Button>
          <Button size="icon" link shape="circle" variant="outline">
            <AccountAlertIcon className="fill-current" />
          </Button>
        </div>
        <p>Input</p>
        <div className="mb-14 flex max-w-[300px] flex-col gap-8">
          <Input
            type="email"
            name="email-address"
            id="email-address"
            autoComplete="email"
            className="w-full appearance-none bg-transparent xs:max-w-[300px]"
            placeholder="Enter Your Email Address"
            variant="link"
            sizeInput="small"
          />
          <Input
            type="text"
            name="first-name"
            id="first-name"
            placeholder="Enter Your First Name"
            sizeInput="small"
          />
          <Input
            type="text"
            name="first-name"
            id="first-name"
            placeholder="Enter Your First Name"
          />
          <Input
            type="text"
            name="first-name"
            id="first-name"
            placeholder="Enter Your First Name"
            sizeInput="middle"
          />
          <Input
            type="text"
            name="first-name"
            id="first-name"
            placeholder="Enter Your First Name"
            sizeInput="large"
          />
          <div className="max-w-[300px]">
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="relative mt-1 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-5 w-5 text-gray-100" aria-hidden="true" />
            </div>
            <Input type="text" name="name" id="name" className="pl-10" />
          </div>
          <div className="relative mt-1 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <Search className="h-5 w-5 text-gray-100" aria-hidden="true" />
            </div>
            <Input type="text" name="name" id="name" className="pr-10" />
          </div>
        </div>
      </div>
    </div>
  );
}
