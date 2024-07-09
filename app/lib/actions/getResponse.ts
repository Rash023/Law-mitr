"use server"

import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY||"");

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
export async function getResponse(req:NextRequest,res:NextResponse){
    try{
        const {prompt}=req.body;
        const result = await model.generateContent(prompt);
        const response = result.response;
        const text = response.text();
        console.log(text);
    }   
    catch(e){
        
    }
}