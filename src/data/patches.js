import { itemsData } from "./itemsData";

// const getPatchitems = (patchName) => {
//     return itemsData.filter((item) => {
//         item.patch == patchName;
//     });
// };

// TODO get these patches in function
const pacificPatchItems = itemsData.filter((item) => item.patch == "pacific");
const restPatchItems = itemsData.filter((item) => item.patch == "rest");

export const patchesData = {
    pacific: {
        title: "Pacific patch",
        items: pacificPatchItems,
    },
    test: {
        title: "Test patch",
        items: restPatchItems,
    },
};

console.log(patchesData["pacific"]);
