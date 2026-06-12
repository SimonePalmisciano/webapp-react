

function PageNavigator({ currentOffset, MAX_ITEMS_PER_PAGE, handlePrevPage, handleNextPage, productCount }) {
    return (
        <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
            <button
                className="btn btn-secondary"
                onClick={handlePrevPage}
                disabled={currentOffset === 0}
            >
                Pagina precedente
            </button>

            <span className="fw-semibold">
                Pagina {Math.ceil((currentOffset + 1) / MAX_ITEMS_PER_PAGE)}
            </span>

            <button
                className="btn btn-secondary"
                onClick={handleNextPage}
                disabled={currentOffset + MAX_ITEMS_PER_PAGE >= productCount}
            >
                Pagina successiva
            </button>
        </div>
    )
}

export default PageNavigator