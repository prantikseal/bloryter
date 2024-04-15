import axios from "axios";

const BaseUrl = import.meta.env.VITE_BACKEND_API;

const getBlogData = async (topic, additionalDetails, toneAnalysis) => {
    try {
        const response = await axios.post(`${BaseUrl}/generate-blog`, { 
            "topic": `${topic}`,
            "additionalDetails": `${additionalDetails}`,
            "toneAnalysis": `${toneAnalysis}`
         },
        );
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
}

export default getBlogData;

