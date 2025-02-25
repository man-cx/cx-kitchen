import Link from 'next/link';
import { Logo } from '../page';

export default function Footer() {
  return (
    <footer className="bg-[#FFF4E6] border-t border-[#F1C40F]">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="space-y-4">
            <Logo />
            <p className="text-[#333333]">
              Empowering businesses with AI-powered solutions for streamlined workflows and enhanced productivity.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-[#D35400] hover:text-[#F1C40F] transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-[#D35400] hover:text-[#F1C40F] transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold text-[#D35400] tracking-wider uppercase">
              Solutions
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/solutions/workflow-automation" className="text-base text-[#333333] hover:text-[#D35400] transition-colors">
                  Workflow Automation
                </Link>
              </li>
              <li>
                <Link href="/solutions/client-management" className="text-base text-[#333333] hover:text-[#D35400] transition-colors">
                  Client Management
                </Link>
              </li>
              <li>
                <Link href="/solutions/productivity-tools" className="text-base text-[#333333] hover:text-[#D35400] transition-colors">
                  Productivity Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-[#D35400] tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/about" className="text-base text-[#333333] hover:text-[#D35400] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-base text-[#333333] hover:text-[#D35400] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-[#D35400] tracking-wider uppercase">
              Stay Updated
            </h3>
            <p className="mt-4 text-base text-[#333333]">
              Get the latest updates on AI innovations and productivity solutions.
            </p>
            <form className="mt-4">
              <div className="flex">
                <input
                  type="email"
                  className="form-input min-w-0 flex-1 block w-full px-3 py-2 rounded-l-md border border-[#F1C40F] text-[#333333] placeholder-[#666666] focus:ring-[#D35400] focus:border-[#D35400] sm:text-sm"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="-ml-px relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-[#333333] bg-[#F1C40F] hover:bg-[#D35400] hover:text-[#FFF4E6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D35400] transition-colors shadow-sm hover:shadow-md"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-8 border-t border-[#F1C40F] pt-8">
          <p className="text-base text-[#666666] text-center">
            © {new Date().getFullYear()} CX-Kitchen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 