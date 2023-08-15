import { deleteDoc,doc } from "firebase/firestore"
import {HiOutlineUserCircle} from "react-icons/hi"
import {IoMdTrash} from "react-icons/io"
import {RiEditCircleLine} from "react-icons/ri"
import {db} from "../config/firebase"
import AddAndUpdateContact from "./AddAndUpdateContact"
import UseDiscoluse from "../hooks/UseDiscoluse"
import { toast } from "react-toastify"


const ContactCard = ({contact})=>{
  const {onClose,onOpen,isOpen}=UseDiscoluse()


  const deleteContact = async (id)=>{
    try{
         await deleteDoc(doc(db,"Contacts",id))
         toast.success("Contact deleted successfully")
    }
    catch (error){
      console.log(error)
    }
  }
    return (
      <>
        <div key = {contact.id} className=" rounded-lg flex bg-yellow-300 justify-between p-2">
        <div className="flex gap-1">
        <HiOutlineUserCircle className="text-orange-700 text-4xl"/>
               <div className="">
                 <h2 className="font-medium">{contact.name}</h2>
                 <p className="text-sm">{contact.email}</p>
               </div>
        </div>
               <div className="flex  text-2xl">
               <RiEditCircleLine onClick={onOpen} className="cursor-pointer text-orange-500" />
               <IoMdTrash onClick ={()=>deleteContact(contact.id)} className="cursor-pointer text-orange-600" />
               </div>
             </div>
             <AddAndUpdateContact contact = {contact}  isUpdate   isOpen={isOpen} onClose={onClose} />
             </>
    )
}

export default ContactCard 