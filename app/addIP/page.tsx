"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, FileText, ImageIcon, Video } from "lucide-react"

export default function AddIP() {
  const [contentType, setContentType] = useState("text")

  return (
    <div className="w-full min-h-screen bg-black bg-gradient-to-b from-black to-slate-900 text-white p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-center">
          <span className="text-purple-400">Blockchain-Powered</span> IP Protection
        </h1>
        <p className="text-gray-300 text-center mb-10">
          Secure your intellectual property with immutable blockchain records that provide timestamped proof of creation
          and ownership.
        </p>

        <div className="z-50  relative">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-2">
                <Shield className="h-6 w-6 text-purple-400" />
                Add New Intellectual Property
              </CardTitle>
              <CardDescription className="text-gray-400">
                Fill in the details below to register and protect your intellectual property.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-300">
                  Content Name
                </Label>
                <Input
                  id="name"
                  placeholder="Enter the name of your content"
                  className="bg-gray-800 border-gray-700 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-gray-300">
                  Description
                </Label>
                <Textarea
                  id="description"
                  placeholder="Describe your intellectual property"
                  className="bg-gray-800 border-gray-700 text-white min-h-[120px]"
                />
              </div>

              <div className="space-y-3">
                <Label className="text-gray-300">IP Rights Type</Label>
                <RadioGroup defaultValue="copyright" className="grid grid-cols-1 md:grid-cols-3 gap-4  text-white">
                  <Label
                    htmlFor="copyright"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-gray-700 bg-gray-800 p-4 hover:bg-gray-700 cursor-pointer [&:has([data-state=checked])]:border-purple-500"
                  >
                    <RadioGroupItem value="copyright" id="copyright" className="sr-only" />
                    <span className="text-sm font-medium">Copyright</span>
                  </Label>
                  <Label
                    htmlFor="trademark"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-gray-700 bg-gray-800  p-4 hover:bg-gray-700 cursor-pointer [&:has([data-state=checked])]:border-purple-500"
                  >
                    <RadioGroupItem value="trademark" id="trademark" className="sr-only" />
                    <span className="text-sm font-medium">Trademark</span>
                  </Label>
                  <Label
                    htmlFor="patent"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-gray-700 bg-gray-800 p-4 hover:bg-gray-700 cursor-pointer [&:has([data-state=checked])]:border-purple-500"
                  >
                    <RadioGroupItem value="patent" id="patent" className="sr-only" />
                    <span className="text-sm font-medium">Patent</span>
                  </Label>
                </RadioGroup>
              </div>

              <div className="space-y-3">
                <Label className="text-gray-300">Content Type</Label>
                <Tabs defaultValue="text" className="w-full" onValueChange={setContentType}>
                  <TabsList className="grid grid-cols-3 bg-gray-800">
                    <TabsTrigger value="text" className="data-[state=active]:bg-purple-600">
                      <FileText className="h-4 w-4 mr-2 " />
                      Text
                    </TabsTrigger>
                    <TabsTrigger value="image" className="data-[state=active]:bg-purple-600">
                      <ImageIcon className="h-4 w-4 mr-2" />
                      Image
                    </TabsTrigger>
                    <TabsTrigger value="video" className="data-[state=active]:bg-purple-600">
                      <Video className="h-4 w-4 mr-2" />
                      Video
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="text" className="mt-4">
                    <div className="p-4 bg-gray-800 rounded-md">
                      <Label htmlFor="text-content" className="text-gray-300 block mb-2">
                        Text Content
                      </Label>
                      <Textarea
                        id="text-content"
                        placeholder="Enter your text content here"
                        className="bg-gray-700 border-gray-600 text-white min-h-[150px]"
                      />
                    </div>
                  </TabsContent>
                  <TabsContent value="image" className="mt-4">
                    <div className="p-4 bg-gray-800 rounded-md">
                      <Label htmlFor="image-upload" className="text-gray-300 block mb-2">
                        Image Upload
                      </Label>
                      <div className="border-2 border-dashed border-gray-600 rounded-md p-8 text-center">
                        <p className="text-gray-400 mb-2">Drag and drop your image here, or click to browse</p>
                        <Input id="image-upload" type="file" accept="image/*" className="hidden" />
                        <Button variant="outline" className="bg-gray-700 hover:bg-gray-600">
                          Select Image
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="video" className="mt-4">
                    <div className="p-4 bg-gray-800 rounded-md">
                      <Label htmlFor="video-upload" className="text-gray-300 block mb-2">
                        Video Upload
                      </Label>
                      <div className="border-2 border-dashed border-gray-600 rounded-md p-8 text-center">
                        <p className="text-gray-400 mb-2">Drag and drop your video here, or click to browse</p>
                        <Input id="video-upload" type="file" accept="video/*" className="hidden" />
                        <Button variant="outline" className="bg-gray-700 hover:bg-gray-600">
                          Select Video
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="ml-auto bg-purple-600 hover:bg-purple-700">Add IP</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
