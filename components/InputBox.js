import { CameraIcon, EmojiHappyIcon, VideoCameraIcon } from "@heroicons/react/solid";
import {db} from "../firebase"
import Image from "next/image"
import { useRef } from "react";
import firebase from "firebase"
function InputBox() {
    const inputRef=useRef(null)
    const sendPost=(e)=>{
        e.preventDefault();
        if(!inputRef.current.value) return;
        db.collection("posts").add({
            message:inputRef.current.value,
            name:"Samir",
            email:"samir@gmail.com",
            image:"https://avatars.githubusercontent.com/u/50224886?v=4",
            timestamp:"firebase.firestore.FieldValue.serverTimestamp()"
        })
        inputRef.current.value=""
    }
    return (
        <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
            <div className="flex space-x-4 p-4 items-center">
                <Image 
                    className="rounded-full"
                    src="https://avatars.githubusercontent.com/u/50224886?v=4"
                    width={40}
                    height={40}
                    layout="fixed"
                />
                <form action="" className="flex flex-1">
                    <input ref={inputRef} type="text" placeholder="What's on your mind" className="rounded-full h-12 bg-gray-100
                    flex-grow px-5 focus:outline-none" />
                    <button hidden onClick={sendPost}></button>
                </form>
            </div>
            <div className="flex justify-evenly p-3 border-t">
                    <div className="inputIcon">
                        <VideoCameraIcon className="h-7 text-red-500" />
                        <p className="text-xs sm:text-sm xl:text-base">Live video</p>
                    </div>
                    <div className="inputIcon">
                        <CameraIcon className="h-7 text-green-400" />
                        <p className="text-xs sm:text-sm xl:text-base">Photo/video</p>
                    </div>
                    <div className="inputIcon">
                        <EmojiHappyIcon className="h-7 text-yellow-300" />
                        <p className="text-xs sm:text-sm xl:text-base">Felling/Activity</p>
                    </div>
                </div>
        </div>
    )
}

export default InputBox
