import { useState } from "react"
import Editor from 'react-simple-wysiwyg';

const ContentOutput = () => {
    const [html, setHtml] = useState('');

    function onChange(e) {
        setHtml(e.target.value);
      }
  return (
    <div>
        <Editor 
        containerProps={
            {
                style: {
                    border: '1px solid black',
                    backgroundColor: 'white',
                    color: 'black',
                    height: '300px',
                }
            }
        }
        value={html} 
        onChange={onChange}  />

        <button className=" bg-slate-900 hover:bg-slate-950 text-white font-bold py-2 px-4 rounded mt-4" onClick={()=>{
            window.location.reload()
        }} >
            reset
        </button>
    </div>
  )
}

export default ContentOutput