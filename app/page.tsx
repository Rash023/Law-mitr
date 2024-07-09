import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  return (
    <div>
      <header className="bg-primary shadow-md">
        <nav className="container mx-auto flex items-center justify-between py-4 px-6">
          <Link href="#" className="text-lg text-primary-foreground font-thin select-none " prefetch={false}>
            LAW MITR
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="#" className="text-primary-foreground hover:text-foreground" prefetch={false}>
              About
            </Link>
          </div>
        </nav>
      </header>
      <div className="grid md:grid-cols-2 gap-6 w-full max-w-6xl mx-auto py-8">
        <div className="bg-background rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Ask a Question</h2>
          <div className="relative mb-4">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-muted-foreground" />
            </div>
            <Input
              type="search"
              placeholder="Enter your query..."
              className="block w-full pl-10 pr-4 py-2 rounded-md border-gray-300 focus:border-primary focus:ring-primary"
            />
             <Button className="absolute right-0 top-0 h-full px-4 rounded-r-md">Search</Button>
          </div>
          <div className="space-y-4">
            <Link
              href="#"
              className="block bg-muted/20 hover:bg-muted/30 transition-colors rounded-md p-4"
              prefetch={false}
            >
              <h3 className="text-lg font-medium">What is the difference between a civil and criminal case?</h3>
              <p className="text-muted-foreground text-sm">
                I'm trying to understand the differences between civil and criminal cases. Can someone explain the key
                distinctions?
              </p>
            </Link>
            <Link
              href="#"
              className="block bg-muted/20 hover:bg-muted/30 transition-colors rounded-md p-4"
              prefetch={false}
            >
              <h3 className="text-lg font-medium">How do I file a small claims lawsuit?</h3>
              <p className="text-muted-foreground text-sm">
                I have a dispute with a local business and want to file a small claims case. What are the steps I need
                to take?
              </p>
            </Link>
            <Link
              href="#"
              className="block bg-muted/20 hover:bg-muted/30 transition-colors rounded-md p-4"
              prefetch={false}
            >
              <h3 className="text-lg font-medium">Can I sue someone for defamation?</h3>
              <p className="text-muted-foreground text-sm">
                Someone has been spreading false rumors about me online. Do I have grounds to sue them for defamation?
              </p>
            </Link>
          </div>
        </div>
        <div className="bg-background rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Lawmitr</h2>
          <Textarea
            placeholder="Waiting for the response..."
            className="w-full h-80 resize-none rounded-md border-gray-300 focus:border-primary focus:ring-primary"
          />
        </div>
      </div>
    </div>
  )
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}