import React, { useEffect } from 'react';
import Items from './Items';

function DataDisplay(props) {
    const information = [
        {
            id: 1,
            url: 'https://picsum.photos/200/300',
            name: 'Sahil',
            designation: 'Chief Medical Officer',
            price: '$300',
        },
        {
            id: 2,
            url: 'https://picsum.photos/200/300',
            name: 'Meet',
            designation: 'Anesthesiologist',
            price: '$600',
        },
        {
            id: 3,
            url: 'https://picsum.photos/200/300',
            name: 'Rajan',
            designation: 'Cardiology',
            price: '$400',
        },
        {
            id: 4,
            url: 'https://picsum.photos/200/300',
            name: 'Divyesh',
            designation: 'Neurosurgeon',
            price: '$800',
        }
    ]

    let localData = JSON.parse(localStorage.getItem("booklist"));

    const [items, setItems] = React.useState([]);
    const [search, setSeacrh] = React.useState([])

    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem("booklist"));

        if (localData) {
            setItems(localData)
        }

    }, [])

    const handleSearch = (value) => {
        let localData = JSON.parse(localStorage.getItem("booklist"));

        let fdata = localData.filter((v) =>
            v.name.toLowerCase().includes(value.toLowerCase()) ||
            v.date.toString().includes(value) ||
            v.price.toString().includes(value) ||
            v.name.toLowerCase().includes(value.toLowerCase())
        )

        setSeacrh(fdata)
    }

    return (
        <div>
            <div className="input-group">
                <div className="form-outline">
                    <input type="search" id="form1" className="form-control" onChange={(e) => handleSearch(e.target.value)} />
                </div>
                <div className="row mt-5 justify-content-between">
                    <Items Mdata={items} />
                </div>
            </div>
        </div>
    );
}

export default DataDisplay;