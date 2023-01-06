import React from 'react';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import Rightbar from './components/Rightbar';
import Sidebar from './components/Sibebar';

function App() {
 return(
  <div className="flex flex-col w-full h-full">
    <div className="w-full h-20 bg-slate-500 fixed z-10 top-0">
      <Navbar />
    </div>
    <div className="flex flex-row px-5 bg-blue-400 h-full pt-10 mt-10">
      <div className="hidden sm:flex col sm:w-[10%] md:flex col w-1/5">
        <Sidebar />
      </div>
      <div className="w-full flex flex-col md:w-3/5">
        <Feed />
      </div>
      <div className="hidden sm:flex col sm:w-[10%] md:flex col w-1/5">
        <Rightbar />
      </div>
    </div>
    <div className="w-full h-10 bg-slate-500">
      Footer
    </div>
  </div>
 )
}

export default App;
