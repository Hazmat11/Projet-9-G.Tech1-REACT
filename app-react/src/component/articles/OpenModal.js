import { ArticlesModal } from "./ArticlesPage.js";

function OpenM() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Launch vertically centered modal
            </Button>

            <ArticlesModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default OpenM;