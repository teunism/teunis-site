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
        globePosition: [0.7, 0.56, 0.6],
    },
    klang: {
        title: "Klang",
        items: restPatchItems,
        globePosition: [0.32, 0.33, 0.9],
    },
};

export const riverData = {
    klang: {
        patch: "klang",
        title: "Klang",
        items: restPatchItems,
        globePosition: [0.32, 0.33, 0.9],
    },
    kingston: {
        patch: "kingston",
        title: "Kingston",
        items: restPatchItems,
        globePosition: [0.21, 0.3, 0.94],
    },
    "la-county": {
        patch: "la-county",
        title: "LA County",
        items: restPatchItems,
        globePosition: [-0.4, 0.55, 0.75],
    },
    "la-county": {
        patch: "la-county",
        title: "LA County",
        items: restPatchItems,
        globePosition: [-0.4, 0.55, 0.75],
    },
    "chao-phraya": {
        patch: "chao-phraya",
        title: "Chao Praya",
        items: restPatchItems,
        globePosition: [-0.2, 0.23, -0.96],
    },
    "can-tho": {
        patch: "can-tho",
        title: "Can Tho",
        items: restPatchItems,
        globePosition: [-0.26, 0.18, -0.96],
    },
    klang: {
        patch: "klang",
        title: "Klang",
        items: restPatchItems,
        globePosition: [-0.2, 0.06, -0.99],
    },
    "chengkareng-drain": {
        patch: "klang",
        title: "Klang",
        items: restPatchItems,
        globePosition: [-0.29, -0.089, -0.96],
    },
};
