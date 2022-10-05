import { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import './Catalogues.css';

const Catalogues = ({ country }) => {
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);
	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
	}
	function changePage(offset) {
		setPageNumber((prevPageNumber) => prevPageNumber + offset);
	}
	function previousPage() {
		changePage(-1);
	}

	function nextPage() {
		changePage(1);
	}
	return (
		<>
			<h1 style={{ 'text-align': 'center' }}>
				{country.charAt(0).toUpperCase() + country.slice(1) + ' Catalogue'}
				{'  '}
				<a
					style={{ color: 'black' }}
					href={`${country}.pdf`}
					download={`${country}.pdf`}>
					&#x2601;
				</a>
			</h1>
			<Document file={`./${country}.pdf`} onLoadSuccess={onDocumentLoadSuccess}>
				<Page pageNumber={pageNumber}></Page>
				<div className="controls">
					<button
						type="button"
						disabled={pageNumber <= 1}
						onClick={previousPage}>
						&#x276C;
					</button>
					<span>
						{pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
					</span>
					<button
						type="button"
						disabled={pageNumber >= numPages}
						onClick={nextPage}>
						&#x276D;
					</button>
				</div>
			</Document>
		</>
	);
};
export default Catalogues;
