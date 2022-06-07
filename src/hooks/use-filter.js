import { useContext } from "react";

import { activeFilterContext } from "../App";

export default function useFilter(initialItems) {
    const { activeFilter } = useContext(activeFilterContext);
    const itemsCopy = [...initialItems];

    function sortItems(itemA, itemB) {
        if (!!!Object.keys(activeFilter.sort).length) return;

        const sortProperty = Object.keys(activeFilter.sort)[0];
        const sortWord = Object.values(activeFilter.sort)[0].split(" ")[0];

        if (sortProperty === "date of aquasition") {
            return sortWord === "new"
                ? new Date(itemA.data.sortOptions[sortProperty]) -
                      new Date(itemB.data.sortOptions[sortProperty])
                : new Date(itemB.data.sortOptions[sortProperty]) -
                      new Date(itemA.data.sortOptions[sortProperty]);
        }

        if (sortProperty === "weight" || sortProperty === "size") {
            const biggerOrSmallerSign =
                sortWord === "light" || sortWord === "small"
                    ? [itemB, itemA]
                    : [itemA, itemB];

            if (
                biggerOrSmallerSign[0].data.sortOptions[sortProperty] <
                biggerOrSmallerSign[1].data.sortOptions[sortProperty]
            ) {
                return 1;
            }
            if (
                biggerOrSmallerSign[0].data.sortOptions[sortProperty] >
                biggerOrSmallerSign[1].data.sortOptions[sortProperty]
            ) {
                return -1;
            }
            return 0;
        }
    }

    const filteredItems = Object.keys(activeFilter.filters)
        .reduce((all, cur) => {
            return all.filter(
                (item) =>
                    item.data.filterOptions[cur] == activeFilter.filters[cur]
            );
        }, itemsCopy)
        .sort(sortItems);

    return filteredItems;
}
