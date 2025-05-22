import Link from "next/link";
import { ConnectWalletButton } from "../connect-wallet-button";

export function Navbar() {
    return (
        <header className="container mx-auto px-4 py-6 flex items-center justify-between">
            <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg"></div>
                <h1 className="text-xl font-bold">MetaIP</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
                <Link href='/' className="text-gray-300 hover:text-white transition-colors">
                    Home
                </Link>
                <Link href="#features" className="text-gray-300 hover:text-white transition-colors">
                    Features
                </Link>
                <Link href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">
                    How it Works
                </Link>
                <Link href="#testimonials" className="text-gray-300 hover:text-white transition-colors">
                    Testimonials
                </Link>
                <Link href="#faq" className="text-gray-300 hover:text-white transition-colors">
                    FAQ
                </Link>
            </nav>
            <ConnectWalletButton />
        </header>
    )
}