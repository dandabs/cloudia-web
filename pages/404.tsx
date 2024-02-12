import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/layout";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout type={"none"} title={"404"}>
        <div className="relative" style={{
          width: "100vw",
          height: "calc(100vh - 24px - 48px)",
          overflow: "hidden"
        }}>
          <div className="h-full w-full absolute" style={{
            filter: "blur(6px)",
            backgroundImage: "url('/img/2021-08-07_17.50.32.png')",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            transform: "scale(1.2)",
          }} />
          <div className="h-full w-full absolute flex p-5 items-center justify-center">
            <div className="text-white flex flex-col justify-center items-center">
              <h1 className="font-black text-9xl m-0 text-center opacity-60">404</h1>
              <p className="text-center mt-4 text-2xl font-medium">Page not found</p>
              <p className="text-center text-md mt-1">Maybe Trishy P blew it up?</p>
              <Link href="/" className="py-2 px-10 rounded-md !border-2 block mt-5 w-fit hover:bg-white/20">Back home</Link>
            </div>
          </div>
        </div>
    </Layout>
  );
}
