"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, FileText, ImageIcon, Video, Eye } from "lucide-react"

// Sample IP data
const sampleIPs = [
  {
    id: "ip-001",
    name: "Digital Landscape Artwork",
    description: "A futuristic digital landscape featuring neon cities and cyberpunk elements.",
    type: "image",
    keywords: ["digital art", "landscape", "cyberpunk", "neon"],
    thumbnail: "/placeholder.svg?height=200&width=300",
    creator: "Alex Chen",
    dateCreated: "2025-04-15",
  },
  {
    id: "ip-002",
    name: "Blockchain Whitepaper",
    description: "A comprehensive whitepaper on next-generation blockchain technology and its applications.",
    type: "text",
    keywords: ["blockchain", "whitepaper", "technology", "crypto"],
    thumbnail: "/placeholder.svg?height=200&width=300",
    creator: "Satoshi Nakamura",
    dateCreated: "2025-03-21",
  },
  {
    id: "ip-003",
    name: "AI Ethics Tutorial",
    description: "Educational video explaining the ethical considerations in artificial intelligence development.",
    type: "video",
    keywords: ["AI", "ethics", "tutorial", "education"],
    thumbnail: "/placeholder.svg?height=200&width=300",
    creator: "Dr. Maria Rodriguez",
    dateCreated: "2025-05-02",
  },
  {
    id: "ip-004",
    name: "Quantum Computing Research Paper",
    description: "Original research on quantum computing algorithms for cryptographic applications.",
    type: "text",
    keywords: ["quantum", "research", "cryptography", "computing"],
    thumbnail: "/placeholder.svg?height=200&width=300",
    creator: "Prof. James Wilson",
    dateCreated: "2025-02-18",
  },
  {
    id: "ip-005",
    name: "Sustainable Architecture Designs",
    description: "Collection of innovative architectural designs focusing on sustainability and eco-friendliness.",
    type: "image",
    keywords: ["architecture", "sustainable", "design", "eco-friendly"],
    thumbnail: "/placeholder.svg?height=200&width=300",
    creator: "Emma Greenfield",
    dateCreated: "2025-04-30",
  },
  {
    id: "ip-006",
    name: "Blockchain Implementation Guide",
    description: "Step-by-step video tutorial on implementing blockchain in existing business infrastructure.",
    type: "video",
    keywords: ["blockchain", "tutorial", "business", "implementation"],
    thumbnail: "/placeholder.svg?height=200&width=300",
    creator: "Michael Johnson",
    dateCreated: "2025-03-15",
  },
  {
    id: "ip-007",
    name: "Neural Network Visualization",
    description: "Interactive visualization of neural network architecture and data processing.",
    type: "image",
    keywords: ["neural network", "AI", "visualization", "data"],
    thumbnail: "/placeholder.svg?height=200&width=300",
    creator: "Dr. Alan Turing",
    dateCreated: "2025-05-10",
  },
  {
    id: "ip-008",
    name: "Smart Contract Templates",
    description: "Collection of legally-vetted smart contract templates for various business applications.",
    type: "text",
    keywords: ["smart contracts", "legal", "templates", "business"],
    thumbnail: "/placeholder.svg?height=200&width=300",
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
        <h1 className="text-4xl font-bold mb-2 text-center">
          <span className="text-purple-400">Explore</span> Intellectual Property
        </h1>
        <p className="text-gray-300 text-center mb-10">
          Discover and browse through protected intellectual property assets on our blockchain platform
        </p>

        {/* Search Bar */}
        <div className="relative mb-10 max-w-2xl mx-auto">
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
                <Button variant="ghost" size="sm" className="text-purple-400 hover:text-purple-300 hover:bg-gray-800">
                  <Eye className="h-4 w-4 mr-1" />
                  Details
                </Button>
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
