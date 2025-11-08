import "dotenv/config";

const getAPIResponse = async (body) => {
    let {topic,level,count,reason} = body;
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            model: 'nvidia/nemotron-nano-9b-v2:free',
            messages: [
                {
                    role: "user",
                    content: `Act like an experienced teacher and explain the topic "${topic}" in a clear, simple, and detailed way.
The explanation should be around ${count} words and at a ${level} level (if specified).

Format the notes as follows:

Title: "${topic} Notes"
Level: ${level} (only if mentioned and don't show if null)
Word Count: ~${count} words (only if mentioned and don't show if null)

Guidelines for Writing

Use headings, subheadings, and bullet points for clarity.

Break down complex terms into simple, understandable language.

Include real-life or relatable examples wherever possible.

After each section, add 1–2 short self-check questions to test understanding.

End with a “Quick Recap” summarizing key points.

Add emojis to make the notes fun, friendly, and visually engaging.

If the user specifies subtopics, give them more importance in the notes.

Goal:
Make the notes easy to read, well-organized, and helpful for study or revision.`
                },
                {
                    role: "system",
                    content: `You are a helpful assistant. ${reason? "/think" : "/no_think"}`
                }
            ],
        })
    }
    try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", options);
        const data = await response.json();
        // console.log(data.choices[0].message);
        return data.choices[0].message.content;
    } catch (e) {
        console.log(e);
    }
}

export default getAPIResponse;
