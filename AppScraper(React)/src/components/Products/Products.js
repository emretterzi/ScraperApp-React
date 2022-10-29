import React ,{useState,useEffect} from "react";
import ReactDOM from "react-dom/client";

function Products(){
    const [error,setError]=useState(null);
    const [isload,setIsLoad]=useState(false);
    const [productstList,setproductsList]=useState([]);

    useEffect(() => {

    fetch("/getall")
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoad(true);
                setproductsList(result);



            },
        (error)=>{
                setIsLoad(true);
                setError(error);



        }



        )


    },[])

    if(error){
        return<div> Error </div>


    }
    else if(!isload){
        return <div>Loading...</div>
    }

    else{

        return (

            <ul>

                {productstList.map(products => (
                    <div >


                        <div className="container text-center">
                                     <div class="row justify-content-center align-items-center">
                                         <div class="kutucuk cols-3">

                                             <img src="..." className="card-img-top" alt="..."></img>
                                         <h5 className="card-title">{products.productsName}</h5>
                                    <p className="card-text">{products.productsPrice}</p>
                                    <a href={products.productLink}className="btn btn-primary">LİNK</a>

                                         </div>
                                     </div>
                        </div>






                    </div>




                    ))}
                    </ul>
        );
    }



}
export default Products;