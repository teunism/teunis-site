import { itemsData } from "./itemsData";

// const getPatchitems = (patchName) => {
//     return itemsData.filter((item) => {
//         item.patch == patchName;
//     });
// };

// TODO get these patches in function
const pacificPatchItems = itemsData.filter((item) => item.patch == "pacific");
const restPatchItems = itemsData.filter((item) => item.patch == "klang");

export const patchesData = {
    pacific: {
        title: "Pacific patch",
        items: pacificPatchItems,
    },
    klang: {
        title: "Klang",
        items: restPatchItems,
    },
};
