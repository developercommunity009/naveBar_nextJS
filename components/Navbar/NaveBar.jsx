import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// Import Icons
import { MdNotifications } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";
// Internal Import
import Style from "./NaveBar.module.css";
import { Discover, HelpCenter, Notifications, Profile, SideBar } from "./index"
import { Button } from "../componentIndex";
import images from '../../img';

const NaveBar = () => {

    //-------USESTATS  COMPONENTS
    const [discover, setDiscover] = useState(false);
    const [help, setHelp] = useState(false);
    const [notifications, setNotifications] = useState(false);
    const [profile, setProfile] = useState(false);
    const [openSideMenu, setOpenSideMenu] = useState(false);


    const openMenu = (e) => {
        const btnText = e.target.innerText;
        if (btnText == "Discover") {
            setDiscover(true);
            setHelp(false);
            setNotifications(false);
            setProfile(false);
        } else if (btnText == "Help Center") {
            setDiscover(false);
            setHelp(true);
            setNotifications(false);
            setProfile(false);
        } else {
            setDiscover(false);
            setHelp(false);
            setNotifications(false);
            setProfile(false);
        }
    }


    const openNoyification = () => {
        if (!notifications) {
            setNotifications(true);
            setDiscover(false);
            setHelp(false);
            setProfile(false);
        } else {
            setNotifications(false);
        }
    }

    const openProfile = () => {
        if (!profile) {
            setProfile(true);
            setNotifications(false);
            setDiscover(false);
            setHelp(false);
        } else {
            setProfile(false);
        }
    }

    const openSideBar = () => {
        if (!openSideMenu) {
            setOpenSideMenu(true);
        } else {
            setOpenSideMenu(false);
        }
    }


    return (
        <div className={Style.navbar}>
            <div className={Style.navbar_container}>
                <div className={Style.navbar_container_left}>
                    <div className={Style.logo}>
                        <Image src={images.logo} alt="NFT LOGO " width={100} height={100} />

                    </div>
                    <div className={Style.navbar_container_left_box_input}>
                        <input type="text" placeholder='serch NFT' />
                        <BsSearch onClick={() => { }} className={Style.search_icon} />
                    </div>
                </div>
                { /*   END OF LEFT SECTION   */}

                <div className={Style.navbar_container_right}>

                    {/*DISCOVER MENU*/}

                    <div className={Style.navbar_container_right_discover}>
                        <p onClick={(e) => openMenu(e)}>Discover</p>
                        {
                            discover && (
                                <div className={Style.navbar_container_right_discover_box}>
                                    <Discover />
                                </div>
                            )}
                    </div>
                    { /*HELP CENTER MENU*/}
                    <div className={Style.navbar_container_right_help}>
                        <p onClick={(e) => openMenu(e)} >Help Center</p>
                        {
                            help && (
                                <div className={Style.navbar_container_right_help_box}>
                                    <HelpCenter />
                                </div>
                            )}
                    </div>

                    {/* NOTIFICATIONS*/}
                    <div className={Style.navbar_container_right_notify}>
                        <MdNotifications className={Style.notify} onClick={() => openNoyification()} />
                        {notifications && (< Notifications />)}
                    </div>

                    {/* CREATE BUTTON SECTIONS*/}
                    <div className={Style.navbar_container_right_button}>
                        <Button btnName= "Create" handleClick={()=>{}}  />
                    </div>

                    {/* USER PROFILE */}
                    <div className={Style.navbar_container_right_profile_box}>
                        <div className={Style.navbar_container_right_profile}>
                            <Image src={images.user1} alt="NFT user1" height={40} width={40} onClick={() => openProfile()}
                                className={Style.navbar_container_right_profile} />
                            {profile && (<Profile />)}
                        </div>
                    </div>

                    {/* MENU BUTTON */}
                    <div className={Style.navbar_container_right_menuBtn}>
                        <CgMenuRight className={Style.menuIcon} onClick={() => openSideBar()} />
                    </div>
                </div>
            </div>
            {/* SIDE BAR COMPONENT  THIS ONLY FOR MOBILE */}
            {
                openSideMenu && (
                    <div className={Style.sideBar}>
                        <SideBar setOpenSideMenu={setOpenSideMenu} />
                    </div>
                )
            }
        </div>
    )
}

export default NaveBar