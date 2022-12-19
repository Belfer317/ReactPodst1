const Book = ({ key, id, title, author }) => (
  <div>
    <h2>
      {id}. "{title}"
    </h2>
    <h3>{author}</h3>
    <hr />
  </div>
);
export default Book;
