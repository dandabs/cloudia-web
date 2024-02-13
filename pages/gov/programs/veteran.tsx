import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/layout";

export default function Home() {
  return (
    <Layout type={"gov"} title={"Blank"}>
         <div className="p-5">
                <div className="ml-24 w-2/4 mt-10">
                    <h1 className="font-bold mb-1 text-5xl w-screen">Cloudia Veteran Program (CCVP)</h1>
                    <p className="text-xl mt-2">To continue using cloudia.is, you must set up your account by telling us who you are. Please complete the form below.</p>
                    <p className="my-12 text-lg ps-8 !border-s-8 border-s-gray-400">
                    Account linking runs under an honour system. Linking a Minecraft account which is not your own will result in punishments and delays.
                    </p>
            </div>
        </div>
    </Layout>
  );
}
