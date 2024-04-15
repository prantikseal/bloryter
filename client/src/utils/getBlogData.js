import axios from "axios";

const BaseUrl = "http://localhost:3001";

const toneAnalyser = async () => {
    try {
        const response = await axios.get(`${BaseUrl}/tone-analyzer`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

const getBlogData = async () => {
    try {
        const response = await axios.get(`${BaseUrl}/blog-data`);
        const blogData = response.data;
        const toneData = await toneAnalyser();
        return { blogData, toneData };
    } catch (error) {
        console.error(error);
    }
};



export default getBlogData;