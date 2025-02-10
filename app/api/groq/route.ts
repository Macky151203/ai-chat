import Groq from "groq-sdk";
import { NextRequest, NextResponse } from "next/server";

const groq = new Groq({ apiKey: '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' });

export async function POST(req:NextRequest) {

  async function getGroqChatCompletion() {
    return groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: "what is full for of bmw , give me one line answer?",
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
  console.log("the res is - ",rq)
  return NextResponse.json({msg:"okk"})
  
  
}