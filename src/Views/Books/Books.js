import Book from "../../Components/Book/Book";
import Nav from "../../Components/Nav/Nav";
import ViewTitle from "../../Components/ViewTitle/ViewTitle";

const books = [
  {
    id: 1,
    title: "Potop",
    author: "H. Sienkiewicz"
  },
  {
    id: 2,
    title: "Dziady",
    author: "A. Mickiewicz"
  },
  {
    id: 3,
    title: "Reguły na czas haosu",
    author: "T. Stawiszyński"
  }
];

const Books = () => (
  <>
    <Nav />
    <ViewTitle title="Oto moje książki" />
    {books.map((book) => (
      <div key={book.id}>
        <Book id={book.id} title={book.title} author={book.author} />
      </div>
    ))}
  </>
);
export default Books;
