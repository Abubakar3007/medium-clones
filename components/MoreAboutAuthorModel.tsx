export const MoreAboutAuthorModel = () => {
    return (
        <div className='absolute z-[50] bottom-8 text-sm left-1/2 text-[#6B6B6B] -translate-x-1/2 py-2 shadow-md w-[248px] bg-white after:absolute after:w-3 after:h-3 after:-bottom-[6px] after:rotate-45 after:left-1/2 after:-translate-x-1/2 after:bg-white after:shadow-md'>
            <ul>
                <li>
                    <button className="py-2 px-5 block w-full text-left">Show less like this</button>
                </li>
                <li className="pb-2 border-b borer-[#6B6B6B] mb-2">
                    <button className="py-2 px-5 block w-full text-left">
                        Hide highlights
                    </button>
                </li>
                {/* divider */}
                <li>
                    <button className="py-2 px-5 block w-full text-left">Follow author</button>
                </li>
                <li>
                    <button className="py-2 px-5 block w-full text-left">Mute author</button></li>
                <li>
                    <button className="py-2 px-5 block w-full text-left text-red-600/80">Report author</button>
                </li>
            </ul>
        </div>
    )
}
