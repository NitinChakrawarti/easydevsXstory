import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ConnectWalletButton } from "./connect-wallet-button"

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-24 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-16">
        <div className="space-y-8">
          <Badge className="bg-purple-900/30 text-purple-300 border-purple-500 px-4 py-1 text-sm rounded-full">
            Blockchain-Powered IP Protection
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Secure Your{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Intellectual Property
            </span>{" "}
            on the Blockchain
          </h1>
          <p className="text-xl text-gray-300 md:pr-12">
            Register, timestamp, and protect your creative work with immutable blockchain records. Sell usage rights and
            enforce legal protection backed by verifiable proof of ownership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="outline" className=" bg-gradient-to-r from-purple-400 to-blue-400 text-white hover:text-black hover:bg- ">
              Get Started
            </Button>
            <Button variant="outline" className="border-purple-500 text-black hover:text-white hover:bg-purple-900/20">
              Learn More
            </Button>
          </div>
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 border-2 border-black"
                />
              ))}
            </div>
            <p className="text-gray-300">
             Many creators already protected
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="w-full h-[400px] md:h-[500px] relative rounded-2xl overflow-hidden border border-purple-500/20 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-blue-900/40"></div>
            <Image
              src="/placeholder.svg?height=500&width=600"
              alt="IP Protection Platform"
              width={600}
              height={500}
              className="object-cover w-full h-full"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <div className="p-6 rounded-xl backdrop-blur-md bg-black/30 border border-white/10 shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm text-gray-300">IP Certificate #103952</div>
                    <div className="text-lg font-semibold">Digital Artwork - "Future City"</div>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex justify-between">
                    <span>Creator:</span>
                    <span className="text-white">0x78e4...d8f1</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Timestamp:</span>
                    <span className="text-white">May 15, 2025 14:30 UTC</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Status:</span>
                    <span className="text-green-400">Verified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full bg-purple-600 blur-[120px] opacity-30"></div>
          <div className="absolute -top-6 -left-6 w-40 h-40 rounded-full bg-blue-600 blur-[120px] opacity-30"></div>
        </div>
      </div>
    </section>
  )
}
