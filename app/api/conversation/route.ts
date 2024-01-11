//@ts-nocheck
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import Configuration from 'openai';
import OpenAIApi from 'openai';

// init openai
const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(req: Request) {
	try {
		const { userId } = auth();
		const body = await req.json();
		const { messages } = body;

		if (!userId) {
			return new NextResponse('UnAuthorized', { status: 401 });
		}

		if (!configuration.apiKey) {
			return new NextResponse('OpenAI API Key not configured', { status: 500 });
		}

		if (!messages) {
			return new NextResponse('Messages are required', { status: 400 });
		}

		const response = await openai.chat.completions.create({
			model: 'gpt-3.5-turbo',
			messages,
		});

		return NextResponse.json(response.data.choices[0].message);
	} catch (error: any) {
		console.log(`[Conversation Error]`, error.message);
		return new NextResponse('Internal Error', { status: 500 });
	}
}
