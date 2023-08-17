import './App.css';
import { IoLogoLinkedin, IoLogoGithub, IoMdPerson } from 'react-icons/io';

import pdf from './Assets/resume.pdf';
import companythumbnail from './Assets/companythumbnail.png';
import notzrthumbnail from './Assets/notzrthumbnail.png';
import kanbanthumbnail from './Assets/kanbanthumbnail.png';
import triethumbnail from './Assets/triethumbnail.png';
import amnestythumbnail from './Assets/amnestythumbnail.png';
import fenceerthumbnail from './Assets/fenceerthumbnail.png';
import polyglotthumbnail from './Assets/polyglotthumbnail.jpg';

import photo from './Assets/photo.jpg';

function App() {
  return (
    <div className="mx-5">
      <div className='text-5xl my-10'>Joshua Li </div>
      <div>
        <div className='text-ml leading-loose'>
          <div className='text-2xl mb-3'>Hey! 👋</div>
          <p>
            You can call me Josh.
            <br></br>
            I am a second-year student at the University of Waterloo studying Computer Science and an alumni of Upper Canada College.
            I am passionate about building impactful technologies, specifically in the areas of AI, distributed computing, and fintech.
            <br></br>
            Currently, I work as a developer @ CGI on cloud and containerization.
            Previously, I facilitated web development during my internship @ Pensieve (Silicon Valley-based startup).
            I have programmed competitively and experimented with machine learning as well.
            <br></br>
            In my free time, you can catch me rock climbing, biking around toronto, or reading on philosophy.
            <br></br>
            You can find my LinkedIn, GitHub and Resume below:
          </p>
        </div>
        <div className="flex items-baseline mt-4 mb-6">
          <div className="space-x-6 flex">
            <a href={'https://www.linkedin.com/in/joshli04/'}><IoLogoLinkedin /></a>
            <a href={'https://github.com/JoshLiCoding'}><IoLogoGithub /></a>
            <a href={pdf}><IoMdPerson /></a>
          </div>
        </div>
      </div>

      <div className='text-4xl my-10 text-center'>Projects</div>
      <p className='my-3'>Click on "Website" to visit to the finished product or click anywhere else in the box to visit the GitHub/Devpost page.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        <a href='https://devpost.com/software/polyglot-io' target='_blank'
          className="p-2 border border-solid rounded border-black flex flex-1 flex-col justify-between">
          <div>
            <div className="border border-solid rounded border-grey">
              <img src={polyglotthumbnail} className="object-cover h-60 mx-auto" loading="lazy" />
            </div>
            <div className='mt-3 mx-3'>
              <div className="flex-auto text-2xl font-semibold mb-2 text-center">
                Polyglot.io
              </div>
              <div className="flex-auto text-sm text-center">
                Video chat to learn new languages
              </div>
              <div className="flex-auto text-xs text-center italic mt-1">
                React.js, MUI, Node.js
              </div>
            </div>
          </div>
        </a>

        <a href='https://github.com/JoshLiCoding/Company-Report' target='_blank'
          className="p-2 border border-solid rounded border-black flex flex-1 flex-col justify-between">
          <div>
            <div className="border border-solid rounded border-grey">
              <img src={companythumbnail} className="object-cover h-60 mx-auto" loading="lazy" />
            </div>
            <div className='mt-3 mx-3'>
              <div className="flex-auto text-2xl font-semibold mb-2 text-center">
                Company Report
              </div>
              <div className="flex-auto text-sm text-center">
                Automatically detail and graph stocks
              </div>
              <div className="flex-auto text-xs text-center italic mt-1">
                React.js, MUI, FinnHub API
              </div>
            </div>
          </div>

          <div className="text-ml text-center mt-2 mb-2">
            <a target='_blank' href='https://joshlicoding.github.io/Company-Report/#/' class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-teal-600 transition duration-300 ease-out border-2 border-teal-500 rounded-full shadow-md group">
              <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-teal-500 group-hover:translate-x-0 ease">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span class="absolute flex items-center justify-center w-full h-full text-teal-500 transition-all duration-300 transform group-hover:translate-x-full ease">Website</span>
              <span class="relative invisible">Website</span>
            </a>
          </div>
        </a>

        <a href='https://github.com/j4x04/notzrV1' target='_blank'
          className="p-2 border border-solid rounded border-black flex flex-1 flex-col justify-between">
          <div>
            <div className="border border-solid rounded border-grey">
              <img src={notzrthumbnail} className="object-cover h-60 mx-auto" loading="lazy" />
            </div>
            <div className='mt-3 mx-3'>
              <div className="flex-auto text-2xl font-semibold mb-2 text-center">
                NOTZR
              </div>
              <div className="flex-auto text-sm text-center">
                Access free notes from Toronto IB students
              </div>
              <div className="flex-auto text-xs text-center italic mt-1">
                React.js, Chakra UI, Firebase
              </div>
            </div>
          </div>
        </a>

        <a href='https://github.com/JoshLiCoding/Kanban-Board-UI' target='_blank'
          className="p-2 border border-solid rounded border-black flex flex-col justify-between">
          <div>
            <div className="border border-solid rounded border-grey">
              <img src={kanbanthumbnail} className="object-cover h-60 mx-auto" loading="lazy" />
            </div>
            <div className='mt-3 mx-3'>
              <div className="flex-auto text-2xl font-semibold mb-2 text-center">
                Kanban Board
              </div>
              <div className="flex-auto text-sm text-center">
                Manage agile tasks with Kanban
              </div>
              <div className="flex-auto text-xs text-center italic mt-1">
                React.js, MUI, Fetch API
              </div>
            </div>
          </div>
        </a>

        <a href='https://github.com/JoshLiCoding/Slingshot-Challenge-Trie' target='_blank'
          className="p-2 border border-solid rounded border-black flex flex-col justify-between">
          <div>
            <div className="border border-solid rounded border-grey">
              <img src={triethumbnail} className="object-cover h-60 mx-auto" loading="lazy" />
            </div>
            <div className='mt-3 mx-3'>
              <div className="flex-auto text-2xl font-semibold mb-2 text-center">
                Trie System
              </div>
              <div className="flex-auto text-sm text-center">
                Test keyword storage over CLI using a web-hosted trie system
              </div>
              <div className="flex-auto text-xs text-center italic mt-1">
                Node.js, Firebase
              </div>
            </div>
          </div>
        </a>

        <a href='https://github.com/JoshLiCoding/AmnestyUCC' target='_blank'
          className="p-2 border border-solid rounded border-black flex flex-col justify-between">
          <div>
            <div className="border border-solid rounded border-grey">
              <img src={amnestythumbnail} className="object-cover h-60 mx-auto" loading="lazy" />
            </div>
            <div className='mt-3 mx-3'>
              <div className="flex-auto text-2xl font-semibold mb-2 text-center">
                Amnesty UCC
              </div>
              <div className="flex-auto text-sm text-center">
                View Amnesty club's articles, publications, events
              </div>
              <div className="flex-auto text-xs text-center italic mt-1">
                HTML, Materialize CSS, JS
              </div>
            </div>
          </div>

          <div className="text-ml text-center mt-2 mb-2">
            <a target='_blank' href='https://joshlicoding.github.io/AmnestyUCC/' class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-teal-600 transition duration-300 ease-out border-2 border-teal-500 rounded-full shadow-md group">
              <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-teal-500 group-hover:translate-x-0 ease">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span class="absolute flex items-center justify-center w-full h-full text-teal-500 transition-all duration-300 transform group-hover:translate-x-full ease">Website</span>
              <span class="relative invisible">Website</span>
            </a>
          </div>
        </a>

        <a href='https://github.com/JoshLiCoding/Y10-Fenceer' target='_blank'
          className="p-2 border border-solid rounded border-black flex flex-col justify-between">
          <div>
            <div className="border border-solid rounded border-grey">
              <img src={fenceerthumbnail} className="object-cover h-60 mx-auto" loading="lazy" />
            </div>
            <div className='mt-3 mx-3'>
              <div className="flex-auto text-2xl font-semibold mb-2 text-center">
                Fenceer
              </div>
              <div className="flex-auto text-sm text-center">
                Upload and access Ontario fencing events
              </div>
              <div className="flex-auto text-xs text-center italic mt-1">
                HTML, Materialize CSS, JS, Firebase
              </div>
            </div>
          </div>

          <div className="text-ml text-center mt-2 mb-2">
            <a target='_blank' href='https://joshlicoding.github.io/Y10-Fenceer/FenceerModified/' class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-teal-600 transition duration-300 ease-out border-2 border-teal-500 rounded-full shadow-md group">
              <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-teal-500 group-hover:translate-x-0 ease">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span class="absolute flex items-center justify-center w-full h-full text-teal-500 transition-all duration-300 transform group-hover:translate-x-full ease">Website</span>
              <span class="relative invisible">Website</span>
            </a>
          </div>
        </a>
      </div>

      <div className='text-ml my-8'>
        Feel free to reach out to me at <u>joshual2004.work@gmail.com</u>
        <br></br>
        &copy; 2022 Joshua Li
      </div>
    </div>
  );
}

export default App;