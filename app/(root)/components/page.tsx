import { Button } from "@/components/ui";
import { AccountAlert } from "@/components/icons";

export default function ComponentsPage() {
  return (
    <div className="bg-slate-200 flex min-h-screen">
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
            <AccountAlert className="fill-current" />
          </Button>
          <Button size="icon" shape="circle" variant="secondary">
            <AccountAlert className="fill-current" />
          </Button>
          <Button size="icon" shape="circle" variant="ghost">
            <AccountAlert className="fill-current" />
          </Button>{" "}
          <Button size="icon" shape="circle" variant="outline">
            <AccountAlert className="fill-current" />
          </Button>
          <Button size="icon" link shape="circle" variant="outline">
            <AccountAlert className="fill-current" />
          </Button>
        </div>
      </div>
    </div>
  );
}
