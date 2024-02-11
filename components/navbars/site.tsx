import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

import { BiSolidChevronDown } from "react-icons/bi";

import Typewriter from 'typewriter-effect';

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const types : {
    [key: string]: {
        color: string,
        description: string,
        url: string,
        titles: string[]
    }
} = {
    gov: {
        color: "#271536",
        url: "https://govoffice.cc",
        description: "Official website of the CloudCraft government.",
        titles: [
            'CloudCraft Government Office', // English
            'Piilve Statsmitoimist', // Cloudic (Latin)
            'Пиилвэ Статсмитоимист', // Cloudic (Cyrillic)
            'CloudCraftin hallitus', // Finnish
            'CloudCraft-regjeringen', // Norwegian
            'CloudCraft ríkisstjórn', // Icelandic
            'CloudCraftap naalagaassuseqa',
            'CloudCraftaid Ráđđehus', // Northern Sámi
            'CloudCraftin abuniekkut', // Karelian
            'CloudCrafti valitsus', // Estonian
            'Oficina Gubernamental de CloudCraft', // Spanish
            'Escritório do Governo da CloudCraft', // Portugese
            'Oifig Rialtais CloudCraft', // Irish Gaelic
        ]
    }
}

export default function SiteNavbar({
    type
  }: {
    type: string
  }) {
    return (
        <>
        <Head>

        <meta property="og:title" content={types[type].titles[0]} />
        <meta property="og:url" content={types[type].url} />
        <meta property="og:image" content="https://govoffice.cc/img/2022-02-05_12.44.06.png" />
        <meta property="og:description" content={types[type].description} />
        <meta name="theme-color" content={types[type].color} />

        <title>d • ПСТ</title>
      </Head>
      <Disclosure as="nav" style={{
            backgroundColor: types[type].color
        }}>
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 h-16">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden h-16">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-grow flex justify-center h-16">
                  <div className="flex-shrink-0 flex items-center">
                      <div className="grow shrink mr-2 hidden sm:block">
                      <img
                        src="/img/logo_white.png"
                        alt=""
                        width="24"
                        height="24"
                        className="d-inline-block align-text-top"
                    />
                    </div>
                    <Link href="/" className="text-lg text-white border-none">
                        <Typewriter
                            options={{
                                strings: types[type].titles,
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </Link>
                  </div>
                  <div className="hidden sm:block sm:ml-6 sm:justify-self-end flex-grow">
                    <div className="flex space-x-4 justify-end items-center h-16">
                        
                    <Menu as="div" className="relative inline-block text-left">
                        <Menu.Button
                          className={"text-white border-none flex-row flex items-center gap-1 text-sm"}
                          aria-current={false ? "page" : undefined}
                        >
                          {'Government'}
                          <BiSolidChevronDown />
                        </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 w-40 -mt-4 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              <Link href="/government/who-represents-me"
                  className="bg-white text-gray-900 block px-4 py-2 text-sm hover:bg-gray-200 border-none"
                >
                {'Who\'s in it'}
                </Link>
            </Menu.Item>
            <Menu.Item>
            <Link href="/government/how-government-works"
                  className="bg-white text-gray-900 block px-4 py-2 text-sm hover:bg-gray-200 border-none"
                >
                  {'How it works'}
                </Link>
            </Menu.Item>
            <Menu.Item>
            <Link href="/government/behind-the-scenes"
                  className="bg-white text-gray-900 block px-4 py-2 text-sm hover:bg-gray-200 border-none"
                >
                  {'Suggestion protocol'}
                </Link>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>

                      </Menu>

                      <Menu as="div" className="relative inline-block text-left">
                        <Menu.Button
                          className={"text-white border-none flex-row flex items-center gap-1 text-sm"}
                          aria-current={false ? "page" : undefined}
                        >
                          {'Presidency'}
                          <BiSolidChevronDown />
                        </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 -mt-4 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
            <Link href="/forms/sd01"
                  className="bg-white text-gray-900 block px-4 py-2 text-sm hover:bg-gray-200 border-none"
                >
                  {'Run for President'}
                </Link>
            </Menu.Item>
            <Menu.Item>
              <Link href="/government/elections"
                  className="bg-white text-gray-900 block px-4 py-2 text-sm hover:bg-gray-200 border-none"
                >
                {'Elections'}
                </Link>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>

                      </Menu>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="sm:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <Disclosure.Button
                      as="a"
                      href="https://translate.cloudcraft.fi"
                      className={
                          "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium after:content-none"
                      }
                    >
                      Translator
                    </Disclosure.Button>
                    <Disclosure.Button
                      as="a"
                      href="https://aao.govoffice.cc"
                      className={
                          "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium after:content-none"
                      }
                    >
                      ÁAO22
                    </Disclosure.Button>
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
        </>
    )
}