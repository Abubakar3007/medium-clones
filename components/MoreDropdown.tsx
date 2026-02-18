const MoreDropdown = ({ left, top, setShowDropdown }: { left: string, top: string, setShowDropdown: (show: boolean) => void }) => {
    return (
        <div className="fixed inset-0 bg-transparent z-50 w-full h-screen cursor-pointer" onClick={() => setShowDropdown(false)}>
            <div
                style={{ left: `${left}px`, top: `${top}px` }}
                className={`shadow-[0px_0px_4px_rgba(0,0,0,0.05),0px_2px_8px_rgba(0,0,0,0.15)] z-700 rounded absolute`}
            >
                <div className="rounded-[4px] bg-white relative">
                    <div className="rounded-[3px] bg-white/90 overflow-hidden">
                        <ul className="py-2 flex flex-col text-sm text-neutral-500">
                            <li className="py-2 px-5">
                                <button className="hover:text-black">Copy link</button>
                            </li>
                            <li className="py-2 px-5">
                                <button className="hover:text-black">Edit list info</button>
                            </li>
                            <li className="py-2 px-5">
                                <button className="hover:text-black">Remove items</button>
                            </li>
                            <li className="py-2 px-5">
                                <button className="hover:text-black">Make list public</button>
                            </li>
                            <li className="py-2 px-5">
                                <button className="hover:text-black">Reorder items</button>
                            </li>
                            <li className="py-2 px-5">
                                <button className="hover:text-black">Hide responses</button>
                            </li>
                        </ul>
                    </div>
                    <div className="absolute w-4 h-4 rotate-45 -z-10 left-1/2 -translate-x-1/2 -bottom-2 bg-white shadow-md"></div>
                </div>
            </div>
        </div>
    )
}

export default MoreDropdown