import axios from "axios";

const BaseUrl = import.meta.env.VITE_BACKEND_API;

const getToneAnalysis = async (content) => {
    try {
        const response = await axios.post(`${BaseUrl}/analyze-tone`, { 
            sampleBlogPost: `${content}`
         },
        );
        console.log(response.data);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
}

export default getToneAnalysis;