import desktopLogo from '../images/instagram-full-logo.png';
import mobileLogo from '../images/instagram-logo.png';
import profile from '../images/profile-img.jpeg';

import {
    SearchIcon,
    MenuIcon,
    PaperAirplaneIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
} from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/solid';

function Header() {
    return (
        <header className="shadow-sm border-b bg-white sticky top-0 z-50">
            <div className="flex justify-between items-center max-w-6xl px-4 xl:mx-auto">
                <div>
                    <div className="hidden md:inline-flex ">
                        <img src={desktopLogo} alt="instagram logo desktop" />
                    </div>
                    <div className="md:hidden w-8 h-8 flex-shrink-0">
                        <img src={mobileLogo} alt="instagram logo mobile" />
                    </div>
                </div>
                <div className="relative mt-1 p-3 rounded-md">
                    <div className="absolute inset-y-0 pl-3 flex items-center">
                        <SearchIcon className="w-6 h-6 text-gray-500" />
                    </div>
                    <input
                        className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-100 focus:ring-black focus:border-black"
                        type="text"
                        name="search"
                        placeholder="Search..."
                    />
                </div>
                <div className="flex space-x-4 items-center flex-shrink-0">
                    <HomeIcon className="actionBtn" />
                    <MenuIcon className="h-6 ml-0-important md:hidden cursor-pointer flex-shrink-0" />
                    <div className="relative actionBtn">
                        <PaperAirplaneIcon className="relative bottom-0.5 actionBtn rotate-45" />
                        <div className="absolute -top-2 -right-2 text-xs w-5 h-5 bg-red-500 text-gray-50 flex items-center justify-center rounded-full animate-pulse">
                            2
                        </div>
                    </div>

                    <PlusCircleIcon className="actionBtn" />
                    <UserGroupIcon className="actionBtn" />
                    <HeartIcon className="actionBtn" />
                    <img
                        className="w-9 h-9 rounded-full cursor-pointer object-cover flex-shrink-0"
                        src={profile}
                        alt="profile img"
                    />
                </div>
            </div>
        </header>
    );
}

export default Header;
