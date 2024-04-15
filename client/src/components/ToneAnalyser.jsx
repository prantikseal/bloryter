import { useState } from "react"
import getToneAnalysis from "../utils/getToneAnalysis"

const ToneAnalyser = () => {
  const [content, setContent] = useState("")
  const [tone, setTone] = useState("")
  const [isloading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setContent(e.target.value)
  }

  const handleAnalyseTone = async () => {
    setIsLoading(true)
    const response = await getToneAnalysis(content)
    setTone(response)
    // console.log(response)
    setIsLoading(false)
  }
  return (
    <div>
      <textarea rows="10" cols="50" type="text" placeholder="Enter your content here" className="w-full p-2 mb-4 rounded-lg
        outline-none border border-slate-900 hover:border-slate-950 focus:border-slate-950 transition-colors duration-300 ease-in-out text-black"
        onChange={handleChange}
        />
      <button className=" bg-slate-900 hover:bg-slate-950 text-white font-bold py-2 px-4 rounded" onClick={handleAnalyseTone} >
        Analyse Tone
        {
          isloading ? <span className="animate-spin ml-2">🔄</span> : null
        }
      </button>
    </div>
  )
}

export default ToneAnalyser