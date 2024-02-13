import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/layout";
import Script from "next/script";
import Link from "next/link";

export default function Home() {
  return (
    <Layout type={"gov"} title={"Blank"}>
         <div className="p-5">
            <div className="ml-24 w-2/4 mt-10">
                <h1 className="font-bold mb-1 text-5xl w-screen">Programs</h1>
                <p className="text-xl mt-2">Various programs and permits are available for dedicated or distinguished players of Cloudia. These offer a multitude of benefits from in-game titles and perks, to a higher position in the hierarchy and official recognition for your dedication to the community.</p>

                <div className="mt-10">
                    <h2 className="!mb-0">Cloudic Residency (CRP-02)</h2>
                    <p className="text-md">A residency permit on Cloudia is the most open and attainable permit for regulars of the community. Chances of application approval are high and there are low requirements with high rewards. Residency applications are handled by the Department for the Server.</p>
                    <h3 className="mt-4 !mb-px">Perks</h3>
                    <ul className="govuk-list govuk-list--bullet">
                        <li>Unlimited claim blocks</li>
                        <li>Warp permissions</li>
                    </ul>
                    <h3 className="mt-4 !mb-px">Eligiblity</h3>
                    <ul className="govuk-list govuk-list--bullet">
                        <li>Have 6 months elapsed since your date of registration</li>
                    </ul>
                    <Link type="submit" className="govuk-button !w-fit !mt-6 !mb-0" data-module="govuk-button" href="/server/residency">
                        Begin application (on DfS site)
                    </Link>
                </div>

                <div className="mt-10">
                    <h2 className="!mb-0">Cloudic Citizenship (CcC)</h2>
                    <p className="text-md">Cloudic citizenship is a permanent record of your loyalty to and history on Cloudia. Applying for citizenship bridges the gap between Minecraft and the real life Cloudia community. Citizenship applications are handled by the Department for Preservation.</p>
                    <h3 className="mt-4 !mb-px">Perks</h3>
                    <ul className="govuk-list govuk-list--bullet">
                        <li>Cloudic passport</li>
                        <li>Enrollment to the Central Information Register (CIR)</li>
                    </ul>
                    <h3 className="mt-4 !mb-px">Eligiblity</h3>
                    <ul className="govuk-list govuk-list--bullet">
                        <li>Be in possession of a CRP-02 residency permit <strong>OR</strong> a claim for exceptional circumstances</li>
                        <li>Have 12 months elapsed since your date of registration</li>
                    </ul>
                    <Link type="submit" className="govuk-button !w-fit !mt-6 !mb-0" data-module="govuk-button" href="/preservation/citizenship">
                        Begin application (on DfP site)
                    </Link>
                </div>

                <div className="mt-10">
                    <h2 className="!mb-0">Cloudia Veteran Program (CcVP)</h2>
                    <p className="text-md">The Veteran Program is a record of historial members who were once loyal to Cloudia in its infantry.</p>
                    <h3 className="mt-4 !mb-px">Perks</h3>
                    <p className="text-md">To continue using cloudia.is, you must set up your account by telling us who you are. Please complete the form below.</p>
                    <h3 className="mt-4 !mb-px">Eligiblity</h3>
                    <p className="my-4 text-lg ps-8 !border-s-8 border-s-gray-400">
                        N.B. It is difficult for Nordic Era players to prove their eligibility for the CcVP. It is unlikely that you will be accepted if you joined Cloudia on or after 1st March 2021.
                    </p>
                    <ul className="govuk-list govuk-list--bullet">
                        <li>Have joined Cloudia in an Era preceeding the current one</li>
                    </ul>
                    <Link type="submit" className="govuk-button !w-fit !mt-6 !mb-0" data-module="govuk-button" href="programs/veteran">
                        Begin application
                    </Link>
                </div>

                <div className="mt-10 mb-10">
                    <h2 className="!mb-0">Cloudia Iconage Program (CcIP)</h2>
                    <p className="text-md">The Iconage Program is the most esteemed award within Cloudia. Only a handful of players are accepted onto the program every Era, each who have been seen to go above and beyond in their dedication to Cloudia, making a difference to both the server and community, and becoming some of the most memorable names and faces of that time period.</p>
                    <h3 className="mt-4 !mb-px">Perks</h3>
                    <p className="text-md">To continue using cloudia.is, you must set up your account by telling us who you are. Please complete the form below.</p>
                    <h3 className="mt-4 !mb-px">Eligiblity</h3>
                    <p className="my-4 text-lg ps-8 !border-s-8 border-s-gray-400">
                        N.B. CcIP is an invitation-only program, and meeting the eligibility criteria does not guarantee acceptance.
                    </p>
                    <p className="text-md">To continue using cloudia.is, you must set up your account by telling us who you are. Please complete the form below.</p>
                </div>
            </div>
        </div>
    </Layout>
  );
}
