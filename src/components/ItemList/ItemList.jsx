import Item from '../Item/Item';

function ItemList({ data }) {
    return (
        <div>
            {
                data.map((items) => (
                    <Item key={items.id} data={items} />
                ))
            }
        </div>
    )
}

export default ItemList;
