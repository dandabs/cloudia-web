import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout type={"none"} title={"Blank"}>
        <div className="relative" style={{
          width: "100vw",
          height: "calc(100vh - 24px - 48px)",
          overflow: "hidden"
        }}>
          <div className="h-full w-full absolute" style={{
            filter: "blur(6px)",
            backgroundImage: "url('/img/2021-06-01_20.50.17.png')",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            transform: "scale(1.1)",
          }} />
          <div className="h-full w-full absolute flex p-5 items-center justify-center">
            <div className="text-white">
              <p className="text-center">Discover a new world; Discover</p>
              <h1 className="font-black text-6xl m-0 text-center">Cloudia</h1>
              <p className="text-center mt-3 text-xl">Select an option to get started...</p>
            </div>
          </div>
        </div>
    </Layout>
  );
}
