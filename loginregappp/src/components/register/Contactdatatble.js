import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component'

const Contactdatatble = () => {
    const[search, setSearch] = useState("");
    const [contacts, setContacts] = useState([]);
    const[filteredcontacts, setFilteredcontacts] = useState([]);

    useEffect(() => {
        getContacts();
    }, []);

    const getContacts = async () => {
        let result = await fetch('http://localhost:9002/contactlist');
        result = await result.json();
        console.log(result);
        setContacts(result);
        setFilteredcontacts(result);
    }

    const columns = [
        {
            name: "Name",
            selector: (row) => row.name,
            sortable: true
        },
        {
            name: "Email",
            selector: (row) => row.email,
            sortable: true
        },
        {
            name: "Company",
            selector: (row) => row.company,
            sortable: true
        },
        {
            name: "Mobile",
            selector: (row) => row.mobile,
            sortable: true
        },
        {
            name: "Message",
            selector: (row) => row.message,
            sortable: true
        }
    ]

    useEffect(()=>{
        getContacts();
    },[]);

    useEffect(()=>{
        const result = contacts.filter(country => {
            return country.name.toLowerCase().match(search.toLocaleLowerCase());
        });
        setFilteredcontacts(result);
    },[search])

    return (
        <DataTable
        title="Contact Data"
        columns={columns}
        data={filteredcontacts} 
        pagination
        fixedHeader
        highlightOnHover
        // selectableRows
        // selectableRowsHighlight
        subHeader
        subHeaderComponent = {
            <input type="text" placeholder='Search Here' className='w-25 form-control' value={search} onChange={(e) =>setSearch(e.target.value)}/>
        }
        />
    )
}

export default Contactdatatble
