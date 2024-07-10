import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col border p-5 mt-5 mb-3">
      <h1 className="text-2xl font-bold mb-1">This is title of todo list</h1>
      <p className="mb-5 leading-7 text-gray-800">
        This is description text of 250 words with no commas here.
        This is description text of 250 words with no commas here.
        This is description text of 250 words with no commas here.
        </p>
      <div className="flex items-start justify-end">
          <Link 
          className="py-2 mr-5 px-5 bg-violet-600 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75" 
          href={"/edit"}>
            Edit
          </Link>
         
          <Link 
          className="py-2 px-5 bg-rose-700 text-white font-semibold rounded-full shadow-md hover:bg-rose-900 focus:outline-none focus:ring focus:ring-rose-400 focus:ring-opacity-75" 
          href={"/delete"}>
            Delete
          </Link>
      </div>
    </div>
  );
}
