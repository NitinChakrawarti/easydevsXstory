"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  ArrowLeft,
  Calendar,
  FileText,
  ImageIcon,
  Video,
  Shield,
  RefreshCw,
  DollarSign,
  User,
  Tag,
  Clock,
} from "lucide-react"

// Sample IP data
const sampleIP = {
  id: "ip-001",
  name: "Digital Landscape Artwork: Neo Tokyo 2049",
  description:
    "A futuristic digital landscape featuring neon cities and cyberpunk elements. This artwork explores the intersection of technology and urban life in a hypothetical future where megacorporations dominate the skyline and neon lights illuminate the perpetual night.",
  longDescription:
    "This high-resolution digital artwork was created using a combination of 3D modeling and digital painting techniques. The piece features a sprawling futuristic cityscape with towering skyscrapers adorned with holographic advertisements, flying vehicles navigating between buildings, and streets illuminated by neon lights reflecting off rain-soaked surfaces.\n\nThe artwork explores themes of technological advancement, corporate dominance, and urban life in a hypothetical future. The color palette primarily consists of deep blues and purples contrasted with vibrant neon pinks, cyans, and yellows to create the characteristic cyberpunk aesthetic.\n\nThe piece was rendered at 8K resolution to capture intricate details throughout the cityscape, from the smallest street vendor to the massive architectural structures that define the skyline.",
  type: "image",
  ipRightsType: "copyright",
  contentType: "digital artwork",
  keywords: ["digital art", "landscape", "cyberpunk", "neon", "futuristic", "cityscape", "sci-fi"],
  thumbnail: "/placeholder.svg?height=400&width=800",
  images: [
    "/placeholder.svg?height=600&width=1200",
    "/placeholder.svg?height=800&width=800",
    "/placeholder.svg?height=600&width=1000",
  ],
  creator: "Alex Chen",
  creatorProfile: "/placeholder.svg?height=100&width=100",
  dateCreated: "2025-04-15",
  lastModified: "2025-04-18",
  blockchainVerified: true,
  licenseType: "Creative Commons Attribution-NonCommercial",
  price: {
    personal: 0.05,
    commercial: 2.5,
    exclusive: 15,
  },
  currency: "ETH",
}

