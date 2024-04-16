import { useState } from "react";
import { useSelector } from "react-redux";
import ReactMarkdown from 'react-markdown';

const ContentOutput = () => {
    const [blogData, setBlogData] = useState('');

    // useSelector((state) => state.getNewBlog.newBlog.newBlogPost.kwargs.content) ||

    const html = useSelector((state) => state.getNewBlog.newBlog.newBlogPost.kwargs.content);

    function onChange(e) {
        setBlogData(e.target.value);
    }

    return (
        <div>
            <div className="w-full p-2 mb-4 rounded-lg outline-none border border-slate-900 hover:border-slate-950 focus:border-slate-950 transition-colors duration-300 ease-in-out text-black">
            {
                html ? (
                    // <div
                    //     dangerouslySetInnerHTML={{ __html: html }}
                    //     onChange={onChange}
                    //     style={{
                    //         color:'wheat'
                    //     }}
                    // />
                    <div style={
                        {
                            color: 'wheat'
                        }
                    
                    }>
                    <ReactMarkdown
                        onChange={onChange}
                    >
                        {html}
                    </ReactMarkdown>
                    </div>
                ) : (
                    <div>
                        <p>Generated content will appear here</p>
                    </div>
                )
            }
            </div>
            <button 
                className="bg-slate-900 hover:bg-slate-950 text-white font-bold py-2 px-4 rounded mt-4" 
                onClick={() => {
                    window.location.reload();
                }} 
            >
                Reset
            </button>
        </div>
    );
}

export default ContentOutput;
