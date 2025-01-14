type Props = {
    data: string[];
}

function List({ data }: Props) {
    return (
        <ul className="list-group">
            {data.map((Elemento) => (
                <li key={Elemento} className="list-group-item">{Elemento}</li>
            ))}
        </ul>)
}

export default List;
