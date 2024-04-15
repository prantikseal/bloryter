import { useState } from 'react'
import getBlogData from '../utils/getBlogData'
import { DEMO_BLOG_DATA } from '../utils/constants'


const ContentInput = () => {
  const [title, setTitle] = useState("")
  const [additionalContent, setAdditionalContent] = useState("")
  const [blogData, setBlogData] = useState("")
  const [isloading, setIsLoading] = useState(false)



  const handleGenerateContent = async () => {
    setIsLoading(true)
    const response = await getBlogData(content, additionalContent, toneAnalysis)
    // const response = await getBlogData(DEMO_BLOG_DATA.content, DEMO_BLOG_DATA.additionalDetails, DEMO_BLOG_DATA.toneAnalysis)
    // console.log(response)
    setBlogData(response)
    setIsLoading(false)
  }
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
    </div>
  )
}

export default ContentInput