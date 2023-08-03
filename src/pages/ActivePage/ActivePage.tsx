import { FormComp } from "../../components/Form/Form";
import { SummaryTable } from "../../components/SummaryTable/SummaryTable";
import { NotesList } from "../../components/NotesList/NotesList";
import { useAppDispatch } from "../../store/hooks";
import { toggleForm } from "../../store/slice";
import { Button } from "../../components/Button/Button";

export const ActivePage = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <FormComp />
      <NotesList />
      <Button text="Add note" handleClick={() => dispatch(toggleForm())} />
      <SummaryTable />
    </>
  );
};
