import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function TestimonialsSection() {
  const testimonials = [
    {
      content:
        "MetaIP helped me protect my digital art collection and set up passive income through licensing. When someone stole my work, I had timestamped proof of ownership.",
      author: "Alex Rivera",
      title: "Digital Artist",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      content:
        "As a music producer, protecting my beats was always a challenge. Now I have blockchain certificates for all my work and can sell licenses with confidence.",
      author: "Maya Johnson",
      title: "Music Producer",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      content:
        "My software code was copied by a competitor. Thanks to MetaIP's blockchain certification, I had irrefutable evidence of prior creation and won my case.",
      author: "David Chen",
      title: "Software Developer",
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section id="testimonials" className="container mx-auto px-4 py-24 relative">
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-blue-600 blur-[150px] opacity-20"></div>

      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          From Our{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">Creators</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Hear from creators who have successfully protected and monetized their intellectual property.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-black/20 opacity-90 backdrop-blur-lg   border-purple-500/20 overflow-hidden">
            <CardContent className="p-6">
              <div className="mb-4">
                <svg className="text-purple-400 h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-300 mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{testimonial.author}</h3>
                  <p className="text-sm text-gray-400">{testimonial.title}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
