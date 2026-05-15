import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

export const maxDuration = 60;

export async function POST(req: NextRequest) {
  try {
    const { resume, jobDescription } = await req.json();

    if (!resume || !resume.trim()) {
      return NextResponse.json({ error: 'Resume text is required' }, { status: 400 });
    }

    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json({ error: 'Server not configured: missing API key' }, { status: 500 });
    }

    const anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });

    const systemPrompt = `You are an expert Australian career coach who specialises in rewriting international CVs into Australian-format CVs that beat ATS systems and impress Australian recruiters.

You understand:
- Australian CV format (2-3 pages, no photo, professional summary at top, skills section, reverse chronological work history)
- Australian English spelling (organised, specialised, optimised, behaviour, colour)
- Australian workplace terminology (e.g. "graduate program" not "fresher", "casual work" not "part-time")
- ANZSCO occupation codes and the Skilled Occupation List
- ATS optimisation (clean formatting, relevant keywords, no graphics or tables)
- The needs of international graduates on 485 visas pursuing PR pathways

Always return a valid JSON object. No markdown code fences, no preamble — just the JSON.`;

    const userPrompt = `Rewrite this CV for the Australian job market. Optimise for ATS systems and Australian recruiter preferences.

ORIGINAL CV:
${resume}

${jobDescription ? `TARGET JOB DESCRIPTION:\n${jobDescription}\n\nTailor the CV specifically to this role, incorporating relevant keywords from the job description.` : 'No specific job — produce a strong general Australian-format CV.'}

Return ONLY a valid JSON object with this exact structure:
{
  "australianCV": "the full rewritten CV as plain text with proper line breaks and section headings",
  "atsScore": <number 0-100>,
  "improvements": ["specific improvement 1", "specific improvement 2", "specific improvement 3", "specific improvement 4", "specific improvement 5"],
  "anzscoMatch": "ANZSCO code and occupation name if applicable, otherwise empty string",
  "keywordsAdded": ["keyword1", "keyword2", "keyword3"],
  "keywordsMissing": ["keyword1", "keyword2"]
}

Requirements for the rewritten CV:
- Use Australian English spelling throughout
- Include a "Professional Summary" of 3-4 lines at the top
- Quantify achievements with metrics where possible
- Use strong action verbs (Spearheaded, Delivered, Optimised, Implemented)
- Translate foreign job titles to Australian equivalents
- Convert any salary mentions to AUD if relevant
- Add a "Right to Work in Australia" line if appropriate
- Highlight skills relevant to the Skilled Occupation List
- Format cleanly for ATS parsing (no tables, no special characters)
- Include sections: Professional Summary, Key Skills, Professional Experience, Education, Certifications, References

For improvements, be specific about what you changed and why (e.g. "Quantified your Infosys experience with team size and code coverage metrics" not just "Added metrics").`;

    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-5',
      max_tokens: 4000,
      system: systemPrompt,
      messages: [{ role: 'user', content: userPrompt }],
    });

    const textBlock = response.content.find((b: any) => b.type === 'text');
    if (!textBlock || textBlock.type !== 'text') {
      return NextResponse.json({ error: 'No response from AI' }, { status: 500 });
    }

    let text = textBlock.text.trim();
    if (text.startsWith('```json')) text = text.slice(7);
    if (text.startsWith('```')) text = text.slice(3);
    if (text.endsWith('```')) text = text.slice(0, -3);
    text = text.trim();

    let result;
    try {
      result = JSON.parse(text);
    } catch (parseError) {
      console.error('JSON parse error:', text);
      return NextResponse.json({
        error: 'AI returned invalid JSON. Try again.',
        raw: text.substring(0, 200),
      }, { status: 500 });
    }

    return NextResponse.json(result);
  } catch (error: any) {
    console.error('Rewrite error:', error);
    return NextResponse.json({
      error: error.message || 'Failed to rewrite CV',
    }, { status: 500 });
  }
}
