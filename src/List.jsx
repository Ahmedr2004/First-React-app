
function List(props){
                    
    //fruits.sort((a, b) => a.name.localeCompare(b.name));
    //fruits.sort((a, b) => b.name.localeCompare(a.name));
    //fruits.sort((a, b) => a.cal - b.cal);
    const filterfruits = props.items.filter(x => x.cal < 100);
    filterfruits.sort((a, b) => a.cal - b.cal);
    return (<><h3 style={{textAlign : "center"}}>{props.category}</h3><ol>{filterfruits.map(x => <li key = {x.id}>{x.name}: &nbsp;
                                                    <b>{x.cal}</b></li>)}</ol></>);
}List.propTypes = {
    items: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    cal: PropTypes.number.isRequired
    })
),
category: PropTypes.string
};
List.defaultProps = {
    items: [],
    category: "Fruits"
};

export default List;