import React from "react";
import { useContext } from "react";
import { audiocontext } from "../../../allcontext/context";
import { PlayArrow, Pause, Apps, FavoriteOutlined, Check, Reply, ArrowDropDown } from '@mui/icons-material';
import { TableCell, TableRow, IconButton } from "@mui/material";
import style from "./song.module.scss";

// SongRow component for displaying individual track information
export default function SongRow(track) {
  const { toggleAudio, currentsong, isplaying } = useContext(audiocontext);


  let iscurrent = currentsong.id == track.id;

  // Component rendering
  return (
    <TableRow>
      {/* Table cell for play/pause button */}
      <TableCell>
        <div className={style.track}>
          <Apps />
          <IconButton
            onClick={() => {
              toggleAudio(track);
            }}
          >
            {/* Display Play or Pause icon based on current  state */}
            {iscurrent && isplaying ? <Pause /> : <PlayArrow />}
          </IconButton>
        </div>
      </TableCell>


      <TableCell>
        <div className={style.track}>
          <div className={style.credits}>
            <b>{track.title}</b>
          </div>
        </div>
      </TableCell>

    
      <TableCell>{track.artists}</TableCell>

      
      <TableCell>{track.id}</TableCell>

     
      <TableCell>
        <FavoriteOutlined />
        <Check />
        <Reply />
        <ArrowDropDown />
      </TableCell>
    </TableRow>
  );
}
