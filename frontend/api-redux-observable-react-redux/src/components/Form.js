import { useSelector, useDispatch } from 'react-redux';
import { setInput } from '../features/form';

export default function Form() {
    const input = useSelector((state) => state.form.input);
    const formLoading = useSelector((state) => state.form.isLoading);

    const dispatch = useDispatch();

    function inputEventHandler(event) {
        event.preventDefault();
        dispatch(setInput(event.currentTarget.value));
    }

    return (
        <>
            <label htmlFor="dataList" className="form-label">Search</label>
            <div className="inputcontainer">
                <input className="form-control" 
                list="datalistOptions" 
                id="dataList" 
                placeholder="Type something to search..."
                value={input}
                onInput={inputEventHandler}
                />
                {formLoading && input.length > 0 && <div className="icon-container"><i className="loader"></i></div>}
            </div>
        </>
    )
}