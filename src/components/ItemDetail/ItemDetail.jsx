import { ItemCount } from "../ItemCount/ItemCount";
import '../ItemDetail/ItemDetail.css'


function ItemDetail(props) {
    const { id, Image, Marca, Nombre, Precio, Detalles } = props;
    return (
        <>
            <div className="card mt-5 mb-3 ms-2 mx-2 border-dark text-center col-md-3" key={id}>
                <img className="card-img-top mt-2" src={Image} alt={Nombre} />
            </div>

            <div className="bg-white mt-5 mb-3 ms-2 mx-2 border-dark text-center card col-md-2 detail-container">
                <h5 className=""> Tablet {Marca}</h5>
                <h6> Modelo {Nombre}</h6>
                <h6> {Detalles}</h6>
                <p className="">$ {Precio}</p>
                <ItemCount item={{ id, Marca, Nombre, Precio, Detalles }} />
            </div>
        </>
    );
}

export default ItemDetail;