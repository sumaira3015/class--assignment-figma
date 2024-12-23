
    import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container px-4 py-12 mx-auto">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Welcome To Our Website
            </h1>
            <p className="text-lg text-muted-foreground">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard
            </p>
            <Button size="lg" variant="default" className="rounded-none">
              Contact US
            </Button>
          </div>
          <div className="relative aspect-square md:aspect-[4/3]">
            <Image
              alt="Abstract waves"
              className="object-cover rounded-lg"
              height={465}
              src="/profile.png"
              width={502}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

    
           
         
       
        
         
