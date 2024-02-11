import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>

<div className="container" style={{ maxWidth: "1000px" }}>
    <div className="row">

        <div className="col-md-8 col-sm-12">

            <h1>How government works</h1>
            <p className="larger">On CloudCraft, the President leads the government with the support of the Cabinet and other ministers of departments.
                The President and Cabinet regularly meet at the presidential mansion to discuss the latest news on the server, player
                suggestions, and other potential ideas to improve the server.
            </p>
            <p className="larger">While the Government is free to make any decisions and changes it wants, they directly report to the Department of the Executive
                (also known as 'the Overseers'), who have veto power over any decisions made. The DoE are also exclusively responsible for the
                implementation of any features or bills passed by the Government.
            </p>

            <div className="line-x"></div>

            <h2>Who runs government?</h2>
            <h3>The President</h3>
            <p>The President of CloudCraft is the leader of the Cloudic Government, and is exclusively responsible for all decisions made and
                changes implemented to the server's lore, gameplay or law.
            </p>
            <p>Additional jobs taken up by the President include:</p>
            <ul>
                <li className="body">Organizing meetings between themselves and the rest of the Government.</li>
                <li className="body">Signing official server documents during their term.</li>
                <li className="body">Acting as a figurehead for the server, or the head of the 'staff team' when a player query arises.</li>
                <li className="body">Assisting players with issues and queries, and/or forwarding them to the relevant department.</li>
            </ul>
            <img className="body" src="/img/2021-06-03_16.32.102.png" style={{ width: "80%" }} />

            <h3>The Cabinet</h3>
            <p>The Cabinet of CloudCraft are the most powerful members of the Government, second only to the president themselves. They make up the
                decision-making body present at meetings, and vote on popular suggestions and issues which arise.
            </p>
            <p>The Cloudic Cabinet usually consists of 5 players, chosen individually by the President – these are usually the most active or dedicated
                players at the time of selection. They may continue to hold their positions through multiple Presidents.
            </p>
            <img className="body" src="/img/2021-12-10_17.08.582.png" style={{ width: "80%" }} />

            <div className="line-x"></div>

            <h2>What are the departments?</h2>
            <p>The Departments of Government on CloudCraft are smaller groups of players who report to the government and President. These departments
                each have one key topic or purpose, which make delegation of larger tasks easier to manage and track.
            </p>

            <table style={{ width: "150%" }}>
                <tbody>

                <tr>
                    <th></th>
                    <th>Description</th>
                    <th>Minister</th>
                </tr>

                <tr>
                    <td width="30%;">
                        <img src="/img/DoE.png" style={{ width: "100%" }} />
                    </td>
                    <td>The Department of the Executive are responsible for implementing all features and bills which the Government pass. Also known as 'the
                                    Overseers', this department has veto power over any decisions passed by government, making it the most powerful group of people on the
                                    server.
                    </td>
                    <td>dandabs</td>
                </tr>

                <tr>
                    <td width="30%;">
                        <img src="/img/DfI.png" style={{ width: "100%" }} />
                    </td>
                    <td>The Department for Infrastructure is responsible for the planning and implementation of builds to benefit the player experience on
                                    CloudCraft. Some examples include, but are not limited to: the Spawn, special event areas, public warps, and the annual redevelopment
                                    of Shokō Arena.
                    </td>
                    <td>T.B.A</td>
                </tr>

                <tr>
                    <td width="30%;">
                        <img src="/img/DoP.png" style={{ width: "100%" }} />
                    </td>
                    <td>The Department of the Public is responsible for everything to do with inter-government communication with players. This includes passing
                                    on suggestions, issues, and reports, as well as ensuring positive publicity, player experiences and feedback for CloudCraft as a whole.
                    </td>
                    <td>Lowelo45</td>
                </tr>

                <tr>
                    <td width="30%;">
                        <img src="/img/DfC.png" style={{ width: "100%" }} />
                    </td>
                    <td>The Department for the Ceremony is responsible for the planning and production of the annual anniversary ceremony (currently styled as
                                    Ári að orsdá). It is generally active only from June through October, with its main ministers being selected by the department leader and
                                    executives in late-May.
                    </td>
                    <td>UhhDianaxX</td>
                </tr>

                <tr>
                    <td width="30%;">
                        <img src="/img/ICL.png" style={{ width: "100%" }} />
                    </td>
                    <td>The Institute of the Cloudic Language (Insti'üüt að Piilvea Kie) is responsible for the regulation and protection of CloudCraft's official
                                    language. Throughout the year, it is tasked with the upkeeping of translation services, as well as ensuring the language is used appropriately
                                    and sufficiently in official productions.
                    </td>
                    <td>T.B.A.</td>
                </tr>
                </tbody>

            </table>

        </div>

    </div>
</div>

</Layout>
  );
}