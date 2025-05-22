"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, FileText, ImageIcon, Video, Eye } from "lucide-react"
import Link from "next/link"

// Sample IP data
const sampleIPs = [
  {
    id: "ip-001",
    name: "Digital Landscape Artwork",
    description: "A futuristic digital landscape featuring neon cities and cyberpunk elements.",
    type: "image",
    keywords: ["digital art", "landscape", "cyberpunk", "neon"],
    thumbnail: "https://img.freepik.com/free-vector/flat-design-low-poly-landscape-illustration_52683-119875.jpg?semt=ais_hybrid&w=740",
    creator: "Alex Chen",
    dateCreated: "2025-04-15",
  },
  {
    id: "ip-002",
    name: "Blockchain Whitepaper",
    description: "A comprehensive whitepaper on next-generation blockchain technology and its applications.",
    type: "text",
    keywords: ["blockchain", "whitepaper", "technology", "crypto"],
    thumbnail: "https://cdn.prod.website-files.com/63ce7b0ee546a54b9c8f3f25/6647278fef28bfd2298d91c8_crypto_whitepaper.png",
    creator: "Satoshi Nakamura",
    dateCreated: "2025-03-21",
  },
  {
    id: "ip-003",
    name: "AI Ethics Tutorial",
    description: "Educational video explaining the ethical considerations in artificial intelligence development.",
    type: "video",
    keywords: ["AI", "ethics", "tutorial", "education"],
    thumbnail: "data:image/jpeg;base64,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",
    creator: "Dr. Maria Rodriguez",
    dateCreated: "2025-05-02",
  },
  {
    id: "ip-004",
    name: "Quantum Computing Research Paper",
    description: "Original research on quantum computing algorithms for cryptographic applications.",
    type: "text",
    keywords: ["quantum", "research", "cryptography", "computing"],
    thumbnail: "data:image/png;base64,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",
    creator: "Prof. James Wilson",
    dateCreated: "2025-02-18",
  },
  {
    id: "ip-005",
    name: "Sustainable Architecture Designs",
    description: "Collection of innovative architectural designs focusing on sustainability and eco-friendliness.",
    type: "image",
    keywords: ["architecture", "sustainable", "design", "eco-friendly"],
    thumbnail: "https://i.pinimg.com/736x/f0/ec/bc/f0ecbc0559520c6f9d0b15db538338bf.jpg",
    creator: "Emma Greenfield",
    dateCreated: "2025-04-30",
  },
  {
    id: "ip-006",
    name: "Blockchain Implementation Guide",
    description: "Step-by-step video tutorial on implementing blockchain in existing business infrastructure.",
    type: "video",
    keywords: ["blockchain", "tutorial", "business", "implementation"],
    thumbnail: "https://i.pinimg.com/736x/34/d8/13/34d81304c0ef29e0982125a0c3675d9b.jpg",
    creator: "Michael Johnson",
    dateCreated: "2025-03-15",
  },
  {
    id: "ip-007",
    name: "Neural Network Visualization",
    description: "Interactive visualization of neural network architecture and data processing.",
    type: "image",
    keywords: ["neural network", "AI", "visualization", "data"],
    thumbnail: "https://i.pinimg.com/736x/02/1e/68/021e6886edd224b252f3b1fd88bd3285.jpg",
    creator: "Dr. Alan Turing",
    dateCreated: "2025-05-10",
  },
  {
    id: "ip-008",
    name: "Smart Contract Templates",
    description: "Collection of legally-vetted smart contract templates for various business applications.",
    type: "text",
    keywords: ["smart contracts", "legal", "templates", "business"],
    thumbnail: "https://i.pinimg.com/736x/07/f3/aa/07f3aa21eb5c7e4a74cb3089356a3377.jpg",
    creator: "Legal Tech Solutions",
    dateCreated: "2025-04-05",
  },
]

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Filter IPs based on search query
  const filteredIPs = searchQuery
    ? sampleIPs.filter(
      (ip) =>
        ip.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ip.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ip.keywords.some((keyword) => keyword.toLowerCase().includes(searchQuery.toLowerCase())),
    )
    : sampleIPs

  // Get icon based on content type
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "text":
        return <FileText className="h-5 w-5 text-blue-400" />
      case "image":
        return <ImageIcon className="h-5 w-5 text-green-400" />
      case "video":
        return <Video className="h-5 w-5 text-red-400" />
      default:
        return <FileText className="h-5 w-5 text-blue-400" />
    }
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black to-slate-900 bg-black text-white p-6">
      <div className="max-w-7xl z-50 relative mx-auto">
        <div className="flex justify-between i ">
          <div>
            <h1 className="text-4xl font-bold mb-2">
              <span className="text-purple-400">Explore</span> Intellectual Property
            </h1>
            <p className="text-gray-300 text-center mb-10">
              Discover and browse through protected intellectual property assets on our blockchain platform
            </p>
          </div>
          <div>
            <Button>
              <Link href='/addIP' className="text-purple-400">Add New IP</Link>
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-10 max-w-2xl ">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <Input
            type="search"
            placeholder="Search by name, description or keywords..."
            className="pl-10 bg-gray-800 border-gray-700 text-white h-12"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* IP Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredIPs.map((ip) => (
            <Card
              key={ip.id}
              className="bg-gray-900 border-gray-800 overflow-hidden hover:border-purple-500 transition-all"
            >
              <div className="relative h-40 overflow-hidden">
                <img src={ip.thumbnail || "/placeholder.svg"} alt={ip.name} className="w-full h-full object-cover" />
                <div className="absolute top-2 right-2">{getTypeIcon(ip.type)}</div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-white">{ip.name}</CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-gray-400 text-sm line-clamp-2 mb-3">{ip.description}</p>
                <div className="flex flex-wrap gap-2">
                  {ip.keywords.map((keyword, index) => (
                    <Badge key={index} className="bg-gray-800 hover:bg-gray-700 text-gray-300">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-2 flex justify-between items-center">
                <div className="text-xs text-gray-500">
                  By {ip.creator} • {new Date(ip.dateCreated).toLocaleDateString()}
                </div>
                <Link href={`/${ip.id}`} className="flex items-center">
                  <Button variant="ghost" size="sm" className="text-purple-400 hover:text-purple-300 hover:bg-gray-800">
                    <Eye className="h-4 w-4 mr-1" />
                    Details
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredIPs.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl">No intellectual property found matching your search.</p>
            <Button
              variant="outline"
              className="mt-4 border-purple-500 text-purple-400 hover:bg-purple-900/20"
              onClick={() => setSearchQuery("")}
            >
              Clear Search
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
