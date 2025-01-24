import { useState } from "react";

type Props = {
    data: string[];
}

function List({ data }: Props) {
    const [index, setIndex] = useState(1);
    const handleClick = (i: number) => {
        setIndex(i);
    };

    return (
        <ul className="list-group">
            {data.map((Elemento, i) => (
                <li
                    onClick={() => handleClick(i)}
                    key={i}
                    className={`list-group-item ${index == i ? 'active' : ''}`}>
                    {Elemento}
                </li>
            ))}
        </ul>)
}

export default List;
