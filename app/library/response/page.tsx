import Link from 'next/link'
import LibraryLayout from '../../../components/LibraryLayout'

const page = () => {
    return (
        <LibraryLayout>
            <div className="py-5 border-b border-divider">
                <h3 className="text-base leading-6 line-clamp-2 text-ellipsis mb-2">
                    <Link href="">Telegram joining link not working</Link>
                </h3>

                <div className="flex items-center gap-3">
                    <div className="flex gap-2 text-sm text-neutral-500">
                        <span>Published on <span>Jan 8, 2025</span></span>
                        <span>·</span>
                        <span>1 min read</span>
                    </div>
                    <div className="flex gap-2">
                        <button className="text-neutral-500 hover:text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path fill="currentColor" fillRule="evenodd" d="M15.218 4.931a.4.4 0 0 1-.118.132l.012.006a.45.45 0 0 1-.292.074.5.5 0 0 1-.3-.13l-2.02-2.02v7.07c0 .28-.23.5-.5.5s-.5-.22-.5-.5v-7.04l-2 2a.45.45 0 0 1-.57.04h-.02a.4.4 0 0 1-.16-.3.4.4 0 0 1 .1-.32l2.8-2.8a.5.5 0 0 1 .7 0l2.8 2.79a.42.42 0 0 1 .068.498m-.106.138.008.004v-.01zM16 7.063h1.5a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-11c-1.1 0-2-.9-2-2v-10a2 2 0 0 1 2-2H8a.5.5 0 0 1 .35.15.5.5 0 0 1 .15.35.5.5 0 0 1-.15.35.5.5 0 0 1-.35.15H6.4c-.5 0-.9.4-.9.9v10.2a.9.9 0 0 0 .9.9h11.2c.5 0 .9-.4.9-.9v-10.2c0-.5-.4-.9-.9-.9H16a.5.5 0 0 1 0-1" clipRule="evenodd"></path>
                            </svg>
                        </button>
                        <button className="text-neutral-500 hover:text-black">
                            <svg width="25" height="25" className="stroke-neutral-500">
                                <path fillRule="evenodd" d="M5 12.5q0 .828.586 1.414.585.585 1.414.586.828 0 1.414-.586.585-.586.586-1.414 0-.828-.586-1.414A1.93 1.93 0 0 0 7 10.5q-.828 0-1.414.586-.585.586-.586 1.414m5.617 0q0 .828.586 1.414.587.585 1.414.586.828 0 1.414-.586t.586-1.414-.586-1.414a1.93 1.93 0 0 0-1.414-.586q-.827 0-1.414.586-.586.586-.586 1.414m5.6 0q0 .828.586 1.414.585.585 1.432.586.827 0 1.413-.586t.587-1.414q0-.828-.587-1.414a1.93 1.93 0 0 0-1.413-.586q-.847 0-1.432.586t-.587 1.414z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </LibraryLayout>
    )
}

export default page