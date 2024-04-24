import { useState, useEffect } from "react";
import Navbar from "../../Navbar/Navbar";
import "../../App.css";
import { Link } from "react-router-dom";
import ConfirmDialog from "./ConfirmDialog"; // Import ConfirmDialog component

interface Data {
  id: number;
  imageUrl: string;
  name: string;
}

const CreatePlaylist = () => {
  const [playlistData, setPlaylistData] = useState<Data[]>([]);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [songIdToRemove, setSongIdToRemove] = useState<number>(-1);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("playlist") || "[]");
    setPlaylistData(storedData);
  }, []);

  const handleRemoveSong = (id: number) => {
    setSongIdToRemove(id);
    setOpenDialog(true);
  };

  const confirmRemoveSong = () => {
    const updatedPlaylist = playlistData.filter(
      (item) => item.id !== songIdToRemove
    );
    setPlaylistData(updatedPlaylist);
    localStorage.setItem("playlist", JSON.stringify(updatedPlaylist));
    setOpenDialog(false);
  };

  return (
    <>
      <div className="create-container">
        <div className="heading">My Playlist</div>
        {playlistData.length === 0 ? (
          <p className="font-bold text-xl">Songs are not currently available in your playlist.</p>
        ) : (
          playlistData.map((item: Data) => (
            <div key={item.id} className="create-image">
              <Link to={`/musicplay/${item.id}`}>
                <img src={item.imageUrl} alt="album cover" />
                <h3 className="text-center">{item.name}</h3>
              </Link>
              <button
                className="remove-song"
                onClick={() => handleRemoveSong(item.id)}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
      <Navbar />
      <ConfirmDialog
        title="Confirm Removal"
        open={openDialog}
        setOpen={setOpenDialog}
        onConfirm={confirmRemoveSong}
      >
        Are you sure you want to remove this song from your playlist?
      </ConfirmDialog>
    </>
  );
};

export default CreatePlaylist;
