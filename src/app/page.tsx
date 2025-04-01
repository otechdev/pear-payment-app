import Image from "next/image";
import Link from "next/link";
import PhoneMockup from "@/components/PhoneMockup";
import PearLogo from "@/components/PearLogo";
import WaitlistForm from "@/components/WaitlistForm";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Navbar */}
      <header className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 max-w-6xl py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <PearLogo size={40} />
              <span className="text-xl font-bold text-gray-800">Pear</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="#features" className="text-gray-600 hover:text-[#4CBFB6] transition-colors">Features</Link>
              <Link href="#how-it-works" className="text-gray-600 hover:text-[#4CBFB6] transition-colors">How it works</Link>
              <Link href="#testimonials" className="text-gray-600 hover:text-[#4CBFB6] transition-colors">Testimonials</Link>
              <Link href="#download" className="bg-[#4CBFB6] hover:bg-[#3da99f] text-white px-4 py-2 rounded-md transition-colors">Download</Link>
            </nav>
            <button 
              className="md:hidden text-gray-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
          
          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 bg-white">
              <div className="flex flex-col space-y-4">
                <Link 
                  href="#features" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-600 hover:text-[#4CBFB6] transition-colors px-2 py-2"
                >
                  Features
                </Link>
                <Link 
                  href="#how-it-works" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-600 hover:text-[#4CBFB6] transition-colors px-2 py-2"
                >
                  How it works
                </Link>
                <Link 
                  href="#testimonials" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-600 hover:text-[#4CBFB6] transition-colors px-2 py-2"
                >
                  Testimonials
                </Link>
                <Link 
                  href="#download" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-[#4CBFB6] hover:bg-[#3da99f] text-white px-4 py-2 rounded-md transition-colors inline-block w-fit"
                >
                  Download
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full bg-[#4CBFB6] text-white py-12 md:py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 space-y-4 md:space-y-6">
              <div className="flex items-center gap-3 mb-2 md:mb-4">
                <div className="hidden md:block">
                  <PearLogo size={60} primaryColor="#ffffff" secondaryColor="#9AE3DC" />
                </div>
                <div className="md:hidden">
                  <PearLogo size={40} primaryColor="#ffffff" secondaryColor="#9AE3DC" />
                </div>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                The future of payment!<br />With Pear
              </h1>
              <p className="text-lg md:text-xl">
                No more fumbling with cash or waiting in line - Pear makes payments fast, 
                easy, and convenient.
              </p>
              <div className="pt-2 md:pt-4 flex flex-col sm:flex-row gap-3">
                <Link 
                  href="#download" 
                  className="bg-orange-400 hover:bg-orange-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-md font-medium text-base md:text-lg transition-colors duration-300 text-center"
                >
                  Get Started
                </Link>
                <Link 
                  href="#features" 
                  className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-4 md:px-6 py-2 md:py-3 rounded-md font-medium text-base md:text-lg transition-colors duration-300 text-center"
                >
                  Learn More
                </Link>
              </div>
              
              <div className="pt-4 md:pt-6">
                <WaitlistForm 
                  className="bg-white/10 backdrop-blur-sm p-4 rounded-lg"
                  buttonText="Get Early Access" 
                  placeholderText="Your email address" 
                  successMessage="You're on the list! We'll be in touch soon."
                />
              </div>
            </div>
            <div className="md:w-1/2 relative mt-8 md:mt-0 flex justify-center">
              <PhoneMockup>
                <div className="h-full w-full flex flex-col bg-[#4CBFB6]">
                  {/* App Header */}
                  <div className="p-6 text-white">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm">Good Evening, Jane 👋</p>
                        <p className="text-xl font-semibold text-orange-400">EmeraldClothings House</p>
                      </div>
                      <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                        </svg>
                        <span className="absolute -top-2 -right-2 bg-orange-400 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">10</span>
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <div className="flex items-center">
                        <p className="text-lg">Your balance</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                      </div>
                      <p className="text-4xl font-bold mt-1">₦22,450,000.00</p>
                      <p className="text-sm mt-1">ID: 4512345678</p>
                    </div>
                    
                    <div className="mt-8 bg-orange-100 p-4 rounded-xl text-gray-800">
                      <h3 className="font-bold text-lg">Faster payments mean happier customers</h3>
                      <p className="text-sm mt-1">Save them time and hassle with a seamless payment experience that shows you value their convenience.</p>
                      <div className="flex justify-end">
                        <div className="w-[80px]">
                          <svg width="80" height="50" viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="80" height="50" fill="none"/>
                            <circle cx="60" cy="30" r="15" fill="#4CBFB6"/>
                            <rect x="10" y="15" width="25" height="25" rx="5" fill="#4CBFB6"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Transactions */}
                  <div className="flex-1 bg-white rounded-t-3xl p-6">
                    <div className="flex justify-between items-center">
                      <h3 className="font-bold text-lg">Recent Transactions</h3>
                      <Link href="#" className="text-[#4CBFB6]">See all</Link>
                    </div>
                    
                    <div className="mt-4 border-b pb-4">
                      <div className="flex justify-between items-center mb-1">
                        <p className="text-sm text-gray-500">July 20, 2023 10:26:00 PM</p>
                        <p className="font-bold">₦ 300,000</p>
                      </div>
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-[#4CBFB6] flex items-center justify-center text-white">
                          ME
                        </div>
                        <div className="ml-3">
                          <p className="font-medium">Martha Enove</p>
                          <p className="text-sm text-gray-500">First Bank</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <div className="flex justify-between items-center mb-1">
                        <p className="text-sm text-gray-500">July 19, 2023 02:26:00 PM</p>
                        <p className="font-bold">₦ 1,000,000</p>
                      </div>
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-[#4CBFB6] flex items-center justify-center text-white">
                          OT
                        </div>
                        <div className="ml-3">
                          <p className="font-medium">Oluwajokotade Temilade</p>
                          <p className="text-sm text-gray-500">UBA</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom Navigation */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#4CBFB6] flex justify-between items-center px-12">
                    <div className="flex flex-col items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                      <span className="text-white text-xs mt-1">Home</span>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                      <span className="text-white text-xs mt-1">Account</span>
                    </div>
                  </div>
                  
                  {/* Center QR Button */}
                  <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#4CBFB6] rounded-full border-4 border-white flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <rect width="5" height="5" x="3" y="3" rx="1"></rect>
                      <rect width="5" height="5" x="16" y="3" rx="1"></rect>
                      <rect width="5" height="5" x="3" y="16" rx="1"></rect>
                      <path d="M21 16h-3a2 2 0 0 0-2 2v3"></path>
                      <path d="M21 21v.01"></path>
                      <path d="M12 7v3a2 2 0 0 1-2 2H7"></path>
                      <path d="M3 12h.01"></path>
                      <path d="M12 3h.01"></path>
                      <path d="M12 16v.01"></path>
                      <path d="M16 12h1"></path>
                      <path d="M21 12v.01"></path>
                      <path d="M12 21v-1"></path>
                    </svg>
                  </div>
                </div>
              </PhoneMockup>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 md:py-20 w-full">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16">Faster payments mean happier customers</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-[#4CBFB6] flex items-center justify-center rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M21 8v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"></path>
                  <line x1="6" x2="6" y1="11" y2="11"></line>
                  <line x1="8" x2="8" y1="11" y2="11"></line>
                  <line x1="10" x2="10" y1="11" y2="11"></line>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Receive Payments</h3>
              <p className="text-gray-600">Accept payments from customers using QR codes. Simple, fast, and no extra hardware required.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-[#4CBFB6] flex items-center justify-center rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  <path d="M3 9h18"></path>
                  <path d="M9 21V9"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Track Transactions</h3>
              <p className="text-gray-600">Monitor all your business transactions in one place with detailed analytics and reports.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-[#4CBFB6] flex items-center justify-center rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M12.5 2H11a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-8.5"></path>
                  <rect x="7" y="14" width="6" height="3" rx="1.5"></rect>
                  <path d="M11 5a1 1 0 1 0 2 0 1 1 0 1 0-2 0"></path>
                  <path d="M18 2h-5"></path>
                  <path d="M18 5V2h3v3m-3-3-3 3"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Generate QR Codes</h3>
              <p className="text-gray-600">Create custom QR codes for in-store and online transactions, making payments seamless.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="w-full bg-gray-50 py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16">How Pear Works</h2>
          
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <PhoneMockup>
                <div className="h-full w-full flex flex-col bg-white">
                  {/* QR Payment modal */}
                  <div className="h-full w-full bg-[#4CBFB6]/20 flex items-center justify-center p-6">
                    <div className="bg-white rounded-xl p-6 shadow-lg w-full max-w-sm">
                      <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-bold">Confirm Payment</h3>
                        <button className="text-gray-400">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 6 6 18"></path>
                            <path d="m6 6 12 12"></path>
                          </svg>
                        </button>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <p className="text-[#4CBFB6]">Account Number</p>
                          <p>3066558568</p>
                        </div>
                        
                        <div className="flex justify-between">
                          <p className="text-[#4CBFB6]">Business Name</p>
                          <p>Bliss Naturale Stores</p>
                        </div>
                      </div>
                      
                      <button className="w-full bg-[#4CBFB6] text-white rounded-md py-3 mt-8 font-medium">
                        Generate QR code
                      </button>
                      
                      <p className="text-xs text-center mt-12 text-gray-500">
                        A service charge of 2% will be added to each transaction made through Pear.
                      </p>
                    </div>
                  </div>
                </div>
              </PhoneMockup>
            </div>
            
            <div className="md:w-1/2 space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#4CBFB6] text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Set up your business account</h3>
                  <p className="text-gray-600">Register your business name, bank account, and get your unique merchant ID.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#4CBFB6] text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Generate QR codes</h3>
                  <p className="text-gray-600">Create payment QR codes for your customers to scan with their Pear app.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#4CBFB6] text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
      <div>
                  <h3 className="text-xl font-semibold mb-2">Get paid instantly</h3>
                  <p className="text-gray-600">Funds are transferred to your account immediately after customer confirmation.</p>
                </div>
      </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#4CBFB6] text-white rounded-full flex items-center justify-center font-bold text-xl">4</div>
      <div>
                  <h3 className="text-xl font-semibold mb-2">Track all transactions</h3>
                  <p className="text-gray-600">Monitor your sales, view transaction history, and download reports anytime.</p>
                </div>
              </div>
            </div>
          </div>
      </div>
      </section>

      {/* QR Code Section */}
      <section className="py-20 w-full">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-4xl font-bold">Quick and secure QR code payments</h2>
              <p className="text-xl text-gray-600">
                Scan, pay and go with Pear! With a secure and easy-to-use platform that makes payments a breeze.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#4CBFB6] flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <p className="text-gray-600">Generate unique QR codes for each transaction</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#4CBFB6] flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <p className="text-gray-600">Share QR codes with customers for easy payment</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#4CBFB6] flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <p className="text-gray-600">Instant payment confirmation and receipt</p>
                </li>
              </ul>
            </div>
            
            <div className="md:w-1/2">
              <PhoneMockup>
                <div className="h-full w-full bg-gray-50 flex flex-col p-8">
                  <div className="flex justify-between items-center mb-6">
                    <button className="text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m15 18-6-6 6-6"></path>
                      </svg>
                    </button>
                    <p className="text-xl font-bold">Print Code</p>
                    <div></div>
                  </div>
                  
                  <div className="bg-white p-8 rounded-xl shadow-lg flex-1 flex flex-col items-center justify-between">
                    <div className="w-56 h-56 bg-[#4CBFB6]/20 rounded-xl flex items-center justify-center mb-4">
                      <div className="w-52 h-52 border-8 border-[#4CBFB6] rounded-xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-6 h-6 border-t-8 border-l-8 border-[#4CBFB6]"></div>
                        <div className="absolute top-0 right-0 w-6 h-6 border-t-8 border-r-8 border-[#4CBFB6]"></div>
                        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-8 border-l-8 border-[#4CBFB6]"></div>
                        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-8 border-r-8 border-[#4CBFB6]"></div>
                        
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="grid grid-cols-5 grid-rows-5 gap-1 w-40 h-40">
                            {Array(25).fill(0).map((_, i) => (
                              <div key={i} className={`bg-[#4CBFB6] ${Math.random() > 0.5 ? 'opacity-100' : 'opacity-30'}`}></div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-400 mb-4">Merchant ID: 4512345678</p>
                    
                    <p className="text-sm text-gray-500 mb-1">https://pear-scan-qr-code-demo.com/</p>
                    
                    <button className="flex items-center justify-center gap-2 text-[#4CBFB6] mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                        <polyline points="16 6 12 2 8 6"></polyline>
                        <line x1="12" y1="2" x2="12" y2="15"></line>
                      </svg>
                      Share Code
                    </button>
                    
                    <button className="w-full bg-orange-400 text-white py-3 rounded-md font-medium">
                      Download QR code
                    </button>
                    
                    <button className="w-full bg-[#4CBFB6] text-white py-3 rounded-md font-medium mt-3">
                      Back Home
                    </button>
                  </div>
                </div>
              </PhoneMockup>
            </div>
          </div>
        </div>
      </section>
      
      {/* Dark Theme QR Code Showcase - Based on user image */}
      <section className="w-full bg-[#011b1a] text-white py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-6">Receive instant payment from customers with a QR Code</h2>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <div className="relative w-[260px] h-[520px] transform rotate-[-6deg] shadow-2xl rounded-[36px]">
              <PhoneMockup>
                <div className="h-full w-full bg-white p-4">
                  <div className="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <p className="text-gray-800 text-sm ml-2">ScanCode</p>
                  </div>
                  
                  <div className="flex justify-center py-6">
                    <div className="w-56 h-56 border-4 border-[#4CBFB6] rounded-xl flex items-center justify-center">
                      <div className="w-48 h-48">
                        <div className="text-[#4CBFB6]">
                          <svg viewBox="0 0 160 160" className="w-full h-full">
                            <rect x="10" y="10" width="30" height="30" fill="#4CBFB6" />
                            <rect x="40" y="10" width="10" height="10" fill="#4CBFB6" />
                            <rect x="60" y="10" width="10" height="10" fill="#4CBFB6" />
                            <rect x="80" y="10" width="30" height="30" fill="#4CBFB6" />
                            <rect x="120" y="10" width="30" height="30" fill="#4CBFB6" />
                            
                            <rect x="10" y="40" width="10" height="10" fill="#4CBFB6" />
                            <rect x="30" y="40" width="10" height="10" fill="#4CBFB6" />
                            <rect x="50" y="40" width="10" height="10" fill="#4CBFB6" />
                            <rect x="80" y="40" width="10" height="10" fill="#4CBFB6" />
                            <rect x="120" y="40" width="10" height="10" fill="#4CBFB6" />
                            <rect x="140" y="40" width="10" height="10" fill="#4CBFB6" />
                            
                            <rect x="10" y="60" width="10" height="10" fill="#4CBFB6" />
                            <rect x="30" y="60" width="10" height="10" fill="#4CBFB6" />
                            <rect x="50" y="60" width="10" height="10" fill="#4CBFB6" />
                            <rect x="70" y="60" width="10" height="10" fill="#4CBFB6" />
                            <rect x="90" y="60" width="10" height="10" fill="#4CBFB6" />
                            <rect x="120" y="60" width="10" height="10" fill="#4CBFB6" />
                            <rect x="140" y="60" width="10" height="10" fill="#4CBFB6" />
                            
                            <rect x="10" y="80" width="30" height="30" fill="#4CBFB6" />
                            <rect x="50" y="80" width="60" height="10" fill="#4CBFB6" />
                            <rect x="120" y="80" width="30" height="30" fill="#4CBFB6" />
                            
                            <rect x="50" y="100" width="10" height="10" fill="#4CBFB6" />
                            <rect x="70" y="100" width="10" height="10" fill="#4CBFB6" />
                            <rect x="90" y="100" width="10" height="10" fill="#4CBFB6" />
                            
                            <rect x="10" y="120" width="10" height="10" fill="#4CBFB6" />
                            <rect x="30" y="120" width="70" height="10" fill="#4CBFB6" />
                            <rect x="110" y="120" width="10" height="10" fill="#4CBFB6" />
                            <rect x="130" y="120" width="20" height="10" fill="#4CBFB6" />
                            
                            <rect x="10" y="140" width="10" height="10" fill="#4CBFB6" />
                            <rect x="30" y="140" width="10" height="10" fill="#4CBFB6" />
                            <rect x="50" y="140" width="10" height="10" fill="#4CBFB6" />
                            <rect x="70" y="140" width="20" height="10" fill="#4CBFB6" />
                            <rect x="100" y="140" width="10" height="10" fill="#4CBFB6" />
                            <rect x="120" y="140" width="10" height="10" fill="#4CBFB6" />
                            <rect x="140" y="140" width="10" height="10" fill="#4CBFB6" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-2 text-center">
                    <p className="text-xs text-gray-500">https://pear-scan-qr-code-demo.com/</p>
                  </div>
                  
                  <div className="flex flex-col gap-3 mt-8">
                    <button className="w-full bg-orange-400 text-white py-3 rounded-md font-medium">
                      Download QR code
                    </button>
                    
                    <button className="w-full bg-[#4CBFB6] text-white py-3 rounded-md font-medium">
                      Back Home
                    </button>
                  </div>
                  
                  <p className="text-xs text-gray-500 mt-3 text-center">
                    This is a unique QR code for your use only. Get a new code each time you pay with Pear.
                  </p>
                </div>
              </PhoneMockup>
            </div>
            
            <div className="relative w-[260px] h-[520px] transform rotate-[6deg] shadow-2xl rounded-[36px]">
              <PhoneMockup>
                <div className="h-full w-full bg-[#016b63] flex flex-col">
                  <div className="flex-1 flex flex-col items-center justify-center p-8">
                    <div className="bg-white rounded-xl shadow-lg p-6 w-full">
                      <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-[#4CBFB6] rounded-full flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <h3 className="text-[#016b63] text-xl font-bold">Payment Success</h3>
                        <p className="text-gray-500 text-xs mt-1">
                          Payment from Martha Enove was successful
                        </p>
                        
                        <p className="font-bold text-xl mt-4">₦ 300,000</p>
                      </div>
                    </div>
                    
                    <button className="w-full bg-orange-400 text-white py-3 rounded-md font-medium mt-8">
                      Receive another Payment
                    </button>
                  </div>
                </div>
              </PhoneMockup>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-300 max-w-xl mx-auto">
              With a secure and easy-to-use platform that makes payments a breeze, Pear is transforming how businesses handle transactions.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 w-full bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16">What Our Customers Say</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#4CBFB6] rounded-full flex items-center justify-center text-white text-xl font-bold">
                  ME
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Martha Enove</h3>
                  <p className="text-gray-500">First Bank</p>
                </div>
              </div>
              <p className="text-gray-600">&quot;Pear has transformed how my business handles payments. My customers love the quick checkout process, and I love how easily I can track all transactions.&quot;</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#4CBFB6] rounded-full flex items-center justify-center text-white text-xl font-bold">
                  OT
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Oluwajokotade Temilade</h3>
                  <p className="text-gray-500">UBA</p>
                </div>
              </div>
              <p className="text-gray-600">&quot;The QR code payment system is so intuitive. I&apos;ve increased my sales by 30% since switching to Pear for my business transactions.&quot;</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#4CBFB6] text-white py-16" id="download">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to transform your business?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Join thousands of businesses already using Pear to streamline their payment processes and delight their customers.
          </p>
          
          <div className="max-w-xl mx-auto mb-12">
            <WaitlistForm 
              buttonText="Join Early Access" 
              placeholderText="Enter your email for early access" 
              successMessage="Thanks for joining! We'll notify you when Pear is available for download."
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#4CBFB6] hover:bg-gray-100 px-8 py-3 rounded-md font-medium text-lg transition-colors duration-300 flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path>
                <path d="M10 2c1 .5 2 2 2 5"></path>
              </svg>
              App Store
            </button>
            <button className="bg-white text-[#4CBFB6] hover:bg-gray-100 px-8 py-3 rounded-md font-medium text-lg transition-colors duration-300 flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="3 2 3 22 21 12 3 2"></polygon>
              </svg>
              Google Play
            </button>
        </div>
          <p className="mt-8 text-sm opacity-80">
            A service charge of 2% will be added to each transaction made through Pear.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-white py-10">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 flex items-center gap-3">
              <PearLogo size={40} primaryColor="#4CBFB6" secondaryColor="#9AE3DC" />
              <div>
                <h2 className="text-2xl font-bold">Pear</h2>
                <p className="text-gray-400 mt-1">The future of payment</p>
              </div>
            </div>
            <div className="flex gap-8">
              <Link href="#" className="hover:text-[#4CBFB6] transition-colors">About</Link>
              <Link href="#" className="hover:text-[#4CBFB6] transition-colors">Features</Link>
              <Link href="#" className="hover:text-[#4CBFB6] transition-colors">Pricing</Link>
              <Link href="#" className="hover:text-[#4CBFB6] transition-colors">Contact</Link>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p className="mb-2">© {new Date().getFullYear()} Pear. All rights reserved.</p>
            <div className="text-xs mt-2">
              <Link href="/admin" className="text-gray-500 hover:text-[#4CBFB6]">Admin Dashboard</Link>
            </div>
        </div>
      </div>
      </footer>
    </main>
  );
}
