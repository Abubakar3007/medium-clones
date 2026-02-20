import { Header } from "@/components/Header"
import { Button } from "@/components/ui/button"
import Link from "next/link"
const page = () => {
    return (
        <div>
            <main>
                <section className="pt-9">
                    <div className="border-b border-muted/40 pb-4">
                        <div className="max-w-[1192px] w-full mx-auto xl:px-0 px-4">
                            <div className="mb-8 flex justify-between">
                                <div className="flex gap-6">
                                    <Link href=""><img src="https://miro.medium.com/v2/resize:fill:160:160/1*7eq6Xl7nRYU77U7IPYvoDg.jpeg" className="w-20 h-20 rounded-sm" /></Link>
                                    <div>
                                        <h1 className="text-4xl mb-3">The Medium Blog</h1>
                                        <div className="flex gap-3 text-muted-foreground text-sm">
                                            <Link href=""><span>3.4</span> Followers</Link>
                                            <span>.</span>
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

                                <div>
                                    <Button variant="default" size="sm" className="rounded-full">Follow</Button>
                                </div>
                            </div>

                            <div>
                                <ul className="flex gap-8 text-sm text-muted-foreground">
                                    <li>
                                        <Link href="">Product News</Link>
                                    </li>
                                    <li>
                                        <Link href="">Latest</Link>
                                    </li>
                                    <li>
                                        <Link href="">Newsletter</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* editors picks */}
                <section className="pt-8">
                    <div className="max-w-[1200px] w-full mx-auto xl:px-0 px-4">
                        <h2 className="text-2xl text-muted-foreground mb-8">Editor’s picks</h2>
                        <div className="grid grid-cols-6 gap-x-6 gap-y-10">
                            <article className="col-span-6">
                                <div className="flex gap-6">
                                    <Link href="" className="flex-1">
                                        <img src="https://miro.medium.com/v2/resize:fit:825/format:webp/1*FlTfUz7IGsIOlMRr2kDIcw.jpeg" alt="" loading="lazy" />
                                    </Link>

                                    <div className="flex-1">
                                        <Link href="">
                                            <h3 className="text-[32px] leading-9">Partner Program update: Starting February 17, we’re rewarding stories that bring in new members</h3>
                                        </Link>
                                        <p className="mt-3 text-base"><Link href="">We want to incentivize the stories that help Medium grow</Link></p>
                                        <div className="flex mt-3 gap-2 items-center text-muted-foreground font-light">
                                            <a href="">
                                                <img alt="Medium Staff" width="20" height="20" loading="lazy" src="https://miro.medium.com/v2/resize:fill:25:25/1*8E6Laeaz-zMfU_rkpZUyKw.png" />
                                            </a>
                                            <Link href="">Medium Staff</Link>
                                            <span>.</span>
                                            <span>14h ago</span>
                                            <span>.</span>
                                            <span>6 min read</span>
                                        </div>
                                    </div>
                                </div>
                            </article>

                            <article className="col-span-2">
                                <div className="flex gap-6 flex-col">
                                    <Link href="" className="flex-1">
                                        <img src="https://miro.medium.com/v2/resize:fit:825/format:webp/1*FlTfUz7IGsIOlMRr2kDIcw.jpeg" alt="" loading="lazy" />
                                    </Link>

                                    <div className="flex-1">
                                        <Link href="">
                                            <h3 className="text-xl leading-6">Partner Program update: Starting February 17, we’re rewarding stories that bring in new members</h3>
                                        </Link>
                                        <p className="mt-3 text-base"><Link href="">We want to incentivize the stories that help Medium grow</Link></p>
                                        <div className="flex mt-3 gap-2 items-center text-muted-foreground font-light text-xs">
                                            <a href="">
                                                <img alt="Medium Staff" width="20" height="20" loading="lazy" src="https://miro.medium.com/v2/resize:fill:25:25/1*8E6Laeaz-zMfU_rkpZUyKw.png" />
                                            </a>
                                            <Link href="">Medium Staff</Link>
                                            <span>.</span>
                                            <span>14h ago</span>
                                            <span>.</span>
                                            <span>6 min read</span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default page