import React from "react";

const First = ({ className, setFirst, setSecond, setThird }) => {
  const handle = () => {
    setFirst(false);
    setSecond(true);
    setThird(false);
  };
  return (
    <div className={className}>
      <div className="border-l-2 border-white pl-3 pb-5 relative max-w-md">
        <span className="w-3 h-3 rounded-full bg-white absolute top-0 -left-[0.4rem]"></span>
        <h1 className="text-xs mb-5">Confirm Order Info</h1>
        <div className="flex justify-between flex-wrap items-center gap-3">
          <span>
            <h2 className="text-xs mb-2">Amount</h2>
            <h3 className="text-sm font-medium">
              ₦{new Intl.NumberFormat("en-US", {}).format(2000)}
            </h3>
          </span>
          <span>
            <h2 className="text-xs mb-2">Price</h2>
            <h3 className="text-sm font-medium">
              ₦{new Intl.NumberFormat("en-US", {}).format(134500.0)}
            </h3>
          </span>
          <span>
            <h2 className="text-xs mb-2">Quantity</h2>
            <h3 className="text-sm font-medium">0.01486988 USDT</h3>
          </span>
        </div>
      </div>
      <div className="border-l-2 border-white pl-3 pb-10 relative">
        <span className="w-3 h-3 rounded-full bg-white absolute top-0 -left-[0.4rem]"></span>
        <h1 className="text-xs mb-3">
          Transfer funds to the seller&apos;s account provided below
        </h1>
        <div className="bg-landingBlue rounded-md h-auto flex justify-between items-start w-full">
          <ul className="py-5 px-3 h-full block">
            <li className="list-inside list-disc text-sm font-semibold">
              Bank Transfer
            </li>
          </ul>
          <div className="h-full border-l-2 border-white px-3 py-5 pb-16 space-y-3 flex-auto">
            <span className="text-sm block">
              <h1 className="font-medium">Referrence No</h1>
              <h2>TRRF203762731</h2>
            </span>
            <span className="text-sm block">
              <h1 className="font-semibold">Name</h1>
              <h2>Tunde Wale Olarewaju</h2>
            </span>
            <span className="text-sm block">
              <h1 className="font-semibold">Bank</h1>
              <h2>Kuda</h2>
            </span>
            <span className="text-sm block">
              <h1 className="font-semibold">Bank account number</h1>
              <h2>01234567899</h2>
            </span>
          </div>
        </div>
      </div>
      <div className="pl-3 relative">
        <span className="w-3 h-3 rounded-full bg-white absolute top-0 -left-[0.3rem]"></span>
        <h1 className="text-xs mb-3">
          After transfering the funds click on “Transferred, notify seller”
          button.
        </h1>
      </div>
      <span className="text-sm text-accent font-semibold flex gap-3 mt-8">
        <button className="bg-white rounded-md py-2 px-4" onClick={handle}>
          Transferred, notify seller
        </button>
        <button className="bg-white rounded-md py-2 px-4 opacity-50 transition-all duration-200 hover:opacity-100">
          Cancel Order
        </button>
      </span>
    </div>
  );
};

export default First;
