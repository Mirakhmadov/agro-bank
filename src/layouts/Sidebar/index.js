import React, {useState} from 'react';
import {Helper, Logo, MenuItem, Menus, Wrapper} from "./components";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faBars, faEnvelope, faMessage} from "@fortawesome/free-solid-svg-icons";


const MenuItemComponent = ({item, open, func}) => {
    return (
        <li>
            {item.isSub ?
                <>
                    <MenuItem theme={{open:item.open}} onClick={() => func()}>
                        <span>
                            <img src={`/static/img/me${item.image}.svg`} className={"first"}
                                 alt={"img"}/>
                            <img src={`/static/img/me${item.image}-g.svg`} className={"second"}
                                 alt={"img"}/>
                            {open && item.name}
                        </span>
                        {open && <FontAwesomeIcon icon={faAngleDown}/>}
                    </MenuItem>

                    {item.open ?
                        <ul>
                            {item.subs.map((item2, i2) =>
                                <li key={i2}>
                                    <MenuItem className={"without-img"}>
                                        <Link to={item2.url}>
                                    <span>
                                        {item2.image ?
                                            <>
                                                <img src={`/static/img/me${item2.image}.svg`}
                                                     className={"first"}
                                                     alt={"img"}/>
                                                <img src={`/static/img/me${item2.image}-g.svg`}
                                                     className={"second"}
                                                     alt={"img"}/>
                                            </> : ""
                                        }
                                        {open && item2.name}
                                    </span>
                                        </Link>
                                    </MenuItem>
                                </li>
                            )}
                        </ul>
                        : ""
                    }
                </>
                :
                <MenuItem open={item.open}>
                    <Link to={item.url}>
                    <span>
                        {item.image ?
                            <>
                                <img src={`/static/img/me${item.image}.svg`} className={"first"}
                                     alt={"img"}/>
                                <img src={`/static/img/me${item.image}-g.svg`} className={"second"}
                                     alt={"img"}/>
                            </> : ""
                        }
                        {open && item.name}
                    </span>
                    </Link>
                </MenuItem>
            }
        </li>
    )
}
const Index = ({open, setOpen}) => {
    const [menus, setMenus] = useState([
        {
            url: "",
            image: "1",
            name: "Yer maydonlari",
            isSub: true,
            open: false,
            subs: [
                {
                    url: "",
                    name: "Yer maydonlari"
                }
            ]
        },
        {
            url: "",
            image: "2",
            name: "Ekinlarni joylash",
            isSub: true,
            open: false,
            subs: [
                {
                    url: "",
                    name: "Tehnik ekinlar"
                },
                {
                    url: "",
                    name: "Ozuqa (yem-xashak) ekinlar"
                },
                {
                    url: "",
                    name: "Cho'l-yaylov ekinlari"
                },
                {
                    url: "",
                    name: "Manzarali ekinlar"
                },
                {
                    url: "",
                    name: "Dorivor o'simliklar"
                },
                {
                    url: "",
                    name: "Tuganak mevali ekinlar"
                },
                {
                    url: "",
                    name: "Rezavor mevalar"
                },
                {
                    url: "",
                    name: "G'alla (Boshoqli don) ekinlari"
                }

            ]
        },
        {
            url: "",
            image: "3",
            name: "Shartnomalar"
        },
        {
            url: "",
            image: "4",
            name: "Moliyalashtirish"
        },
        {
            url: "",
            image: "5",
            name: "Ta'minot-xizmat"
        },
        {
            url: "",
            image: "6",
            name: "Agrotexnik tadbirlar"
        },
        {
            url: "",
            image: "7",
            name: "Hosil qabuli"
        },
        {
            url: "",
            image: "9",
            name: "Me'yorlar"
        },
        {
            url: "",
            image: "8",
            name: "Fermerlar reestri"
        },
        {
            url: "",
            image: "11",
            name: "Chiqish"
        }
    ])


    const changeOpen = (item, i) => {
        let arr = [...menus]
        arr[i]['open'] = !arr[i]['open']

        setMenus(arr)
    }

    return (
        <Wrapper theme={{open: open}}>
            <Logo theme={{open: open}}>
                <div className={"img-wrapper"}>
                    <Link to={"/"}>
                        <img src={"/static/img/logo.svg"} alt={"Logo"}/>
                    </Link>
                </div>
                <div className={"hamburger"}>
                    <button onClick={() => setOpen(!open)}>
                        <FontAwesomeIcon icon={faBars}/>
                    </button>
                </div>
            </Logo>

            <Menus>
                <ul>
                    {menus.map((item, i) =>
                        <MenuItemComponent key={i} item={item} open={open} func={() => changeOpen(item, i)}/>
                    )}
                </ul>
            </Menus>

            <Helper theme={{open: open}}>
                <ul>
                    <li>
                        <Link to={"/"}>
                            <FontAwesomeIcon icon={faEnvelope}/>
                            <span>Yordam kerakmi?</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/"}>
                            <span>
                                Texnik qo'llab quvvatlash
                            </span>
                        </Link>
                    </li>
                </ul>
            </Helper>
        </Wrapper>
    );
};

export default Index;
