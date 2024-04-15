import { useState } from 'react'
import getBlogData from '../utils/getBlogData'
import { DEMO_BLOG_DATA } from '../utils/constants'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector , useDispatch } from 'react-redux';
import { setNewBlog } from '../redux/slices/getNewBlogSlice';
import { setActiveTab } from '../redux/slices/tabSlice';


const ContentInput = () => {
  const [title, setTitle] = useState("")
  const [additionalContent, setAdditionalContent] = useState("")
  const [blogData, setBlogData] = useState("")
  const [isloading, setIsLoading] = useState(false)

  const toneAnalysis = useSelector((state) => state.toneAnalysis.toneAnalysis.toneAnalysis.kwargs.content);

  const dispatch = useDispatch();



  const handleGenerateContent = async () => {
    setIsLoading(true);
    try {
      const response = await getBlogData(title, additionalContent, toneAnalysis);
      // const response = await getBlogData(DEMO_BLOG_DATA.content, DEMO_BLOG_DATA.additionalDetails, DEMO_BLOG_DATA.toneAnalysis);
      if (!title || !additionalContent) {
        toast.error('Please enter title or additional details',{
          position: "bottom-center"
        });
        return;
      }
      setBlogData(response);
      // console.log(response)
      toast.success('Content generated successfully!',{
        position: "bottom-center"
      });
      dispatch(setNewBlog(response));
      dispatch(setActiveTab(2));
    } catch (error) {
      toast.error('Error occurred while generating content',{
        position: "bottom-center"
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div style={
      {
        maxWidth: '36rem'
      }
    }>
      <input type="text" placeholder="give your title" className="block w-full p-2 mb-4 rounded-lg
        outline-none border border-slate-900 hover:border-slate-950 focus:border-slate-950 transition-colors duration-300 ease-in-out text-black " onChange={
          (e) => {
            setTitle(e.target.value)
          }
        } />

      <textarea rows="10" cols="66" type="text" placeholder="Enter your additional details here" className="w-full p-2 mb-4 rounded-lg
        outline-none border border-slate-900 hover:border-slate-950 focus:border-slate-950 transition-colors duration-300 ease-in-out text-black
      "
        onChange={(e) => {
          setAdditionalContent(e.target.value)
        }}
      />
      <button className=" bg-slate-900 hover:bg-slate-950 text-white font-bold py-2 px-4 rounded" onClick={handleGenerateContent} >
        Generate Content
        {
          isloading ? <span className="animate-spin ml-2">🔄</span> : null
        }
      </button>
      <ToastContainer />
    </div>
  )
}

export default ContentInput