function Filters({propFilter, propUpdateSearchTerm}) {

    return(
        <div className="filterRootCont">
            <div className="filterCont">
                <button className="filterBtn" onClick={() => { propUpdateSearchTerm("beef") }}>Beef</button>
                <button className="filterBtn" onClick={() => { propUpdateSearchTerm("chicken") }}>Chicken</button>
                <button className="filterBtn" onClick={() => { propUpdateSearchTerm("salad") }}>Salad</button>
                <button className="filterBtn" onClick={() => { propUpdateSearchTerm("soup") }}>Soup</button>
                <button className="filterBtn" onClick={() => { propUpdateSearchTerm("smoothie") }}>Smoothie</button>
            </div>
        </div>
    )

}

export default  Filters;