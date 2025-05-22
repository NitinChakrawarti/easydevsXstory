import Link from "next/link"
import { ConnectWalletButton } from "./connect-wallet-button"
import { Twitter, Github, Linkedin, Instagram } from "lucide-react"

export function FooterSection() {
  return (
    <footer className="border-t border-white/10 pt-16 pb-8 relative bg-transparent">
      <div className="container mx-auto px-4">
        {/* <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center"> */}
          <p className="text-gray-400 text-sm">© 2025 MetaIP. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-white text-sm">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm">
              Cookie Policy
            </Link>
          </div>
        {/* </div> */}
      </div>
    </footer>
  )
}
