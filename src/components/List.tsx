type Props = {
    data: string[];
}

function List({ data }: Props) {

    const handleClick = () => {
        () => console.log('click');
    };

    return (
        <ul className="list-group">
            {data.map((Elemento) => (
                <li onClick={handleClick} key={Elemento} className="list-group-item">
                    {Elemento}
                </li>
            ))}
        </ul>)
}

export default List;
