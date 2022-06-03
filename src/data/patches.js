import { itemsData } from "./itemsData";
// import { itemsData } from "./itemsDataNice";

const getLocationitems = (patchName) => {
    return itemsData.filter((item) => item.location == patchName);
};

export const locationData = [
    {
        name: "pacific",
        type: "ocean",
        title: "Pacific patch",
        items: getLocationitems("pacific"),
        globePosition: [-0.67, 0.45, 0.66],
    },
    // "south-pacific": {
    //     name: "South Pacific patch",
    //     type: "ocean",
    //     items: pacificPatchItems,
    //     globePosition: [-0.37, -0.45, 0.86],
    // },
    {
        name: "north-atlantic",
        type: "ocean",
        title: "North Atlantic patch",
        items: getLocationitems("north-atlantic"),
        globePosition: [0.65, 0.45, 0.68],
    },
    {
        name: "south-atlantic",
        type: "ocean",
        title: "South Atlantic patch",
        items: getLocationitems("south-atlantic"),
        globePosition: [0.95, -0.35, 0.27],
    },
    {
        name: "rio-ozama",
        type: "river",
        title: "Rio Ozama",
        items: getLocationitems("rio-ozama"),
        globePosition: [0.32, 0.33, 0.9],
    },
    {
        name: "kingston",
        type: "river",
        title: "Kingston",
        items: getLocationitems("kingston"),
        globePosition: [0.21, 0.3, 0.94],
    },
    {
        name: "la-county",
        type: "river",
        title: "LA County",
        items: getLocationitems("la-county"),
        globePosition: [-0.4, 0.55, 0.75],
    },
    {
        name: "chao-phraya",
        type: "river",
        title: "Chao Phraya",
        items: getLocationitems("chao-phraya"),
        globePosition: [-0.2, 0.23, -0.96],
    },
    {
        name: "can-tho",
        type: "river",
        title: "Can Tho",
        items: getLocationitems("can-tho"),
        globePosition: [-0.26, 0.18, -0.96],
    },
    {
        name: "klang",
        type: "river",
        title: "Klang",
        items: getLocationitems("klang"),
        globePosition: [-0.2, 0.06, -0.99],
    },
    {
        name: "chengkareng-drain",
        type: "river",
        title: "Chengkareng Drain",
        items: getLocationitems("chengkareng-drain"),
        globePosition: [-0.29, -0.089, -0.96],
    },
];
