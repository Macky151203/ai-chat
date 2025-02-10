import Groq from "groq-sdk";
import { NextRequest, NextResponse } from "next/server";

const groq = new Groq({ apiKey: process.env.GROQ_KEY });

export async function POST(req:NextRequest) {

  const {content}=await req.json()

  async function getGroqChatCompletion() {
    return groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: content,
        },
      ],
      model: "llama-3.3-70b-versatile",
    });
  }
  async function main() {
    const chatCompletion = await getGroqChatCompletion();
    // Print the completion returned by the LLM.
    // console.log(chatCompletion.choices[0]?.message?.content || "");
    return chatCompletion.choices[0]?.message?.content
  }
  const rq=await main()
  // console.log("the res is - ",rq)
  return NextResponse.json({msg:rq})
  
  
}