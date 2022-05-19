import { useSelector } from "react-redux";
import Item from "./Item";

export default function List() {
    const list = useSelector((state) => state.list.list);
    const input = useSelector((state) => state.form.input);

    return (
        <ul className="list-group">
            {input.length > 0 && list.map(item => <Item key={ item.id } name={ item.name }></Item>)}
        </ul>
    )
}