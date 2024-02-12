import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/layout";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout type={"none"} title={"Blank"}>
        <div className="relative" style={{
          width: "100vw",
          height: "calc(100vh - 24px - 32px)",
          overflow: "hidden"
        }}>
          <div className="h-full w-full absolute" style={{
            filter: "blur(6px)",
            backgroundImage: "url('/img/2021-06-01_20.50.17.png')",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            transform: "scale(1.2)",
          }} />
          <div className="h-full w-full absolute flex p-5 items-center justify-center flex-col">
            <div className="text-white">
              <p className="text-center">Discover a new world; Discover</p>
              <h1 className="font-black text-8xl m-0 text-center opacity-80">Cloudia</h1>
              <div className="flex flex-row justify-center items-center mt-1 gap-3">
                <Link href="https://discord.gg/fXw9f8fyAH" className="border-none hover:opacity-70 opacity-90 justify-center items-center flex flex-col">
                <Image
                  src="/img/heads/wumpus.png"
                  alt="Wumpus head"
                  width={50}
                  height={50}
                />
                </Link>
                <Link href="https://instagram.com/cloudcraftnordic" className="border-none hover:opacity-70 opacity-90 justify-center items-center flex flex-col mt-0">
                <Image
                  src="/img/heads/instagram.png"
                  alt="Instagram head"
                  width={50}
                  height={50}
                />
                </Link>
                <Link href="https://tiktok.com/cloudcraftnordicsmp" className="border-none hover:opacity-70 opacity-90 justify-center items-center flex flex-col mt-0">
                <Image
                  src="/img/heads/tiktok.png"
                  alt="TikTok head"
                  width={50}
                  height={50}
                />
                </Link>
              </div>
            </div>
            <div className="text-white flex flex-col justify-center gap-8 absolute left-0 p-5">

              <div className="flex flex-col justify-center items-center">
                <Link href="" className="border-none hover:opacity-70 opacity-90 justify-center items-center flex flex-col">
                <Image
                  src="/img/heads/globe.png"
                  alt="Globe head"
                  width={180}
                  height={180}
                />
                <p className="text-center text-xl font-black -mt-3">View Map</p>
                </Link>
              </div>

              <div className="flex flex-col justify-center items-center">
                <Link href="" className="border-none hover:opacity-70 opacity-90 justify-center items-center flex flex-col">
                <Image
                  src="/img/heads/pc.png"
                  alt="PC head"
                  width={180}
                  height={180}
                />
                <p className="text-center text-xl font-black -mt-3">Inspect Statistics</p>
                </Link>
              </div>

              <div className="flex flex-col justify-center items-center">
                <Link href="" className="border-none hover:opacity-70 opacity-90 justify-center items-center flex flex-col">
                <Image
                  src="/img/heads/shop.png"
                  alt="Shop head"
                  width={180}
                  height={180}
                />
                <p className="text-center text-xl font-black -mt-3">Browse Store</p>
                </Link>
              </div>

            </div>
            <div className="text-white flex flex-col justify-center gap-8 absolute right-0 p-5">

              <div className="flex flex-col justify-center items-center">
                <Link href="" className="border-none hover:opacity-70 opacity-90">
                <Image
                  src="/img/heads/books.png"
                  alt="Books head"
                  width={130}
                  height={130}
                />
                <p className="text-center text-lg font-black -mt-2">Learn Cloudic</p>
                </Link>
              </div>

              <div className="flex flex-col justify-center items-center">
                <Link href="" className="border-none hover:opacity-70 opacity-90">
                <Image
                  src="/img/heads/tv.png"
                  alt="PC head"
                  width={130}
                  height={130}
                />
                <p className="text-center text-lg font-black -mt-2">Discover ÁAO</p>
                </Link>
              </div>

              <div className="flex flex-col justify-center items-center">
                <Link href="" className="border-none hover:opacity-70 opacity-90">
                <Image
                  src="/img/heads/form.png"
                  alt="Form head"
                  width={130}
                  height={130}
                />
                <p className="text-center text-lg font-black -mt-2">Join Programs</p>
                </Link>
              </div>

              <div className="flex flex-col justify-center items-center">
                <Link href="" className="border-none hover:opacity-70 opacity-90 justify-center items-center flex flex-col">
                <Image
                  src="/img/heads/echest.png"
                  alt="Ender Chest head"
                  width={130}
                  height={130}
                />
                <p className="text-center text-lg font-black -mt-2">Enter Vault</p>
                </Link>
              </div>

            </div>
          </div>
        </div>
    </Layout>
  );
}
