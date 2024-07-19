import React, { useEffect, useState } from "react";
import { deleteHistory, getHistory } from "../Services/allApis";
import { toast } from "react-toastify";

function History() {
  const [his, setHis] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await getHistory();
    setHis(res.data);
  };
  console.log(his);
  const deleteHis = async (id) => {
    const del = await deleteHistory(id);
    if (del.status === 200) {
      toast.success("History got deleted ");
      getData();
    } else {
      toast.error("Something went Wrong");
    }
  };

  return (
    <div className="p-4">
      <h3 className=" text-info my-3 ">Watch History</h3>
      {his.length > 0 ? (
        <table className="table table-bordered table-dark border border-3 shadow">
          <thead>
            <tr>
              <th>Video ID</th>
              <th>Caption</th>
              <th>Cover</th>
              <th>Video URL</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {his.map((item) => (
              <tr key={item.id}>
                <td>{item.videoId}</td>
                <td>{item.caption}</td>
                <td className="text-center"><img width={100} src={item.image} alt="" /></td>
                <td>{item.videoUrl}</td>
                <td>{item.datetime}</td>
                <td>
                  <i
                    onClick={()=> deleteHis(item.id)}
                    className="fa-solid fa-trash"
                    style={{ color: "#e13509" , cursor:"pointer" }}
                    
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No history available</p>
      )}
    </div>
  );
}

export default History;
