import { Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage";
import  CreatePage  from "./pages/CreatePage";
import  NoteDetailPage  from "./pages/NoteDetailPage";
import { Toaster } from "react-hot-toast";


const App = () => {
  return (
    <div className="realtive h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]"/>

     <Routes>
      <Route path="/" element={<HomePage/>}/>
       <Route path="/create" element={<CreatePage/>}/>
        <Route path="/note/:id" element={<NoteDetailPage/>}/>
      </Routes> 
      <Toaster position="top-center" reverseOrder={false}/>
    </div>
  )
}

export default App