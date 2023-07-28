import { useEffect } from "react";
import { INote } from "../../models/INote";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { archiveNote, deleteNote } from "../../store/slice";
import Table from "react-bootstrap/Table";

export const TableComp = () => {
  let { notes } = useAppSelector((state) => state.notes);
  const dispatch = useAppDispatch();
  notes = notes.filter((item) => !item.archived);
  return (
    <Table bordered>
      <thead>
        <tr>
          <th>Name</th>
          <th>Created</th>
          <th>Category</th>
          <th>Content</th>
          <th>Dates</th>
          <th>
            <i className="bi bi-folder2-open"></i>
            <i className="bi bi-trash"></i>
          </th>
        </tr>
      </thead>
      <tbody>
        {notes.map((item: INote) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.created}</td>
            <td>{item.category}</td>
            <td>{item.content}</td>
            <td>
              {item.dates?.map((data, i) => (
                <div key={i}>{data}</div>
              ))}
            </td>
            <td>
              <i className="bi bi-pencil"></i>
              <i
                onClick={() => dispatch(archiveNote(item.id))}
                className="bi bi-folder2-open"
              ></i>
              <i
                onClick={() => dispatch(deleteNote(item.id))}
                className="bi bi-trash"
              ></i>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};