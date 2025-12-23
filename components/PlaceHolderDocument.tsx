"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { PlusCircleIcon } from "lucide-react";

function PlaceHolderDocument() {
    const router = useRouter();
    const handleClick = () => {
        router.push('/dashboard/upload');
        // check if user is a free or pro member of comos if not pro take them to the upgrade page
    };
  return (
    <Button onClick={handleClick} className="flex flex-col items-center border-2 border-gray-300 bg-gray-300 hover:bg-gray-800 h-80 w-64 rounded-xl gap-2 drop-shadow-md  text-gray-400">
        <PlusCircleIcon className="h-16! w-16!"/>
        <p>Add a document</p>
    </Button>
  )
}
export default PlaceHolderDocument