import React, { useState, useRef, useEffect } from "react";
import SongRow from "./SongRow/songRow";
import { Table, TableHead, TableBody, TableRow, TableCell, Input } from "@mui/material";
import { SearchRounded } from '@mui/icons-material';
import table_style from "./SongRow/song.module.scss";

// SongList component for displaying a list of tracks with search functionality
export default function SongList({ trackslist }) {
  // Column names for the table
  const columnNames = ["", "Song name", "Artist Name", "Track", ""];

  // State to hold the tracks
  const [tracks, setTracks] = useState(trackslist);

  // useEffect to update tracks when the prop trackslist changes
  useEffect(() => {
    setTracks(trackslist);
  }, [trackslist]);

  // Search function
  function startsearch(query) {
    if (!query) return trackslist;
    return trackslist.filter((track) =>
      track.title.toLowerCase().includes(query.toLowerCase()) ||
      track.artists.toLowerCase().includes(query.toLowerCase())
    );
  }

  // Handle filter change for search
  const handleFilterChange = (e) => {
    let searchedTrackList = startsearch(e.target.value);
    setTracks(searchedTrackList); // Changing state to searchedTracklist
  };

  // Component rendering
  return (
    <div>
      {/* Search input */}
      <div>
        <SearchRounded />
        <Input
          placeholder="Search tracks"
          onChange={handleFilterChange}
        />
      </div>

      <Table className={table_style.table}>
        {/* Table header */}
        <TableHead className={table_style.table_header}>
          <TableRow>
            {columnNames.map((columnName, index) => (
              <TableCell key={index}>{columnName}</TableCell>
            ))}
          </TableRow>
        </TableHead>

        {/* Table body with SongRow components */}
        <TableBody>
          {tracks.map((track) => (
            <SongRow key={track.id} {...track} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
