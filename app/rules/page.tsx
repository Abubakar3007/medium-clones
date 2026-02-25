"use client";
import { Button } from '@/components/ui/button'
import { stories, formatDate, formatNumber, Story, Author } from "@/app/lib/mock-data"
import ArticleCard from "@/components/ArticleCard";
import Link from "next/link";
import { useState } from 'react';
import Footer from '@/components/Footer';
import { Layout } from '@/components/Layout';
const page = () => {
    const [subscribe, setSubscribe] = useState('');

    return (
        <Layout>
            <>
                <div className="border-b border-input/10 py-4">
                    <div className="max-w-[1192px] w-full m-auto xl:px-0 sm:px-12 px-6">
                        <a href="" className="text-xl leding-6 font-bold">
                            Medium Policy
                        </a>
                    </div>
                </div>

                <div className="max-w-[680px] w-full px-6 mx-auto">
                    <h1 className='sm:text-[42px] text-3xl mt-10 tracking-tight mb-8'>
                        Medium Rules
                    </h1>
                    <div>
                        <div className="flex items-center gap-4 mb-8 animate-fade-in flex-wrap">
                            <span className="relative flex shrink-0 overflow-hidden rounded-full h-11 w-11">
                                <img className="aspect-square h-full w-full" src="https://i.pravatar.cc/150?img=1" />
                            </span>
                            <a className="text-sm font-medium hover:underline" href="/profile/1">Sarah Chen</a>
                            <Button variant="outline" className="h-9">Follow</Button>
                            <span className="text-sm text-muted-foreground">8 min read</span>
                            <span className="text-sm text-muted-foreground">Feb 8, 2026</span>
                        </div>

                        {/* actions */}
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
                            </div>
                        </div>
                    </div>

                    <p className='mt-10 text-xl leading-8 font-serif'><mark>Medium is an open platform that exists to share ideas and perspectives from the world’s most insightful writers, thinkers, and storytellers.</mark></p>
                    <p className='mt-10 text-xl leading-8 font-serif'>We welcome thoughtful and civil discussion from a broad spectrum of viewpoints. To maintain a safe, respectful, and welcoming environment for a wide range of people to engage in meaningful conversations, we prohibit certain conduct.</p>
                    <p className='mt-10 text-xl leading-8 font-serif'>In deciding whether there has been a violation of the rules, we will take into consideration things like <Link href="" className="underline">newsworthiness</Link>, the context and nature of the posted information, the likelihood and severity of actual or potential harms, account history, and applicable laws.</p>
                    <p className='mt-6 text-xl leading-8 font-serif'>Violations of our rules may result in consequences such as account restrictions or suspension of your content. Medium has the sole authority and final decision as to whether content or behavior violates our rules.</p>

                    <div className="pb-2.5 pt-6 mb-4 mt-8 flex justify-center items-center gap-5">
                        <span className="w-[3px] h-[3px] bg-black rounded-full"></span>
                        <span className="w-[3px] h-[3px] bg-black rounded-full"></span>
                        <span className="w-[3px] h-[3px] bg-black rounded-full"></span>
                    </div>

                    <h3 className='text-xl mt-10 leading-7'>To report a violation:</h3>
                    <p className='mt-6 text-xl leading-8 font-serif'>If you find a post or account on Medium that you believe violates these rules, <Link href="" className="underline">please report</Link> it. You can find the report button in the 3-dot menu on every post, response, and account page.</p>
                    <p className='mt-10 text-xl leading-8 font-serif'>You can use <Link href="" className="underline">this form</Link> to provide more detail or to report other conduct you believe violates our rules. Additionally, you can send an email to <Link href="" className="underline">trust@prismio.com</Link>.</p>

                    <div className="pb-2.5 pt-6 mb-4 mt-8 flex justify-center items-center gap-5">
                        <span className="w-[3px] h-[3px] bg-black rounded-full"></span>
                        <span className="w-[3px] h-[3px] bg-black rounded-full"></span>
                        <span className="w-[3px] h-[3px] bg-black rounded-full"></span>
                    </div>

                    <h3 className='text-xl mt-6 leading-7'>Block and mute:</h3>
                    <p className='mt-6 text-xl leading-8 font-serif'>If you find yourself in conflict with another user, we encourage the following:</p>
                    <ul className="mt-10 pl-10 list-disc text-xl leading-8 font-serif space-y-4">
                        <li>Block them and move on. You can learn more about blocking here.</li>
                        <li>Mute them, and they won’t show up in your feeds. You can learn more about muting here.</li>
                        <li>Remove their responses from your stories. You can learn more about managing and turning off your responses here.</li>
                    </ul>

                    <div className="pb-2.5 pt-6 mb-4 mt-8 flex justify-center items-center gap-5">
                        <span className="w-[3px] h-[3px] bg-black rounded-full"></span>
                        <span className="w-[3px] h-[3px] bg-black rounded-full"></span>
                        <span className="w-[3px] h-[3px] bg-black rounded-full"></span>
                    </div>

                    <h2 className='text-2xl mt-10 leading-7'>Rules</h2>
                    <p className='mt-6 text-xl leading-8 font-serif'>Capitalized terms here have the same meaning as defined in the Medium Terms of Service.</p>

                    <h3 className='text-xl mt-10 leading-7'>Threats of violence and incitement</h3>
                    <p className='mt-6 text-xl leading-8 font-serif'>We do not allow content or actions that threaten, encourage, or incite violence against anyone, directly or indirectly.</p>


                    <h3 className='mt-6 text-xl leading-8 font-serif'>Hateful content</h3>
                    <p className='mt-6 text-xl leading-8 font-serif'>We do not allow content that constitutes or promotes violence, harassment, or hatred against people based on characteristics like race, ethnicity, national origin, religion, caste, disability, disease, age, sexual orientation, gender, or gender identity.</p>
                    <p className='mt-10 text-xl leading-8 font-serif'>We do not allow posts or accounts that glorify, celebrate, downplay, or trivialize violence, suffering, abuse, or deaths of individuals or groups. This includes the use of scientific or pseudoscientific claims or misleading statistics to pathologize, dehumanize, or disempower others. We do not allow calls for intolerance, exclusion, or segregation based on protected characteristics, nor do we allow the glorification of groups which do any of the above.</p>
                    <p className='mt-6 text-xl leading-8 font-serif'>We do not allow posts or accounts that target others with slurs, tropes, or other content that intends to dehumanize, degrade or reinforce negative or harmful stereotypes about a protected category. For example, this may include targeted or intentional misgendering or deadnaming of transgender individuals, or harmfully ableist language.</p>
                    <p className='mt-6 text-xl leading-8 font-serif'>We do not allow hateful text, images, symbols, or other content, including in your username, profile, or bio.</p>

                    <h3 className='mt-10 text-xl leading-8'>Harassment</h3>
                    <p className='mt-6 text-xl leading-8 font-serif'>Medium exists to share and discuss ideas. We don’t tolerate harassment, which includes:</p>
                    <ul className="mt-10 pl-10 list-disc text-xl leading-8 font-serif space-y-4">
                        <li>Bullying, threatening, mocking, or shaming someone, or posting things likely to encourage others to do so</li>
                        <li>Engaging in a repetitive or targeted campaign of harassment against someone or a group of people</li>
                        <li>Using derogatory language, racial slurs, or obscenities to disparage or attack someone or a group of people</li>
                        <li>Using Medium features like responses, private notes, mentions, follows, lists, highlights, or requests in a way that attempts to or does annoy or harass someone, or to draw inorganic attention to your content on Medium</li>
                    </ul>

                    <h3 className='mt-10 text-xl leading-8'>Privacy and Reputation</h3>
                    <p className='mt-3 text-xl leading-8 font-serif'>We do not allow the following:</p>
                    <ul className="mt-10 pl-10 list-disc text-xl leading-8 font-serif space-y-4">
                        <li>Posting images of, transcripts of, copies of, or links to private communications between private individuals without the explicit consent of all parties to the communication. Redacting names or other information does not supplant the need to secure permissions</li>
                        <li>Doxing, which includes not only private or obscure personal information but also the aggregation of publicly available information to target, shame, blackmail, harass, intimidate, threaten, or endanger a person or group of people</li>
                        <li>Posting intimate or explicit images taken or posted without the subject’s express consent</li>
                        <li>Content that violates others’ privacy or personal safety, including sensitive or confidential information such as credit card numbers, social security numbers, non-public phone numbers, physical addresses, email addresses, non-public data, or other similar information</li>
                    </ul>
                    <h3 className='mt-10 text-xl leading-8'>Restricted categories</h3>
                    <p className='mt-3 text-xl leading-8 font-serif'>We do not allow posts or accounts that engage in the following restricted categories of activity:</p>
                    <ul className="mt-10 pl-10 list-disc text-xl leading-8 font-serif space-y-4">
                        <li>
                            Promotion of controversial, suspect, or extreme content. You can read more about these policies in our Help Center.
                        </li>
                        <li>Facilitation of gambling or betting</li>
                        <li>Facilitation of buying or selling social media interactions, including off-platform</li>
                        <li>Facilitation of sexual services</li>
                        <li>Facilitation of copyright or other intellectual property violation</li>
                        <li>Facilitation or evidence of violating the terms of service of Medium or third party(s)</li>
                        <li>Providing reviews of businesses or products in a gratuitously harmful or abusive manner</li>
                        <li>Facilitation of illegal hacking (e.g., stealing credentials, compromising personal data)</li>
                        <li>Promotion of pseudoscience, disinformation, or other content that is contrary to public health or safety</li>
                    </ul>
                    <h3 className='mt-10 text-xl leading-8'>Related conduct</h3>
                    <p className='mt-3 text-xl leading-8 font-serif'>We do not allow content or accounts that engage in on-platform, off-platform, or cross-platform campaigns of targeting, harassment, hate speech, violence, or disinformation. We may consider off-platform actions in assessing a Medium account, and restrict access or availability to that account.</p>

                    <h3 className='mt-10 text-xl leading-8'>Graphic content</h3>
                    <p className='mt-3 text-xl leading-8 font-serif'>We do not allow posting, linking to, or otherwise promoting pornographic images or videos. We do allow erotic writing and non-graphic erotic images.</p>
                    <p className='mt-10 text-xl leading-8 font-serif'>Medium is a large network, and posts can travel in front of all different types of readers. We ask that you be mindful of unintentional viewers when selecting your images.</p>
                    <p className='mt-10 text-xl leading-8 font-serif'>We do not allow gratuitously graphic or disturbing media, regardless of subject matter.</p>

                    <h3 className='mt-10 text-xl leading-8'>Exploitation of minors</h3>
                    <p className='mt-2 text-xl leading-8 font-serif'>We do not allow content promoting the sexual, violent, or other exploitation of minors, including the sexualization of fictional minors.</p>

                    <h3 className='mt-10 text-xl leading-8'>Promotion and glorification of self-harm</h3>
                    <p className='mt-2 text-xl leading-8 font-serif'>We do not allow content or activities that encourage, promote or glorify acts of self-harm, such as cutting, eating disorders like anorexia or bulimia, and suicide. If you encounter users contemplating or threatening self-harm, please report it.</p>

                    <h3 className='mt-10 text-xl leading-8'>Duplicate Content</h3>
                    <p className='mt-2 text-xl leading-8 font-serif'>We do not allow posting duplicate copies of the same content to Medium, whether from a single account or across multiple accounts, either publicly or as an unlisted story. (You are allowed to cross-post content from your blog to Medium, provided you own the rights for the content.)</p>

                    <h3 className='mt-10 text-xl leading-8'>Spam or Site Misuse</h3>
                    <p className='mt-2 text-xl leading-8 font-serif'>We do not allow spam or misuse of Medium. All spam or misuse will be immediately removed from Medium without notification. Examples of spam or misuse include:</p>
                    <ul className="mt-10 pl-10 list-disc text-xl leading-8 font-serif space-y-4">
                        <li>Posting content primarily to drive traffic to, or increase the search rankings of, an external site, product, or service</li>
                        <li>Scraping and reposting content from other sources for the primary purpose of generating revenue or other personal gains</li>
                        <li>Posting duplicate content, whether from a single account or across multiple accounts</li>
                        <li>Stories where the content is clipped with the purpose of linking to the rest of the article on a different website</li>
                        <li>Performing a disproportionately large number of interactions, particularly by automated means. This includes bulk or indiscriminate interactions, such as following of other accounts (follow spam), clapping, highlighting, leaving notes, or flagging content</li>
                        <li>Repeatedly using responses, mentions, or other interactions as a method of promotion or marketing</li>
                        <li>Participating in bounty campaigns or brigades to artificially inflate rankings for posts, accounts, businesses, or products</li>
                        <li>Use or re-use content templates with slight modifications across multiple posts and accounts</li>
                    </ul>
                    <p className='mt-10 text-xl leading-8 font-serif'>For each of these behaviors, when we talk about “content,” we mean not only posts but also any other feature that allows you to add your own text or media. When we talk about “interactions,” we mean any feature that allows one user to interact with another person or post.</p>
                    <div className="p-6 mt-6 border-t border-input/10 border-b">
                        <h4 className="text-center mb-3 text-lg leading-5 font-serif">Get Jobs @ Medium’s stories in&nbsp;your&nbsp;inbox</h4>
                        <p className="text-sm mb-4 text-muted-foreground text-center">Join Medium for free to get updates from&nbsp;this&nbsp;writer.</p>
                        <div className="flex justify-center sm:flex-row flex-col sm:gap-0 gap-2 items-center">
                            <input
                                placeholder="Enter your email"
                                type="text"
                                value={subscribe}
                                onChange={(e) => setSubscribe(e.target.value)}
                                className="max-w-[280px] w-full py-2 px-4 rounded-[4px_0_0_4px] h-10 bg-gray-100 outline-none" />
                            <Button variant="default" className="rounded-[0_4px_4px_0]">Subscribe</Button>
                        </div>
                    </div>

                    <h3 className='mt-6 text-xl leading-8'>Copyright and trademark infringement</h3>
                    <p className='mt-2 text-xl leading-8 font-serif'>Respect the copyrights and trademarks of others. Per our Terms of Service, we require users to have permission to post the content they publish on Medium. Additionally, we have specific policies around plagiarism, to which all Medium accounts are held. Users found in violation of our copyright rules are not eligible for warning, appeal, or restoration. Deletion of copyright violations is not grounds for reinstatement.</p>
                    <p className='mt-10 text-xl leading-8 font-serif'>We respond to notices of alleged infringement as described in our Terms of Service, Copyright and DMCA Policy, and Trademark Policy.</p>

                    <h3 className='mt-6 text-xl leading-8'>Deceptive conduct</h3>
                    <p className='mt-2 text-xl leading-8 font-serif'>We do not allow deceptive conduct on Medium. This includes:</p>
                    <ul className="mt-10 pl-10 list-disc text-xl leading-8 font-serif space-y-4">
                        <li>Posting content or impersonating a person or organization in a way likely to deceive people. Parody and satire are fine, but make clear that is what you’re doing. Our Username Policy has specific requirements for parody accounts</li>
                        <li>Using Medium for phishing or fraud. Don’t use tags, links, titles, or other metadata in a misleading way. Don’t link to or embed malicious or harmful code or software in your posts</li>
                        <li>Using deception to generate revenue or traffic</li>
                        <li>If you have received free goods or services, or anything of value in connection with the topic of a post, you must make this clear.</li>
                    </ul>

                    <h3 className='mt-10 text-xl leading-8'>Ads, Promotions, and Marketing</h3>
                    <ul className="mt-10 pl-10 list-disc text-xl leading-8 font-serif space-y-4">
                        <li>First party promotion is allowed, and you may promote and link to your own business, website, mailing list, or fundraiser.</li>
                        <li>Third-party advertising and sponsorships are not allowed. You may not advertise or promote third-party products, services, or brands through Medium posts, publications, or newsletters. This includes images that indicate brand sponsorship in a post or newsletter, or as part of a publication name or logo.</li>
                        <li>Affiliate links, such as links out to Amazon with an affiliate code, or any other link out where you will receive a commission or other value, are allowed in posts. However, per Federal Trade Commission law, you must disclose the inclusion of these links in your post. This can be a simple sentence in the footer. (for further guidance, see FTC Rules and Guides).</li>
                    </ul>

                    <h3 className='mt-10 text-xl leading-8'>Embedded Content and Collection of Personal Information</h3>
                    <p className='mt-2 text-xl leading-8 font-serif'>To ensure the data privacy and security of our users, embedded content must comply with the following requirements. An “embed” includes a link, form, or a request for information or other content.</p>
                    <p className='mt-2 text-xl leading-8 font-serif'>Embeds directly collecting data through Medium form fields, comments or other onsite means are not allowed. This includes embeds that facilitate the submission of email addresses, credit card information or other personal information. If you want to collect information from your readers, you will need to follow these requirements:</p>
                    <ul className="mt-10 pl-10 list-disc text-xl leading-8 font-serif space-y-4">
                        <li>If you link out from your post on Medium to a form hosted elsewhere, that form must make it clear to a user that they are no longer in the Medium network and the information they disclose is subject to the third-party’s Terms of Use and Privacy Policy,</li>
                        <li>If the link directs users to your own platform to subscribe to your newsletter, blog or other content you create, then in your Medium content immediately next to the link you must disclose that the link will take the user offsite outside of Medium</li>
                        <li>If your content includes a form that sends user information to you or a third-party, immediately next to or within the form you must disclose that the form will send the user’s information to an offsite third-party outside of Medium that is subject to that offsite third-party’s Terms of Use and Privacy Policy, or offsite outside of Medium, to you directly.</li>
                    </ul>

                    <h3 className='mt-10 text-xl leading-8'>Paid, automatic, bulk, or non-genuine interactions</h3>
                    <p className='mt-3 text-xl leading-8 font-serif'>Medium depends on various user behaviors — like follows and claps — to determine what content to feature and make the site work well for everyone. We don’t allow artificial behaviors that skew this system and as a result degrade or distort other users’ experiences.</p>
                    <p className='mt-10 text-xl leading-8 font-serif'>This includes:</p>
                    <ul className="mt-10 pl-10 list-disc text-xl leading-8 font-serif space-y-4">
                        <li>Buying, selling, or trading in accounts or account interactions — including views, reads, follows, claps, highlights, responses, or other traffic</li>
                        <li>Using services, apps, or arrangements that offer you more views, reads, follows, claps, or other interactions on your Medium account or content</li>
                        <li>Registering accounts, posting content, or interacting with users or content automatically, systematically, or programmatically</li>
                    </ul>

                    <h3 className='mt-10 text-xl leading-8'>Cryptocurrency Accounts, Posts, and Publications</h3>
                    <p className='mt-2 text-xl leading-8 font-serif'>Posts and accounts that are focused on launching, announcing, or providing information on cryptocurrencies must meet the requirements listed in our Cryptocurrency Policy. Medium does not endorse or verify any coin, token, financial advice, or similar announcement.</p>
                    <div className="pb-2.5 pt-6 mb-4 mt-8 flex justify-center items-center gap-5">
                        <span className="w-[3px] h-[3px] bg-black rounded-full"></span>
                        <span className="w-[3px] h-[3px] bg-black rounded-full"></span>
                        <span className="w-[3px] h-[3px] bg-black rounded-full"></span>
                    </div>

                    <h3 className='mt-10 text-xl leading-8'>Prohibitions on Use of the Services</h3>
                    <p className='mt-4 text-xl leading-8 font-serif'>You agree not to do, try to do, or cause a third party to do any of the following, except without the express written consent of Medium:</p>
                    <p className='mt-10 text-xl leading-8 font-serif'>(1) access or tamper with non-public areas of the Services, our computer systems, or the systems of our technical providers;</p>
                    <p className='mt-10 text-xl leading-8 font-serif'>(2) access or search the Services by any means other than the currently available, published interfaces (e.g., APIs) that we provide;</p>
                    <p className='mt-10 text-xl leading-8 font-serif'>(3) forge any TCP/IP packet header or any part of the header information in any email or posting, or in any way use the Services to send altered, deceptive, or false source-identifying information;</p>
                    <p className='mt-10 text-xl leading-8 font-serif'>(4) use the Services in any manner that could disable, overburden, damage, or impair the Services, or interfere with any other use of the Services;</p>
                    <p className='mt-10 text-xl leading-8 font-serif'>(5) use any software, script, robot, spider or other automatic device, process or means (including crawlers, browser plugins and add-ons or any other technology) to access the Services for any purpose, including without limitation to scrape or otherwise copy any of the data or content on the Services;</p>
                    <p className='mt-10 text-xl leading-8 font-serif'>(6) use any manual process to monitor or copy any of the data or content on the Services, or to engage in any other unauthorized purpose;</p>
                    <p className='mt-10 text-xl leading-8 font-serif'>(7) otherwise use any device, software or routine that interferes with the proper working of the Services; or</p>
                    <p className='mt-10 text-xl leading-8 font-serif'>(8) otherwise attempt to interfere with the proper working of the Services.</p>
                    <h3 className="mt-10 text-xl leading-8">Use of custom domain features</h3>
                    <p className='mt-2 text-xl leading-8 font-serif'>Medium provides the ability to point a domain name that you control to a publication on Medium. If you use this custom domain feature, you understand that your publication will still be hosted on Medium and will still be subject to Medium’s Terms of Service. If you use this custom domain feature, you may not do, try to do, or cause a third party to do the following:</p>
                    <p className='mt-10 text-xl leading-8 font-serif'>(1) Alter the look and feel or transform the content of the webpage, including by injecting ads, inserting tracking code, or altering the Medium look or feel;</p>
                    <p className='mt-10 text-xl leading-8 font-serif'>(2) Use proxy servers or any other means to short-circuit our rules or circumvent user protections; or</p>
                    <p className='mt-10 text-xl leading-8 font-serif'>(3) Mislead users about what site they are on or what their actions will do.</p>
                    <p className='mt-10 text-xl leading-8 font-serif'>Your use of the custom domain feature must comply with our Privacy Policy. Please note that our rules around storing, transferring, and using user data are more user-protective than some other sites’. We do not sell user data or allow tracking of our users across the web. We expect you to uphold these same rules and policies in connection with operating your custom domain.</p>

                    <div className="pb-2.5 pt-6 mb-4 mt-8 flex justify-center items-center gap-5">
                        <span className="w-[3px] h-[3px] bg-black rounded-full"></span>
                        <span className="w-[3px] h-[3px] bg-black rounded-full"></span>
                        <span className="w-[3px] h-[3px] bg-black rounded-full"></span>
                    </div>

                    <h3 className='mt-10 text-xl leading-8'>How to report a violation</h3>
                    <p className='mt-2 text-xl leading-8 font-serif'>If you find a post or account on Medium that violates these rules, please report it in product. You can use this form to provide more detail or to report other conduct you believe violates our rules. Additionally, you can send us an email to trust@medium.com.</p>
                    <h3 className='mt-10 text-xl leading-8'>If you break the rules</h3>
                    <p className='mt-2 text-xl leading-8 font-serif'>We strive to be fair, but we reserve the right to suspend accounts or remove content, without notice, for any reason, particularly to protect our services, infrastructure, users, or community. If you attempt to evade suspension by creating new accounts or posts, we will suspend your new accounts and posts.</p>
                    <h3 className='mt-10 text-xl leading-8'>Notice</h3>
                    <p className='mt-2 text-xl leading-8 font-serif'>Upon investigating or disabling content associated with your account, we will notify you, unless we believe your account is automated or operating in bad faith, or that notifying you is likely to cause, maintain or exacerbate harm to someone.</p>
                    <h3 className='mt-10 text-xl leading-8'>Appeals</h3>
                    <p className='mt-2 text-xl leading-8 font-serif'>If you believe your content or account has been restricted or disabled in error, or believe there is relevant context we were not aware of in reaching our determination, you can write to us at trust@medium.com. We will consider all good faith efforts to appeal.</p>
                    <h3 className='mt-10 text-xl leading-8'>Government Takedown Requests</h3>
                    <p className='mt-2 text-xl leading-8 font-serif'>If Medium receives a request from a government actor to restrict access to content associated with your account, we will notify you unless we are prohibited by law or believe doing so may endanger others. Where applicable, we will work to limit legally-ordered content restrictions to jurisdictions where we have a good faith belief that we are legally required to restrict the content. Medium submits to the Lumen database government requests to restrict access to content (redacted where appropriate to protect privacy or prevent harm to a person).</p>

                    <div className="pb-2.5 pt-6 mb-4 mt-8 flex justify-center items-center gap-5">
                        <span className="w-[3px] h-[3px] bg-black rounded-full"></span>
                        <span className="w-[3px] h-[3px] bg-black rounded-full"></span>
                        <span className="w-[3px] h-[3px] bg-black rounded-full"></span>
                    </div>

                    <p className='mt-10 text-xl leading-8 font-serif'>We may enforce, or not enforce, these policies at our sole discretion. These policies don’t create a duty or contractual obligation for us to act.</p>
                    <p className='mt-10 text-xl leading-8 font-serif'>We also may change these rules at any time. We track changes to our rules on Github so you can see how they evolve.</p>
                    <p className='mt-10 text-xl leading-8 font-serif'>Medium is committed to providing a transparent, open platform for expression and therefore supports the goals and spirit of The Santa Clara Principles on Transparency and Accountability in Content Moderation as a starting point for further discussion.</p>
                    <div className="pb-2.5 pt-6 mb-4 mt-8 flex justify-center items-center gap-5">
                        <span className="w-[3px] h-[3px] bg-black rounded-full"></span>
                        <span className="w-[3px] h-[3px] bg-black rounded-full"></span>
                        <span className="w-[3px] h-[3px] bg-black rounded-full"></span>
                    </div>
                </div>

                <div className="max-w-[680px] px-4 mb-7 mt-12 mx-auto">
                    <div className="flex gap-2">
                        <a href="" className="py-2 px-4 text-sm rounded-full bg-gray-100/80 hover:bg-gray-100/90">Medium</a>
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
                            <h2 className="mt-4 mb-12 text-2xl leading-7">More from Jobs @ Medium and Jobs at Medium</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {stories.slice(0, 4).map(story => <ArticleCard key={story.id} story={story} />)}
                            </div>
                            <div className="pt-6 border-t border-input/10 flex gap-4 flex-wrap">
                                <Link href="" className="rounded-full px-4 py-2 border border-input text-sm">See all from jobs @ medium</Link>
                                <Link href="" className="rounded-full px-4 py-2 border border-input text-sm">See all from jobs at medium</Link>
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 pt-20 border-t border-input/10">
                        <div className="max-w-[680px] mx-auto px-4">
                            <h2 className="mt-4 mb-12 text-2xl leading-7">Recommended from Medium</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {stories.slice(0, 6).map(story => <ArticleCard key={story.id} story={story} />)}
                            </div>
                            <div className="pt-6 border-t border-input/10 gap-4 flex flex-wrap">
                                <Link href="" className="rounded-full px-4 py-2 border border-input text-sm">See all from jobs @ medium</Link>
                                <Link href="" className="rounded-full px-4 py-2 border border-input text-sm">See all from jobs at medium</Link>
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