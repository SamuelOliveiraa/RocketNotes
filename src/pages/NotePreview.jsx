import Header from "../components/Header";
import ShowNoteById from "../components/ShowNoteById";
import Container from "./Container";

function NotePreview() {
  return (
    <Container>
      <Header />
      <ShowNoteById />
    </Container>
  );
}

export default NotePreview;
