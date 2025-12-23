import { Button } from "@/components/ui/button";
import {
  BrainCogIcon,
  EyeIcon,
  GlobeIcon,
  MonitorSmartphoneIcon,
  ServerCogIcon,
  ZapIcon,
  } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

  
    
    const features = [
    {
  
      name:"Store your PDF Documents",
      description: "Keep all your important PDF files securely stored and easily accessible anytime, anywhere.",
      icon: GlobeIcon
    },
    {
      name: "Blazing Fast Responses",
      description:
      "Experience lightning-fast answers to your queries, ensuring you get the information you need instantly.",
      icon: ZapIcon,
    },
    {
      name: "Chat Memorisation",
      description:
      "Our intelligent chatbot remembers previous interactions, providing a seamless and personalized experience.",
      icon: BrainCogIcon
    },{
      name: "Interactive PDF Viewer",
      description:"Engage with your PDFs like never before using our intuitive and interactive viewer.",
      icon: EyeIcon,
    },
    {
      name: "Cloud Backup",
      description:"Rest assured knowing your documents are safely backed up on the cloud, protected from loss or damage.",
      icon: ServerCogIcon
    },
    {
      name: "Responsive Across Devices",
      description:
      "Access and chat with your PDFs seamlessly on any device, whether it's your desktop, tablet, or smartphone.",
      icon: MonitorSmartphoneIcon,
    }
  ]


export default function Home() {
  return (
    <main className="bg-linear-to-bl from-white to-indigo-600 overflow-scroll flex-1 p-2 lg:p-5">
      <div className="bg-white max-w-7xl mx-auto rounded-md drop-shadow-xl py-24 lg:py-32">
        <div className="flex flex-col justify-center items-center mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Your Intractive Document</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Transform Your PDFs into Interactive Conversations
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Introducing{" "}
            <span className="font-bold text-indigo-600">Cosmos </span>
            <span className="font-semibold">AI</span>

            <br />
            <br /> Upload your document, and our chatbot will answer
            questions, summarize content, and answer all your Qs. Ideal for
            everyone, <span className="text-indigo-600">
            Cosmos
            </span>{" "}
            turns static documents into{" "}
            <span className="font-bold">dynamic conversations</span>,
            enhancing productivity 10x fold effortlessly.
          </p>

          </div>
          <Button asChild className="mt-10 flex justify-center items-center">
            <Link href="/dashboard">Get Started</Link>
          </Button>
          <div className="relative overflow-hidden pt-16">
            <div className="mx-auto max-w-7xl lg:max-w-8xl">
              <Image
                src="/img1.jpg"
                alt="Screenshot"
                width={1200}
                height={800}
                className="mt-16 rounded-md shadow-xl mx-auto"
              />
            </div>
          </div>
          <div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 md:grid-cols-2">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>    
    </main>
  );
}  





