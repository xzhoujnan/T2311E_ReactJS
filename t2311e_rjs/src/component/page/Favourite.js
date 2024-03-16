import { useContext } from "react";
import { Container, Table } from "react-bootstrap";
import Context from "../../context/context";

function Favourite(props){
    const {favourite,setFavourite} = useContext(Context);
    return (
        <>
        <h1>Favourite Item page</h1>
        <Container>
            <Table>
                <thead>
                    <th>ID</th>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                </thead>
                <tbody>
                    {
                        favourite.map((e,i)=>{
                            return <tr key={i}>
                                <td>{e.id}</td>
                                <td><img src={e.thumbnail}  width={125}/></td>
                                <td>{e.title}</td>
                                <td>{e.price}</td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>
        </Container>
        </>
    );
}
export default Favourite;