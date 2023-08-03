import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addNote, changeEdit, updateNote, toggleForm } from "../../store/slice";
import { INote } from "../../models/INote";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import "./Form.css";

export const FormComp = () => {
  const dispatch = useAppDispatch();
  const { openForm, edit, editElement } = useAppSelector(
    (state) => state.notes
  );
  const [note, setNote] = useState("");
  const [content, setContent] = useState(" ");
  const [category, setCategory] = useState("Task");
  useEffect(() => {
    if (editElement) {
      setNote(editElement.note);
      setContent(editElement.content);
      setCategory(editElement.category);
    }
  }, [openForm]);
  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!note || !content) {
        throw new Error("Fields should be filled!");
      }
      const dates =
        note.match(/(\d{1,4}([.\-/])\d{1,2}([.\-/])\d{1,4})/g) || [];
      const date = new Date();
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const month = months[date.getMonth()];
      const created = `${month} ${date.getDate()}, ${date.getFullYear()}`;
      if (edit) {
        dispatch(updateNote({ note, content, category, dates }));
      } else {
        const newNote: INote = {
          id: Date.now(),
          archived: false,
          note,
          created,
          content,
          category,
          dates,
        };
        dispatch(addNote(newNote));
      }
      dispatch(toggleForm());
      setNote("");
      setContent("");
      setCategory("Task");
    } catch (e: any) {
      alert(e.messsage);
    } finally {
      dispatch(changeEdit());
    }
  };
  return (
    <div className={`form-component ${openForm && "show"}`}>
      <Form onSubmit={onFormSubmit}>
        <Input
          color="transparent"
          value={note}
          onChangeEvent={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNote(e.target.value)
          }
          placeholder="Enter a note..."
        />
        <FloatingLabel
          className="my-3"
          controlId="floatingTextarea2"
          label="Content"
        >
          <Form.Control
            as="textarea"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
            placeholder="Leave a description here"
            style={{ height: "100px" }}
          />
        </FloatingLabel>
        <FloatingLabel
          className="mb-3"
          controlId="floatingSelect"
          label="Category"
        >
          <Form.Select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            <option value="Task">Task</option>
            <option value="Random Thought">Random Thought</option>
            <option value="Idea">Idea</option>
          </Form.Select>
        </FloatingLabel>
        <Button text="Add" type="submit" size="sm" />
      </Form>
    </div>
  );
};
