import { Button } from "react-bootstrap";
import React from 'react';
import ArticlesModal from "./ArticlesPage";


function OpenM(props) {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                <strong>MORE</strong>
            </Button>

            <ArticlesModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                article={props.article}
            />
        </>
    );
}

export default OpenM;