export default function IPDetailsPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("details")
  const [purchaseDialogOpen, setPurchaseDialogOpen] = useState(false)
  const [remixDialogOpen, setRemixDialogOpen] = useState(false)

  // Get icon based on content type
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "text":
        return <FileText className="h-5 w-5" />
      case "image":
        return <ImageIcon className="h-5 w-5" />
      case "video":
        return <Video className="h-5 w-5" />
      default:
        return <FileText className="h-5 w-5" />
    }
  }

  return (
    <div className="w-full min-h-screen bg-black text-white">
      {/* Back button */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <Button
          variant="ghost"
          className="text-gray-400 hover:text-white hover:bg-gray-800"
          onClick={() => router.back()}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Explore
        </Button>
      </div>

      {/* Hero banner */}
      <div className="w-full bg-gradient-to-r from-purple-900/50 to-gray-900/50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center mb-4">
            {getTypeIcon(sampleIP.type)}
            <Badge className="ml-2 bg-purple-600">{sampleIP.contentType}</Badge>
            {sampleIP.blockchainVerified && (
              <Badge className="ml-2 bg-green-600 flex items-center">
                <Shield className="h-3 w-3 mr-1" />
                Verified
              </Badge>
            )}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{sampleIP.name}</h1>
          <p className="text-gray-300 text-lg max-w-3xl">{sampleIP.description}</p>

          <div className="flex flex-wrap gap-2 mt-6">
            {sampleIP.keywords.map((keyword, index) => (
              <Badge key={index} className="bg-gray-800 hover:bg-gray-700 text-gray-300">
                {keyword}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left column - Content */}
          <div className="w-full lg:w-2/3">
            <Tabs defaultValue="details" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="bg-gray-800 mb-6">
                <TabsTrigger value="details" className="data-[state=active]:bg-purple-600">
                  Details
                </TabsTrigger>
                <TabsTrigger value="media" className="data-[state=active]:bg-purple-600">
                  Media
                </TabsTrigger>
                <TabsTrigger value="license" className="data-[state=active]:bg-purple-600">
                  License
                </TabsTrigger>
              </TabsList>

              <TabsContent value="details" className="space-y-6">
                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold text-white mb-4">About this IP</h3>
                    <p className="text-gray-300 whitespace-pre-line">{sampleIP.longDescription}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <Calendar className="h-5 w-5 text-purple-400 mr-2" />
                          <div>
                            <p className="text-sm text-gray-400">Created on</p>
                            <p className="text-white">
                              {new Date(sampleIP.dateCreated).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center">
                          <Clock className="h-5 w-5 text-purple-400 mr-2" />
                          <div>
                            <p className="text-sm text-gray-400">Last modified</p>
                            <p className="text-white">
                              {new Date(sampleIP.lastModified).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center">
                          <Shield className="h-5 w-5 text-purple-400 mr-2" />
                          <div>
                            <p className="text-sm text-gray-400">IP Rights Type</p>
                            <p className="text-white capitalize">{sampleIP.ipRightsType}</p>
                          </div>
                        </div>

                        <div className="flex items-center">
                          <Tag className="h-5 w-5 text-purple-400 mr-2" />
                          <div>
                            <p className="text-sm text-gray-400">Content Type</p>
                            <p className="text-white capitalize">{sampleIP.contentType}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="media" className="space-y-6">
                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4">Media Gallery</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {sampleIP.images.map((image, index) => (
                        <div key={index} className="rounded-lg overflow-hidden">
                          <img
                            src={image || "/placeholder.svg"}
                            alt={`${sampleIP.name} - Image ${index + 1}`}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="license" className="space-y-6">
                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4">License Information</h3>
                    <p className="text-gray-300 mb-6">
                      This intellectual property is protected under {sampleIP.licenseType} license. Different usage
                      rights can be purchased based on your needs.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Personal Use</h4>
                        <p className="text-2xl font-bold text-purple-400 mb-2">
                          {sampleIP.price.personal} {sampleIP.currency}
                        </p>
                        <p className="text-sm text-gray-400">For non-commercial personal projects only</p>
                      </div>

                      <div className="bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Commercial License</h4>
                        <p className="text-2xl font-bold text-purple-400 mb-2">
                          {sampleIP.price.commercial} {sampleIP.currency}
                        </p>
                        <p className="text-sm text-gray-400">For business and commercial applications</p>
                      </div>

                      <div className="bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Exclusive Rights</h4>
                        <p className="text-2xl font-bold text-purple-400 mb-2">
                          {sampleIP.price.exclusive} {sampleIP.currency}
                        </p>
                        <p className="text-sm text-gray-400">Full ownership transfer and exclusive rights</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right column - Creator info and actions */}
          <div className="w-full lg:w-1/3 space-y-6">
            {/* Creator card */}
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Creator</h3>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <img
                      src={sampleIP.creatorProfile || "/placeholder.svg"}
                      alt={sampleIP.creator}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-white">{sampleIP.creator}</p>
                    <p className="text-sm text-gray-400">Digital Artist</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4 border-gray-700 text-white bg-gray ">
                  <User className="h-4 w-4 mr-2" />
                  View Profile
                </Button>
              </CardContent>
            </Card>

            {/* Actions */}
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Actions</h3>

                {/* Purchase Rights Dialog */}
                <Dialog open={purchaseDialogOpen} onOpenChange={setPurchaseDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="w-full mb-3 bg-purple-600 hover:bg-purple-700">
                      <DollarSign className="h-4 w-4 mr-2" />
                      Purchase Rights
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-gray-900 text-white border-gray-800">
                    <DialogHeader>
                      <DialogTitle>Purchase Usage Rights</DialogTitle>
                      <DialogDescription className="text-gray-400">
                        Select the type of license you want to purchase for this intellectual property.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid grid-cols-1 gap-4 py-4">
                      <div className="flex items-center justify-between p-3 rounded-md bg-gray-800 hover:bg-gray-700 cursor-pointer">
                        <div>
                          <p className="font-medium">Personal Use</p>
                          <p className="text-sm text-gray-400">Non-commercial use only</p>
                        </div>
                        <p className="font-bold text-purple-400">
                          {sampleIP.price.personal} {sampleIP.currency}
                        </p>
                      </div>

                      <div className="flex items-center justify-between p-3 rounded-md bg-gray-800 hover:bg-gray-700 cursor-pointer">
                        <div>
                          <p className="font-medium">Commercial License</p>
                          <p className="text-sm text-gray-400">For business applications</p>
                        </div>
                        <p className="font-bold text-purple-400">
                          {sampleIP.price.commercial} {sampleIP.currency}
                        </p>
                      </div>

                      <div className="flex items-center justify-between p-3 rounded-md bg-gray-800 hover:bg-gray-700 cursor-pointer">
                        <div>
                          <p className="font-medium">Exclusive Rights</p>
                          <p className="text-sm text-gray-400">Full ownership transfer</p>
                        </div>
                        <p className="font-bold text-purple-400">
                          {sampleIP.price.exclusive} {sampleIP.currency}
                        </p>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setPurchaseDialogOpen(false)}>
                        Cancel
                      </Button>
                      <Button className="bg-purple-600 hover:bg-purple-700">Continue to Payment</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                {/* Remix Dialog */}
                <Dialog open={remixDialogOpen} onOpenChange={setRemixDialogOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full border-gray-700 bg-black text-gray-300 ">
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Request Remix Permission
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-gray-900 text-white border-gray-800">
                    <DialogHeader>
                      <DialogTitle>Request Remix Permission</DialogTitle>
                      <DialogDescription className="text-gray-400">
                        Explain how you would like to remix or modify this intellectual property.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                      <textarea
                        className="w-full h-32 bg-gray-800 border-gray-700 rounded-md p-3 text-white"
                        placeholder="Describe your remix idea and how you plan to use it..."
                      />
                      <p className="text-sm text-gray-400 mt-2">
                        The creator will review your request and may contact you for more information.
                      </p>
                    </div>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setRemixDialogOpen(false)}>
                        Cancel
                      </Button>
                      <Button className="bg-purple-600 hover:bg-purple-700">Submit Request</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
