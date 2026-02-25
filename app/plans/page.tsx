import { Layout } from '@/components/Layout'
const Plan = () => {
    const list = [
        "Read member-only stories",
        "Support writers you read most",
        "Listen to audio narrations",
        "Read offline with the Medium app",
        "Access our Mastodon community",
        "Connect your custom domain",
        "Create your own publications"
    ];

    const list2 = ["All Medium member benefits", "Give 4x more to the writers you read", "Share member-only stories with anyone and drive more earnings for writers", "Customize app icon"]

    return (
        <Layout>
            <div className="max-w-[680px] mx-auto px-6 py-10 text-center">
                <h1 className="sm:text-[28px] text-2xl tracking-tight mb-3 sm:mx-20 pb-10 font-medium">Support great writing and access every story on Medium</h1>

                {/* select plan button */}
                <div className="w-[280px] mx-auto bg-white rounded-sm flex shadow-[inset_0_0_0_1px_#E5E5E5]">

                    {/* MONTHLY */}
                    <label className="cursor-pointer flex-1">
                        <input
                            type="radio"
                            name="membershipFrequency"
                            value="MONTHLY"
                            className="peer hidden"
                            defaultChecked
                        />

                        <div className="px-6 h-[58px] flex items-center justify-center
      border border-transparent
      peer-checked:border-primary
      peer-checked:bg-primary/10
      perr-checked:text-primary
      rounded-sm">
                            Pay monthly
                        </div>
                    </label>

                    {/* ANNUAL */}
                    <label className="cursor-pointer flex-1">
                        <input
                            type="radio"
                            name="membershipFrequency"
                            value="ANNUAL"
                            className="peer hidden"
                        />

                        <div className="px-6 h-[58px] flex flex-col items-center justify-center
      border border-transparent
      peer-checked:border-primary
      peer-checked:bg-primary/10
      peer-checked:text-primary
      rounded-sm">
                            <p>Pay annually</p>
                            <p className="text-[11px] font-light">Save up to $30</p>
                        </div>
                    </label>
                </div>

                {/* list cards */}
                <div className='flex sm:gap-4 gap-12 mt-10 sm:flex-row flex-col'>
                    <div className="border border-border rounded-[4px] p-8 flex-1">
                        {/* user image */}
                        <div className='relative w-20 h-20 mx-auto'>
                            <img src="https://miro.medium.com/v2/resize:fill:160:160/0*dgp8_Og6t8kikeuE" alt="" className='w-full h-full rounded-full' />
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40" role="presentation" aria-hidden="true" focusable="false" className="absolute -top-[10px] -right-[10px]">
                                <mask id="path-1-outside-1_5853_41067" width="38" height="38" x="1" y="1" fill="#000" maskUnits="userSpaceOnUse">
                                    <path fill="#fff" d="M1 1h38v38H1z"></path>
                                    <path d="m24.7 25.435-3.552 9.767a1.224 1.224 0 0 1-2.296 0L15.3 25.435a1.24 1.24 0 0 0-.735-.735L4.8 21.148a1.225 1.225 0 0 1 0-2.296l9.766-3.552a1.24 1.24 0 0 0 .735-.735L18.852 4.8a1.224 1.224 0 0 1 2.296 0l3.552 9.766a1.24 1.24 0 0 0 .735.735l9.767 3.552a1.224 1.224 0 0 1 0 2.296L25.435 24.7a1.24 1.24 0 0 0-.735.735"></path>
                                </mask>
                                <path fill="#FFC017" d="m24.7 25.435-3.552 9.767a1.224 1.224 0 0 1-2.296 0L15.3 25.435a1.24 1.24 0 0 0-.735-.735L4.8 21.148a1.225 1.225 0 0 1 0-2.296l9.766-3.552a1.24 1.24 0 0 0 .735-.735L18.852 4.8a1.224 1.224 0 0 1 2.296 0l3.552 9.766a1.24 1.24 0 0 0 .735.735l9.767 3.552a1.224 1.224 0 0 1 0 2.296L25.435 24.7a1.24 1.24 0 0 0-.735.735"></path>
                                <path fill="#fff" d="m21.148 35.202 2.813 1.043.007-.018zm-2.296 0-2.82 1.025.007.018zM15.3 25.435l2.82-1.026-.005-.012zm-.735-.735 1.038-2.815-.012-.005zM4.8 21.148l-1.044 2.813.018.007zm0-2.296-1.026-2.82-.018.007zm9.766-3.552 1.026 2.82.012-.005zm.735-.735 2.815 1.038.005-.012zM18.852 4.8l-2.813-1.044-.007.018zM20 4v3zm1.148.799 2.82-1.026-.007-.018zm3.552 9.766-2.82 1.026.005.012zm.735.735-1.038 2.815.012.005zm9.767 3.552 1.043-2.813-.018-.007zm0 2.296 1.025 2.82.018-.007zM25.435 24.7l-1.026-2.82-.012.005zm-3.555-.29-3.551 9.766 5.639 2.05 3.551-9.766zm-3.544 9.747c.126-.34.353-.632.65-.84l3.426 4.927a4.22 4.22 0 0 0 1.549-1.999zm.65-.84A1.78 1.78 0 0 1 20 33v6c.862 0 1.704-.264 2.412-.756zM20 33c.362 0 .716.11 1.014.318l-3.426 4.926c.708.492 1.55.756 2.412.756zm1.014.318c.297.207.524.5.65.84l-5.625 2.087c.3.809.84 1.506 1.549 1.999zm.657.858L18.12 24.41l-5.64 2.05 3.552 9.768zm-3.556-9.779a4.2 4.2 0 0 0-.98-1.532l-4.243 4.243a1.8 1.8 0 0 1-.407-.636zm-.98-1.532a4.2 4.2 0 0 0-1.532-.98l-2.075 5.63a1.8 1.8 0 0 1-.636-.407zm-1.544-.985L5.824 18.33l-2.05 5.639 9.766 3.551zm-9.749-3.544c.34.126.633.353.84.65l-4.926 3.426a4.22 4.22 0 0 0 1.999 1.549zm.84.65C6.89 19.284 7 19.638 7 20H1c0 .862.264 1.704.756 2.412zM7 20c0 .362-.11.716-.318 1.014l-4.926-3.426A4.22 4.22 0 0 0 1 20zm-.318 1.014c-.207.297-.5.524-.84.65L3.755 16.04c-.809.3-1.506.84-1.999 1.549zm-.858.657 9.767-3.551-2.05-5.64-9.768 3.552zm9.779-3.556a4.2 4.2 0 0 0 1.532-.98l-4.243-4.243c.18-.18.397-.319.636-.407zm1.532-.98c.434-.434.768-.957.98-1.532l-5.63-2.075a1.8 1.8 0 0 1 .407-.636zm.985-1.544 3.551-9.767-5.639-2.05-3.551 9.766zm3.544-9.749c-.126.34-.353.633-.65.84l-3.426-4.926a4.22 4.22 0 0 0-1.549 1.999zm-.65.84A1.78 1.78 0 0 1 20 7V1c-.862 0-1.704.264-2.412.756zM20 7c-.362 0-.716-.11-1.014-.318l3.426-4.926A4.22 4.22 0 0 0 20 1zm-1.014-.318a1.78 1.78 0 0 1-.65-.84l5.625-2.087a4.22 4.22 0 0 0-1.549-1.999zm-.657-.858 3.551 9.767 5.64-2.05-3.552-9.768zm3.556 9.779c.212.575.546 1.098.98 1.532l4.243-4.243c.18.18.319.397.407.636zm.98 1.532c.434.434.957.768 1.532.98l2.075-5.63c.239.088.456.227.636.407zm1.544.985 9.767 3.551 2.05-5.639-9.766-3.551zm9.749 3.544a1.78 1.78 0 0 1-.84-.65l4.926-3.426a4.22 4.22 0 0 0-1.999-1.549zm-.84-.65A1.78 1.78 0 0 1 33 20h6c0-.862-.264-1.704-.756-2.412zM33 20c0-.362.11-.716.318-1.014l4.926 3.426c.492-.708.756-1.55.756-2.412zm.318-1.014c.207-.297.5-.524.84-.65l2.087 5.625c.809-.3 1.506-.84 1.999-1.549zm.858-.657L24.41 21.88l2.05 5.64 9.768-3.552zm-9.779 3.556a4.2 4.2 0 0 0-1.532.98l4.243 4.243a1.8 1.8 0 0 1-.636.407zm-1.532.98a4.2 4.2 0 0 0-.98 1.532l5.63 2.075a1.8 1.8 0 0 1-.407.636z" mask="url(#path-1-outside-1_5853_41067)"></path>
                            </svg>
                        </div>
                        {/* price info */}
                        <div className="my-6 text-center">
                            <h2 className='text-xl'>Member</h2>
                            <p className='text-base leading-6'>
                                <span>$5</span>{" "}
                                <span>USD</span>
                                <span>/month</span>
                            </p>
                        </div>
                        <p className='text-neutral-500 mb-6'>Access member-only stories and enjoy an enhanced reading and writing experience. Cancel anytime.</p>
                        <button className="bg-green-700 text-white rounded-full px-6 py-2 w-full">Get started</button>
                        <div className="my-6 w-full h-px bg-neutral-200/70"></div>
                        {/* list */}
                        <ul className="space-y-4 mt-6">
                            {
                                list.map((data, index) => (
                                    <li key={index} className="flex items-center gap-3 text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className="inline-block" role="presentation" aria-hidden="true" focusable="false">
                                            <path stroke="#1A8917" stroke-linecap="round" stroke-linejoin="round" d="M3 8.79 7.103 13 13 3"></path>
                                        </svg>
                                        <p>{data}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="border border-border rounded-[4px] p-8 flex-1">
                        {/* user image */}
                        <div className='relative w-20 h-20 mx-auto'>
                            <img src="https://miro.medium.com/v2/resize:fill:160:160/0*dgp8_Og6t8kikeuE" alt="" className='w-full h-full rounded-full' />
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40" role="presentation" aria-hidden="true" focusable="false" className="absolute -top-[10px] -right-[10px]">
                                <mask id="path-1-outside-1_5853_41067" width="38" height="38" x="1" y="1" fill="#000" maskUnits="userSpaceOnUse">
                                    <path fill="#fff" d="M1 1h38v38H1z"></path>
                                    <path d="m24.7 25.435-3.552 9.767a1.224 1.224 0 0 1-2.296 0L15.3 25.435a1.24 1.24 0 0 0-.735-.735L4.8 21.148a1.225 1.225 0 0 1 0-2.296l9.766-3.552a1.24 1.24 0 0 0 .735-.735L18.852 4.8a1.224 1.224 0 0 1 2.296 0l3.552 9.766a1.24 1.24 0 0 0 .735.735l9.767 3.552a1.224 1.224 0 0 1 0 2.296L25.435 24.7a1.24 1.24 0 0 0-.735.735"></path>
                                </mask>
                                <path fill="#FFC017" d="m24.7 25.435-3.552 9.767a1.224 1.224 0 0 1-2.296 0L15.3 25.435a1.24 1.24 0 0 0-.735-.735L4.8 21.148a1.225 1.225 0 0 1 0-2.296l9.766-3.552a1.24 1.24 0 0 0 .735-.735L18.852 4.8a1.224 1.224 0 0 1 2.296 0l3.552 9.766a1.24 1.24 0 0 0 .735.735l9.767 3.552a1.224 1.224 0 0 1 0 2.296L25.435 24.7a1.24 1.24 0 0 0-.735.735"></path>
                                <path fill="#fff" d="m21.148 35.202 2.813 1.043.007-.018zm-2.296 0-2.82 1.025.007.018zM15.3 25.435l2.82-1.026-.005-.012zm-.735-.735 1.038-2.815-.012-.005zM4.8 21.148l-1.044 2.813.018.007zm0-2.296-1.026-2.82-.018.007zm9.766-3.552 1.026 2.82.012-.005zm.735-.735 2.815 1.038.005-.012zM18.852 4.8l-2.813-1.044-.007.018zM20 4v3zm1.148.799 2.82-1.026-.007-.018zm3.552 9.766-2.82 1.026.005.012zm.735.735-1.038 2.815.012.005zm9.767 3.552 1.043-2.813-.018-.007zm0 2.296 1.025 2.82.018-.007zM25.435 24.7l-1.026-2.82-.012.005zm-3.555-.29-3.551 9.766 5.639 2.05 3.551-9.766zm-3.544 9.747c.126-.34.353-.632.65-.84l3.426 4.927a4.22 4.22 0 0 0 1.549-1.999zm.65-.84A1.78 1.78 0 0 1 20 33v6c.862 0 1.704-.264 2.412-.756zM20 33c.362 0 .716.11 1.014.318l-3.426 4.926c.708.492 1.55.756 2.412.756zm1.014.318c.297.207.524.5.65.84l-5.625 2.087c.3.809.84 1.506 1.549 1.999zm.657.858L18.12 24.41l-5.64 2.05 3.552 9.768zm-3.556-9.779a4.2 4.2 0 0 0-.98-1.532l-4.243 4.243a1.8 1.8 0 0 1-.407-.636zm-.98-1.532a4.2 4.2 0 0 0-1.532-.98l-2.075 5.63a1.8 1.8 0 0 1-.636-.407zm-1.544-.985L5.824 18.33l-2.05 5.639 9.766 3.551zm-9.749-3.544c.34.126.633.353.84.65l-4.926 3.426a4.22 4.22 0 0 0 1.999 1.549zm.84.65C6.89 19.284 7 19.638 7 20H1c0 .862.264 1.704.756 2.412zM7 20c0 .362-.11.716-.318 1.014l-4.926-3.426A4.22 4.22 0 0 0 1 20zm-.318 1.014c-.207.297-.5.524-.84.65L3.755 16.04c-.809.3-1.506.84-1.999 1.549zm-.858.657 9.767-3.551-2.05-5.64-9.768 3.552zm9.779-3.556a4.2 4.2 0 0 0 1.532-.98l-4.243-4.243c.18-.18.397-.319.636-.407zm1.532-.98c.434-.434.768-.957.98-1.532l-5.63-2.075a1.8 1.8 0 0 1 .407-.636zm.985-1.544 3.551-9.767-5.639-2.05-3.551 9.766zm3.544-9.749c-.126.34-.353.633-.65.84l-3.426-4.926a4.22 4.22 0 0 0-1.549 1.999zm-.65.84A1.78 1.78 0 0 1 20 7V1c-.862 0-1.704.264-2.412.756zM20 7c-.362 0-.716-.11-1.014-.318l3.426-4.926A4.22 4.22 0 0 0 20 1zm-1.014-.318a1.78 1.78 0 0 1-.65-.84l5.625-2.087a4.22 4.22 0 0 0-1.549-1.999zm-.657-.858 3.551 9.767 5.64-2.05-3.552-9.768zm3.556 9.779c.212.575.546 1.098.98 1.532l4.243-4.243c.18.18.319.397.407.636zm.98 1.532c.434.434.957.768 1.532.98l2.075-5.63c.239.088.456.227.636.407zm1.544.985 9.767 3.551 2.05-5.639-9.766-3.551zm9.749 3.544a1.78 1.78 0 0 1-.84-.65l4.926-3.426a4.22 4.22 0 0 0-1.999-1.549zm-.84-.65A1.78 1.78 0 0 1 33 20h6c0-.862-.264-1.704-.756-2.412zM33 20c0-.362.11-.716.318-1.014l4.926 3.426c.492-.708.756-1.55.756-2.412zm.318-1.014c.207-.297.5-.524.84-.65l2.087 5.625c.809-.3 1.506-.84 1.999-1.549zm.858-.657L24.41 21.88l2.05 5.64 9.768-3.552zm-9.779 3.556a4.2 4.2 0 0 0-1.532.98l4.243 4.243a1.8 1.8 0 0 1-.636.407zm-1.532.98a4.2 4.2 0 0 0-.98 1.532l5.63 2.075a1.8 1.8 0 0 1-.407.636z" mask="url(#path-1-outside-1_5853_41067)"></path>
                            </svg>
                        </div>
                        {/* price info */}
                        <div className="my-6 text-center">
                            <h2 className='text-xl'>Friend</h2>
                            <p className='text-base leading-6'>
                                <span>$15</span>{" "}
                                <span>USD</span>
                                <span>/month</span>
                            </p>
                        </div>
                        <p className='text-neutral-500 mb-6'>Contribute more to writers and strengthen your support for the Medium community. Cancel anytime.</p>
                        <button className="bg-green-700 text-white rounded-full px-6 py-2 w-full">Get started</button>
                        <div className="my-6 w-full h-px bg-neutral-200/70"></div>
                        {/* list */}
                        <ul className="space-y-4 mt-6">
                            {
                                list2.map((data, index) => (
                                    <li key={index} className="flex items-center gap-3 text-sm text-left">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className="inline-block shrink-0" role="presentation" aria-hidden="true" focusable="false">
                                            <path stroke="#1A8917" stroke-linecap="round" stroke-linejoin="round" d="M3 8.79 7.103 13 13 3"></path>
                                        </svg>
                                        <p className={index == 1 ? 'font-bold' : ''}>{data}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </Layout >
    )
}

export default Plan;