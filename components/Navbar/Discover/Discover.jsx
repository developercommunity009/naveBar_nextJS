import React from 'react'
import Link from 'next/link';

// INTERNAL IMPORT
import Style from "./Discover.module.css";


const Discover = () => {

    //-----  DISCOVER MENU
    const discover = [
        {
            name: "Collections",
            link: "collections"
        },
        {
            name: "Search",
            link: "serach"
        },
        {
            name: "Auther Profile",
            link: "auther-profile"
        },
        {
            name: "Auther profile",
            link: "auther-profile"
        },
        {
            name: "NFT Details",
            link: "nft-details"
        },
        {
            name: "Account Setting",
            link: "account-setting"
        },
        {
            name: "Connect Wallet",
            link: "connect_wallet"
        },
        {
            name: "Blog",
            link: "blog"
        },
    ]


    return (
        <div>
            {
                discover.map((el, i) => (
                    <div key={i + 1} className={Style.discover}>
                        <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                    </div>
                ))
            }
        </div>
    )
}

export default Discover