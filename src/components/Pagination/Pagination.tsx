import React, { memo } from "react";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";

import { useAppDispatch } from "@store/store";
import { selectFiltersCurrentPage } from "@store/filter/selectors";
import { setCurrentPage } from "@store/filter/slice";

const Pagination: React.FC = memo(({}) => {
	const dispatch = useAppDispatch();
	const currentPage = useSelector(selectFiltersCurrentPage);
	return (
		<>
			<ReactPaginate
				className="pagination"
				breakLabel="..."
				nextLabel=">"
				onPageChange={(e) => dispatch(setCurrentPage(e.selected + 1))}
				forcePage={currentPage < 1 ? 0 : currentPage - 1}
				pageCount={3}
				previousLabel="<"
			/>
		</>
	);
});

export default Pagination;
