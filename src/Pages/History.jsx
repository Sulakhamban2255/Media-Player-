import React from "react";

function History() {
  return (
    <div className="p-5">
      <h3 className="text-info my-3">Watch History </h3>
      <table className="table table-bordered table-dark border border-3 shadow ">
        <thead>
          <tr>
            <th>Video ID</th>
            <th>Video URL</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1 </td>
            <td> akjshdkasndkjkjahskd</td>
            <td>12/07/2024</td>
            <td><i className="fa-solid fa-trash" style={{color: '#e13509'}}></i></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default History;
