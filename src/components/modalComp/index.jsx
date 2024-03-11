import { useState, useEffect, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ItemContext } from '../../_context/ItemProvider';

function Modal_Show({ show, handleClose, itemArray }) {
    const { items, setItems } = useContext(ItemContext);
    console.log("itemssssssssssssssssssssssssssssssssssss-------------->", items)
//   console.log("items------------------------>", items)
 // filter  item array by id in the itemArray , and then display the counts  

    useEffect(() => {
        // actual item array
        console.log("items---------------------xyzzzz", itemArray)
        const new_arr = items?.filter((element) => { itemArray.includes(element.id)})

        console.log("new_arr===========================>", new_arr)

    }, [])


    // useEffect(() => {
    //     // actual item added by the user
    //     // [{count: 2, id: 3}, {count: 5, id: 6} , {count: 4, id: 0}, {count: 5, id: 0}]
    //     // new item array 
    //     // console.log("itemArray---------->", itemArray)
    //     const new_arr = items?.filter((element) => { itemArray.includes(element.id)})

    //     console.log("new_arr===========================>", new_arr)

    //     // itemArray.forEach(function(item_array) {
    //     //     items.forEach(function(item) {
    //     //         if(item_array.id = item.id) {
    //     //             new_arr.push(item, item_array.count )
    //     //         }

    //     //     })
    //     //     return new_arr;
    //     // })

    //     // console.log("new_arr", new_arr)


    // }, [itemArray])




    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    I will not close if you click outside me. Do not even try to press
                    escape key.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Modal_Show;