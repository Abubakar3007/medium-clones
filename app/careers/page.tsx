"use client";
import { Button } from "@/components/ui/button"
import { stories, formatDate, formatNumber, Story, Author } from "@/app/lib/mock-data"
import ArticleCard from "@/components/ArticleCard";
import Link from "next/link";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import Footer from "@/components/Footer";
const page = () => {
    const [inputVal, setInputVal] = useState('');

    return (
        <Layout>
            <>
                <div className="border-b border-input/10 py-4">
                    <div className="max-w-[1192px] w-full m-auto xl:px-0 sm:px-12 px-6">
                        <a href="" className="text-xl leding-6 font-bold">
                            Jobs at Prismio
                        </a>
                    </div>
                </div>

                <article className="mb-12">
                    <div className="mx-auto xl:px-0 px-16 [@media(min-width:900px)]:max-w-[1192px] w-full">
                        <figure className="mt-9">
                            <picture className="w-full block">
                                <img alt="Group pic" className="w-full" loading="eager" role="presentation" src="https://miro.medium.com/v2/resize:fit:1250/1*xH8t8_J_mdGTb_sCaaINHg.jpeg" />
                            </picture>
                        </figure>

                        <div className="max-w-[680px] px-6 mx-auto w-full">
                            <h1 className="text-[42px] leading-[52px] tracking-tight mt-14">Careers at Prismio</h1>
                            <p className="text-[22px] leading-7 mt-4 mb-6 text-muted-foreground">Help us build the best place to read and write on the internet.</p>

                            <div className="flex items-center gap-4 mb-8 animate-fade-in flex-wrap">
                                <span className="relative flex shrink-0 overflow-hidden rounded-full h-11 w-11">
                                    <img className="aspect-square h-full w-full" src="https://i.pravatar.cc/150?img=1" />
                                </span>
                                <a className="text-sm font-medium hover:underline" href="/profile/1">Sarah Chen</a>
                                <Button variant="outline" className="h-8">
                                    Follow
                                </Button>
                                <span className="text-sm text-muted-foreground">8 min read</span>
                                <span className="text-sm text-muted-foreground">Feb 8, 2026</span>
                            </div>

                            <div className="flex items-center justify-between py-4 px-2 mb-10 border-y border-divider">
                                <div className="flex items-center gap-4">
                                    <button className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-thumbs-up h-5 w-5">
                                            <path d="M7 10v12"></path>
                                            <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path>
                                        </svg>
                                        <span className="text-sm">2.3K</span>
                                    </button>
                                    <button className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle h-5 w-5">
                                            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                                        </svg>
                                        <span className="text-sm">89</span>
                                    </button>
                                </div>
                                <div className="flex items-center gap-7">
                                    <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bookmark h-5 w-5 text-muted-foreground">
                                            <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                                        </svg>
                                    </button>
                                    <button className="sm:block hidden">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-play h-5 w-5 text-muted-foreground hover:text-foreground">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <polygon points="10 8 16 12 10 16 10 8"></polygon>
                                        </svg>
                                    </button>
                                    <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-share text-muted-foreground h-5 w-5 hover:text-foreground">
                                            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                                            <polyline points="16 6 12 2 8 6"></polyline>
                                            <line x1="12" x2="12" y1="2" y2="15"></line>
                                        </svg>
                                    </button>
                                    <button className="sm:block hidden">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis h-5 w-5 text-muted-foreground hover:text-foreground">
                                            <circle cx="12" cy="12" r="1"></circle>
                                            <circle cx="19" cy="12" r="1"></circle>
                                            <circle cx="5" cy="12" r="1"></circle>
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <p className="text-lg leading-8 mt-9">
                                <strong><em>IMPORTANT NOTE: Prismio has been made aware of a scam that involves offering people jobs at Medium. Please do not engage with offers that look similar to </em></strong>
                                <a href="" target="_blank" className="underline"><strong><em>this</em></strong></a>
                                <strong><em>. All our open positions are available </em></strong>
                                <a href="" target="_blank" className="underline"><strong><em>here</em></strong></a>
                                <strong><em>.</em></strong>
                            </p>
                            <p className="text-xl leading-8 mt-9 font-serif"><a href="" target="_blank" className="underline">View all open positions</a></p>
                            <p className="text-xl leading-8 mt-9 font-serif">At Prismio, we believe in the power of words — and we’re on a mission to bring the world’s expertise to life through memorable storytelling. Our platform rewards great writing and puts power back in the hands of readers. Medium’s subscription model means we rely on our members, not ads. We’re looking for teammates who are inspired by our mission, who are deeply thoughtful and empathetic, and who are passionate about the future of online publishing. Sound like you? Keep reading!</p>

                            <div className="p-6 mt-6 border-t border-input/10 border-b">
                                <h4 className="text-center mb-3 text-lg leading-5 font-serif">Get Jobs @ Prismio’s stories in&nbsp;your&nbsp;inbox</h4>
                                <p className="text-sm mb-4 text-muted-foreground text-center">Join Prismio for free to get updates from&nbsp;this&nbsp;writer.</p>
                                <div className="flex justify-center sm:flex-row flex-col sm:gap-0 gap-2 items-center">
                                    <input
                                        placeholder="Enter your email"
                                        type="text"
                                        value={inputVal}
                                        className="max-w-[280px] h-10 w-full py-2 px-4 rounded-[4px_0_0_4px] bg-gray-100 outline-none"
                                        onChange={(e) => setInputVal(e.target.value)}
                                    />
                                    <Button variant="default" className="rounded-[0_4px_4px_0]">Subscribe</Button>
                                </div>
                            </div>
                            <p className="text-xl leading-8 mt-9 font-serif">
                                <em>Note: Prismio only hires and communicates via greenhouse.io, our third-party recruiting platform. If you you receive job offers for Medium via LinkedIn or other platforms, it may be a scam; please verify it by contacting us at </em>
                                <a href="" className="underline">
                                    <em>help.prismio.com</em>
                                </a>
                            </p>
                        </div>

                        <div className="pb-2.5 pt-6 mb-4 mt-8 flex justify-center items-center gap-5">
                            <span className="w-[3px] h-[3px] bg-black rounded-full"></span>
                            <span className="w-[3px] h-[3px] bg-black rounded-full"></span>
                            <span className="w-[3px] h-[3px] bg-black rounded-full"></span>
                        </div>

                        <div className="max-w-[680px] px-6 w-full mx-auto">
                            <h2 className="text-2xl mt-10">Why work at Prismio</h2>
                            <h3 className="mt-7 text-xl leading-6">A meaningful mission</h3>
                            <p className="mt-3 text-xl leading-8 font-serif">From our engineers to our content ops team, employees at Prismio (aka “Medians”) are driven by passion, vision, and purpose. We believe in building a high-quality, open platform for sharing ideas — free from harassment, hate speech, and other harmful content. We strive to create a diverse, inclusive place for everyone to feel seen, safe, and supported, both on our product and within our organization.</p>
                            <h3 className="mt-7 text-xl leading-6">Remote-first culture</h3>
                            <p className="mt-3 text-xl leading-8 font-serif">Collaborate with colleagues from Paris to Portland: Prismio is a 100% remote workplace. We’ll provide you with what you need to do your best work, including a stipend for home office expenses, Wi-Fi reimbursement, and a local co-working space membership. (We also know how valuable it is to meet your team IRL, so we hold an all-company retreat twice a year.)</p>
                        </div>

                        <div className="mt-14 flex gap-3">
                            <figure className="flex-1">
                                <picture className="w-full block">
                                    <img alt="" height="5707" loading="lazy" className="w-full" role="presentation" src="https://miro.medium.com/v2/resize:fit:10700/1*yh4e8Ukgbolq6wbPTOaWtg.jpeg" />
                                </picture>
                            </figure>
                            <figure className="flex-1">
                                <picture className="w-full block">
                                    <img alt="" height="5572" loading="lazy" className="w-full" role="presentation" src="https://miro.medium.com/v2/resize:fit:10449/1*Yd9cQCBxtxeWar7YsWXzTg.jpeg" />
                                </picture>
                            </figure>
                        </div>

                        <div className="mt-3">
                            <figure className="flex-1">
                                <picture className="w-full block">
                                    <img alt="" className="w-full" height="667" loading="lazy" role="presentation" src="https://miro.medium.com/v2/resize:fit:1250/1*bBANGA8cwOiG8NEM9LD_5w.jpeg" />
                                </picture>
                            </figure>
                        </div>

                        <div className="mt-3 flex gap-3">
                            <figure className="flex-1">
                                <picture className="w-full block">
                                    <img alt="" className="w-full" height="5760" loading="lazy" role="presentation" src="https://miro.medium.com/v2/resize:fit:10800/1*Gfwg0N47mZVDoYHVFJbujw.jpeg" />
                                </picture>
                            </figure>
                            <figure className="flex-1">
                                <picture className="w-full block">
                                    <img alt="" className="w-full" height="4525" loading="lazy" role="presentation" src="https://miro.medium.com/v2/resize:fit:8863/1*AXHZPEOp-YqhgoBVE88g_w.jpeg" />
                                </picture>
                            </figure>
                        </div>

                        <div className="max-w-[680px] px-6 w-full mx-auto">
                            <h3 className="mt-9 text-xl leading-6">A creative environment</h3>
                            <p className="mt-4 leading-8 text-xl font-serif">We’re building a culture, not just a product. We believe in experimentation, innovation, and collaboration. We give hi5s and lightning talks and all-company presentations about the ambitious challenges we’re tackling. We share travel photos in our Slack #watercooler channel and craft fun playlists for Thursday writing hours. We question ideas in product workshops, learn from the expertise of our colleagues, and create new things together.</p>
                            <h3 className="mt-7 text-xl leading-6">Generous benefits</h3>
                            <p className="mt-4 leading-8 text-xl font-serif">Comprehensive health insurance, 401(k) plans, parental leave, and unlimited paid time off are just the start. Our values show up in your benefits: We provide support for your wellbeing at home, education and professional development, financial advising, mental health support, and more.</p>
                        </div>

                        <div className="pb-2.5 pt-6 mb-4 mt-8 flex justify-center items-center gap-5">
                            <span className="w-[3px] h-[3px] bg-black rounded-full"></span>
                            <span className="w-[3px] h-[3px] bg-black rounded-full"></span>
                            <span className="w-[3px] h-[3px] bg-black rounded-full"></span>
                        </div>

                        <div className="max-w-[680px] w-full mx-auto px-6">
                            <h2 className="text-xl leading-8 mt-12">Join Our Team</h2>
                            <p className="text-xl mt-4 leading-8 font-serif">
                                <a href="" target="_blank" className="underline">View all open positions</a>
                            </p>
                            <figure className="mt-14">
                                <picture className="w-full block">
                                    <img alt="" width="700" height="467" loading="lazy" role="presentation" src="https://miro.medium.com/v2/resize:fit:875/1*EDXF7ykF5j0o4YBLmzlaRA.jpeg" />
                                </picture>
                            </figure>
                            <h2 className="text-2xl leading-8 mt-10">Learn more about Prismio</h2>
                            <div className="mt-8">
                                <a href="https://medium.com/blog" target="_blank">
                                    <div className="flex">
                                        <div className="py-4 px-5 border border-input/10 w-full">
                                            <h2 className="text-base leading-5 line-clamp-1 text-ellipsis mb-2">The Prismio Blog</h2>
                                            <p className="text-base leading-6 text-muted-foreground mb-3 line-clamp-1 text-ellipsis">The official source of news and updates about Medium</p>
                                            <p className="text-xs text-muted-foreground leading-5">prismio.com</p>
                                        </div>
                                        <div className="w-40 h-40 bg-cover bg-[url('https://miro.medium.com/v2/resize:fit:200/1*7eq6Xl7nRYU77U7IPYvoDg.jpeg')] shrink-0"></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </article>

                <div className="max-w-[680px] px-4 mb-7 mt-4 mx-auto w-full">
                    <div className="flex gap-2">
                        <a href="" className="py-2 px-4 text-sm rounded-full bg-gray-100/80 hover:bg-gray-100/90">Prismio</a>
                        <a href="" className="py-2 px-4 text-sm rounded-full bg-gray-100/80 hover:bg-gray-100/90">Careers</a>
                        <a href="" className="py-2 px-4 text-sm rounded-full bg-gray-100/80 hover:bg-gray-100/90">Jobs</a>
                    </div>

                    <div className="flex items-center justify-between py-4 px-2 mb-10 mt-6">
                        <div className="flex items-center gap-4">
                            <button className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-thumbs-up h-5 w-5">
                                    <path d="M7 10v12"></path>
                                    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path>
                                </svg>
                                <span className="text-sm">2.3K</span>
                            </button>
                            <button className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle h-5 w-5">
                                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                                </svg>
                                <span className="text-sm">89</span>
                            </button>
                        </div>
                        <div className="flex items-center gap-7">
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bookmark h-5 w-5 text-muted-foreground">
                                    <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                                </svg>
                            </button>
                            <button className="sm:block hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-play h-5 w-5 text-muted-foreground hover:text-foreground">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polygon points="10 8 16 12 10 16 10 8"></polygon>
                                </svg>
                            </button>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-share text-muted-foreground h-5 w-5 hover:text-foreground">
                                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                                    <polyline points="16 6 12 2 8 6"></polyline>
                                    <line x1="12" x2="12" y1="2" y2="15"></line>
                                </svg>
                            </button>
                            <button className="sm:block hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis h-5 w-5 text-muted-foreground hover:text-foreground">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="19" cy="12" r="1"></circle>
                                    <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <section className="py-20 bg-gray-100/80">
                    <div>
                        <div className="max-w-[680px] mx-auto px-4">
                            <h2 className="mt-4 mb-12 text-2xl leading-7">More from Jobs @ Prismio and Jobs at prismio</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {stories.slice(0, 4).map(story => <ArticleCard key={story.id} story={story} />)}
                            </div>
                            <div className="pt-6 border-t border-input/10 flex gap-4 flex-wrap">
                                <Link href="" className="rounded-full px-4 py-2 border border-input text-sm">See all from jobs @ prismio</Link>
                                <Link href="" className="rounded-full px-4 py-2 border border-input text-sm">See all from jobs at prismio</Link>
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 pt-20 border-t border-input/10">
                        <div className="max-w-[680px] mx-auto px-4">
                            <h2 className="mt-4 mb-12 text-2xl leading-7">Recommended from Prismio</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {stories.slice(0, 6).map(story => <ArticleCard key={story.id} story={story} />)}
                            </div>
                            <div className="pt-6 border-t border-input/10 gap-4 flex flex-wrap">
                                <Link href="" className="rounded-full px-4 py-2 border border-input text-sm">See all from jobs @ prismio</Link>
                                <Link href="" className="rounded-full px-4 py-2 border border-input text-sm">See all from jobs at prismio</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </>
            <Footer />
        </Layout>
    )
}
export default page