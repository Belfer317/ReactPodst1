import Ebook from "../../Components/Ebook/Ebook";
import Nav from "../../Components/Nav/Nav";
import ViewTitle from "../../Components/ViewTitle/ViewTitle";

const ebooks = [
  {
    id: 1,
    title: "Co robić przed końcem świata",
    author: "T. Stawiszyński",
  },
  {
    id: 2,
    title: "21 lekcji na XXI wiek",
    author: "Y. Harari",
  },
  {
    id: 3,
    title: "Kubuś Puchatek",
    author: "A. Milne",
  },
];

const Ebooks =()=>(
    <>
       <Nav />
       <ViewTitle title='Ebooki' />
      {ebooks.map((ebook)=>(
      <div key={ebook.id}>
        <Ebook  id={ebook.id} title={ebook.title} author={ebook.author} />
      </div>
))}
    </>
)
export default Ebooks