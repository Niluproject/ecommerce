import "./register.css";
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import Button from "react-bootstrap/Button";
import { utils, writeFile } from "xlsx";

const Contactdatatble = () => {
    const [search, setSearch] = useState("");
    const [contacts, setContacts] = useState([]);
    const [filteredcontacts, setFilteredcontacts] = useState([]);

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

    const handleExport = () => {
        const headings = [["Id", "Name", "Email", "Company", "Mobile", "Message"]];
        const wb = utils.book_new();
        const ws = utils.json_to_sheet([]);
        utils.sheet_add_aoa(ws, headings);
        utils.sheet_add_json(ws, contacts, { origin: "A2", skipHeader: true });
        utils.book_append_sheet(wb, ws, "Report");
        writeFile(wb, "contacts Report.xlsx");
    };

    const columns = [
        {
            name: "Name",
            selector: "name",
            sortable: true,
            style: {
                borderRight: "1px solid #ddd"
            }
        },
        {
            name: "Email",
            selector: "email",
            sortable: true,
            style: {
                borderRight: "1px solid #ddd"
            }
        },
        {
            name: "Company",
            selector: "company",
            sortable: true,
            style: {
                borderRight: "1px solid #ddd"
            }
        },
        {
            name: "Mobile",
            selector: "mobile",
            sortable: true,
            style: {
                borderRight: "1px solid #ddd"
            }
        },
        {
            name: "Message",
            selector: "message",
            sortable: true
        }
    ];

    useEffect(() => {
        getContacts();
    }, []);

    useEffect(() => {
        const result = contacts.filter(country => {
            return country.name.toLowerCase().match(search.toLocaleLowerCase());
        });
        setFilteredcontacts(result);
    }, [search])

    return (
        <div>
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
                subHeaderComponent={
                    <>
                        <Button
                            onClick={handleExport}
                            className="btn btn-primary float-right btnexp"
                            variant="success"
                        >
                            Export <i className="fa fa-download"></i>
                        </Button>
                        <input
                            type="text"
                            placeholder='Search Here'
                            className='w-25 form-control'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </>
                }
            />
        </div>
    )
}

export default Contactdatatble