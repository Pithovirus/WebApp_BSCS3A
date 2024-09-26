"use client";
import "../globals.css";

import { useEffect, useState } from "react";
// import { useAuth } from "@clerk/clerk-react";
// import { useRouter } from "next/navigation";

const KantonizePage = () => {
  // const { userId } = useAuth();
  // const router = useRouter(); // Next.js router hook

  // useEffect(() => {
  //   if (!userId) {
  //     router.push("/login"); // Redirect to the login page if not authenticated
  //   }
  // }, [userId, router]);

  // if (!userId) {
  //   return <div>Redirecting...</div>; // Loading state while redirecting
  // }
  const [steps] = useState([
    { value: "Start", id: 0 },
    { value: "Choose your Sauce", id: 1 },
    { value: "Choose your Meat", id: 2 },
    { value: "Choose your Vegetable", id: 3 },
    { value: "Choose your Toppings", id: 4 },
    { value: "Choose your Garnish", id: 5 },
    { value: "Finish", id: 6 },
  ]);
  const [current, setCurrent] = useState(0);
  const [options] = useState([
    [{ value: "", id: 0 }],
    // Choose your Sauce
    [
      { title: "Choose your Sauce", id: 0 },
      { value: "Original", id: 1 },
      { value: "Gourmet", id: 2 },
      { value: "Savor Blend", id: 3 },
    ],
    // Choose your Meat
    [
      { title: "Choose your Meat", id: 0 },
      { value: "Pork", id: 1 },
      { value: "Shrimp", id: 2 },
      { value: "Chicken", id: 3 },
    ],
    // Choose your Vegetable
    [
      { title: "Choose your Vegetable", id: 0 },
      { value: "Carrots", id: 1 },
      { value: "Bell Peppers", id: 2 },
      { value: "Cabbage", id: 3 },
      { value: "Green Beans", id: 4 },
      { value: "Snow Peas", id: 5 },
    ],
    // Choose your Toppings
    [
      { title: "Choose your Toppings", id: 0 },
      { value: "Egg", id: 1 },
      { value: "Kikiam", id: 2 },
      { value: "Squidball", id: 3 },
    ],
    // Choose your Garnish
    [
      { title: "Choose your Garnish", id: 0 },
      { value: "Calamansi", id: 1 },
      { value: "Shallots", id: 2 },
    ],
  ]);
  const [optionsCounter, setOptionsCounter] = useState(0);
  const [selectedAddOns, setSelectedAddOns] = useState("Original");
  // const [selectedMeat, setSelectedMeat] = useState(options[2][current === 2 ? optionsCounter : 0 ].title);
  // const [selectedVegetable, setSelectedVegetable] = useState(options[3][current === 3 ? optionsCounter : 0 ].title);
  // const [selectedTopppings, setSelectedTopppings] = useState(options[4][current === 4 ? optionsCounter : 0 ].title);
  // const [selectedGarnish, setSelectedGarnish] = useState(options[5][current === 5 ? optionsCounter : 0 ].title);
  const [orderOptions] = useState([
    { title: "Singe Serving", description: "(1 Person)", id: 1 },
    { title: "Double Serving", description: "(2 People)", id: 2 },
    { title: "Family Serving", description: "(4-6 People)", id: 3 },
    { title: "Party Serving", description: "(8-10 People)", id: 4 },
  ]);

  const [selectedOrder, setSelectedOrder] = useState<number | undefined>(
    undefined
  );
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  useEffect(() => {
    setCurrent(0);
  }, []);

  // Handle option click to select sauce
  const handleSauceClick = (
    option:
      | { title: string; id: number; value?: undefined }
      | { value: string; id: number; title?: undefined }
  ) => {
    setSelectedAddOns(option.value || "");
  };

  // Increment/Decrement optionsCounter
  const moveUp = () => {
    console.log(optionsCounter);
    if (optionsCounter > 1) {
      setOptionsCounter(optionsCounter - 1);
      setSelectedAddOns(options[current][optionsCounter - 1]?.value || "");
    }
    console.log(optionsCounter);
  };

  const moveDown = () => {
    console.log(selectedAddOns);
    console.log(selectedAddOns === "Shallots2");
    if (optionsCounter < options[current].length - 1) {
      setOptionsCounter(optionsCounter + 1);
      setSelectedAddOns(options[current][optionsCounter + 1]?.value || "");
    }
  };

  return (
    <div className="text-4xl text-center w-full h-[calc(100vh-7rem)] flex items-center px-12 my-4">
      {current !== 6 && (
        <div className="w-full h-[95%] bg-red-200 rounded-lg rounded-tr-[6rem] rounded-bl-[6rem] flex overflow-hidden justify-between">
          <div
            className={`pr-1/4 relative flex items-center justify-start pl-[4rem]
                        ${current === 0 ? "w-1/2" : "w-[35rem]"}`}
          >
            <div className="rounded-full w-[52rem] h-[52rem] bg-red-900 absolute -left-[10rem] -top-[8rem] z-0"></div>

            {current === 0 && (
              <div className="z-10 text-6xl font-bold tracking-wide text-white flex flex-col items-start gap-6 pl-6">
                <div>Let&apos;s</div>
                <div>Kantonize</div>
                <div>Your</div>
                <div>Food!</div>
                <div
                  onClick={() => setCurrent((prev) => prev + 1)}
                  className="z-10 text-xl px-8 py-2 bg-red-200 text-red-900 w-fit rounded-full font-semibold cursor-pointer hover:bg-red-100 hover:text-red-950"
                >
                  Kantonan na! &gt;
                </div>
              </div>
            )}

            {current !== 0 && (
              <div className="z-10 w-full">
                <div className="grid gap-[0.5rem] w-full">
                  <div className="text-sm flex gap-2 mb-[2rem]">
                    {steps.map((step) =>
                      step.id !== 0 ? (
                        <div
                          className={`${
                            step.id === current
                              ? "text-white font-semibold"
                              : "text-gray-400"
                          }`}
                          key={step.id}
                        >
                          {step.id}
                        </div>
                      ) : (
                        false
                      )
                    )}
                  </div>
                  <div className="text-4xl text-white font-semibold min-w-[25rem] w-fit flex justify-center">
                    {options[current][0].title}
                  </div>
                  <div className="z-10 flex justify-start relative">
                    <div className="flex flex-col gap-4 w-[25rem] items-center h-[12rem] justify-center">
                      {options[current].map((option) => (
                        <div
                          className={`${
                            option.value === selectedAddOns
                              ? "text-white scale-95 font-extrabold duration-300 tracking-wider"
                              : "text-gray-400 text-xl"
                          } cursor-pointer`}
                          key={option.id}
                          onClick={() => {
                            handleSauceClick(option);
                          }}
                        >
                          {option.value}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-center absolute right-[2rem] transform top-1/2 -translate-y-1/2">
                      <div className="text-base grid gap-8 text-gray-800">
                        <button
                          className="p-[0.3rem] rounded-full bg-gray-300 hover:bg-white cursor-pointer"
                          onClick={() => {
                            moveUp();
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={3}
                            stroke="currentColor"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m4.5 15.75 7.5-7.5 7.5 7.5"
                            />
                          </svg>
                        </button>
                        <button
                          className="p-[0.3rem] rounded-full bg-gray-300 hover:bg-white cursor-pointer"
                          onClick={() => {
                            moveDown();
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={3}
                            stroke="currentColor"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m19.5 8.25-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-[25rem] flex justify-center mt-[2rem]">
                    <div
                      className="text-xl px-8 py-[0.5rem] bg-red-200 text-red-950 w-fit rounded-full font-semibold cursor-pointer hover:bg-red-100"
                      style={{
                        boxShadow: "inset 0 5px 5px rgba(0, 0, 0, 0.8)",
                      }}
                      onClick={() => {
                        if (current < steps.length - 1) {
                          setOptionsCounter(0);
                          setCurrent((prev) => prev + 1);
                          current < 5
                            ? setSelectedAddOns(
                                options[current + 1][1].value || ""
                              )
                            : false;
                        }
                      }}
                    >
                      Add to the mix
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="w-1/2 relative overflow-hidden">
            {current === 0 && (
              <img
                src="/assets/kantonize/BOWL_full_gourmet.png"
                alt="bowl_image"
                className="w-[50rem] absolute top-1/2 -translate-y-1/2"
              />
            )}
            {/* choose your sauce, if current === 2 ? to choose your meat, and so on....*/}
            {current === 1 && (
              <div>
                <img
                  src="/assets/kantonize/bowl/BOWL_original.png"
                  alt="bowl_image"
                  className={`transition-all duration-500 ease-in-out ${
                    // if ang addOns variable holder = (image itself) this case (original), position sa center intial gamit ko absolute
                    selectedAddOns === "Original"
                      ? "w-[50rem] absolute top-1/2 -translate-y-1/2"
                      : // then if and holder na is = next image naman(gourmet), gin decreased ko and size to 20 rem and put it sa babaw
                      selectedAddOns === "Gourmet"
                      ? "w-[20rem] absolute -top-[10rem]"
                      : // then disappear if next image = next next image(savor blend), since this position will be taken over by gourmet
                        "hidden"
                  }`}
                />
                {/* same applies here and sa iban */}
                <img
                  src="/assets/kantonize/bowl/BOWL_gourmet.png"
                  alt="bowl_image"
                  className={`transition-all duration-500 ease-in-out ${
                    selectedAddOns === "Gourmet"
                      ? "w-[50rem] absolute top-1/2 -translate-y-1/2"
                      : selectedAddOns === "Savor Blend"
                      ? "w-[20rem] absolute -top-[10rem]"
                      : "hidden"
                  }`}
                />
                <img
                  src="/assets/kantonize/bowl/BOWL_savorblend.png"
                  alt="bowl_image"
                  className={`transition-all duration-500 ease-in-out ${
                    selectedAddOns === "Savor Blend"
                      ? "w-[50rem] absolute top-1/2 -translate-y-1/2"
                      : "hidden"
                  }`}
                />
              </div>
            )}
            {/* based sa wireframe nyo tatlo ang placeholder sang choose your meat */}
            {/* so e-relate ta si next image sa predecessor niya */}
            {/* pork -> shrimp -> chicken */}
            {/* given the holder = pork, si shrimp is visible just as before ni pork ready na sa next rotation */}
            {/* initially gagamit ko absolute value as supplement sa muni case pero feel lang magamit sang prefer mo na methods*/}
            {/* e. g. nag add ko kay gourmet sa dalom, as first condition
            if (selectedAddOns === "Pork") add this css properties ("w-[20rem] absolute -bottom-1/2 -translate-y-1/2") */}
            {current === 2 && (
              <div>
                <img
                  src="/assets/kantonize/meat/MEAT_PLATE_pork.png"
                  alt="meat_image"
                  className={`transition-all duration-500 ease-in-out ${
                    selectedAddOns === "Pork"
                      ? "w-[50rem] absolute top-1/2 -translate-y-1/2"
                      : selectedAddOns === "Shrimp"
                      ? "w-[20rem] absolute -top-[10rem]"
                      : "hidden"
                  }`}
                />
                <img
                  src="/assets/kantonize/meat/MEAT_PLATE_shrimp.png"
                  alt="meat_image"
                  className={`transition-all duration-500 ease-in-out ${
                    selectedAddOns === "Pork"
                      ? "w-[20rem] absolute -bottom-1/2 -translate-y-1/2"
                      : selectedAddOns === "Shrimp"
                      ? "w-[50rem] absolute top-1/2 -translate-y-1/2"
                      : selectedAddOns === "Chicken"
                      ? "w-[20rem] absolute -top-[10rem]"
                      : "hidden"
                  }`}
                />
                <img
                  src="/assets/kantonize/meat/MEAT_PLATE_chicken.png"
                  alt="meat_image"
                  className={`transition-all duration-500 ease-in-out ${
                    selectedAddOns === "Chicken"
                      ? "w-[50rem] absolute top-1/2 -translate-y-1/2"
                      : "hidden"
                  }`}
                />
              </div>
            )}
            {/* follow lang and guide sa current === 2, asta sa current === 5, hehe */}
            {current === 3 && (
              <div>
                <img
                  src="/assets/kantonize/vegetables/TOPPINGS_PLATE_carrots.png"
                  alt="vegetable"
                  className={`transition-all duration-500 ease-in-out ${
                    selectedAddOns === "Carrots"
                      ? "w-[50rem] absolute top-1/2 -translate-y-1/2"
                      : selectedAddOns === "Bell Peppers"
                      ? "w-[20rem] absolute -top-[10rem]"
                      : "hidden"
                  }`}
                />
                <img
                  src="/assets/kantonize/vegetables/TOPPINGS_PLATE_bellpeppers.png"
                  alt="vegetable"
                  className={`transition-all duration-500 ease-in-out ${
                    selectedAddOns === "Bell Peppers"
                      ? "w-[50rem] absolute top-1/2 -translate-y-1/2"
                      : selectedAddOns === "Cabbage"
                      ? "w-[20rem] absolute -top-[10rem]"
                      : "hidden"
                  }`}
                />
                <img
                  src="/assets/kantonize/vegetables/TOPPINGS_PLATE_cabbage.png"
                  alt="vegetable"
                  className={`transition-all duration-500 ease-in-out ${
                    selectedAddOns === "Cabbage"
                      ? "w-[50rem] absolute top-1/2 -translate-y-1/2"
                      : selectedAddOns === "Green Beans"
                      ? "w-[20rem] absolute -top-[10rem]"
                      : "hidden"
                  }`}
                />
                <img
                  src="/assets/kantonize/vegetables/TOPPINGS_PLATE_greenbeans.png"
                  alt="vegetable"
                  className={`transition-all duration-500 ease-in-out ${
                    selectedAddOns === "Green Beans"
                      ? "w-[50rem] absolute top-1/2 -translate-y-1/2"
                      : selectedAddOns === "Snow Peas"
                      ? "w-[20rem] absolute -top-[10rem]"
                      : "hidden"
                  }`}
                />
                <img
                  src="/assets/kantonize/vegetables/TOPPINGS_PLATE_snowpea.png"
                  alt="vegetable"
                  className={`transition-all duration-500 ease-in-out ${
                    selectedAddOns === "Snow Peas"
                      ? "w-[50rem] absolute top-1/2 -translate-y-1/2"
                      : "hidden"
                  }`}
                />
              </div>
            )}
            {current === 4 && (
              <div>
                <img
                  src="/assets/kantonize/toppings/TOPPINGS_PLATE_egg.png"
                  alt="toppings"
                  className={`transition-all duration-500 ease-in-out ${
                    selectedAddOns === "Egg"
                      ? "w-[50rem] absolute top-1/2 -translate-y-1/2"
                      : selectedAddOns === "Kikiam"
                      ? "w-[20rem] absolute -top-[10rem]"
                      : "hidden"
                  }`}
                />
                <img
                  src="/assets/kantonize/toppings/TOPPINGS_PLATE_kikiam.png"
                  alt="toppings"
                  className={`transition-all duration-500 ease-in-out ${
                    selectedAddOns === "Kikiam"
                      ? "w-[50rem] absolute top-1/2 -translate-y-1/2"
                      : selectedAddOns === "Squidball"
                      ? "w-[20rem] absolute -top-[10rem]"
                      : "hidden"
                  }`}
                />
                <img
                  src="/assets/kantonize/toppings/TOPPINGS_PLATE_squidballs.png"
                  alt="toppings"
                  className={`transition-all duration-500 ease-in-out ${
                    selectedAddOns === "Squidball"
                      ? "w-[50rem] absolute top-1/2 -translate-y-1/2"
                      : "hidden"
                  }`}
                />
              </div>
            )}
            {current === 5 && (
              <div>
                <img
                  src="/assets/kantonize/garnish/GARNISH_PLATE_calamansi.png"
                  alt="toppings"
                  className={`transition-all duration-500 ease-in-out ${
                    selectedAddOns === "Calamansi"
                      ? "w-[50rem] absolute top-1/2 -translate-y-1/2"
                      : selectedAddOns === "Shallots"
                      ? "w-[20rem] absolute -top-[10rem]"
                      : "hidden"
                  }`}
                />
                <img
                  src="/assets/kantonize/garnish/GARNISH_PLATE_shallots.png"
                  alt="toppings"
                  className={`transition-all duration-500 ease-in-out ${
                    selectedAddOns === "Shallots"
                      ? "w-[50rem] absolute top-1/2 -translate-y-1/2"
                      : "hidden"
                  }`}
                />
              </div>
            )}
          </div>
        </div>
      )}
      {current === 6 && (
        <div className="w-full h-[95%] bg-red-900 rounded-lg rounded-tr-[6rem] rounded-bl-[6rem] flex items-center justify-center px-[5rem]">
          <div className="grid w-full gap-[2rem]">
            <div className="w-full flex justify-start">
              <div className="text-sm flex gap-2">
                {steps.map((step) =>
                  step.id !== 0 ? (
                    <div
                      className={`${
                        step.id === current
                          ? "text-white font-semibold"
                          : "text-gray-400"
                      }`}
                      key={step.id}
                    >
                      {step.id}
                    </div>
                  ) : (
                    false
                  )
                )}
              </div>
            </div>
            <div className="w-full flex justify-center text-4xl text-white font-semibold">
              How many servings would you like for your order?
            </div>
            <div className="w-full flex items-center justify-between px-[10rem]">
              {orderOptions.map((option) => (
                <div
                  key={option.id}
                  className={`grid px-5 py-8 rounded-3xl cursor-pointer
                                ${
                                  selectedOrder === option.id
                                    ? "ring-4 ring-inset ring-red-400 border-2 border-red-400 bg-red-500 text-white"
                                    : "border-2 border-black bg-white"
                                }`}
                  onClick={() => {
                    selectedOrder === option.id
                      ? setSelectedOrder(0)
                      : setSelectedOrder(option.id);
                  }}
                >
                  <div>
                    <img
                      src="/assets/kantonize/BOWL_full_gourmet.png"
                      alt=""
                      className="w-[8rem]"
                    />
                  </div>
                  <div className="grid text-sm font-semibold">
                    <div>{option.title}</div>
                    <div>{option.description}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full flex justify-end">
              <div
                className="text-xl px-20 py-[0.5rem] bg-red-200 text-red-950 w-fit rounded-full font-semibold cursor-pointer hover:bg-red-100"
                style={{ boxShadow: "inset 0 5px 5px rgba(0, 0, 0, 0.8)" }}
                onClick={() => {
                  selectedOrder
                    ? setShow(true)
                    : alert("Select an order to Kantonize");
                }}
              >
                Next
              </div>
            </div>
          </div>
          {show && (
            <div className="animateConfirmation fixed bottom-0 border-[0.15rem] border-black h-[33rem] w-full bg-gradient-to-b from-[#FBF2F2] via-[#D2CACA] to-[#958F8F] rounded-3xl shadow-[0rem_-5rem_4rem_-0px_rgba(0,0,0,0.4)] flex justify-center">
              <div className="h-full grid py-[4rem] text-black items-center text-center">
                <div className="text-3xl font-extrabold tracking-widest">
                  ORDER CONFIRMATION
                </div>
                <div className="text-[1.25rem] text-gray-700 pt-2">
                  Your total payment is ₱120. Please confirm your order to
                  proceed.
                </div>
                <div>
                  <img
                    src="/assets/kantonize/BOWL_full_gourmet.png"
                    alt=""
                    className="w-[15rem] mx-auto"
                  />
                </div>
                <div className="grid gap-3 items-center justify-center">
                  <a
                    className="text-xl w-[20rem] py-[0.5rem] bg-[#CA4545] text-white rounded-full font-semibold cursor-pointer hover:bg-red-800"
                    style={{ boxShadow: "inset 0 5px 5px rgba(0, 0, 0, 0.8)" }}
                    onClick={() => {
                      setShow(false);
                      setShow2(true);
                    }}
                  >
                    Kantonan na!
                  </a>
                  <div
                    className="text-xl w-[20rem] py-[0.5rem] bg-white text-black rounded-full font-semibold cursor-pointer hover:bg-red-100"
                    style={{ boxShadow: "inset 0 5px 5px rgba(0, 0, 0, 0.8)" }}
                    onClick={() => {
                      setShow(false);
                    }}
                  >
                    Cancel
                  </div>
                </div>
              </div>
            </div>
          )}
          {show2 && (
            <div className="animateConfirmation fixed top-1/2 -translate-y-1/2 mx-auto border-[0.15rem] border-black h-[28rem] w-[75%] bg-gradient-to-b from-[#FBF2F2] via-[#D2CACA] to-[#958F8F] rounded-3xl shadow-[0rem_5rem_12rem_0rem_rgba(0,0,0,0.5)] flex justify-center pt-2">
              <div className="w-full flex flex-col justify-center gap-2">
                <div className="font-black text-[2.5rem]">ORDER CONFIRMED</div>
                <div className="font-semibold text-[1.5rem]">
                  Thank you for your order!
                </div>
                <div className="text-[1.25rem] py-4 mx-20 leading-tight">
                  Your customized pancit canton is being prepared just the way
                  you like it. You&apos;ll receive a notification once it&apos;s
                  ready for delivery or pick-up.
                </div>

                <a
                  className="text-xl w-[20rem] py-[0.5rem] bg-[#CA4545] text-white rounded-full font-semibold cursor-pointer hover:bg-red-500 mx-auto"
                  style={{ boxShadow: "inset 0 3px 3px rgba(0, 0, 0, 0.4)" }}
                  href="/"
                >
                  Back to home
                </a>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default KantonizePage;
