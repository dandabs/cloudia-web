import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/layout";

export default function Home() {
  return (
    <Layout type={"dfs"} title={"Blank"}>
        <iframe src="https://map.cloudcraft.fi/?world=minecraft_nordicii&zoom=6&x=1536&z=-223" className="w-screen" style={{
            height: "calc(100vh - 88px)"
        }}></iframe>
    </Layout>
  );
}
