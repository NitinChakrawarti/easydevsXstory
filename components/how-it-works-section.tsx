import { FileUp, FileLock, FileCheck, FileText } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      icon: <FileUp className="w-8 h-8" />,
      title: "Upload Your Work",
      description: "Upload your creative work, whether it's art, music, code, writing, or design.",
    },
    {
      icon: <FileLock className="w-8 h-8" />,
      title: "Create Blockchain Record",
      description: "We create a secure, timestamped record on the blockchain with proof of your ownership.",
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Set License Terms",
      description: "Define how others can use your work - from simple attribution to full commercial rights.",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Enforce Your Rights",
      description: "Use your blockchain certificate as legal evidence if someone infringes on your IP.",
    },
  ]

  return (
    <section id="how-it-works" className="container mx-auto px-4 py-24 relative">
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-purple-600 blur-[150px] opacity-20"></div>

      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Our simple four-step process makes protecting your intellectual property easier than ever before.
        </p>
      </div>

      <div className="relative">
        <div className="hidden lg:block absolute left-1/2 top-24 w-1 h-[calc(100%-120px)] bg-gradient-to-b from-purple-500 to-blue-500 -translate-x-1/2"></div>

        <div className="space-y-12 lg:space-y-0 relative">
          {steps.map((step, index) => (
            <div key={index} className="lg:flex items-center justify-between">
              <div className={`flex lg:w-5/12 ${index % 2 === 0 ? "lg:mr-auto" : "lg:ml-auto lg:order-2"}`}>
                <div className="p-6 rounded-2xl backdrop-blur-sm bg-white/5 border border-purple-500/20 w-full">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600/40 to-blue-600/40 flex items-center justify-center mb-4 text-purple-300">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>

              <div className="hidden lg:flex items-center justify-center lg:w-2/12">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold z-10">
                  {index + 1}
                </div>
              </div>

              <div className={`hidden lg:block lg:w-5/12 ${index % 2 === 0 ? "lg:order-2" : "lg:mr-auto"}`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
