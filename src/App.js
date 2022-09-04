import './App.css';
import { IoLogoLinkedin, IoLogoGithub, IoMdPerson } from 'react-icons/io';

import pdf from './Assets/resume.pdf';
import companythumbnail from './Assets/companythumbnail.png';
import notzrthumbnail from './Assets/notzrthumbnail.png';
import kanbanthumbnail from './Assets/kanbanthumbnail.png';
import triethumbnail from './Assets/triethumbnail.png';
import amnestythumbnail from './Assets/amnestythumbnail.png';
import fenceerthumbnail from './Assets/fenceerthumbnail.png';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ }) => ({
  backgroundColor: '#fff',
  textAlign: 'center',
  height: '20rem',
}));

function App() {
  return (
    <div className="App">
      <p className='title'>Joshua Li </p>
      <div className='textbox'>
        <p className>
          <span style={{ fontWeight: "bold" }}>Hey!</span> I am a CS first-year at the University of Waterloo and a recent alumni of Upper Canada College. I am
          passionate about building impactful technologies through creative problem-solving, particularly using AI.
        </p>
        <p className>
          Previously, I gained experience with web development through my internship at Pensieve (Silicon Valley-based startup) as well as through various projects.
          I have exposure to some competitive programming in Java and artificial intelligence in Python as well.
        </p>
        <p className>
          In my free time, I love to bike around Toronto and enjoy different genres of music.
        </p>
      </div>
      <div>
        <p className='textbox'>
          You can find my LinkedIn, GitHub and resume below:
        </p>
        <a href={'https://www.linkedin.com/in/joshli04/'}><IoLogoLinkedin /></a>
        <a href={'https://github.com/JoshLiCoding'}><IoLogoGithub /></a>
        <a href={pdf} className='resume'><IoMdPerson /></a>
      </div>

      <p className='heading'> Projects </p>

      <Box sx={{ flexGrow: 1, width: '90%', }}>
        <Grid container spacing={2}>
        <Grid item xs={4}>
            <Item>
              <img src={companythumbnail} className='proj'></img>
              <a href='https://github.com/JoshLiCoding/Company-Report' className='ltext-proj' target='_blank'>Company Report</a>
              <p className='stext-proj'>A website that automatically provides information about companies using stock tickers</p>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <img src={notzrthumbnail} className='proj'></img>
              <a href='https://github.com/j4x04/notzrV1' className='ltext-proj' target='_blank'>Notzr</a>
              <p className='stext-proj'>A free-access notes-sharing platform designed for Toronto IB students</p>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <img src={kanbanthumbnail} className='proj'></img>
              <a href='https://github.com/JoshLiCoding/Kanban-Board-UI' className='ltext-proj' target='_blank'>Kanban Board</a>
              <p className='stext-proj'>A functional Kanban board, built as part of the Pensieve interview process</p>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <img src={triethumbnail} className='proj'></img>
              <a href='https://github.com/JoshLiCoding/Slingshot-Challenge-Trie' className='ltext-proj' target='_blank'>Trie System</a>
              <p className='stext-proj'>A web-hosted trie system over CLI that supports several operations (Slingshot interview)</p>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <img src={amnestythumbnail} className='proj'></img>
              <a href='https://github.com/JoshLiCoding/AmnestyUCC' className='ltext-proj' target='_blank'>Amnesty UCC</a>
              <p className='stext-proj'>A website that shares activities at UCC's Amnesty International Club, including articles</p>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <img src={fenceerthumbnail} className='proj'></img>
              <a href='https://github.com/JoshLiCoding/Y10-Fenceer' className='ltext-proj' target='_blank'>Fenceer</a>
              <p className='stext-proj'>A website that allows users to share upcoming Ontario fencing events</p>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <div className='textbox end'>
        <p>
          Feel free to reach out to me at <u>joshual2004.work@gmail.com</u>
        </p>
        <p>
          &copy; 2022 Joshua Li
        </p>
      </div>
    </div>
  );
}

export default App;
