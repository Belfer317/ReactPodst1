import Cd from "../../Components/Cd/Cd";
import Nav from "../../Components/Nav/Nav";
import ViewTitle from "../../Components/ViewTitle/ViewTitle";

const cds = [
  { id: 1, title: "Sen o 7 szklankach", performer: "Coma" },
  { id: 2, title: "Fugazi", performer: "Marillion" },
  { id: 3, title: "Zeit", performer: "Rammstein" }
];
const CDs = () => (
  <>
    <Nav />
    <ViewTitle title="Oto moje Płyty CD" />
    {cds.map((cd) => (
      <div key={cd.id}>
        <Cd id={cd.id} title={cd.title} performer={cd.performer} />
        <hr />
      </div>
    ))}
  </>
);
export default CDs;
