import axios from "axios";

const getUpdatedFilters = (name, filters) => {
    const updatedFilters = {... filters, [name]: !filters[name] };
    return updatedFilters;
}

const getSearchString = (currentFilters) => {
    const filterNames = Object.keys(currentFilters);
      let selected = [];
      filterNames.forEach(filter => {
        currentFilters[filter] && selected.push(filter);
      });
      return selected.join(",");
}

export const updateFilter = (name) => {
    return (dispatch, getState) => {
        const { checkedFilters } = getState();
        const update = getUpdatedFilters(name, checkedFilters);

        dispatch({
            type: "UPDATE_FILTER",
            checkedFilters: update
        })
        
        dispatch(refreshPeople(""));
    };
};

export const refreshPeople = () => {
    return (dispatch, getState) => {
        const { checkedFilters } = getState();
        let options = getSearchString(checkedFilters);

        axios.get(`https://randomuser.me/api/?results=5&inc=${options}`)
            .then((response) => {
                dispatch(updateResultsPage(response.data.results))
            })
            .catch((error) => {
                console.log(error)
            });
    };
};

export const updateResultsPage = (people) => {
    return (dispatch) => {
        dispatch({type: "UPDATE_PEOPLE", people});
    };
};