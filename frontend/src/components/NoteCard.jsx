import React from 'react'
import {Link} from "react-router";
import {PenSquareIcon, Trash2Icon} from "lucide-react";
import { formatDate } from '../lib/utils';
import api from '../lib/axios';
import toast from 'react-hot-toast';
const NoteCard = ({note ,setNotes}) => {
  const handleDelete=async (e, id) =>{
  //we have to get rid default behaviour because the frontend(delete button) is in
  //Link were we navigate not details page
    e.preventDefault();//get rid of the nav behaviour

    if (!window.confirm("Are you sure you want to delete this note?")) return;
//  if we say yes then go to try and catch block
    try{
    await api.delete(`/notes/${id}`)
    setNotes((prev)=>prev.filter(note =>note._id!==id))
    //get rid of delted note and refresh the ui with remaining note
    //in the ui
    toast.success("Note deletd successfully")
    
  } catch (error) {
    console.log("Error in handleDelete",error)
    toast.error("Failed to delete note");
    
  }

};
 
  return <Link to ={`/note/${note._id}`} 
  className="card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#00FF9D]">
    <div className='card-body'>
      <h3 className='card-title text-base-content'>{note.title}</h3>
      <p className='text-base-content/70 line-clamp-3'>{note.content}</p>
      <div className='card-actions justify-between items-center mt-4'>
        <span className='text-sm text-base-content/60'>
          {formatDate(new Date(note.createdAt))}
        </span>
        <div className='flex items-center gap-1'>
              <PenSquareIcon className='size-4'/>
                <button className='btn btn-ghost btn-xs text-error' onClick={(e)=>handleDelete(e,note._id)}>
                  <Trash2Icon className='size-4'/>
                  
                </button>
              
        </div>
      </div>

    </div>
  </Link>;
};
export default NoteCard;
