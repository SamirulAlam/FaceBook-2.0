import Image from "next/image"
import { ChevronDownIcon, FlagIcon,PlayIcon,SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline"
import {  BellIcon, ChatIcon, HomeIcon, UserGroupIcon, ViewGridIcon } from "@heroicons/react/solid"
import HeaderIcon from "./HeaderIcon"
function Header() {
    return (
        <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
            <div className="flex items-center">
                <Image src="https://links.papareact.com/5me"
                width={40} height={40} layout="fixed" />
                <div className="flex items-center ml-2 rounded-full bg-gray-100 p-2">
                    <SearchIcon className="h-6 text-gray-600" />
                    <input type="text" placeholder="Search Facebook" className="hidden md:inline-flex flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink" />
                </div>
            </div>
            <div className="flex justify-center flex-grow">
                <div className="flex space-x-6 md:space-x-2">
                    <HeaderIcon active Icon={HomeIcon} />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                </div>
            </div>
            <div className="flex items-center sm:space-x-2 justify-end">
                <Image
                    src="https://avatars.githubusercontent.com/u/50224886?v=4"
                    width={40}
                    height={40}
                    layouts="fixed"
                    className="rounded-full"
                />
                <p className="whitespace-nowrap font-semibold pr-3">Samir</p>
                <ViewGridIcon className="icon" />
                <ChatIcon className="icon" />
                <BellIcon className="icon" />
                <ChevronDownIcon className="icon" />
            </div>
        </div>
    )
}

export default Header
