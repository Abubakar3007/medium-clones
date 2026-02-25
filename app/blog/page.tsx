"use client";
import Footer from "@/components/Footer";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react";
const page = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const editorPicks = [
        {
            img: "https://miro.medium.com/v2/resize:fit:825/format:webp/1*FlTfUz7IGsIOlMRr2kDIcw.jpeg",
            title: "Partner Program update: Starting February 17, we’re rewarding stories that bring in new members",
            description: "We want to incentivize the stories that help Medium grow",
            time: "14h ago",
            read: "6 min read"
        },
        {
            img: "https://miro.medium.com/v2/resize:fit:825/format:webp/1*iBRnrcZ1wpXyGRkI-UMMJQ.jpeg",
            title: "How Medium started addressing its carbon footprint",
            description: "Where we started, and where we’re going next",
            time: "Feb 13",
            read: "9 min read"
        },
        {
            img: "https://miro.medium.com/v2/resize:fit:825/format:webp/1*jIsQmO_TVJm6c7TgC8S6ow.jpeg",
            title: "Pub Crawl Is Back: Two Days of Meetups, Booths, and Learning",
            description: "Our editor-led community event returns March 11–12!",
            time: "Feb 10",
            read: "2 min read"
        },
        {
            img: "https://miro.medium.com/v2/resize:fit:825/format:webp/1*RuMZyG-tbT9ZO1SJq_LBaQ.jpeg",
            title: "It happened on Medium in 2025",
            description: "Brand-new topics, trends across the platform, celebrating new writers, and building community.",
            time: "Jan 14",
            read: "9 min read"
        }
    ]

    return (
        <Layout>
            <>
                <section className="pt-9 border-b border-input/10 pb-4">
                    <div className="max-w-[1192px] w-full mx-auto xl:px-0 md:px-16 sm:px-12 px-6">
                        <div className="mb-8 flex justify-between md:flex-row flex-col gap-6">
                            <div className="flex gap-6 md:flex-row flex-col">
                                <Link href="">
                                    <img src="https://miro.medium.com/v2/resize:fill:160:160/1*7eq6Xl7nRYU77U7IPYvoDg.jpeg" className="sm:w-20 w-16 sm:h-20 h-16 rounded-sm" />
                                </Link>

                                <div>
                                    <h1 className="sm:text-[32px] text-xl mb-3">The Medium Blog</h1>
                                    <div className="flex gap-3 text-muted-foreground text-sm font-light">
                                        <Link href=""><span>3.4M</span> Followers</Link>
                                        <span className="sm:block hidden">.</span>

                                        <button className="flex gap-3">
                                            <div className="flex -space-x-1">
                                                <img alt="Scott Lamb" className="rounded-full" src="https://miro.medium.com/v2/resize:fill:40:40/1*0Ye7S84nA3tdGyVSxc_Q-g.png" width="20" height="20" loading="lazy" />
                                                <img alt="Kassandra @ Medium" className="rounded-full" src="https://miro.medium.com/v2/resize:fill:40:40/1*WsYqatGWFEEK_qYGJbV8aQ.jpeg" width="20" height="20" loading="lazy" />
                                                <img alt="Carly Rose Gillis" className="rounded-full" src="https://miro.medium.com/v2/resize:fill:40:40/1*VeIlHIMroGEpuskT88HcPg.png" width="20" height="20" loading="lazy" />
                                                <img alt="Terrie Schweitzer" className="rounded-full" src="https://miro.medium.com/v2/resize:fill:40:40/1*ggQ7RTmtu9kSIiW0UrwC0w.jpeg" width="20" height="20" loading="lazy" />
                                                <img alt="Medium Support" className="rounded-full" src="https://miro.medium.com/v2/resize:fill:40:40/1*8E6Laeaz-zMfU_rkpZUyKw.png" width="20" height="20" loading="lazy" />
                                                <img alt="overlapping-avatar-placeholder" className="rounded-full" src="https://miro.medium.com/v2/da:true/resize:fill:40:40/8b8e1370130673fdb1f5d4d1959d531bac2bcbdfa845d624da64813200e537af" width="20" height="20" loading="lazy" />
                                            </div>
                                            <span>5+ editors</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <Button variant="default" size="sm" className="rounded-full">Follow</Button>
                        </div>

                        <ul className="flex gap-8 text-sm text-muted-foreground">
                            <li>
                                <Link href="" className="hover:text-black">Product News</Link>
                            </li>
                            <li>
                                <Link href="" className="hover:text-black">Latest</Link>
                            </li>
                            <li>
                                <Link href="" className="hover:text-black">Newsletter</Link>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* editors picks */}
                <section className="pt-8 border-b border-input/10 pb-12">
                    <div className="max-w-[1200px] w-full mx-auto xl:px-0 md:px-16 sm:px-12 px-6">
                        <h2 className="text-xl text-muted-foreground mb-7">Editor’s picks</h2>

                        <div className="grid md:grid-cols-6 gap-x-6 gap-y-10">
                            {
                                editorPicks.map((data, index) => (
                                    <article className={`${index === 0 ? "md:col-span-6" : "md:col-span-2"}`} key={index}>
                                        <div className={`flex gap-6 ${index === 0 ? "md:flex-row flex-row-reverse" : "md:flex-col flex-row-reverse"}`}>
                                            <Link href="" className="md:flex-1 md:w-auto sm:w-40 w-20 flex-shrink-0">
                                                <img src={data.img} alt="" loading="lazy" />
                                            </Link>

                                            <div className={`${index === 0 ? 'flex-1' : ''}`}>
                                                <Link href="">
                                                    <h3 className={`${index === 0 ? 'md:text-[32px] md:leading-9 text-xl leading-6' : 'text-xl md:text-2xl md:leading-7 leading-6'}`}>{data.title}</h3>
                                                </Link>
                                                <p className="mt-3 text-base"><Link href="">{data.description}</Link></p>
                                                <div className="flex mt-3 gap-2 items-center text-muted-foreground font-light">
                                                    <Link href="" className="sm:block hidden">
                                                        <img
                                                            alt="Medium Staff"
                                                            width="20"
                                                            height="20"
                                                            loading="lazy"
                                                            src="https://miro.medium.com/v2/resize:fill:25:25/1*8E6Laeaz-zMfU_rkpZUyKw.png"
                                                        />
                                                    </Link>
                                                    <Link href="/" className="sm:block hidden">Medium Staff</Link>
                                                    <span className="sm:block hidden">.</span>
                                                    <span>{data.time}</span>
                                                    <span>.</span>
                                                    <span>{data.read}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                        </div>
                    </div>
                </section>

                <section className="border-b border-input/10 py-12">
                    <div className="max-w-[1200px] w-full mx-auto xl:px-0 md:px-16 sm:px-12 px-6">
                        <h2 className="text-xl text-muted-foreground mb-7">For Writers</h2>

                        <div className="grid md:grid-cols-3 gap-x-6 gap-y-10">
                            {
                                editorPicks.map((data, index) => (
                                    <article key={index}>
                                        <div className="flex gap-6 md:flex-col flex-row-reverse">
                                            <Link href="" className="md:flex-1 md:w-auto sm:w-40 w-20">
                                                <img src={data.img} alt="" loading="lazy" />
                                            </Link>

                                            <div className="flex-1">
                                                <Link href="">
                                                    <h3 className="text-xl md:text-2xl leading-7">{data.title}</h3>
                                                </Link>
                                                <p className="mt-3 text-base"><Link href="">{data.description}</Link></p>
                                                <div className="flex mt-3 gap-2 items-center text-muted-foreground font-light text-xs">
                                                    <a href="" className="sm:block hidden">
                                                        <img alt="Medium Staff" width="20" height="20" loading="lazy" src="https://miro.medium.com/v2/resize:fill:25:25/1*8E6Laeaz-zMfU_rkpZUyKw.png" />
                                                    </a>
                                                    <Link href="" className="sm:block hidden">Medium Staff</Link>
                                                    <span className="sm:block hidden">.</span>
                                                    <span>{data.time}</span>
                                                    <span>.</span>
                                                    <span>{data.read}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                ))
                            }
                        </div>
                    </div>
                </section>

                <section className="py-14">
                    <div className="max-w-[1200px] w-full mx-auto xl:px-0 md:px-16 sm:px-12 px-6">
                        <h2 className="text-xl text-muted-foreground mb-7">Latest</h2>
                        <div className="max-w-[680px] w-full space-y-8">
                            {
                                editorPicks.map((data, index) => (
                                    <article key={index} className={`pb-8 ${index === editorPicks.length - 1 ? "" : "border-b border-input/10"}`}>
                                        <div className="flex gap-6 flex-row-reverse">
                                            <Link href="" className="sm:w-40 w-20">
                                                <img src={data.img} alt="" loading="lazy" />
                                            </Link>

                                            <div className="flex-1">
                                                <Link href="">
                                                    <h3 className="md:text-2xl md:leading-8 text-xl leading-6">{data.title}</h3>
                                                </Link>
                                                <p className="mt-3 text-base"><Link href="">{data.description}</Link></p>
                                                <div className="flex mt-3 gap-2 items-center text-muted-foreground font-light text-xs">
                                                    <a href="" className="sm:block hidden">
                                                        <img alt="Medium Staff" width="20" height="20" loading="lazy" src="https://miro.medium.com/v2/resize:fill:25:25/1*8E6Laeaz-zMfU_rkpZUyKw.png" />
                                                    </a>
                                                    <Link href="" className="sm:block hidden">Medium Staff</Link>
                                                    <span className="sm:block hidden">.</span>
                                                    <span>{data.time}</span>
                                                    <span>.</span>
                                                    <span>{data.read}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </>
            <Footer />
        </Layout>
    )
}

export default page