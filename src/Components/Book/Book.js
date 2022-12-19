const Book = ({ key, id, title, author }) => (
  <>
    <h2>
      {id}. "{title}"
    </h2>
    <h3>{author}</h3>
    <hr />
  </>
);
export default Book;
