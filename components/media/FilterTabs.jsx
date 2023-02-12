
function FilterTabs(props) {
      const  {filterCategory, tabsData, filterItems, length} = props;
      return (
        <>
          <div className="flex">
            {
              tabsData.map((category, index) => {
                const isActive = category === filterItems;
                return (
                  <button type="button" className={`capitalize p-1 px-6 ${isActive ? 'btn-primary' : 'btn-secondary'}`} onClick={() => filterCategory(category)} key={index}>{category}<span className="lowercase">{category === 'all' ? '': 's'}  &nbsp;{category === "all" ? `(${length})` : null }</span></button>
                )
              })
            }
          </div>
        </>
      )
    }

    export default FilterTabs