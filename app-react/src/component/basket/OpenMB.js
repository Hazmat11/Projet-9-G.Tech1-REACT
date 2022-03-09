import { Button } from "react-bootstrap";
import { BsCartFill } from "react-icons/bs";
import React from 'react';
import BasketModal from "./BasketModal";

function OpenMB() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                <BsCartFill />
            </Button>

            <BasketModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default OpenMB;