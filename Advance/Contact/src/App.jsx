
import NavBar from "./components/NavBar"
import {BsSearch} from "react-icons/bs"
import {AiFillPlusCircle} from "react-icons/ai"
import { useEffect, useState } from "react"
import {collection, getDocs, onSnapshot} from "firebase/firestore"
import {db} from "./config/firebase"
import Modal from "./components/Modal"
import ContactCard from "./components/ContactCard"
import AddAndUpdateContact from "./components/AddAndUpdateContact"
import NotFoundContact from "./components/NotFoundContact"
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import UseDiscoluse from "./hooks/UseDiscoluse"
const App = ()=>{
 const [contact,setContact]=useState([]);
 const {onClose,onOpen,isOpen}=UseDiscoluse()

 useEffect(()=>{
const getContact = async ()=>{
    try{
          const contactsRef = collection(db,"Contacts")
          // const contactSnapshot=  await getDocs(contactsRef);
          onSnapshot(contactsRef,(snapshot)=>{
            const contactLists = snapshot.docs.map((doc)=>{
              return {
                id:doc.id,
                ...doc.data()
              }
            })
             setContact(contactLists )
             return contactLists
          })
          
    }
    catch (error){
       console.log(error)
    }
}
getContact()
 },[])


 const filterContacts = (e)=>{
  const value = e.target.value
  const contactsRef = collection(db,"Contacts")

  onSnapshot(contactsRef,(snapshot)=>{
    const contactLists = snapshot.docs.map((doc)=>{
      return {
        id:doc.id,
        ...doc.data()
      }
    })
    
    const filterdContacts = contactLists.filter(contact=>contact.name.toLowerCase().includes(value.toLowerCase()) )
    setContact(filterdContacts )

     return filterdContacts
  })
 }

  return (
    <>
<div  className="max-w-[370px] mx-auto px-4 ">
      <NavBar />
      <div className="flex gap-2">
      <div className="flex relative items-center flex-grow">
       <BsSearch className="ml-2 text-3xl text-white absolute" />
        <input onChange={filterContacts} type="text" className="text-white pl-10 flex-grow border-2 border-white h-10 bg-transparent rounded-md " />
       </div>
       
        <AiFillPlusCircle onClick={()=> onOpen()} className=" text-5xl text-white cursor-pointer" />

      </div>
      <div className="mt-4 gap-3 flex flex-col">
        {
          contact.length === 0 ? <NotFoundContact /> :
          contact.map((contact)=>(
         <ContactCard key = {contact.id}  contact={contact}/>  
          ))
        }
      </div>
    </div>
     <AddAndUpdateContact onClose={onClose} isOpen={isOpen}/>
     <ToastContainer position="bottom-center" />
    </>
  )
  
}

export default App