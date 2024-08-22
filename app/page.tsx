import Image from "next/image";
import Buttons from "./components/Buttons";
import HomePage from "./summarizer/summarizer";

export default function Home() {

  return (
    <main className="flex w-full min-h-screen flex-col items-center bg-gray-200 ">
      <div className='mb-10 w-full h-44 grid place-items-center font-bold from-blue-900 via-blue-700 to-blue-500 text-gray-100 bg-gradient-to-r text-5xl'>Text Summarizer</div>
      <HomePage />
    </main>
  );
}
