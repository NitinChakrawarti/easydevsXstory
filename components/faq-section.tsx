import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const faqs = [
    {
      question: "How does blockchain protect my intellectual property?",
      answer:
        "Blockchain creates an immutable, timestamped record of your work that serves as proof of your creation and ownership. This record cannot be altered or deleted, providing strong evidence in case of disputes or legal action.",
    },
    {
      question: "What types of intellectual property can I protect?",
      answer:
        "Our platform supports all types of digital creative work, including art, music, photography, writing, software code, designs, and more. If you can upload it, you can protect it.",
    },
    {
      question: "How much does it cost to protect my IP?",
      answer:
        "We offer tiered pricing plans starting with a free basic plan that allows for limited IP registrations. Premium plans offer additional features like commercial licensing options, multiple usage tiers, and expanded storage.",
    },
    {
      question: "What happens if someone steals my work?",
      answer:
        "If you discover unauthorized use of your work, you can download a verification certificate from our platform that includes blockchain proof of your prior creation. This can be used as evidence in takedown requests, cease and desist letters, or legal proceedings.",
    },
    {
      question: "Can I sell or license my protected work?",
      answer:
        "Our platform allows you to create custom licensing terms for your work. You can offer usage rights, commercial licenses, or complete ownership transfers, all backed by smart contracts that can automatically handle payments and royalties.",
    },
  ]

  return (
    <section id="faq" className="container mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Get answers to common questions about our IP protection platform.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-purple-500/20 rounded-lg backdrop-blur-sm bg-white/5"
            >
              <AccordionTrigger className="px-6 text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-300">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
