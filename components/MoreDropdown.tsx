import { useEffect, useRef } from "react";

const MoreDropdown = ({
    setShowDropdown,
    buttonRef,
}: {
    setShowDropdown: (value: number | null) => void;
    buttonRef: HTMLButtonElement;
}) => {
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;

            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(target) &&
                !buttonRef.contains(target)
            ) {
                setShowDropdown(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setShowDropdown, buttonRef]);

    return (
        <div
            ref={dropdownRef}
            className={`absolute [@media(min-width:900px)]:left-1/2 [@media(min-width:900px)]:-translate-x-1/2 [@media(min-width:900px)]:right-auto right-0 [@media(min-width:900px)]:top-12 top-8 w-40 rounded-[4px] z-50 bg-white shadow-[0px_0px_4px_rgba(0,0,0,0.05),0px_2px_8px_rgba(0,0,0,0.15)]`}
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
                <div className="absolute w-4 h-4 rotate-45 -z-10 [@media(min-width:900px)]:left-1/2 [@media(min-width:900px)]:-translate-x-1/2 [@media(min-width:900px)]:right-auto right-1 -top-2 bg-white shadow-md"></div>
            </div>
        </div>
    );
};

export default MoreDropdown;