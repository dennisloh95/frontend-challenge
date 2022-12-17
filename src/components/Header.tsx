import { Menu, Transition } from "@headlessui/react";
import React, { useState } from "react";
import {
  ArrowDown,
  ArrowUp,
  Calendar,
  Logo,
  OpenMenu,
  Planning,
  Reminders,
  Todo,
} from "../assets";
import Drawer from "./Drawer";

export const navData = [
  {
    title: "Features",
    children: [
      {
        title: "Todo List",
        imgUrl: Todo,
        href: "#",
      },
      {
        title: "Calendar",
        imgUrl: Calendar,
        href: "#",
      },
      {
        title: "Reminders",
        imgUrl: Reminders,
        href: "#",
      },
      {
        title: "Planning",
        imgUrl: Planning,
        href: "#",
      },
    ],
  },
  {
    title: "Company",
    children: [
      {
        title: "History",
        href: "#",
        imgUrl: "",
      },
      {
        title: "Our Team",
        href: "#",
        imgUrl: "",
      },
      {
        title: "Blod",
        href: "#",
        imgUrl: "",
      },
    ],
  },
  {
    title: "Careers",
    href: "#",
  },
  {
    title: "About",
    href: "#",
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="container">
      <div className="flex py-5 px-3">
        <div className="flex items-center">
          <img src={Logo} alt="logo" />
        </div>
        <div className="flex-grow flex items-center z-20">
          <nav className="text-medium-gray">
            <ul className="hidden lg:flex lg:gap-x-8 lg:ml-14">
              {navData.map((nav, index) => (
                <li key={index}>
                  {nav.children ? (
                    <Menu>
                      {({ open }) => (
                        <>
                          <Menu.Button className="flex items-center gap-[10px] hover:text-almost-black ">
                            {nav.title}
                            <img
                              src={ArrowDown}
                              alt="arrow down"
                              className={`${open && "hidden"} `}
                            />
                            <img
                              src={ArrowUp}
                              alt="arrow up"
                              className={`${!open && "hidden"} `}
                            />
                          </Menu.Button>
                          <Transition
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                          >
                            <Menu.Items className="absolute right-0 mt-4 w-40 py-3 rounded-md bg-white shadow-2xl focus:outline-none">
                              {nav.children.map((child) => (
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      className={`${
                                        active && "bg-slate-100"
                                      } block w-full text-left px-4 py-2 text-sm cursor-pointer`}
                                      href={child.href}
                                    >
                                      {child.imgUrl && (
                                        <img
                                          src={child.imgUrl}
                                          alt={child.title}
                                          className="w-4 mr-3 inline"
                                        />
                                      )}

                                      {child.title}
                                    </a>
                                  )}
                                </Menu.Item>
                              ))}
                            </Menu.Items>
                          </Transition>
                        </>
                      )}
                    </Menu>
                  ) : (
                    <a
                      href={nav.href}
                      className="flex items-center gap-[10px] hover:text-almost-black"
                    >
                      {nav.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex items-center">
          <div className="hidden lg:flex lg:space-x-10 lg:items-center text-medium-gray">
            <button className="hover:text-almost-black px-3 py-2 rounded-xl">
              Login
            </button>
            <button className="border border- rounded-xl px-3 py-2 hover:text-almost-black hover:border-almost-black">
              Register
            </button>
          </div>
          <button className="block lg:hidden" onClick={() => setOpen(true)}>
            <img src={OpenMenu} alt="menu" />
          </button>
          <Drawer open={open} setOpen={setOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;
