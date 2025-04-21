import { Box, Divider, Input, Link, Stack, Typography } from "@mui/joy";
import "./Home.css";
import { useEffect, useState } from "react";

export default function Home() {
	return (
		<div style={{
			width: "100vw",
			overflow: "hidden",
			height: "100vh",
			position: "relative"
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
			  <p className="text-center">Celebrating 10 years of</p>
				<h1 className="font-black text-8xl m-0 text-center opacity-80">CloudCraft</h1>
				<p className="text-center">play.cloudcraft.fi (Java) | bedrock.cloudcraft.fi (Bedrock)</p>
				<div className="flex flex-row justify-center items-center mt-1 gap-3">
				  <a href="https://discord.gg/fXw9f8fyAH" className="border-none hover:opacity-70 opacity-90 justify-center items-center flex flex-col">
				  <img
					src="/img/heads/wumpus.png"
					alt="Wumpus head"
					width={50}
					height={50}
				  />
				  </a>
				  <a href="https://instagram.com/cloudcraftnordic" className="border-none hover:opacity-70 opacity-90 justify-center items-center flex flex-col mt-0">
				  <img
					src="/img/heads/instagram.png"
					alt="Instagram head"
					width={50}
					height={50}
				  />
				  </a>
				  <a href="https://tiktok.com/cloudcraftnordicsmp" className="border-none hover:opacity-70 opacity-90 justify-center items-center flex flex-col mt-0">
				  <img
					src="/img/heads/tiktok.png"
					alt="TikTok head"
					width={50}
					height={50}
				  />
				  </a>
				</div>
			  </div>
			  <div className="text-white flex flex-col justify-center gap-8 absolute left-0 p-5">
  
				<div className="flex flex-col justify-center items-center">
				  <a href="/map" className="border-none hover:opacity-70 opacity-90 justify-center items-center flex flex-col">
				  <img
					src="/img/heads/globe.png"
					alt="Globe head"
					width={180}
					height={180}
				  />
				  <p className="text-center text-xl font-black -mt-3">View Map</p>
				  </a>
				</div>
  
				<div className="flex flex-col justify-center items-center">
				  <a href="" className="border-none hover:opacity-70 opacity-90 justify-center items-center flex flex-col">
				  <img
					src="/img/heads/pc.png"
					alt="PC head"
					width={180}
					height={180}
				  />
				  <p className="text-center text-xl font-black -mt-3">Inspect Statistics</p>
				  </a>
				</div>
  
				<div className="flex flex-col justify-center items-center">
				  <a href="" className="border-none hover:opacity-70 opacity-90 justify-center items-center flex flex-col">
				  <img
					src="/img/heads/shop.png"
					alt="Shop head"
					width={180}
					height={180}
				  />
				  <p className="text-center text-xl font-black -mt-3">Browse Store</p>
				  </a>
				</div>
  
			  </div>
			  <div className="text-white flex flex-col justify-center gap-8 absolute right-0 p-5">
  
				<div className="flex flex-col justify-center items-center">
				  <a href="/language" className="border-none hover:opacity-70 opacity-90">
				  <img
					src="/img/heads/books.png"
					alt="Books head"
					width={130}
					height={130}
				  />
				  <p className="text-center text-lg font-black -mt-2">Learn Cloudic</p>
				  </a>
				</div>
  
				<div className="flex flex-col justify-center items-center">
				  <a href="/ceremony" className="border-none hover:opacity-70 opacity-90">
				  <img
					src="/img/heads/tv.png"
					alt="PC head"
					width={130}
					height={130}
				  />
				  <p className="text-center text-lg font-black -mt-2">Discover ÁAO</p>
				  </a>
				</div>
  
				<div className="flex flex-col justify-center items-center">
				  <a href="/gov/programs" className="border-none hover:opacity-70 opacity-90">
				  <img
					src="/img/heads/form.png"
					alt="Form head"
					width={130}
					height={130}
				  />
				  <p className="text-center text-lg font-black -mt-2">Join Programs</p>
				  </a>
				</div>
  
				<div className="flex flex-col justify-center items-center">
				  <a href="/afp" className="border-none hover:opacity-70 opacity-90">
				  <img
					src="/img/heads/echest.png"
					alt="Ender Chest head"
					width={130}
					height={130}
				  />
				  <p className="text-center text-lg font-black -mt-2">Enter Vault</p>
				  </a>
				</div>
  
			  </div>
			</div>
		  </div>
	);
}
