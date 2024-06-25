import React, { useEffect, useState } from "react"
import New_Xure_Logo from './assets/New_Xure_Logo.png';
import { API_KEY } from "../API/config";
import usePost from "../API/usePost"

function App() {

  const [inputTitle, setInputTitle] = useState('');
  const [inputContext, setInputContext] = useState('');
  const { data, loading, error, postData } = usePost(API_KEY);

  const handleSubmit = (e) => {
    e.preventDefault();
    postData({
      title: inputTitle,
      notification: inputContext
    });
  };

  return (
    <>
      <div className="bg-black h-max">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center items-center py-24">
            <div className="card w-3/4 bg-custom-bg p-2">
              <div className="flex justify-center mt-4">
                <img src={New_Xure_Logo} className="p-2 text-custom-dark text-center text-lg font-extrabold w-36 h-12 bg-custom-bg " />
              </div>
              <form onSubmit={handleSubmit} action="" className="card-body space-y-4">
                <input
                  type="text"
                  value={inputTitle}
                  onChange={(e) => setInputTitle(e.target.value)}
                  placeholder="Enter title"
                  className="input text-white border-1 border-custom-gold w-full bg-custom-bg focus:border-2 focus:border-light-gold text-base"
                />

                <textarea
                  value={inputContext}
                  onChange={(e) => setInputContext(e.target.value)}
                  className="textarea border-1 border-custom-gold h-48 w-full text-white text-base bg-custom-bg focus:border-2 focus:border-light-gold"
                  placeholder="Enter notification text"
                />

                <div className="card-actions">
                  <button type='submit' className="flex items-center gap-2 rounded-xl px-10 py-2 text-base text-white font-bold bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
                    Send
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" id="Send--Streamline-Block---Free" height={18} width={18} ><desc>{"Send Streamline Icon: https://streamlinehq.com"}</desc><path fill="#ffff" d="m0 4 16 -4 -4 16 -4 -4 -4 4v-4.9995l4.93924 -4.93972L7.87857 5 4.4395 8.4395 0 4Z" strokeWidth={1} /></svg>
                  </button>
                </div>
              </form>

              {loading && <div>Loading...</div>}
              {error && <div>Error: {error.message}</div>}
              {data && <div>Response: {JSON.stringify(data, null, 2)}</div>}

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
