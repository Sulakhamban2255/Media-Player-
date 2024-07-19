import React, { useState, useEffect } from "react";
import VideoCard from "./VideoCard";
import { getVideo } from "../Services/allApis";

function VideoList({ addres }) {
  const [videoData, setVideoData] = useState([]);
  const [deleteVideo, setDeleteVideo] = useState("");

  useEffect(() => {
    getData();
  }, [addres, deleteVideo]);
  console.log(deleteVideo);

  const getData = async () => {
    const videos = await getVideo();
    console.log(videos.data);
    setVideoData(videos.data);
  };

  return (
    <div>
      {videoData.length > 0 ? (
        <div
          className="p-5 rounded shadow border border-3 border-light row justify-content-between align-content-between"
          style={{ backgroundColor:"white"}}
        >
          {videoData.map((item) => (
            <VideoCard key={item.id} videoItem={item} setdel={setDeleteVideo} />
          ))}
        </div>
      ) : (
        <h3>Videos Not Available</h3>
      )}
    </div>
  );
}

export default VideoList;
