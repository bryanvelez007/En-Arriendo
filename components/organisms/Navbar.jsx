import {useState} from 'react';

// Import molecules //
import NavbarAnchors from '../molecules/Navbar-anchors';
import NavbarLogo from '../molecules/Navbar-logo';
import NavbarButton from '../molecules/Navbar-button';
import NavbarMobile from '../molecules/Navbar-mobile';

// Import icons svg //
import IconMenu from '../../assets/svg/icon-menu';


export default function Navbar() {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    return (

        <header className="fixed z-40 top-0 shadow-md bg-white w-full font-axiformaMedium">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div
                    className="flex justify-between items-center py-4 md:justify-start md:space-x-10">

                    {/** <!--Logo webpage.--> */}
                    <NavbarLogo/>

                    {/** <!--Mobile menu button, show to action.--> */}
                    <div className="-mr-2 -my-2 md:hidden">
                        <button type="button" onClick={() => setIsOpenMenu(true)}
                                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open menu</span>
                            <IconMenu size="36"/>
                        </button>
                    </div>

                    {/** <!--Links redirect.--> */}
                    <NavbarAnchors/>

                    {/** <!--Buttons to action.--> */}
                    <NavbarButton/>

                </div>
            </div>

            {/** <!--Mobile menu, show/hide based on mobile menu state.--> */}
            <NavbarMobile isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu}/>

        </header>
    );
}
