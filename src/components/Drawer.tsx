import { Disclosure, Transition } from "@headlessui/react";
import React from "react";
import { ArrowDown, ArrowUp, CloseMenu, Todo } from "../assets";
import { navData } from "./Header";

interface DrawerProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Drawer = ({ open = false, setOpen }: DrawerProps) => {
  return (
    <>
      <Transition show={open}>
        <Transition.Child
          className="fixed right-0 top-0 w-[250px] z-30 h-screen"
          enter="transition ease-in-out duration-300 transform"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <div className="fixed right-0 top-0 w-[250px] h-screen bg-almost-white pt-20 p-8 z-50 text-almost-black">
            <button onClick={() => setOpen(false)}>
              <img
                className="absolute top-5 right-5"
                src={CloseMenu}
                alt="Close Menu"
              />
            </button>
            <ul className="flex flex-col gap-3">
              {navData.map((nav, index) => (
                <li key={index}>
                  {nav.children ? (
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex items-center text-left">
                            <span className="mr-4">{nav.title}</span>
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
                          </Disclosure.Button>
                          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm ">
                            <ul className="flex flex-col space-y-3">
                              {nav.children.map((child, i) => (
                                <li key={i}>
                                  <a href={child.href}>
                                    {child.imgUrl && (
                                      <img
                                        src={child.imgUrl}
                                        className="inline w-4 mr-3"
                                        alt={child.title}
                                      />
                                    )}
                                    {child.title}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ) : (
                    <a href={nav.href}>{nav.title}</a>
                  )}
                </li>
              ))}
            </ul>

            <div className="flex flex-col space-y-5 items-center justify-items-center pt-8">
              <button className="rounded-xl px-4 py-2 w-full">Login</button>
              <button className="w-full border-2 rounded-xl px-4 py-2 border-almost-black">
                Register
              </button>
            </div>
          </div>
        </Transition.Child>
        <Transition.Child
          enter="transition-opacity ease-linear duration-100"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            onClick={() => setOpen(false)}
            className="w-full h-full fixed bg-black opacity-80 z-10 inset-0"
          ></div>
        </Transition.Child>
      </Transition>
    </>
  );
};

export default Drawer;
