import "dotenv/config";

const getAPIResponse = async (message) => {
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
                    content: message
                },
                {
                    role: "system",
                    content: "You are a helpful assistant. /no_think"
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