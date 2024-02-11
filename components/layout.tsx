import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

import { BiSolidChevronDown } from "react-icons/bi";
import GlobalNavbar from "./navbars/global";
import SiteNavbar from "./navbars/site";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Layout({
    children
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
          <header>

          <GlobalNavbar />
          <SiteNavbar type="gov" />

        </header>

        <div id="content" className="container">

        {children}

        </div>

    <footer className="footer mt-auto py-3 bg-light">
        <div className="container">
            <span className="text-muted"><em>&copy; 2014-2022 CloudCraft. All rights reserved.</em></span><br />
            <span className="text-muted"><em>Developed by <a href="https://dandabs.fi">Otto Koskinen</a>.</em></span>
        </div>
    </footer>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossOrigin="anonymous"></script>

    <script src="/cdn/bootstrap/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
    <script src="/js/core.js"></script>

      </>
    )
  }
