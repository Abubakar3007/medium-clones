import { Button } from "@/components/ui/button"
import Link from 'next/link'
const page = () => {
    return (
        <div className="flex flex-col container px-4 py-2 space-y-4 mx-auto md:px-2 md:max-w-[718px] md:py-4 md:space-y-6 flex-1">
            <div className="flex-1 sm:px-4 py-2 space-y-6">
                <div className="flex items-center justify-between min-h-[36px] mt-2">
                    <Link className="text-3xl font-medium" href="/">Prisiam</Link>
                    <div className="hidden sm:inline-flex items-center space-x-4">
                        <Button title="Report a problem" variant="outline" className="text-sm px-2.5 py-1 rounded-[2px]">Report problem</Button>
                        <Button title="Subscribe to updates" type="button" className="text-sm px-2.5 py-1 rounded-[2px]">Subscribe to updates</Button>
                    </div>
                </div>

                <div className="rounded-lg p-px shadow-sm bg-[#24c19a]">
                    <div className="relative rounded-[7px] bg-white">
                        <div className="bg-[#d8f8f0] rounded-t-[7px] text-base font-medium px-4 py-3.5">
                            <div className="flex items-center text-slate-900 py-0.5">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[16px] h-[16px] mr-2 text-[#24c19a]">
                                    <path xmlns="http://www.w3.org/2000/svg" d="M8 0C3.589 0 0 3.589 0 8C0 12.411 3.589 16 8 16C12.411 16 16 12.411 16 8C16 3.589 12.411 0 8 0ZM11.947 5.641C10.088 7.023 8.512 8.931 7.264 11.31C7.135 11.557 6.879 11.712 6.6 11.712C6.323 11.715 6.062 11.555 5.933 11.305C5.358 10.188 4.715 9.28 3.968 8.529C3.676 8.236 3.677 7.76 3.971 7.468C4.263 7.176 4.739 7.176 5.032 7.471C5.605 8.047 6.122 8.699 6.595 9.443C7.834 7.398 9.329 5.717 11.053 4.436C11.385 4.19 11.855 4.258 12.102 4.591C12.349 4.923 12.28 5.394 11.947 5.641Z" fill="currentColor">
                                    </path>
                                </svg>We’re fully operational
                            </div>
                        </div>
                        <div className="text-slate-900 p-4">We’re not aware of any issues affecting our systems.</div>
                    </div>
                </div>

                <div className="rounded-lg p-px shadow-sm bg-[#RRGGBBAA]">
                    <div className="relative rounded-[7px] bg-white dark:bg-global">
                        <div className="ContentBox_header__h_V5T rounded-t-[7px] text-base font-medium px-4 py-3.5">
                            <div className="flex md:items-center justify-between md:flex-row flex-col md:gap-2 gap-4 items-start">
                                <div className="flex items-center space-x-4">
                                    <h2 className="text-slate-900">System status</h2>
                                    <div className="hidden md:flex items-center text-sm font-normal space-x-1 mt-[1px] text-slate-500">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="6" height="10" className="text-slate-300 dark:text-slate-500 w-4 h-4 font-semibold cursor-pointer transition text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-300">
                                                <path d="M15.75 19.5L8.25 12l7.5-7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </div>
                                        <div className="select-none flex justify-center whitespace-nowrap text-slate-400 dark:text-slate-500">Nov 2025 <span className="px-1">-</span>Feb 2026 </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="text-slate-300 dark:text-slate-500 w-4 h-4 font-semibold cursor-not-allowed !text-slate-100 dark:!text-slate-700">
                                                <path d="M8.25 4.5l7.5 7.5-7.5 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-slate-900 dark:text-slate-100">
                            <div className="divide-y divide-solid text-sm divide-slate-50 dark:divide-slate-800">
                                <div className="p-4 md:pt-3 md:pb-3 text-sm">
                                    <div>
                                        <div className="h-7 flex flex-grow items-center text-medium">
                                            <div>
                                                <div className="" data-state="closed">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[16px] h-[16px] mr-2 text-[#24c19a]">
                                                        <path xmlns="http://www.w3.org/2000/svg" d="M8 0C3.589 0 0 3.589 0 8C0 12.411 3.589 16 8 16C12.411 16 16 12.411 16 8C16 3.589 12.411 0 8 0ZM11.947 5.641C10.088 7.023 8.512 8.931 7.264 11.31C7.135 11.557 6.879 11.712 6.6 11.712C6.323 11.715 6.062 11.555 5.933 11.305C5.358 10.188 4.715 9.28 3.968 8.529C3.676 8.236 3.677 7.76 3.971 7.468C4.263 7.176 4.739 7.176 5.032 7.471C5.605 8.047 6.122 8.699 6.595 9.443C7.834 7.398 9.329 5.717 11.053 4.436C11.385 4.19 11.855 4.258 12.102 4.591C12.349 4.923 12.28 5.394 11.947 5.641Z" fill="currentColor">
                                                        </path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="hidden md:flex space-x-2 flex-grow items-center text-md">
                                                <div className="flex space-x-1.5 items-center">
                                                    <h3 className="font-medium text-[#24c19a]">Web Services</h3>
                                                    <div className="flex flex-row items-center cursor-pointer group transition"></div>
                                                </div>
                                                <span className="flex items-center cursor-pointer group transition text-slate-500 hover:text-slate-900">
                                                    <span className="hidden md:inline">3 components</span>
                                                    <span className="flex items-center justify-center w-3 h-6 mt-[2px] ml-1">
                                                        <svg className="text-slate-300 dark:text-slate-500 transition text-slate-300 group-hover:text-slate-900" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9 0.980774L5.25 5.01924L1.5 0.980774" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        </svg>
                                                    </span>
                                                </span>
                                                <div className="grow"></div>
                                                <div className="ml-2 font-normal flex flex-row items-center gap-1 text-slate-400">
                                                    <div>
                                                        <span className="whitespace-nowrap"><span>99.87</span> % uptime </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex md:hidden items-center text-md min-w-0">
                                                <h3 className="font-medium">Web Services</h3>
                                                <span className="flex items-center cursor-pointer group transition text-slate-500 hover:text-slate-900">
                                                    <span className="hidden md:inline">3 components</span>
                                                    <span className="flex items-center justify-center w-3 h-6 mt-[2px] ml-1">
                                                        <svg className="text-slate-300 transition text-slate-300 group-hover:text-slate-900" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9 0.980774L5.25 5.01924L1.5 0.980774" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        </svg>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="hidden md:flex">
                                            <div className="w-full">
                                                <div className="text-slate-500">
                                                    <svg width="100%" height="16" viewBox="0 0 668 16" className="mb-1 text-[#24c19a]">
                                                        <rect x="0" y="0" width="5" height="16" rx="1" ry="1" className="fill-[#24c19a]"></rect>
                                                        <rect x="7.34065934065934" y="0" width="5" height="16" rx="1" ry="1" className="fill-[#24c19a]"></rect>
                                                        <rect x="14.68131868131868" y="0" width="5" height="16" rx="1" ry="1" className="fill-[#24c19a]"></rect>
                                                        <rect x="22.021978021978022" y="0" width="5" height="16" rx="1" ry="1" className="fill-[#24c19a]"></rect>
                                                        <rect x="29.36263736263736" y="0" width="5" height="16" rx="1" ry="1" className="fill-[#24c19a]"></rect>
                                                        <rect x="36.7032967032967" y="0" width="5" height="16" rx="1" ry="1" className="fill-[#24c19a]"></rect>
                                                        <rect x="44.043956043956044" y="0" width="5" height="16" rx="1" ry="1" className="fill-[#24c19a]"></rect>
                                                        <rect x="51.38461538461538" y="0" width="5" height="16" rx="1" ry="1" className="fill-[#24c19a]"></rect>
                                                        <rect x="58.72527472527472" y="0" width="5" height="16" rx="1" ry="1" className="fill-[#24c19a]"></rect>
                                                        <rect x="66.06593406593406" y="0" width="5" height="16" rx="1" ry="1" className="fill-[#24c19a]"></rect>
                                                        <rect x="73.4065934065934" y="0" width="5" height="16" rx="1" ry="1" className="fill-[#24c19a]"></rect>
                                                        <rect x="80.74725274725274" y="0" width="5" height="16" rx="1" ry="1" className="fill-[#24c19a]"></rect>
                                                        <rect x="88.08791208791209" y="0" width="5" height="16" rx="1" ry="1" className="fill-[#24c19a]"></rect>
                                                        <rect x="95.42857142857143" y="0" width="5" height="16" rx="1" ry="1" className="fill-[#fbbf24]"></rect>
                                                        <rect x="102.76923076923076" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="110.1098901098901" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="117.45054945054945" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="124.79120879120879" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="132.13186813186812" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="139.47252747252747" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="146.8131868131868" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="154.15384615384616" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="161.4945054945055" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="168.83516483516482" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="176.17582417582418" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="183.5164835164835" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="190.85714285714286" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="198.1978021978022" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="205.53846153846152" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="212.87912087912088" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="220.2197802197802" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="227.56043956043956" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="234.9010989010989" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="242.24175824175822" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="249.58241758241758" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="256.9230769230769" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="264.26373626373623" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="271.6043956043956" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="278.94505494505495" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="286.2857142857143" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="293.6263736263736" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="300.96703296703294" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="308.3076923076923" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="315.64835164835165" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="322.989010989011" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="330.3296703296703" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="337.67032967032964" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="345.010989010989" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="352.35164835164835" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="359.6923076923077" y="0" width="5" height="16" rx="1" ry="1" className="transition UptimeChart_pillPartialOutage__hABa9"></rect>
                                                        <rect x="367.032967032967" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="374.37362637362634" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="381.7142857142857" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="389.05494505494505" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="396.3956043956044" y="0" width="5" height="16" rx="1" ry="1" className="transition UptimeChart_pillDegradedPerformance__61HRu"></rect>
                                                        <rect x="403.7362637362637" y="0" width="5" height="16" rx="1" ry="1" className="transition UptimeChart_pillDegradedPerformance__61HRu"></rect>
                                                        <rect x="411.07692307692304" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="418.4175824175824" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="425.75824175824175" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="433.0989010989011" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="440.4395604395604" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="447.78021978021974" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="455.1208791208791" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="462.46153846153845" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="469.8021978021978" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="477.1428571428571" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="484.48351648351644" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="491.8241758241758" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="499.16483516483515" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="506.5054945054945" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="513.8461538461538" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="521.1868131868132" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="528.5274725274725" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="535.8681318681319" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="543.2087912087912" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="550.5494505494505" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="557.8901098901099" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="565.2307692307692" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="572.5714285714286" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="579.9120879120879" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="587.2527472527472" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="594.5934065934066" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="601.9340659340659" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="609.2747252747253" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="616.6153846153846" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="623.9560439560439" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="631.2967032967033" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="638.6373626373626" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="645.978021978022" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="653.3186813186813" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="660.6593406593406" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 md:pt-3 md:pb-3 text-sm">
                                    <div>
                                        <div className="h-7 flex flex-grow items-center text-medium">
                                            <div>
                                                <div className="" data-state="closed">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[16px] h-[16px] mr-2 text-icon-operational">
                                                        <path xmlns="http://www.w3.org/2000/svg" d="M8 0C3.589 0 0 3.589 0 8C0 12.411 3.589 16 8 16C12.411 16 16 12.411 16 8C16 3.589 12.411 0 8 0ZM11.947 5.641C10.088 7.023 8.512 8.931 7.264 11.31C7.135 11.557 6.879 11.712 6.6 11.712C6.323 11.715 6.062 11.555 5.933 11.305C5.358 10.188 4.715 9.28 3.968 8.529C3.676 8.236 3.677 7.76 3.971 7.468C4.263 7.176 4.739 7.176 5.032 7.471C5.605 8.047 6.122 8.699 6.595 9.443C7.834 7.398 9.329 5.717 11.053 4.436C11.385 4.19 11.855 4.258 12.102 4.591C12.349 4.923 12.28 5.394 11.947 5.641Z" fill="currentColor">
                                                        </path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="hidden md:flex space-x-2 flex-grow items-center text-md">
                                                <div className="flex space-x-1.5 items-center">
                                                    <h3 className="font-medium text-slate-900 dark:text-slate-100">Mobile Apps</h3>
                                                    <div className="flex flex-row items-center cursor-pointer group transition"></div>
                                                </div>
                                                <span className="flex items-center cursor-pointer group transition text-slate-500 hover:text-slate-900 dark:hover:text-slate-200">
                                                    <span className="hidden md:inline">2 components</span>
                                                    <span className="flex items-center justify-center w-3 h-6 mt-[2px] ml-1">
                                                        <svg className="text-slate-300 dark:text-slate-500 transition text-slate-300 group-hover:text-slate-900 dark:text-slate-500 dark:group-hover:text-slate-300" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9 0.980774L5.25 5.01924L1.5 0.980774" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        </svg>
                                                    </span>
                                                </span>
                                                <div className="flex-grow"></div>
                                                <div className="ml-2 font-normal flex flex-row items-center gap-1 text-slate-400">
                                                    <div>
                                                        <span className="whitespace-nowrap">
                                                            <span>100</span>% uptime </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex md:hidden items-center text-md min-w-[0px]">
                                                <h3 className="font-medium">Mobile Apps</h3>
                                                <span className="flex items-center cursor-pointer group transition text-slate-500 hover:text-slate-900 dark:hover:text-slate-200">
                                                    <span className="hidden md:inline">2 components</span>
                                                    <span className="flex items-center justify-center w-3 h-6 mt-[2px] ml-1">
                                                        <svg className="text-slate-300 dark:text-slate-500 transition text-slate-300 group-hover:text-slate-900 dark:text-slate-500 dark:group-hover:text-slate-300" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9 0.980774L5.25 5.01924L1.5 0.980774" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        </svg>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="hidden md:flex">
                                            <div className="w-full">
                                                <div className="text-slate-500">
                                                    <svg width="100%" height="16" viewBox="0 0 668 16" className="mb-1">
                                                        <rect x="0" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="7.34065934065934" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="14.68131868131868" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="22.021978021978022" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="29.36263736263736" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="36.7032967032967" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="44.043956043956044" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="51.38461538461538" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="58.72527472527472" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="66.06593406593406" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="73.4065934065934" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="80.74725274725274" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="88.08791208791209" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="95.42857142857143" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="102.76923076923076" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="110.1098901098901" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="117.45054945054945" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="124.79120879120879" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="132.13186813186812" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="139.47252747252747" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="146.8131868131868" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="154.15384615384616" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="161.4945054945055" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="168.83516483516482" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="176.17582417582418" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="183.5164835164835" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="190.85714285714286" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="198.1978021978022" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="205.53846153846152" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="212.87912087912088" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="220.2197802197802" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="227.56043956043956" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="234.9010989010989" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="242.24175824175822" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="249.58241758241758" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="256.9230769230769" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="264.26373626373623" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="271.6043956043956" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="278.94505494505495" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="286.2857142857143" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="293.6263736263736" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="300.96703296703294" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="308.3076923076923" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="315.64835164835165" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="322.989010989011" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="330.3296703296703" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="337.67032967032964" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="345.010989010989" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="352.35164835164835" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="359.6923076923077" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="367.032967032967" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="374.37362637362634" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="381.7142857142857" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="389.05494505494505" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="396.3956043956044" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="403.7362637362637" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="411.07692307692304" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="418.4175824175824" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="425.75824175824175" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="433.0989010989011" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="440.4395604395604" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="447.78021978021974" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="455.1208791208791" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="462.46153846153845" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="469.8021978021978" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="477.1428571428571" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="484.48351648351644" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="491.8241758241758" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="499.16483516483515" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="506.5054945054945" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="513.8461538461538" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="521.1868131868132" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="528.5274725274725" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="535.8681318681319" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="543.2087912087912" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="550.5494505494505" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="557.8901098901099" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="565.2307692307692" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="572.5714285714286" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="579.9120879120879" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="587.2527472527472" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="594.5934065934066" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="601.9340659340659" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="609.2747252747253" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="616.6153846153846" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="623.9560439560439" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="631.2967032967033" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="638.6373626373626" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="645.978021978022" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="653.3186813186813" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                        <rect x="660.6593406593406" y="0" width="5" height="16" rx="1" ry="1"></rect>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rounded-lg p-px shadow-sm dark:shadow-none ContentBox_default__p81ks">
                    <div className="relative rounded-[7px] bg-white dark:bg-global">
                        <div className="ContentBox_header__h_V5T rounded-t-[7px] text-base font-medium px-4 py-3.5">
                            <div className="flex items-center space-x-4">
                                <h2 className="text-slate-900 dark:text-slate-50">Calendar</h2>
                                <div className="flex items-center space-x-1 text-slate-400 dark:text-slate-500 text-sm font-normal select-none mt-[1px] whitespace-nowrap">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="6" height="10" className="text-slate-300 dark:text-slate-500 w-4 h-4 0 font-semibold cursor-pointer transition text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-300">
                                            <path d="M15.75 19.5L8.25 12l7.5-7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </div>
                                    <span>Feb 2026</span>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="text-slate-300 dark:text-slate-500 w-4 h-4 0 font-semibold cursor-not-allowed !text-slate-100 dark:!text-slate-700">
                                            <path d="M8.25 4.5l7.5 7.5-7.5 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-slate-900 dark:text-slate-100">
                            <div className="grid grid-cols-1 gap-y-16 text-slate-600 text-center">
                                <section className="text-center relative w-full">
                                    <div className="grid grid-cols-7 py-3 text-xs font-medium text-slate-400 dark:text-slate-500 bg-white dark:bg-global border border-x-transparent border-t-transparent border-b-slate-50 dark:border-b-slate-800">
                                        <div>M <span></span>
                                        </div>
                                        <div>T <span></span>
                                        </div>
                                        <div>W <span></span>
                                        </div>
                                        <div>T <span></span>
                                        </div>
                                        <div>F <span></span>
                                        </div>
                                        <div>S <span></span>
                                        </div>
                                        <div>S <span></span>
                                        </div>
                                    </div>
                                    <div className="Calendar_container__cVRlA" data-testid="incident-calendar">
                                        <div className="bg-white dark:bg-global">
                                            <div className="mb-[-1px] transition py-1 flex items-center justify-center"></div>
                                        </div>
                                        <div className="bg-white dark:bg-global">
                                            <div className="mb-[-1px] transition py-1 flex items-center justify-center"></div>
                                        </div>
                                        <div className="bg-white dark:bg-global">
                                            <div className="mb-[-1px] transition py-1 flex items-center justify-center"></div>
                                        </div>
                                        <div className="bg-white dark:bg-global">
                                            <div className="mb-[-1px] transition py-1 flex items-center justify-center"></div>
                                        </div>
                                        <div className="bg-white dark:bg-global">
                                            <div className="mb-[-1px] transition py-1 flex items-center justify-center"></div>
                                        </div>
                                        <div className="bg-white dark:bg-global">
                                            <div className="mb-[-1px] transition py-1 flex items-center justify-center"></div>
                                        </div>
                                        <div className="bg-white dark:bg-global">
                                            <div className="mb-[-1px] transition py-1 flex items-center justify-center">
                                                <div className="transition flex items-center justify-center w-8 h-8" data-state="closed">
                                                    <button type="button" className="transition group cursor-default block w-6 h-6 rounded-full bg-transparent Calendar_operational__F91iB">
                                                        <time dateTime="2026-02-01">1</time>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white dark:bg-global">
                                            <div className="mb-[-1px] transition py-1 flex items-center justify-center">
                                                <div className="transition flex items-center justify-center w-8 h-8" data-state="closed">
                                                    <button type="button" className="transition group cursor-default block w-6 h-6 rounded-full bg-transparent Calendar_operational__F91iB">
                                                        <time dateTime="2026-02-02">2</time>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white dark:bg-global">
                                            <div className="mb-[-1px] transition py-1 flex items-center justify-center">
                                                <div className="transition flex items-center justify-center w-8 h-8" data-state="closed">
                                                    <button type="button" className="transition group cursor-default block w-6 h-6 rounded-full bg-transparent Calendar_operational__F91iB">
                                                        <time dateTime="2026-02-03">3</time>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white dark:bg-global">
                                            <div className="mb-[-1px] transition py-1 flex items-center justify-center">
                                                <div className="transition flex items-center justify-center w-8 h-8" data-state="closed">
                                                    <button type="button" className="transition group cursor-default block w-6 h-6 rounded-full bg-transparent Calendar_operational__F91iB">
                                                        <time dateTime="2026-02-04">4</time>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white dark:bg-global">
                                            <div className="mb-[-1px] transition py-1 flex items-center justify-center">
                                                <div className="transition flex items-center justify-center w-8 h-8" data-state="closed">
                                                    <button type="button" className="transition group cursor-default block w-6 h-6 rounded-full bg-transparent Calendar_operational__F91iB">
                                                        <time dateTime="2026-02-05">5</time>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white dark:bg-global">
                                            <div className="mb-[-1px] transition py-1 flex items-center justify-center">
                                                <div className="transition flex items-center justify-center w-8 h-8" data-state="closed">
                                                    <button type="button" className="transition group cursor-default block w-6 h-6 rounded-full bg-transparent Calendar_operational__F91iB">
                                                        <time dateTime="2026-02-06">6</time>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white dark:bg-global">
                                            <div className="mb-[-1px] transition py-1 flex items-center justify-center">
                                                <div className="transition flex items-center justify-center w-8 h-8" data-state="closed">
                                                    <button type="button" className="transition group cursor-default block w-6 h-6 rounded-full bg-transparent Calendar_operational__F91iB">
                                                        <time dateTime="2026-02-07">7</time>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white dark:bg-global">
                                            <div className="mb-[-1px] transition py-1 flex items-center justify-center">
                                                <div className="transition flex items-center justify-center w-8 h-8" data-state="closed">
                                                    <button type="button" className="transition group cursor-default block w-6 h-6 rounded-full bg-transparent Calendar_operational__F91iB">
                                                        <time dateTime="2026-02-08">8</time>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white dark:bg-global">
                                            <div className="mb-[-1px] transition py-1 flex items-center justify-center">
                                                <div className="transition flex items-center justify-center w-8 h-8" data-state="closed">
                                                    <button type="button" className="transition group cursor-default block w-6 h-6 rounded-full bg-transparent Calendar_operational__F91iB">
                                                        <time dateTime="2026-02-09">9</time>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white dark:bg-global">
                                            <div className="mb-[-1px] transition py-1 flex items-center justify-center">
                                                <div className="transition flex items-center justify-center w-8 h-8" data-state="closed">
                                                    <button type="button" className="transition group cursor-default block w-6 h-6 rounded-full bg-transparent Calendar_operational__F91iB">
                                                        <time dateTime="2026-02-10">10</time>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white dark:bg-global">
                                            <div className="mb-[-1px] transition py-1 flex items-center justify-center">
                                                <div className="transition flex items-center justify-center w-8 h-8" data-state="closed">
                                                    <button type="button" className="transition group cursor-default block w-6 h-6 rounded-full bg-transparent Calendar_operational__F91iB">
                                                        <time dateTime="2026-02-11">11</time>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white dark:bg-global">
                                            <div className="mb-[-1px] transition py-1 flex items-center justify-center">
                                                <div className="transition flex items-center justify-center w-8 h-8" data-state="closed">
                                                    <button type="button" className="transition group cursor-default block w-6 h-6 rounded-full bg-transparent Calendar_operational__F91iB">
                                                        <time dateTime="2026-02-12">12</time>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white dark:bg-global">
                                            <div className="mb-[-1px] transition py-1 flex items-center justify-center">
                                                <div className="transition flex items-center justify-center w-8 h-8" data-state="closed">
                                                    <button type="button" className="transition group cursor-default block w-6 h-6 rounded-full bg-transparent Calendar_operational__F91iB">
                                                        <time dateTime="2026-02-13">13</time>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white dark:bg-global">
                                            <div className="mb-[-1px] transition py-1 flex items-center justify-center">
                                                <div className="transition flex items-center justify-center w-8 h-8" data-state="closed">
                                                    <button type="button" className="transition group cursor-default block w-6 h-6 rounded-full bg-transparent Calendar_operational__F91iB">
                                                        <time dateTime="2026-02-14">14</time>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white dark:bg-global">
                                            <div className="mb-[-1px] transition py-1 flex items-center justify-center">
                                                <div className="transition flex items-center justify-center w-8 h-8" data-state="closed">
                                                    <button type="button" className="transition group cursor-default block w-6 h-6 rounded-full bg-transparent Calendar_operational__F91iB">
                                                        <time dateTime="2026-02-15">15</time>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white dark:bg-global">
                                            <div className="mb-[-1px] transition py-1 flex items-center justify-center">
                                                <div className="transition flex items-center justify-center w-8 h-8" data-state="closed">
                                                    <button type="button" className="transition group cursor-default block w-6 h-6 rounded-full bg-transparent Calendar_operational__F91iB">
                                                        <time dateTime="2026-02-16">16</time>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white dark:bg-global">
                                            <div className="mb-[-1px] transition py-1 flex items-center justify-center">
                                                <div className="transition flex items-center justify-center w-8 h-8" data-state="closed">
                                                    <button type="button" className="transition group cursor-default block w-6 h-6 rounded-full bg-transparent Calendar_operational__F91iB">
                                                        <time dateTime="2026-02-17">17</time>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white dark:bg-global">
                                            <div className="mb-[-1px] transition py-1 flex items-center justify-center">
                                                <div className="transition flex items-center justify-center w-8 h-8" data-state="closed">
                                                    <button type="button" className="transition group cursor-default block w-6 h-6 rounded-full bg-transparent Calendar_operational__F91iB">
                                                        <time dateTime="2026-02-18">18</time>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white dark:bg-global">
                                            <div className="mb-[-1px] transition py-1 flex items-center justify-center Calendar_today__zE25x">
                                                <div className="transition flex items-center justify-center w-8 h-8" data-state="closed">
                                                    <button type="button" className="transition group cursor-default block w-6 h-6 rounded-full bg-transparent Calendar_operational__F91iB">
                                                        <time dateTime="2026-02-19">19</time>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white dark:bg-global">
                                            <div className="mb-[-1px] transition py-1 flex items-center justify-center">
                                                <div className="transition flex items-center justify-center w-8 h-8" data-state="closed">
                                                    <button type="button" className="transition group cursor-default block w-6 h-6 rounded-full bg-transparent Calendar_operational__F91iB">
                                                        <time dateTime="2026-02-20">20</time>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white dark:bg-global">
                                            <div className="mb-[-1px] transition py-1 flex items-center justify-center">
                                                <div className="transition flex items-center justify-center w-8 h-8" data-state="closed">
                                                    <button type="button" className="transition group cursor-default block w-6 h-6 rounded-full bg-transparent Calendar_operational__F91iB">
                                                        <time dateTime="2026-02-21">21</time>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white dark:bg-global">
                                            <div className="mb-[-1px] transition py-1 flex items-center justify-center">
                                                <div className="transition flex items-center justify-center w-8 h-8" data-state="closed">
                                                    <button type="button" className="transition group cursor-default block w-6 h-6 rounded-full bg-transparent Calendar_operational__F91iB">
                                                        <time dateTime="2026-02-22">22</time>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white dark:bg-global rounded-bl-[7px]">
                                            <div className="mb-[-1px] transition py-1 flex items-center justify-center rounded-bl-[7px]">
                                                <div className="transition flex items-center justify-center w-8 h-8" data-state="closed">
                                                    <button type="button" className="transition group cursor-default block w-6 h-6 rounded-full bg-transparent Calendar_operational__F91iB">
                                                        <time dateTime="2026-02-23">23</time>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white dark:bg-global">
                                            <div className="mb-[-1px] transition py-1 flex items-center justify-center">
                                                <div className="transition flex items-center justify-center w-8 h-8" data-state="closed">
                                                    <button type="button" className="transition group cursor-default block w-6 h-6 rounded-full bg-transparent Calendar_operational__F91iB">
                                                        <time dateTime="2026-02-24">24</time>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white dark:bg-global">
                                            <div className="mb-[-1px] transition py-1 flex items-center justify-center">
                                                <div className="transition flex items-center justify-center w-8 h-8" data-state="closed">
                                                    <button type="button" className="transition group cursor-default block w-6 h-6 rounded-full bg-transparent Calendar_operational__F91iB">
                                                        <time dateTime="2026-02-25">25</time>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white dark:bg-global">
                                            <div className="mb-[-1px] transition py-1 flex items-center justify-center">
                                                <div className="transition flex items-center justify-center w-8 h-8" data-state="closed">
                                                    <button type="button" className="transition group cursor-default block w-6 h-6 rounded-full bg-transparent Calendar_operational__F91iB">
                                                        <time dateTime="2026-02-26">26</time>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white dark:bg-global">
                                            <div className="mb-[-1px] transition py-1 flex items-center justify-center">
                                                <div className="transition flex items-center justify-center w-8 h-8" data-state="closed">
                                                    <button type="button" className="transition group cursor-default block w-6 h-6 rounded-full bg-transparent Calendar_operational__F91iB">
                                                        <time dateTime="2026-02-27">27</time>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white dark:bg-global">
                                            <div className="mb-[-1px] transition py-1 flex items-center justify-center">
                                                <div className="transition flex items-center justify-center w-8 h-8" data-state="closed">
                                                    <button type="button" className="transition group cursor-default block w-6 h-6 rounded-full bg-transparent Calendar_operational__F91iB">
                                                        <time dateTime="2026-02-28">28</time>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white dark:bg-global rounded-br-[7px]">
                                            <div className="mb-[-1px] transition py-1 flex items-center justify-center rounded-br-[7px]"></div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-y-4 flex flex-col items-center">
                <div className="flex space-x-1">
                    <span className="flex items-center flex-auto font-normal text-slate-400 dark:text-slate-500 text-sm text-center">Powered by</span>
                    <a target="_blank" rel="noreferrer" href="https://incident.io?utm_source=medium&amp;utm_medium=status-pages">
                        <svg width="82" height="20" viewBox="0 0 82 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-[-4.5px] text-slate-400 dark:text-slate-500">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.16185 11.3994V13.3061C1.87817 12.7611 0.183594 10.752 0.183594 8.35688C0.183594 6.97598 0.767914 5.88044 1.66158 4.80574C2.40263 3.91456 4.23245 1.5545 4.80843 0.252207C4.94827 -0.063957 5.3048 -0.0517392 5.45855 0.11814C5.95039 0.661568 6.5566 1.84843 6.75488 3.1947C6.79528 3.469 6.81191 3.69297 6.82512 3.87089C6.85347 4.25269 6.86607 4.42243 7.06403 4.42243C7.37506 4.42243 7.57853 3.95083 7.62325 3.46404C7.65191 3.15213 7.96134 3.04773 8.17473 3.15213C9.20099 3.65424 10.2482 6.04429 10.5014 7.21716C10.5808 7.58496 10.6326 7.96505 10.6326 8.35688C10.6326 10.7466 8.9456 12.7521 6.66961 13.3025V11.3994H4.16185ZM5.4081 10.6394C6.21067 10.6394 6.86127 10.0236 6.86127 9.26392C6.86127 8.0523 5.9679 7.18649 5.52276 6.92331C5.49269 6.90553 5.47766 6.89664 5.43675 6.89775C5.4068 6.89856 5.36261 6.9173 5.34122 6.93825C5.31202 6.96686 5.30427 6.99943 5.28879 7.06456C5.20989 7.39645 4.96149 7.63309 4.70008 7.88212C4.33985 8.22529 3.95493 8.592 3.95493 9.26392C3.95493 10.0236 4.60553 10.6394 5.4081 10.6394Z" fill="currentColor"></path>
                            <path d="M13.1168 11.1836C12.0055 11.1836 11.1637 11.5876 10.7091 12.2105V11.4193H8.18359V19.8367H10.7091V15.2408C10.7091 14.0456 11.3489 13.5068 12.2749 13.5068C13.083 13.5068 13.7397 13.995 13.7397 15.0387V19.8367H16.2652V14.6684C16.2652 12.3957 14.8172 11.1836 13.1168 11.1836Z" fill="currentColor"></path>
                            <path d="M21.6139 19.9999C23.2595 19.9999 24.6868 19.1483 25.409 17.8459L23.2092 16.5936C22.9405 17.178 22.3192 17.5286 21.5803 17.5286C20.4889 17.5286 19.6829 16.7439 19.6829 15.5918C19.6829 14.4396 20.4889 13.6549 21.5803 13.6549C22.3192 13.6549 22.9237 14.0054 23.2092 14.5899L25.409 13.3209C24.6868 12.0352 23.2428 11.1836 21.6139 11.1836C19.0616 11.1836 17.1641 13.1038 17.1641 15.5918C17.1641 18.0797 19.0616 19.9999 21.6139 19.9999Z" fill="currentColor"></path>
                            <path d="M27.3266 10.6979C28.1487 10.6979 28.8368 10.0091 28.8368 9.18579C28.8368 8.36268 28.1487 7.67383 27.3266 7.67383C26.5043 7.67383 25.8164 8.36268 25.8164 9.18579C25.8164 10.0091 26.5043 10.6979 27.3266 10.6979ZM26.0681 19.8371H28.5851V11.4371H26.0681V19.8371Z" fill="currentColor"></path>
                            <path d="M36.2103 8.08203V12.205C35.6596 11.5708 34.8417 11.1868 33.7234 11.1868C31.537 11.1868 29.7344 13.1064 29.7344 15.5936C29.7344 18.0807 31.537 20.0004 33.7234 20.0004C34.8417 20.0004 35.6596 19.6165 36.2103 18.9821V19.7667H38.714V8.08203H36.2103ZM34.2242 17.6301C33.0725 17.6301 32.238 16.8455 32.238 15.5936C32.238 14.3417 33.0725 13.5571 34.2242 13.5571C35.3758 13.5571 36.2103 14.3417 36.2103 15.5936C36.2103 16.8455 35.3758 17.6301 34.2242 17.6301Z" fill="currentColor"></path>
                            <path d="M42.4462 16.5936H48.4093C48.4765 16.2763 48.5101 15.9425 48.5101 15.5918C48.5101 13.0704 46.696 11.1836 44.2436 11.1836C41.5895 11.1836 39.7754 13.1038 39.7754 15.5918C39.7754 18.0797 41.5558 19.9999 44.4283 19.9999C46.0241 19.9999 47.2671 19.4155 48.0902 18.2801L46.0744 17.1279C45.7385 17.4952 45.1506 17.7624 44.4619 17.7624C43.5381 17.7624 42.7654 17.4618 42.4462 16.5936ZM42.3958 14.7235C42.631 13.8719 43.2692 13.4044 44.2267 13.4044C44.9826 13.4044 45.7385 13.755 46.0072 14.7235H42.3958Z" fill="currentColor"></path>
                            <path d="M54.5054 11.1836C53.3942 11.1836 52.5524 11.5876 52.0978 12.2105V11.4193H49.5723V19.8367H52.0978V15.2408C52.0978 14.0456 52.7376 13.5068 53.6636 13.5068C54.4717 13.5068 55.1284 13.995 55.1284 15.0387V19.8367H57.6539V14.6684C57.6539 12.3957 56.2059 11.1836 54.5054 11.1836Z" fill="currentColor"></path>
                            <path d="M63.9377 13.815V11.4048H62.2207V9.06152L59.7204 9.81477V11.4048H58.3867V13.815H59.7204V16.7775C59.7204 19.1208 60.6706 20.1083 63.9377 19.7735V17.4972C62.8375 17.5642 62.2207 17.4972 62.2207 16.7775V13.815H63.9377Z" fill="currentColor"></path>
                            <path d="M66.5919 20.0001C67.4632 20.0001 68.1837 19.2796 68.1837 18.4082C68.1837 17.537 67.4632 16.8164 66.5919 16.8164C65.7205 16.8164 65 17.537 65 18.4082C65 19.2796 65.7205 20.0001 66.5919 20.0001Z" fill="currentColor"></path>
                            <path d="M70.5923 10.6979C71.4144 10.6979 72.1024 10.0091 72.1024 9.18579C72.1024 8.36268 71.4144 7.67383 70.5923 7.67383C69.77 7.67383 69.082 8.36268 69.082 9.18579C69.082 10.0091 69.77 10.6979 70.5923 10.6979ZM69.3337 19.8371H71.8508V11.4371H69.3337V19.8371Z" fill="currentColor"></path>
                            <path d="M77.3669 19.9999C79.8348 19.9999 81.8159 18.0797 81.8159 15.5918C81.8159 13.1038 79.8348 11.1836 77.3669 11.1836C74.899 11.1836 72.918 13.1038 72.918 15.5918C72.918 18.0797 74.899 19.9999 77.3669 19.9999ZM77.3669 17.562C76.2757 17.562 75.4363 16.7773 75.4363 15.5918C75.4363 14.4062 76.2757 13.6215 77.3669 13.6215C78.4582 13.6215 79.2976 14.4062 79.2976 15.5918C79.2976 16.7773 78.4582 17.562 77.3669 17.562Z" fill="currentColor"></path>
                            <path d="M4.10156 19.8367H6.63217V13.3877C6.63217 13.3877 4.10156 13.8404 4.10156 16.2553V19.8367Z" fill="currentColor"></path>
                        </svg>
                    </a>
                </div>
                <div className="flex flex-col text-xs font-normal text-slate-600 dark:text-slate-200 text-center justify-center">
                    <div className="flex justify-center space-x-1">
                        <a className="text-slate-600 dark:text-slate-200 mb-4" target="_blank" rel="noreferrer" href="https://policy.medium.com/medium-privacy-policy-f03bf92035c9">Privacy policy</a>
                        <p>·</p>
                        <a className="text-slate-600 dark:text-slate-200 mb-4" target="_blank" rel="noreferrer" href="https://policy.medium.com/medium-terms-of-service-9db0094a1e0f">Terms of service</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page