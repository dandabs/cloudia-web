import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

import { BiSolidChevronDown } from "react-icons/bi";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function GlobalNavbar() {
    return (
        <Disclosure as="nav" className="bg-white">
        {({ open }) => (
          <>
            <div className="max-w-5xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-6">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                </div>
                <div className="flex-grow flex justify-center">
                  <div className="flex-shrink-0 flex items-center">
                      <div className="hidden sm:block">
                      <img
                        src="/img/small_flag.png"
                        alt=""
                        className="nav-link px-1 h-3"
                        />
                    </div>
                    <div className="mr-1 hidden sm:block">
                      <img
                        src="/img/small_is.jpg"
                        alt=""
                        className="nav-link px-1 h-3"
                        />
                    </div>
                    <Link href="/" className="border-none text-neutral-500 text-xs">
                    An official website of the Cloudic government
                    </Link>
                  </div>
                  <div className="hidden sm:block sm:ml-6 sm:justify-self-end flex-grow">
                    <div className="flex space-x-4 justify-end items-center text-xs text-neutral-500">
                        <Link href="https://translate.cloudcraft.fi"
                          
                          className={
                              "border-none"
                          }
                        >
                          Translator
                        </Link>

                      <Link href="https://aao.govoffice.cc"
                          className={
                            "border-none"
                        }
                        >
                          ÁAO22
                        </Link>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>
    )
}