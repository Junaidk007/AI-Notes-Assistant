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
                    content: `Act like an experienced teacher and explain the topic "${topic}" in a clear, simple, and detailed way, word count should be ${count} - words and the level of notes should be ${level} level. 
Format the notes with:
- Title: "${topic} Notes"
- Level: ${level} 
- Word count: ~${count} words
- Use headings, subheadings, and bullet points
- Break down complex terms into simple language
- Include real-life or relatable examples
- Add small questions after sections to check understanding
- End with a "Quick Recap" summarizing key points
Make the notes easy to read and study.`
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