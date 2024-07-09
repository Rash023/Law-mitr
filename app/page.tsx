"use client";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Markdown from "markdown-it";
import { GoogleGenerativeAI } from "@google/generative-ai";
import {questions} from "@/components/data/questions";
interface SearchIconProps extends React.SVGProps<SVGSVGElement> {}
import dotenv from "dotenv";
dotenv.config()
const API_SECRET="AIzaSyAekZwuOWfD418tH158IdFAxZinVeyKifc"
const genAI = new GoogleGenerativeAI(API_SECRET);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });
const defaultPrompt="dont respond to questions not related to Law and democracy and say this is beyond my capabilities. Don't make any headings bold use simple texts for everything just use bullet points and numbers, never reveal your identity always say i am lawmitr when asked"

export default function Component() {
  const [query, setQuery] = useState(defaultPrompt);
  const [response, setResponse] = useState("");
  
  async function submitHandler() {
    const finalPrompt=defaultPrompt+query;
    const result = await model.generateContent(finalPrompt);
    const responseText = result.response.text();
    const boldRegex = /\*\*/g;
    const boldText = responseText.replace(boldRegex, '');
    setResponse(boldText);
  }

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
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
            <Button className="absolute right-0 top-0 h-full px-4 rounded-r-md" onClick={submitHandler}>
              Search
            </Button>
          </div>
          <div className="space-y-4">
          {questions.map((data, index) => (
  <Link
    key={index}
    href="#"
    className="block bg-muted/20 hover:bg-muted/30 transition-colors rounded-md p-4"
    prefetch={false}
    onClick={()=>{
      setQuery(data.prompt);
      submitHandler();
    }}
  >
    <h3 className="text-lg font-medium">{data.heading}</h3>
    <p className="text-muted-foreground text-sm">
      {data.prompt}
    </p>
  </Link>
))}

          </div>
        </div>
        <div className="bg-background rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Answers</h2>
          <Textarea
            placeholder="Waiting for the response..."
            value={response}
            readOnly
            className="w-full h-80 resize-none rounded-md border-gray-300 focus:border-primary focus:ring-primary"
          />
        </div>
      </div>
      
    </div>
  );
}

function SearchIcon(props:SearchIconProps) {
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
  );
}
