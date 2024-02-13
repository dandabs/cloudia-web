import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/layout";
import { useState } from "react";
import axios, {isCancel, AxiosError} from 'axios';
import Link from "next/link";
import { useUser } from '@auth0/nextjs-auth0/client';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

export default function Home() {
    const [page, setPage] = useState(0);
    const [username, setUsername] = useState("");
    const [usernameError, setUsernameError] = useState(0);
    const [playerData, setPlayerData] = useState({} as any);
    const [uuid, setUuid] = useState("");
    const { user, error, isLoading } = useUser();

    return (
        <Layout type={"gov"} title={"Blank"}>
            <div className="p-5">
                <div className="ml-24 w-2/4 mt-10">
                    {
                        page != 2 ?
                        <>
                        <h1 className="font-bold mb-1 text-5xl">Set up your account</h1>
                        <p className="text-xl mt-2">To continue using cloudia.is, you must set up your account by telling us who you are. Please complete the form below.</p>
                        <p className="my-12 text-lg ps-8 !border-s-8 border-s-gray-400">
                        Account linking runs under an honour system. Linking a Minecraft account which is not your own will result in punishments and delays.
                        </p>
                    </> : null
                    }
                    {
                        page == 0 ?
                        <>
                        <fieldset className={classNames(
                            "mt-12 flex flex-col",
                            usernameError != 0 ? "ps-8 !border-s-8 border-s-[#d4351c]" : ""
                        )}>
                                <h1 className="font-semibold mb-1 text-3xl">
                                What is your Minecraft username?
                                </h1>
                            {
                                usernameError == 1 ? <p className="font-semibold text-[#d4351c] py-4">That is not a valid Minecraft username.</p> : null
                            }
                            {
                                usernameError == 2 ? <p className="font-semibold text-[#d4351c] py-4">That Minecraft username is not registered with Mojang.</p> : null
                            }
                            {
                                usernameError == 3 ? <p className="font-semibold text-[#d4351c] py-4">That player has never joined Cloudia.</p> : null
                            }
                            <input className={classNames(
                                    "govuk-input !mt-1 !w-2/3",
                                    usernameError != 0 ? "govuk-input--error" : ""
                                )} type="text" id="username" value={username} onChange={e=>{setUsername(e.target.value);setUuid("");setPlayerData({});}} onBlur={async ()=>{
                                if (username.length < 3 || username.length > 16 || !username.match(/^[a-zA-Z0-9_]+$/)) {
                                    setUsernameError(1);
                                } else {

                                    try {
                                        const response = await axios.get(`https://api.minetools.eu/uuid/${username}`);
                                        console.log(response.data);

                                        let ud = "";

                                        if (response.data.id == null) {
                                            return setUsernameError(2);
                                        } else {
                                            setUsernameError(0);
                                            setUsername(response.data.name);
                                            ud = response.data.id.replace(/(\w{8})(\w{4})(\w{4})(\w{4})(\w{12})/, "$1-$2-$3-$4-$5");
                                            setUuid(ud);
                                        }

                                        try {
                                            const response2 = await axios.get(`https://stats.cloudcraft.fi/v1/player?player=${ud}`);
                                            console.log(response2.data);
                                            setPlayerData(response2.data)

                                        } catch (error) {
                                            return setUsernameError(3);
                                        }

                                    } catch (error) {
                                        console.error(error);
                                    }

                                }
                            }}></input>
                        </fieldset>
                        <button type="submit" className="govuk-button !w-fit !mt-6" data-module="govuk-button" onClick={() => {
                            if (uuid != "" && usernameError == 0 && playerData.info) {
                                setPage(1);
                            }
                        }}>
                            Save and continue
                        </button>
                        </>
                        : null
                    }
                    {
                        page == 1 ?
                        <>
                        <dl className="govuk-summary-list">
                            <div className="govuk-summary-list__row">
                                <dt className="govuk-summary-list__key">
                                Username
                                </dt>
                                <dd className="govuk-summary-list__value">
                                {username}
                                </dd>
                                <dd className="govuk-summary-list__actions">
                                <a className="govuk-link border-none" href="#" onClick={()=>{
                                    setPage(0);
                                }}>Change</a>
                                </dd>
                            </div>
                            <div className="govuk-summary-list__row">
                                <dt className="govuk-summary-list__key">
                                Date of registration
                                </dt>
                                <dd className="govuk-summary-list__value">
                                {playerData.info.registered}
                                </dd>
                            </div>
                            </dl>
                            <button type="submit" className="govuk-button !w-fit !mt-6" data-module="govuk-button" onClick={async () => {
                            if (uuid != "" && usernameError == 0) {
                                
                                try {
                                    const response = await axios.put(`/api/users/${user!.sub}`, { mc: uuid });
                                    console.log(response.data);
                                    setPage(2);
                                } catch (error) {
                                    return setUsernameError(3);
                                }
                            }
                        }}>
                            Confirm choices
                        </button>
                        </>
                        : null
                    }
                    {
                        page == 2 ?
                        <>
                        <div className="govuk-panel govuk-panel--confirmation">
                            <h1 className="govuk-panel__title">
                                Account setup complete
                            </h1>
                            <div className="govuk-panel__body">
                                Your linked username<br /><strong>{username}</strong>
                            </div>
                        </div>
                        <p className="text-lg mt-2">Thank you for registering an account with cloudia.is. You can now access Cloudia services online, without restriction, and apply for programs which you may be eligible for.</p>
                        <p className="text-lg mt-2">Go back home <Link href="/" className="border-none text-blue-800">here</Link>.</p>
                        </>
                        : null
                    }
                    
                </div>
            </div>
        </Layout>
    );
}
