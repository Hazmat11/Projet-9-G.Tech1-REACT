import { BasketModal } from "./BasketModal.js";

function OpenMB() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Launch vertically centered modal
            </Button>

            <BasketModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default OpenMB;