import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

import { BiSolidChevronDown } from "react-icons/bi";
import GlobalNavbar from "./navbars/global";
import SiteNavbar from "./navbars/site";
import Head from "next/head";

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

export default function Layout({
    children,
    title,
    type
  }: {
    children: React.ReactNode,
    title: string,
    type: string
  }) {
    return (
      <>
      <Head>

        { type != "none" ?
        <>
          <meta property="og:title" content={title + "• ПСТ"} />
          <meta property="og:url" content={types[type].url} />
          <meta property="og:image" content="https://govoffice.cc/img/2022-02-05_12.44.06.png" />
          <meta property="og:description" content={types[type].description} />
          <meta name="theme-color" content={types[type].color} />
        </>

        :
        <>
          <meta property="og:title" content={title + "• Cloudia"} />
          <meta property="og:url" content={"https://cloudia.is"} />
          <meta property="og:image" content="https://govoffice.cc/img/2022-02-05_12.44.06.png" />
          <meta property="og:description" content={""} />
          <meta name="theme-color" content={"#000000"} />
        </>
  }

        <title>{title} • ПСТ</title>
        </Head>
        
          <header>

            
            <>
            <GlobalNavbar />
            { type != "none" ?
            <SiteNavbar color={types[type].color} titles={types[type].titles} />
            : null }
            </>
          
        </header>
        
        <div id="content" style={{
          marginTop: "24px"
        }}>

        {children}

        </div>

    <footer className="footer mt-auto py-3" style={{
      backgroundColor: type!="none" ? types[type].color : "#000000",
      color: "white"
    }}>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <span className="text-xs"><em>&copy; 2014-2024 CloudCraft. All rights reserved.</em> <em>Developed by <a href="https://dandabs.fi" className="border-none">Daniel Adams</a>.</em></span>
        </div>
    </footer>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossOrigin="anonymous"></script>

    <script src="/cdn/bootstrap/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
    <script src="/js/core.js"></script>

      </>
    )
  }
