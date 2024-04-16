import { useState } from 'react';
import getToneAnalysis from '../utils/getToneAnalysis';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { setToneAnalysis } from '../redux/slices/toneAnalysisSlice';
import { setActiveTab } from '../redux/slices/tabSlice';
import loaderGif from '../assets/loader/loader.gif';

const ToneAnalyser = () => {
  const [content, setContent] = useState('');
  const [tone, setTone] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleAnalyseTone = async () => {
    setIsLoading(true);
    try {
      if (!content || content.length < 200) {
        toast.error('Please enter some content to analyse (min 200 words)',{
          position: "bottom-center"
        });
        return;
      }
      const response = await getToneAnalysis(content);
      toast.success('Tone analysis successful!',{
        position: "bottom-center"
      });
      setTone(response);
      dispatch(setToneAnalysis(response));
      dispatch(setActiveTab(1));
    } catch (error) {
      console.error(error);
      toast.error('Error occurred during tone analysis',{
        position: "bottom-center"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <textarea
        rows="10"
        cols="50"
        type="text"
        placeholder="Enter your content here"
        className="w-full p-2 mb-4 rounded-lg outline-none border border-slate-900 hover:border-slate-950 focus:border-slate-950 transition-colors duration-300 ease-in-out text-black"
        onChange={handleChange}
      />
      <button
        className=" bg-slate-900 hover:bg-slate-950 text-white font-bold py-2 px-4 rounded flex justify-center items-center gap-2 mt-4"
        onClick={handleAnalyseTone}
      >
        Analyse Tone
        {isLoading ? <span className="animate-spin ml-2">
          <img
            src={loaderGif}
            alt="loader"
            className="w-4 h-4"
          />
        </span> : null}
      </button>
      
      <ToastContainer />
    </div>
  );
};

export default ToneAnalyser;