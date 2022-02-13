import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAsyncQuotes} from "../../features/wisdomSlice";
import Quote from "@material-tailwind/react/Quote";

const Wisdom = () => {
    const {wisdom, author} = useSelector((state) => state.wisdom);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAsyncQuotes());
    }, [dispatch]);

    return (
        <div className="text-3xl text-left justify-center fixed bottom-2 p-4">
            <Quote color="white" footer={author} cite="">
                {wisdom}
            </Quote>
        </div>
    );
};

export default Wisdom;
