import React, { useEffect, useState } from 'react';
const Contactlist = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        getContacts();
    }, []);

    const getContacts = async () => {
        let result = await fetch('http://localhost:9002/contactlist');
        result = await result.json();
        console.log(result);
        setContacts(result);
    }

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
