import React, { useEffect, useState } from 'react';
const Contactlist = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        getContacts();
    }, []);

    const getContacts = async () => {
        let result = await fetch('http://localhost:9002/contactlist');
        result = await result.json();
        setContacts(result);
    }

    // const deleteProduct = async (id) => {
    //     console.warn(id)
    //     let result = await fetch(`http://localhost:5000/product/${id}`, {
    //         method: "Delete",
    //         headers:{
    //             authorization:JSON.parse(localStorage.getItem('token'))
    //         }
    //     });
    //     result = await result.json();
    //     if (result) {
    //         getProducts();
    //     }
    // }

    // const searchHandle = async (event)=>{
    //     let key = event.target.value;
    //     if(key){
    //         let result = await fetch(`http://localhost:5000/search/${key}`,{
    //             headers:{
    //                 authorization:JSON.parse(localStorage.getItem('token'))
    //             }
    //         });
    //         result = await result.json()
    //         if(result){
    //             setProducts(result)
    //         }
    //     }else{
    //         getProducts();
    //     }
        
    // }

    // const addtocarthandler =  (product_id) => {
    //     const user_id = auth._id;
    //     console.log(user_id);
    //     fetch('http://localhost:5000/cart',{
    //         method: "post",
    //         headers:{
    //             "Content-type": "application/json",
    //             authorization:JSON.parse(localStorage.getItem('token'))
    //         },
    //         body: JSON.stringify({ product_id, user_id }),

    //     }).then((response) => {
    //         console.log(response);
    //     });

    // }

    return (
        <div className="product-list">
            <h3 className='cl'>Contact List</h3>
            {/* <input type="" className='search-product-box' placeholder='Search Product'
            onChange={searchHandle}
             /> */}
            <ul>
                <li>S. No.</li>
                <li>Name</li>
                <li>Email</li>
                <li>Company</li>
                <li>Mobile</li>
                <li>Message</li>


            </ul>
            {
                contacts.length>0 ? contacts.map((item, index) =>
                //item.price ==='24000'?
                        <ul key={item._id}>
                        <li>{index + 1}</li>
                        <li>{item.name}</li>
                        <li>{item.email}</li>
                        <li>{item.company}</li>
                        <li>{item.mobile}</li>
                        <li>{item.message}</li>

                            {/* <li>
                            <button style={{background: "#87cce9"}}><Link to={"/update/"+item._id} ><FontAwesomeIcon icon={faPenSquare} color="green" /></Link></button>
                            <button onClick={() => deleteProduct(item._id)} style={{background: "#87cce9"}}><FontAwesomeIcon icon={faTrash} color="red"/></button>
                            <button style={{background: "#87cce9"}} onClick={() => addtocarthandler(item._id)}> <FontAwesomeIcon icon={faShoppingCart} /></button>
                            </li> */}
                    </ul>
                )
                :<h1>No Result Found</h1>
            }
        </div>
    )
}

export default Contactlist
