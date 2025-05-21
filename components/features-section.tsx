import { Lightbulb, Shield, FileCheck, Scale, Coins, UserCheck } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Tamper-Proof Protection",
      description:
        "Secure your IP with immutable blockchain records that provide timestamped proof of creation and ownership.",
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Rights Management",
      description: "Easily grant usage rights or sell complete IP ownership with smart contracts.",
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: "Legal Enforcement",
      description: "Gain legal standing with verifiable blockchain evidence in case of IP theft or infringement.",
    },
    {
      icon: <Coins className="w-8 h-8" />,
      title: "Monetize Your Work",
      description: "Create multiple licensing tiers and receive royalties automatically through smart contracts.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Creator Dashboard",
      description: "Track all your IP assets, licensing, and revenue in one intuitive dashboard.",
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Verifiable Attribution",
      description: "Ensure proper attribution and maintain your reputation as the original creator.",
    },
  ]

  return (
    <section id="features" className="container mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Blockchain-Powered
          </span>{" "}
          IP Protection
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Our platform leverages the power of blockchain technology to provide creators with unparalleled protection and
          control over their intellectual property.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl backdrop-blur-sm bg-white/5 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600/40 to-blue-600/40 flex items-center justify-center mb-4 text-purple-300">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
