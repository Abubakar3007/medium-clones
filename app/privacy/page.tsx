import { Header } from '@/components/Header'
import { Button } from '@/components/ui/button'
import { stories, formatDate, formatNumber, Story, Author } from "@/app/lib/mock-data"
import ArticleCard from "@/components/ArticleCard";
import Link from "next/link";
import Footer from '@/components/Footer';
import { Layout } from '@/components/Layout';
const page = () => {

    return (
        <Layout>
            <>
                <div className="border-b border-input/10 py-4">
                    <div className="max-w-[1192px] w-full m-auto xl:px-0 sm:px-12 px-6">
                        <a href="" className="text-xl leding-6 font-bold">
                            Prismio Policy
                        </a>
                    </div>
                </div>

                <div className="max-w-[680px] w-full px-6 mx-auto">
                    <h1 className='sm:text-[42px] text-3xl mt-10 tracking-tight'>
                        Prismio Privacy Policy
                    </h1>
                    <h2 className="sm:text-[22px] text-xl leading-7 mt-4 mb-8 text-muted-foreground">Effective date: March 24, 2022</h2>

                    <div>
                        <div className="flex items-center gap-4 mb-8 animate-fade-in flex-wrap">
                            <span className="relative flex shrink-0 overflow-hidden rounded-full h-11 w-11">
                                <img className="aspect-square h-full w-full" src="https://i.pravatar.cc/150?img=1" />
                            </span>
                            <a className="text-sm font-medium hover:underline" href="/profile/1">Sarah Chen</a>
                            <button className="text-sm border border-foreground/20 rounded-3xl py-1.5 px-3">Follow</button>
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
                            </div>
                        </div>
                    </div>
                    <p className='mt-10 text-xl leading-8'>
                        <strong>
                            <em>You can see our previous Privacy Policy </em>
                        </strong>
                        <a href="" target="_blank">
                            <strong>
                                <em>here</em>
                            </strong>
                        </a>
                        <strong>
                            <em>.</em>
                        </strong>
                    </p>

                    <p className='mt-10 text-xl leading-8 font-serif'>This Privacy Policy explains how A Prismio Corporation ( <em>“</em>
                        <strong>
                            <em>Prismio</em>
                        </strong>
                        <em>,”</em>
                        <em>“</em>
                        <strong>
                            <em>we</em>
                        </strong>
                        <em>,”</em> or <em>“</em>
                        <strong>
                            <em>us</em>
                        </strong>
                        <em>”</em>) collects, uses, and discloses information about you. This Privacy Policy applies when you use our websites, mobile applications, and other online products and services that link to this Privacy Policy (collectively, our <em>“</em>
                        <strong>
                            <em>Services</em>
                        </strong>”), contact our customer service team, engage with us on social media, or otherwise interact with us.
                    </p>

                    <p className='mt-10 text-xl leading-8 font-serif'>We may change this Privacy Policy from time to time. If we make changes, we will notify you by revising the date at the top of this policy and, in some cases, we may provide you with additional notice (such as adding a statement to our website or providing you with a notification). We encourage you to review this Privacy Policy regularly to stay informed about our information practices and the choices available to you.</p>
                    <h2 className='mt-10 text-2xl leading-8'>CONTENTS</h2>
                    <ul className="mt-2 pl-10 list-disc text-xl leading-8 font-serif space-y-4">
                        <li>Collection of Information</li>
                        <li>Use of Information</li>
                        <li>Sharing of Information</li>
                        <li>Third-Party Embeds</li>
                        <li>Transfer of Information to the United States and Other Countries</li>
                        <li>Your Choices</li>
                        <li>Your California Privacy Rights</li>
                        <li>Additional Disclosures for Individuals in Europe</li>
                        <li>Contact Us</li>
                    </ul>
                    <h3 className='text-xl mt-6 leading-7'>COLLECTION OF INFORMATION</h3>
                    <h3 className='text-xl mt-6 leading-7'>Information You Provide to Us</h3>
                    <p className='mt-6 text-xl leading-8 font-serif'>We collect information you provide directly to us. For example, you share information directly with us when you create an account, fill out a form, submit or post content through our Services, purchase a membership, communicate with us via third-party platforms, request customer support, or otherwise communicate with us. The types of personal information we may collect include your name, display name, username, bio, email address, business information, your content, including your avatar image, photos, posts, responses, and series published by you, and any other information you choose to provide.</p>
                    <p className='mt-6 text-xl leading-8 font-serif'>In some cases, we may also collect information you provide about others, such as when you purchase a Prismio membership as a gift for someone. We will use this information to fulfill your request and will not send communications to your contacts unrelated to your request, unless they separately consent to receive communications from us or otherwise engage with us.</p>
                    <p className='mt-6 text-xl leading-8 font-serif'>We do not collect payment information through our Services. We rely on third parties to process payments in connection with our Services. Any information you provide to facilitate such a payment is subject to the third-party payment processor’s privacy policy, and we encourage you to review this policy before you provide any information to the payment processor.</p>
                    <h3 className='text-xl mt-6 leading-7'>Information We Collect Automatically When You Interact with Us</h3>
                    <p className='mt-6 text-xl leading-8 font-serif'>In some instances, we automatically collect certain information, including:</p>
                    <ul className="mt-10 pl-10 list-disc text-xl leading-8 font-serif space-y-4">
                        <li>
                            <strong>Activity Information:</strong> We collect information about your activity on our Services, such as your reading history and when you share links, follow users, highlight posts, and clap for posts.
                        </li>
                        <li>
                            <strong>Transactional Information:</strong> When you purchase a membership, we collect information about the transaction, such as subscription details, purchase price, and the date of the transaction.
                        </li>
                        <li>
                            <strong>Device and Usage Information:</strong> We collect information about how you access our Services, including data about the device and network you use, such as your hardware model, operating system version, mobile network, IP address, unique device identifiers, browser type, and app version. We also collect information about your activity on our Services, such as access times, pages viewed, links clicked, and the page you visited before navigating to our Services.
                        </li>
                        <li>
                            <strong>Information Collected by Cookies and Similar Tracking Technologies:</strong> We use tracking technologies, such as cookies and web beacons, to collect information about you. Cookies are small data files stored on your hard drive or in device memory that help us improve our Services and your experience, see which areas and features of our Services are popular, and count visits. Web beacons (also known as “pixel tags” or “clear GIFs”) are electronic images that we use on our Services and in our emails to help deliver cookies, count visits, and understand usage. We also work with third party analytics providers who use cookies, web beacons, device identifiers, and other technologies to collect information about your use of our Services and other websites and applications, including your IP address, web browser, mobile network information, pages viewed, time spent on pages or in mobile apps, and links clicked. This information may be used by Prismio and others to, among other things, analyze and track data, determine the popularity of certain content, deliver content targeted to your interests on our Services, and better understand your online activity. For more information about cookies and how to disable them, see Your Choices below.
                        </li>
                    </ul>
                    <h3 className='text-xl mt-6 leading-7'>Information We Collect from Other Sources</h3>
                    <p className='mt-6 text-xl leading-8 font-serif'>We obtain information from third-party sources. For example, we may collect information about you from social networks, accounting services providers and data analytics providers. Additionally, if you create or log into your Prismio account through a third-party platform (such as Apple, Facebook, Google, or Twitter), we will have access to certain information from that platform, such as your name, lists of friends or followers, birthday, and profile picture, in accordance with the authorization procedures determined by such platform.</p>
                    <h3 className='text-xl mt-6 leading-7'>Information We Derive</h3>
                    <p className='mt-6 text-xl leading-8 font-serif'>We may derive information or draw inferences about you based on the information we collect. For example, we may make inferences about your location based on your IP address or infer reading preferences based on your reading history.</p>
                    <h3 className='text-xl mt-6 leading-7'>USE OF INFORMATION</h3>
                    <p className='mt-6 text-xl leading-8 font-serif'>We use the information we collect to provide, maintain, and improve our Services, which includes publishing and distributing user-generated content, personalizing the posts you see and operating our metered paywall. We also use the information we collect to:</p>

                    <ul className="mt-10 pl-10 list-disc text-xl leading-8 font-serif space-y-4">
                        <li>Create and maintain your Prismio account;</li>
                        <li>Process transactions and send related information, such as confirmations, receipts, and user experience surveys;</li>
                        <li>Send you technical notices, security alerts, and support and administrative messages;</li>
                        <li>Respond to your comments and questions and provide customer service;</li>
                        <li>Communicate with you about new content, products, services, and features offered by Prismio and provide other news and information we think will interest you (see Your Choices below for information about how to opt out of these communications at any time);</li>
                        <li>Monitor and analyze trends, usage, and activities in connection with our Services;</li>
                        <li>Detect, investigate, and prevent security incidents and other malicious, deceptive, fraudulent, or illegal activity and protect the rights and property of Prismio and others;</li>
                        <li>Debug to identify and repair errors in our Services;</li>
                        <li>Comply with our legal and financial obligations; and</li>
                        <li>Carry out any other purpose described to you at the time the information was collected.</li>
                    </ul>

                    <h3 className='text-xl mt-6 leading-7'>SHARING OF INFORMATION</h3>
                    <p className='mt-6 text-xl leading-8 font-serif'>We share personal information in the following circumstances or as otherwise described in this policy:</p>
                    <ul className="mt-10 pl-10 list-disc text-xl leading-8 font-serif space-y-4">
                        <li>We share personal information with other users of the Services. For example, if you use our Services to publish content, post comments or send private notes, certain information about you will be visible to others, such as your name, photo, bio, other account information you may provide, and information about your activities on our Services (e.g., your followers and who you follow, recent posts, claps, highlights, and responses).</li>
                        <li>We share personal information with vendors, service providers, and consultants that need access to personal information in order to perform services for us, such as companies that assist us with web hosting, storage, and other infrastructure, analytics, payment processing, fraud prevention and security, customer service, communications, and marketing.</li>
                        <li>We may disclose personal information if we believe that disclosure is in accordance with, or required by, any applicable law or legal process, including lawful requests by public authorities to meet national security or law enforcement requirements. If we are going to disclose your personal information in response to legal process, we will give you notice so you can challenge it (for example by seeking court intervention), unless we are prohibited by law or believe doing so may endanger others or cause illegal conduct. We will object to legal requests for information about users of our Services that we believe are improper.</li>
                        <li>We may share personal information if we believe that your actions are inconsistent with our <a href="https://policy.medium.com/">user agreements or policies</a>, if we believe that you have violated the law, or if we believe it is necessary to protect the rights, property, and safety of Prismio, our users, the public, or others. </li>
                        <li>We share personal information with our lawyers and other professional advisors where necessary to obtain advice or otherwise protect and manage our business interests.</li>
                        <li>We may share personal information in connection with, or during negotiations concerning, any merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company.</li>
                        <li>Personal information is shared between and among Prismio and our current and future parents, affiliates, and subsidiaries and other companies under common control and ownership.</li>
                        <li>We share personal information with your consent or at your direction.</li>
                        <li>We also share aggregated or de-identified information that cannot reasonably be used to identify you.</li>
                    </ul>

                    <h3 className='mt-6 text-xl leading-8 font-serif'>THIRD-PARTY EMBEDS</h3>
                    <p className='mt-6 text-xl leading-8 font-serif'>Prismio does not host some of the content displayed on our Services. Users have the ability to post content that is actually hosted by a third party, but is embedded in our pages (an <em>“</em>
                        <strong>
                            <em>Embed</em>
                        </strong>
                        <em>”</em>). When you interact with an Embed, it can send information about your interaction to the hosting third party just as if you were visiting the third party’s site directly. For example, when you load a Prismio post page with a YouTube video Embed and watch the video, YouTube receives information about your activity, such as your IP address and how much of the video you watch. Prismio does not control what information third parties collect through Embeds or what they do with the information. This Privacy Policy does not apply to information collected through Embeds. The privacy policy belonging to the third party hosting the Embed applies to any information the Embed collects, and we recommend you review that policy before interacting with the Embed.
                    </p>
                    <h3 className='mt-6 text-xl leading-8'>TRANSFER OF INFORMATION TO THE UNITED STATES AND OTHER COUNTRIES</h3>
                    <p className='mt-6 text-xl leading-8 font-serif'>Prismio is headquartered in the United States, and we have operations and service providers in the United States and other countries. Therefore, we and our service providers may transfer your personal information to, or store or access it in, jurisdictions that may not provide levels of data protection that are equivalent to those of your home jurisdiction. For example, we transfer personal data to Amazon Web Services, one of our service providers that processes personal information for us in various data center locations across the globe, including those listed <a href="https://aws.amazon.com/about-aws/global-infrastructure/" rel="noopener ugc nofollow" target="_blank">here</a>. We will take steps to ensure that your personal information receives an adequate level of protection in the jurisdictions in which we process it. </p>
                    <h3 className='mt-6 text-xl leading-8'>YOUR CHOICES</h3>
                    <h3 className='mt-6 text-xl leading-8'>Account Information</h3>
                    <p className='mt-6 text-xl leading-8 font-serif'>You may access, correct, delete and export your account information at any time by logging into the Services and navigating to the <a href="https://medium.com/me/settings" rel="noopener"> Settings page</a>. Please note that if you choose to delete your account, we may continue to retain certain information about you as required by law or for our legitimate business purposes. </p>
                    <h3 className='mt-6 text-xl leading-8'>Cookies</h3>
                    <p className='mt-6 text-xl leading-8 font-serif'>Most web browsers are set to accept cookies by default. If you prefer, you can usually adjust your browser settings to remove or reject browser cookies. Please note that removing or rejecting cookies could affect the availability and functionality of our Services.</p>
                    <h3 className='mt-6 text-xl leading-8'>Communications Preferences</h3>
                    <p className='mt-6 text-xl leading-8 font-serif'>You may opt out of receiving certain communications from us, such as digests, newsletters, and activity notifications, by following the instructions in those communications or through your account’s <a href="https://medium.com/me/settings" rel="noopener">Settings page</a>. If you opt out, we may still send you administrative emails, such as those about your account or our ongoing business relations. </p>
                    <h3 className='mt-6 text-xl leading-8'>Mobile Push Notifications</h3>
                    <p className='mt-6 text-xl leading-8 font-serif'>With your consent, we may send push notifications to your mobile device. You can deactivate these messages at any time by changing the notification settings on your mobile device.</p>
                    <h3 className='mt-6 text-xl leading-8'>YOUR CALIFORNIA PRIVACY RIGHTS</h3>
                    <p className='mt-6 text-xl leading-8 font-serif'>The California Consumer Privacy Act or <em>“</em>
                        <strong>
                            <em>CCPA</em>
                        </strong>
                        <em>”</em> (Cal. Civ. Code § 1798.100 et seq.) affords consumers residing in California certain rights with respect to their personal information. If you are a California resident, this section applies to you.
                    </p>
                    <div className="p-6 mt-6 border-t border-input/10 border-b">
                        <h4 className="text-center mb-3 text-lg leading-5 font-serif">Get Jobs @ Prismio’s stories in&nbsp;your&nbsp;inbox</h4>
                        <p className="text-sm mb-4 text-muted-foreground text-center">Join Prismio for free to get updates from&nbsp;this&nbsp;writer.</p>
                        <div className="flex justify-center sm:flex-row flex-col sm:gap-0 gap-2 items-center">
                            <input placeholder="Enter your email" type="text" value="" className="max-w-[280px] w-full py-2 px-4 rounded-sm bg-gray-100 outline-none" />
                            <Button variant="default" className="rounded-[4px]">Subscribe</Button>
                        </div>
                    </div>
                    <p className='mt-6 text-xl leading-8 font-serif'>In the preceding 12 months, we have collected the following categories of personal information: identifiers, commercial information, internet or other electronic network activity information, and inferences. For details about the precise data points we collect and the categories of sources of such collection, please see the Collection of Information section above. We collect personal information for the business and commercial purposes described in the Use of Information section above. In the preceding 12 months, we have disclosed the following categories of personal information for business purposes to the following categories of recipients:</p>
                    <figure className="mt-10">
                        <picture>
                            <img width="646" height="434" loading="eager" role="presentation" src="https://miro.medium.com/v2/resize:fit:808/0*b9fTh2C5b0m9HrZm" />
                        </picture>
                    </figure>
                    <p className='mt-10 text-xl leading-8 font-serif'>
                        <a href="https://medium.com/@Medium/categories-of-personal-information-917cda14ca49" rel="noopener" className='underline'>Link to a text version of this table</a>
                    </p>
                    <p className='mt-10 text-xl leading-8 font-serif'>Prismio does not sell your personal information.</p>
                    <p className='mt-10 text-xl leading-8 font-serif'>Subject to certain limitations, you have the right to (1) request to know more about the categories and specific pieces of personal information we collect, use, and disclose about you, (2) request deletion of your personal information, (3) opt out of any sales of your personal information, if we engage in that activity in the future, and (4) not be discriminated against for exercising these rights. You may make these requests by emailing us at <a href="mailto:privacy@medium.com" rel="noopener ugc nofollow" target="_blank">privacy@prismio.com</a> or by completing <a href="https://help.medium.com/hc/en-us/requests/new#/360002298134/360051136954/" rel="noopener">this webform</a>. We will verify a webform request by asking you to provide identifying information. We will not discriminate against you if you exercise your rights under the CCPA. </p>
                    <p className='mt-10 text-xl leading-8 font-serif'>If we receive your request from an authorized agent, we may ask for evidence that you have provided such agent with a power of attorney or that the agent otherwise has valid written authority to submit requests to exercise rights on your behalf. This may include requiring you to verify your identity. If you are an authorized agent seeking to make a request, please <a href="mailto:privacy@medium.com" rel="noopener ugc nofollow" target="_blank">contact us</a>. </p>
                    <h3 className='mt-6 text-xl leading-8'>ADDITIONAL DISCLOSURES FOR INDIVIDUALS IN EUROPE</h3>
                    <p className='mt-6 text-xl leading-8 font-serif'>If you are located in the European Economic Area ( <em>“</em>
                        <strong>
                            <em>EEA</em>
                        </strong>
                        <em>”</em>), the United Kingdom, or Switzerland, you have certain rights and protections under applicable law regarding the processing of your personal data, and this section applies to you.
                    </p>
                    <h3 className='mt-6 text-xl leading-8'>Legal Basis for Processing</h3>
                    <p className='mt-6 text-xl leading-8 font-serif'>When we process your personal data, we will do so in reliance on the following lawful bases:</p>
                    <ul className="mt-10 pl-10 list-disc text-xl leading-8 font-serif space-y-4">
                        <li>To perform our responsibilities under our contract with you (e.g., providing the products and services you requested).</li>
                        <li>When we have a legitimate interest in processing your personal data to operate our business or protect our interests (e.g., to provide, maintain, and improve our products and services, conduct data analytics, and communicate with you).</li>
                        <li>To comply with our legal obligations (e.g., to maintain a record of your consents and track those who have opted out of non-administrative communications).</li>
                        <li>When we have your consent to do so (e.g., when you opt in to receive non-administrative communications from us). When consent is the legal basis for our processing your personal data, you may withdraw such consent at any time.</li>
                    </ul>
                    <h3 className='mt-6 text-xl leading-8'>Data Retention</h3>
                    <p className='mt-6 text-xl leading-8 font-serif'>We store personal data associated with your account for as long as your account remains active. If you close your account, we will delete your account data within 14 days. We store other personal data for as long as necessary to carry out the purposes for which we originally collected it and for other legitimate business purposes, including to meet our legal, regulatory, or other compliance obligations.</p>
                    <h3 className='mt-6 text-xl leading-8'>Data Subject Requests</h3>
                    <p className='mt-6 text-xl leading-8 font-serif'>Subject to certain limitations, you have the right to request access to the personal data we hold about you and to receive your data in a portable format, the right to ask that your personal data be corrected or erased, and the right to object to, or request that we restrict, certain processing. To exercise your rights:</p>
                    <ul className="mt-10 pl-10 list-disc text-xl leading-8 font-serif space-y-4">
                        <li>If you sign up for a Prismio account, you may at any time request an export of your personal information from the <a href="https://medium.com/me/settings" rel="noopener">Settings page</a>, or by going to Settings and then selecting Account within our app. </li>
                        <li>You may correct information associated with your account from the <a href="https://medium.com/me/settings" rel="noopener">Settings page</a>, or by going to Settings and then selecting Account within our app, and the <a href="https://medium.com/me/following/suggestions" rel="noopener">Customize Your Interests page</a> to update your interests. </li>
                        <li>You may withdraw consent by deleting your account at any time through the <a href="https://medium.com/me/settings" rel="noopener">Settings page</a>, or by going to Settings and then selecting Account within our app (except to the extent Prismio is prevented by law from deleting your information). </li>
                        <li>You may object at any time to the use of your personal data by contacting <a href="mailto:privacy@medium.com" rel="noopener ugc nofollow" target="_blank">privacy@prismio.com</a>. </li>
                    </ul>
                    <h3 className='mt-6 text-xl leading-8'>Questions or Complaints</h3>
                    <p className='mt-6 text-xl leading-8 font-serif'>If you have a concern about our processing of personal data that we are not able to resolve, you have the right to lodge a complaint with the Data Protection Authority where you reside. Contact details for your Data Protection Authority can be found using the links below:</p>
                    <ul className="mt-10 pl-10 list-disc text-xl leading-8 font-serif space-y-4">
                        <li>For individuals in the EEA: <br />
                            <a href="https://edpb.europa.eu/about-edpb/board/members_en" rel="noopener ugc nofollow" target="_blank">https://edpb.europa.eu/about-edpb/board/members_en</a>
                        </li>
                        <li>For individuals in the UK: <br />
                            <a href="https://ico.org.uk/global/contact-us/" rel="noopener ugc nofollow" target="_blank">https://ico.org.uk/global/contact-us/</a>
                        </li>
                        <li>For individuals in Switzerland: <a href="https://www.edoeb.admin.ch/edoeb/en/home/the-fdpic/contact.html" rel="noopener ugc nofollow" target="_blank">https://www.edoeb.admin.ch/edoeb/en/home/the-fdpic/contact.html</a>
                        </li>
                    </ul>
                    <h3 className='mt-6 text-xl leading-8'>CONTACT US</h3>
                    <p className='mt-6 text-xl leading-8 font-serif'>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@medium.com" rel="noopener ugc nofollow" target="_blank">privacy@prismio.com</a>. </p>
                    <p className='mt-6 text-xl leading-8 font-serif'>If you are from the EEA or the United Kingdom and have questions about this Privacy Policy, please contact us at <a href="mailto:privacy@medium.com" rel="noopener ugc nofollow" target="_blank">privacy@prismio.com</a> or our privacy representatives as follows: </p>
                    <h3 className='mt-6 text-xl leading-8'>Privacy representative for EEA</h3>
                    <p className='mt-6 text-xl leading-8 font-serif'>Unit 3D North Point House <br />North Point Business Park <br />New Mallow Road <br />Cork T23AT2P <br />Ireland </p>
                    <p className='mt-6 text-xl leading-8 font-serif'>Or <a href="https://verasafe.com/public-resources/contact-data-protection-representative" rel="noopener ugc nofollow" target="_blank">here</a>. </p>
                    <h3 className='mt-6 text-xl leading-8'>Privacy representative for the United Kingdom</h3>
                    <p className='mt-6 text-xl leading-8 font-serif'>37 Albert Embankment <br />London SE1 7TL <br />United Kingdom </p>
                    <p className='mt-6 text-xl leading-8 font-serif'>Or <a href="https://verasafe.com/public-resources/contact-data-protection-representative" rel="noopener ugc nofollow" target="_blank">here</a>. </p>
                </div>

                <div className="max-w-[680px] px-4 mb-7 mt-12 mx-auto">
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
                            <h2 className="mt-4 mb-12 text-2xl leading-7">More from Jobs @ Prismio and Jobs at Prismio</h2>
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