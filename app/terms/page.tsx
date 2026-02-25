"use client";
import { Header } from '@/components/Header'
import { Button } from '@/components/ui/button'
import { stories, formatDate, formatNumber, Story, Author } from "@/app/lib/mock-data"
import ArticleCard from "@/components/ArticleCard";
import Link from "next/link";
import { useState } from 'react';
import Footer from '@/components/Footer';
import { Layout } from '@/components/Layout';
const page = () => {

    const footerLinks = [
        { text: "Help Center", href: "/help" },
        { text: "Status", href: "/status" },
        { text: "About", href: "/about" },
        { text: "Careers", href: "/careers" },
        { text: "Press", href: "/press" },
        { text: "Blog", href: "/blog" },
        { text: "Privacy", href: "/privacy" },
        { text: "Policy", href: "/policy" },
        { text: "Terms", href: "/terms" },
        { text: "Text to speech", href: "/text-to-speech" }
    ];

    const [subscribe, setSubscribe] = useState('');
    const [sidebarOpen, setSidebarOpen] = useState(false);

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
                    <h1 className='sm:text-[42px] text-3xl mt-10 tracking-tight mb-3'>Prismio Terms of Service</h1>
                    <p className='text-muted-foreground text-xl mb-8'>Effective: September 1, 2020</p>

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

                    <p className='mt-10 text-xl leading-8 font-serif'><em>You can see our previous Terms here.</em></p>
                    <p className='mt-10 text-xl leading-8 font-serif'>Thanks for using Medium. Our mission is to deepen people’s understanding of the world and spread ideas that matter.</p>
                    <p className='mt-10 text-xl leading-8 font-serif'>These Terms of Service (“Terms”) apply to your access to and use of the websites, mobile applications and other online products and services (collectively, the “Services”) provided by A Medium Corporation (“Medium” or “we”). By clicking your consent (e.g. “Continue,” “Sign-in,” or “Sign-up,”) or by using our Services, you agree to these Terms, including the mandatory arbitration provision and class action waiver in the Resolving Disputes; Binding Arbitration Section.</p>
                    <p className='mt-6 text-xl leading-8 font-serif'>Our <Link href="/privacy" className='underline'>Privacy Policy</Link> explains how we collect and use your information while our <Link href="/rules" className='underline'>Rules</Link> outline your responsibilities when using our Services. By using our Services, you’re agreeing to be bound by these Terms and our Rules. Please see our Privacy Policy for information about how we collect, use, share and otherwise process information about you.</p>
                    <p className='mt-6 text-xl leading-8 font-serif'>If you have any questions about these Terms or our Services, please contact us at <Link href="mailto:legal@prismio.com" className='underline'>legal@prismio.com</Link>.</p>

                    <div className="pb-2.5 pt-6 mb-4 mt-8 flex justify-center items-center gap-5">
                        <span className="w-[3px] h-[3px] bg-black rounded-full"></span>
                        <span className="w-[3px] h-[3px] bg-black rounded-full"></span>
                        <span className="w-[3px] h-[3px] bg-black rounded-full"></span>
                    </div>

                    <h3 className='text-xl mt-10 leading-7'>Your Account and Responsibilities</h3>
                    <p className='mt-6 text-xl leading-8 font-serif'>You’re responsible for your use of the Services and any content you provide, including compliance with applicable laws. Content on the Services may be protected by others’ intellectual property rights. Please don’t copy, upload, download, or share content unless you have the right to do so.</p>
                    <p className='mt-10 text-xl leading-8 font-serif'>Your use of the Services must comply with our Rules.</p>
                    <p className='mt-10 text-xl leading-8 font-serif'>You may need to register for an account to access some or all of our Services. Help us keep your account protected. Safeguard your password to the account, and keep your account information current. We recommend that you do not share your password with others.</p>
                    <p className='mt-10 text-xl leading-8 font-serif'>If you’re accepting these Terms and using the Services on behalf of someone else (such as another person or entity), you represent that you’re authorized to do so, and in that case the words “you” or “your” in these Terms include that other person or entity.</p>
                    <p className='mt-10 text-xl leading-8 font-serif'>To use our Services, you must be at least 13 years old.</p>
                    <p className='mt-10 text-xl leading-8 font-serif'>If you use the Services to access, collect, or use personal information about other Medium users (“Personal Information”), you agree to do so in compliance with applicable laws. You further agree not to sell any Personal Information, where the term “sell” has the meaning given to it under applicable laws.</p>
                    <p className='mt-10 text-xl leading-8 font-serif'>For Personal Information you provide to us (e.g. as a Newsletter Editor), you represent and warrant that you have lawfully collected the Personal Information and that you or a third party has provided all required notices and collected all required consents before collecting the Personal Information. You further represent and warrant that Medium’s use of such Personal Information in accordance with the purposes for which you provided us the Personal Information will not violate, misappropriate or infringe any rights of another (including intellectual property rights or privacy rights) and will not cause us to violate any applicable laws.</p>


                    <h3 className='text-xl mt-10 leading-7'>User Content on the Services</h3>
                    <p className='mt-3 text-xl leading-8 font-serif'>Medium may review your conduct and content for compliance with these Terms and our Rules, and reserves the right to remove any violating content.</p>
                    <p className='mt-10 text-xl leading-8 font-serif'>Medium reserves the right to delete or disable content alleged to be infringing the intellectual property rights of others, and to terminate accounts of repeat infringers. We respond to notices of alleged copyright infringement if they comply with the law; please report such notices using our Copyright Policy.</p>
                    <h3 className='text-xl mt-10 leading-7'>Rights and Ownership</h3>
                    <p className='mt-3 text-xl leading-8 font-serif'>You retain your rights to any content you submit, post or display on or through the Services. </p>
                    <p className='mt-10 text-xl leading-8 font-serif'>Unless otherwise agreed in writing, by submitting, posting, or displaying content on or through the Services, you grant Medium a nonexclusive, royalty-free, worldwide, fully paid, and sublicensable license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, publicly perform and display your content and any name, username or likeness provided in connection with your content in all media formats and distribution methods now known or later developed on the Services.</p>
                    <p className='mt-10 text-xl leading-8 font-serif'>Medium needs this license because you own your content and Medium therefore can’t display it across its various surfaces (i.e., mobile, web) without your permission.</p>
                    <p className='mt-10 text-xl leading-8 font-serif'>This type of license also is needed to distribute your content across our Services. For example, you post a story on Medium. It is reproduced as versions on both our website and app, and distributed to multiple places within Medium, such as the homepage or reading lists. A modification might be that we show a snippet of your work (and not the full post) in a preview, with attribution to you. A derivative work might be a list of top authors or quotes on Medium that uses portions of your content, again with full attribution. This license applies to our Services only, and does not grant us any permissions outside of our Services.</p>
                    <p className='mt-10 text-xl leading-8 font-serif'>So long as you comply with these Terms, Medium gives you a limited, personal, non-exclusive, and non-assignable license to access and use our Services.</p>
                    <p className='mt-10 text-xl leading-8 font-serif'>The Services are protected by copyright, trademark, and other US and foreign laws. These Terms don’t grant you any right, title or interest in the Services, other users’ content on the Services, or Medium trademarks, logos or other brand features.</p>
                    <p className='mt-10 text-xl leading-8 font-serif'>Separate and apart from the content you submit, post or display on our Services, we welcome feedback, including any comments, ideas and suggestions you have about our Services. We may use this feedback for any purpose, in our sole discretion, without any obligation to you. We may treat feedback as nonconfidential.</p>

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

                    <p className='mt-10 text-xl leading-8 font-serif'>We may stop providing the Services or any of its features within our sole discretion. We also retain the right to create limits on use and storage and may remove or limit content distribution on the Services.</p>
                    <h3 className='text-xl mt-10 leading-7'>Termination</h3>
                    <p className='mt-3 text-xl leading-8 font-serif'>You’re free to stop using our Services at any time. We reserve the right to suspend or terminate your access to the Services with or without notice.</p>
                    <h3 className='text-xl mt-10 leading-7'>Transfer and Processing Data</h3>
                    <p className='mt-3 text-xl leading-8 font-serif'>In order for us to provide our Services, you agree that we may process, transfer and store information about you in the US and other countries, where you may not have the same rights and protections as you do under local law.</p>
                    <h3 className='text-xl mt-10 leading-7'>Indemnification</h3>
                    <p className='mt-3 text-xl leading-8 font-serif'>To the fullest extent permitted by applicable law, you will indemnify, defend and hold harmless Medium, and our officers, directors, agents, partners and employees (individually and collectively, the “Medium Parties”) from and against any losses, liabilities, claims, demands, damages, expenses or costs (“Claims”) arising out of or related to your violation, misappropriation or infringement of any rights of another (including intellectual property rights or privacy rights) or your violation of the law. You agree to promptly notify Medium Parties of any third-party Claims, cooperate with Medium Parties in defending such Claims and pay all fees, costs and expenses associated with defending such Claims (including attorneys’ fees). You also agree that the Medium Parties will have control of the defense or settlement, at Medium’s sole option, of any third-party Claims.</p>
                    <h3 className='text-xl mt-10 leading-7'>Disclaimers — Service is “As Is”</h3>
                    <p className='mt-3 text-xl leading-8 font-serif'>Medium aims to give you great Services but there are some things we can’t guarantee. Your use of our Services is at your sole risk. You understand that our Services and any content posted or shared by users on the Services are provided “as is” and “as available” without warranties of any kind, either express or implied, including implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement. In addition, Medium doesn’t represent or warrant that our Services are accurate, complete, reliable, current or error-free. No advice or information obtained from Medium or through the Services will create any warranty or representation not expressly made in this paragraph. Medium may provide information about third-party products, services, activities or events, or we may allow third parties to make their content and information available on or through our Services (collectively, “Third-Party Content”). We do not control or endorse, and we make no representations or warranties regarding, any Third-Party Content. You access and use Third-Party Content at your own risk. Some locations don’t allow the disclaimers in this paragraph and so they might not apply to you.</p>
                    <h3 className='text-xl mt-10 leading-7'>Limitation of Liability</h3>
                    <p className='mt-3 text-xl leading-8 font-serif'>We don’t exclude or limit our liability to you where it would be illegal to do so; this includes any liability for the gross negligence, fraud or intentional misconduct of Medium or the other Medium Parties in providing the Services. In countries where the following types of exclusions aren’t allowed, we’re responsible to you only for losses and damages that are a reasonably foreseeable result of our failure to use reasonable care and skill or our breach of our contract with you. This paragraph doesn’t affect consumer rights that can’t be waived or limited by any contract or agreement.</p>
                    <p className='mt-10 text-xl leading-8 font-serif'>In countries where exclusions or limitations of liability are allowed, Medium and Medium Parties won’t be liable for:</p>
                    <p className='mt-10 text-xl leading-8 font-serif'>(a) Any indirect, consequential, exemplary, incidental, punitive, or special damages, or any loss of use, data or profits, under any legal theory, even if Medium or the other Medium Parties have been advised of the possibility of such damages.</p>
                    <p className='mt-10 text-xl leading-8 font-serif'>(b) Other than for the types of liability we can’t limit by law (as described in this section), we limit the total liability of Medium and the other Medium Parties for any claim arising out of or relating to these Terms or our Services, regardless of the form of the action, to the greater of $50.00 USD or the amount paid by you to use our Services.</p>
                    <h3 className='text-xl mt-10 leading-7'>Resolving Disputes; Binding Arbitration</h3>
                    <p className='mt-3 text-xl leading-8 font-serif'>We want to address your concerns without needing a formal legal case. Before filing a claim against Medium, you agree to contact us and attempt to resolve the claim informally by sending a written notice of your claim by email at legal@medium.com or by certified mail addressed to A Medium Corporation, 3500 South DuPont Highway Suite IQ-101 Dover, DE 19901. The notice must (a) include your name, residence address, email address, and telephone number; (b) describe the nature and basis of the claim; and (c) set forth the specific relief sought. Our notice to you will be sent to the email address associated with your online account and will contain the information described above. If we can’t resolve matters within thirty (30) days after any notice is sent, either party may initiate a formal proceeding.</p>
                    <p className='mt-10 text-xl leading-8 font-serif'>Please read the following section carefully because it requires you to arbitrate certain disputes and claims with Medium and limits the manner in which you can seek relief from us, unless you opt out of arbitration by following the instructions set forth below. No class or representative actions or arbitrations are allowed under this arbitration provision. In addition, arbitration precludes you from suing in court or having a jury trial.</p>
                    <p className='mt-10 text-xl leading-8 font-serif'>(a) No Representative Actions. You and Medium agree that any dispute arising out of or related to these Terms or our Services is personal to you and Medium and that any dispute will be resolved solely through individual action, and will not be brought as a class arbitration, class action or any other type of representative proceeding.</p>
                    <p className='mt-10 text-xl leading-8 font-serif'>(b) Arbitration of Disputes. Except for small claims disputes in which you or Medium seeks to bring an individual action in small claims court located in the county where you reside or disputes in which you or Medium seeks injunctive or other equitable relief for the alleged infringement or misappropriation of intellectual property, you and Medium waive your rights to a jury trial and to have any other dispute arising out of or related to these Terms or our Services, including claims related to privacy and data security, (collectively, “Disputes”) resolved in court. All Disputes submitted to JAMS will be resolved through confidential, binding arbitration before one arbitrator. Arbitration proceedings will be held in San Francisco, California unless you’re a consumer, in which case you may elect to hold the arbitration in your county of residence. For purposes of this section a “consumer” means a person using the Services for personal, family or household purposes. You and Medium agree that Disputes will be held in accordance with the JAMS Streamlined Arbitration Rules and Procedures (“JAMS Rules”). The most recent version of the JAMS Rules are available on the JAMS website and are incorporated into these Terms by reference. You either acknowledge and agree that you have read and understand the JAMS Rules or waive your opportunity to read the JAMS Rules and waive any claim that the JAMS Rules are unfair or should not apply for any reason.</p>
                    <p className='mt-10 text-xl leading-8 font-serif'>(c) You and Medium agree that these Terms affect interstate commerce and that the enforceability of this section will be substantively and procedurally governed by the Federal Arbitration Act, 9 U.S.C. § 1, et seq. (the “FAA”), to the maximum extent permitted by applicable law. As limited by the FAA, these Terms and the JAMS Rules, the arbitrator will have exclusive authority to make all procedural and substantive decisions regarding any Dispute and to grant any remedy that would otherwise be available in court, including the power to determine the question of arbitrability. The arbitrator may conduct only an individual arbitration and may not consolidate more than one individual’s claims, preside over any type of class or representative proceeding or preside over any proceeding involving more than one individual.</p>
                    <p className='mt-10 text-xl leading-8 font-serif'>(d) The arbitration will allow for the discovery or exchange of non-privileged information relevant to the Dispute. The arbitrator, Medium, and you will maintain the confidentiality of any arbitration proceedings, judgments and awards, including information gathered, prepared and presented for purposes of the arbitration or related to the Dispute(s) therein. The arbitrator will have the authority to make appropriate rulings to safeguard confidentiality, unless the law provides to the contrary. The duty of confidentiality doesn’t apply to the extent that disclosure is necessary to prepare for or conduct the arbitration hearing on the merits, in connection with a court application for a preliminary remedy, or in connection with a judicial challenge to an arbitration award or its enforcement, or to the extent that disclosure is otherwise required by law or judicial decision.</p>
                    <p className='mt-10 text-xl leading-8 font-serif'>(e) You and Medium agree that for any arbitration you initiate, you will pay the filing fee (up to a maximum of $250 if you are a consumer), and Medium will pay the remaining JAMS fees and costs. For any arbitration initiated by Medium, Medium will pay all JAMS fees and costs. You and Medium agree that the state or federal courts of the State of California and the United States sitting in San Francisco, California have exclusive jurisdiction over any appeals and the enforcement of an arbitration award.</p>
                    <p className='mt-10 text-xl leading-8 font-serif'>(f) Any Dispute must be filed within one year after the relevant claim arose; otherwise, the Dispute is permanently barred, which means that you and Medium will not have the right to assert the claim.</p>
                    <p className='mt-10 text-xl leading-8 font-serif'>(g) You have the right to opt out of binding arbitration within 30 days of the date you first accepted the terms of this section by sending an email of your request to trust@medium.com. In order to be effective, the opt-out notice must include your full name and address and clearly indicate your intent to opt out of binding arbitration. By opting out of binding arbitration, you are agreeing to resolve Disputes in accordance with the next section regarding “Governing Law and Venue.”</p>
                    <p className='mt-10 text-xl leading-8 font-serif'>(h) If any portion of this section is found to be unenforceable or unlawful for any reason, (1) the unenforceable or unlawful provision shall be severed from these Terms; (2) severance of the unenforceable or unlawful provision shall have no impact whatsoever on the remainder of this section or the parties’ ability to compel arbitration of any remaining claims on an individual basis pursuant to this section; and (3) to the extent that any claims must therefore proceed on a class, collective, consolidated, or representative basis, such claims must be litigated in a civil court of competent jurisdiction and not in arbitration, and the parties agree that litigation of those claims shall be stayed pending the outcome of any individual claims in arbitration. Further, if any part of this section is found to prohibit an individual claim seeking public injunctive relief, that provision will have no effect to the extent such relief is allowed to be sought out of arbitration, and the remainder of this section will be enforceable.</p>
                    <h3 className='text-xl mt-10 leading-7'>Governing Law and Venue</h3>
                    <p className='mt-13 text-xl leading-8 font-serif'>These Terms and any dispute that arises between you and Medium will be governed by California law except for its conflict of law principles. Any dispute between the parties that’s not subject to arbitration or can’t be heard in small claims court will be resolved in the state or federal courts of California and the United States, respectively, sitting in San Francisco, California.</p>
                    <p className='mt-10 text-xl leading-8 font-serif'>Some countries have laws that require agreements to be governed by the local laws of the consumer’s country. This paragraph doesn’t override those laws.</p>
                    <h3 className='text-xl mt-10 leading-7'>Amendments</h3>
                    <p className='mt-3 text-xl leading-8 font-serif'>We may make changes to these Terms from time to time. If we make changes, we’ll provide you with notice of them by sending an email to the email address associated with your account, offering an in-product notification, or updating the date at the top of these Terms. Unless we say otherwise in our notice, the amended Terms will be effective immediately, and your continued use of our Services after we provide such notice will confirm your acceptance of the changes. If you don’t agree to the amended Terms, you must stop using our Services.</p>
                    <h3 className='text-xl mt-10 leading-7'>Severability</h3>
                    <p className='mt-3 text-xl leading-8 font-serif'>If any provision or part of a provision of these Terms is unlawful, void or unenforceable, that provision or part of the provision is deemed severable from these Terms and does not affect the validity and enforceability of any remaining provisions.</p>
                    <h3 className='text-xl mt-10 leading-7'>Miscellaneous</h3>
                    <p className='mt-3 text-xl leading-8 font-serif'>Medium’s failure to exercise or enforce any right or provision of these Terms will not operate as a waiver of such right or provision. These Terms, and the terms and policies listed in the Other Terms and Policies that May Apply to You Section, reflect the entire agreement between the parties relating to the subject matter hereof and supersede all prior agreements, statements and understandings of the parties. The section titles in these Terms are for convenience only and have no legal or contractual effect. Use of the word “including” will be interpreted to mean “including without limitation.” Except as otherwise provided herein, these Terms are intended solely for the benefit of the parties and are not intended to confer third-party beneficiary rights upon any other person or entity. You agree that communications and transactions between us may be conducted electronically.</p>
                    <h3 className='text-xl mt-10 leading-7'>Other Terms and Policies that May Apply to You</h3>
                    <ul className="mt-10 text-xl leading-8 font-serif">
                        <li><Link href="">- Prismio Rules</Link></li>
                        <li><Link href="">- Partner Program Terms</Link></li>
                        <li><Link href="">- Membership Terms of Service</Link></li>
                        <li><Link href="">- Username Policy</Link></li>
                        <li><Link href="">- Amendment to Medium Terms of Service Applicable to U.S. Government Users</Link></li>
                    </ul>
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