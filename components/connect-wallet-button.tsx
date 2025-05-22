"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Wallet } from "lucide-react"

export function ConnectWalletButton() {
  const [connecting, setConnecting] = useState(false)
  const [connected, setConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState("")

  // Load wallet address from localStorage on mount
  useEffect(() => {
    const savedAddress = localStorage.getItem("walletAddress")
    if (savedAddress) {
      setWalletAddress(savedAddress)
      setConnected(true)
    }
  }, [])

  const handleConnect = () => {
    setConnecting(true)
    setTimeout(() => {
      const mockAddress = "0x" + Math.random().toString(16).slice(2, 12)
      setWalletAddress(mockAddress)
      localStorage.setItem("walletAddress", mockAddress) // Save to localStorage
      setConnected(true)
      setConnecting(false)
    }, 1000)
  }

  const handleDisconnect = () => {
    setConnected(false)
    setWalletAddress("")
    localStorage.removeItem("walletAddress") // Clear from localStorage
  }

  if (connected) {
    return (
      <Button
        variant="outline"
        className="border border-purple-500 bg-black/20 backdrop-blur-sm text-purple-300 hover:bg-purple-900/20"
        onClick={handleDisconnect}
      >
        <Wallet className="mr-2 h-4 w-4" />
        {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
      </Button>
    )
  }

  return (
    <Button
      className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
      disabled={connecting}
      onClick={handleConnect}
    >
      <Wallet className="mr-2 h-4 w-4" />
      {connecting ? "Connecting..." : "Connect Wallet"}
    </Button>
  )
}
