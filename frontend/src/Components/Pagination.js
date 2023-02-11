import { Pagination } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productListAction } from "../Redux/Actions/productAction";

const PaginationTo = ({ category, weight, flavour, sort }) => {
    const [count, setCount] = useState();
    const [page, setPage] = useState(1);
    const dispatch = useDispatch()
    const [cou, setCou] = useState(0)
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_HOSTNAME}getProductCount?category=${category}&weight=${weight}&flavour=${flavour}`).then((data) => {
            setCou(data?.data?.message)
            const number = data?.data?.message / 10;
            setCount(Math.ceil(number))
        }).catch(err => console.log(err))
    }, [category, weight, flavour, sort])
    return (
        <>
            <div class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                <div class=" sm:flex sm:flex-1 sm:items-center sm:justify-between">
                    <div className="mb-2">
                        <p class="text-sm text-gray-700">
                            Showing{" "}
                            <span class="font-medium">{((page - 1) * 10) + 1}</span>
                            {" "} to  {" "}
                            <span class="font-medium">{page * 4}</span>
                            of{" "}
                            <span class="font-medium">{cou}</span>
                            {" "} results
                        </p>
                    </div>
                    <div>
                        <nav class=" inline-flex rounded-md shadow-sm" aria-label="Pagination">
                            <Pagination onChange={(e, value) => { dispatch(productListAction(value, category, weight, flavour, sort)); setPage(value) }} count={count} variant="outlined" shape="rounded" />
                        </nav>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PaginationTo;