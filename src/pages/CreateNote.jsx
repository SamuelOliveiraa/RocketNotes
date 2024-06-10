import CreateNoteForm from "../components/CreateNoteForm";
import Header from "../components/Header";
import Container from "./Container";

function CreateNote() {
  return (
    <Container className={"grid grid-cols-1 gap-14 "}>
      <Header />
      <CreateNoteForm />
    </Container>
  );
}

export default CreateNote;
