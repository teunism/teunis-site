import ExampleImageOne from "../img/example-1.jpg";
import ExampleImageTwo from "../img/example-2.jpg";
import ExampleImageThree from "../img/example-3.jpg";
import ExampleImageFour from "../img/example-4.jpg";

import TelevisionOne from "../img/items/television-1.png";
import TelevisionTwo from "../img/items/television-2.png";
import TelevisionThree from "../img/items/television-3.png";
import BrokenTiara from "../img/items/broken-tiara.png";
import RanchDressing from "../img/items/ranch-dressing.png";
import GolfBall from "../img/items/golf-ball.png";
import ToyWheel from "../img/items/toy-wheel.png";
import LandBorder from "../img/items/land-border.png";
import Buoy from "../img/items/buoy-1966.png";
import BikePedal from "../img/items/bike-pedal.png";
import BikePedalTwo from "../img/items/bike-pedal-2.png";
import MonsterHead from "../img/items/monster-head.png";
import Glasses from "../img/items/glasses.png";
import BlueToyMan from "../img/items/blue-toy.png";
import BlueToyManTwo from "../img/items/blue-toy-2.png";
import ToyBear from "../img/items/toy-bear.png";
import Crate from "../img/items/crate.png";
import RollerScate from "../img/items/roller-scate.png";
import ToyMoney from "../img/items/toy-money.png";
import KiteHandle from "../img/items/kite-handle.png";
import GlassBuoy from "../img/items/glass-buoy.png";

// Ugly images
export const itemsData = [
    /*
     * Pacific.
     */
    // Backside of Television
    {
        title: "Backside of Television",
        url: "television",
        location: "pacific",
        intro: [
            "On May the 2nd 2021 this television was found in the Pacific Garbage Patch. It was part of extraction 18 on which we removed 13.987 kg of  plastic out of the ocean. This television stood out because of the remarkable corosion on plastic, which is caused by years of  laying in the salt water combined with sunlight.",
            "We believe that this television was produced in the early 2000’s. The brand and model is uncertain. Based on the corosion we estimate that the television would have been in the water for over 15 years. This estimation is not very precise because the amount of direct sunlight greatly impacts the visible corosion on items.",
        ],
        images: {
            mainImage: TelevisionOne,
            allImages: [TelevisionOne, TelevisionTwo, TelevisionThree],
        },
        data: {
            filterOptions: {
                category: "technology",
                color: "blue",
                material: "plastic",
            },
            sizes: {
                heightCm: "61",
                depthCm: "41",
                widthCm: "78",
                weightGr: "3145",
            },
            optional: [
                {
                    title: "Material",
                    properties: [
                        {
                            title: "Material",
                            value: "Plastic",
                        },
                        {
                            title: "Category",
                            value: "Devices",
                        },
                        {
                            title: "Weight (grams)",
                            value: "3145",
                        },
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "Brand name",
                            value: "Unknown",
                        },
                        {
                            title: "Production date",
                            value: "Early 2000's",
                        },
                        {
                            title: "Time in water",
                            value: "~15 years",
                        },
                    ],
                },
            ],
        },
        comments: [
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malasian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Brecon Philips",
                pinned: false,
                likes: 2,
            },
            {
                content:
                    " This is the back of the SONY FD Trinitron WEGA KV-32FS120 32 inch 480i CRT. I actually owned this television back in 2004. It sold for around $600 back in the day. Sad to see it ending up in the ocean.",
                name: "Jack van Haaren",
                pinned: true,
                likes: 56,
            },
            {
                content:
                    "This item is very popular in my country. I own two of them. They make a funny sounds when you squeeze it",
                name: "Not pinned",
                pinned: false,
                likes: 38,
            },
        ],
    },
    // Toy Bear
    {
        title: "Toy Bear",
        url: "toy-bear",
        location: "pacific",
        intro: [
            "This item was part of extraction number 19 on the 21st of January 2021. During this extraction we fished 21.893 kg of plastic out of the North Pacific Patch. This item was remarkable because we actually found a pair of these items together which is special because they would need to be together for multiple months if not years.",
            "We are not certain what the item is used for or what it’s origin is. We do know that is was in the ocean for over 1 year based on the damaged caused by the salt water of the ocean and the sunlight.",
        ],
        images: {
            mainImage: ToyBear,
            allImages: [ToyBear],
        },
        data: {
            filterOptions: {
                category: "toys",
                color: "black",
                material: "plastic",
            },
            sizes: {
                heightCm: "26",
                depthCm: "20",
                widthCm: "19",
                weightGr: "102",
            },
            optional: [
                {
                    title: "Material",
                    properties: [
                        {
                            title: "Material",
                            value: "Plastic",
                        },
                        {
                            title: "Category",
                            value: "Toys",
                        },
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "Color",
                            value: "Blue",
                        },
                        {
                            title: "Condition",
                            value: "Bad",
                        },
                    ],
                },
            ],
        },
        comments: [
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malasian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Brecon Philips",
                pinned: false,
                likes: 2,
            },
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malasian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Mr. Pinned",
                pinned: true,
                likes: 43,
            },
            {
                content:
                    "This item is very popular in my country. I own two of them. They make a funny sounds when you squeeze it",
                name: "Not pinned",
                pinned: false,
                likes: 38,
            },
        ],
    },
    // Roller Scate
    {
        title: "Roller scate",
        url: "roller-scate",
        location: "pacific",
        intro: [
            "This item was part of extraction number 19 on the 21st of January 2021. During this extraction we fished 21.893 kg of plastic out of the North Pacific Patch. This item was remarkable because we actually found a pair of these items together which is special because they would need to be together for multiple months if not years.",
            "We are not certain what the item is used for or what it’s origin is. We do know that is was in the ocean for over 1 year based on the damaged caused by the salt water of the ocean and the sunlight.",
        ],
        images: {
            mainImage: RollerScate,
            allImages: [RollerScate],
        },
        data: {
            filterOptions: {
                category: "personal artifacts",
                color: "mixed",
                material: "unknown",
            },
            sizes: {
                heightCm: "34",
                depthCm: "24",
                widthCm: "39",
                weightGr: "240",
            },
            optional: [
                {
                    title: "Material",
                    properties: [
                        {
                            title: "Material",
                            value: "Plastic",
                        },
                        {
                            title: "Category",
                            value: "Rest",
                        },
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "Color",
                            value: "Mixed",
                        },
                        {
                            title: "Condition",
                            value: "Bad",
                        },
                    ],
                },
            ],
        },
        comments: [
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malasian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Brecon Philips",
                pinned: false,
                likes: 2,
            },
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malasian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Mr. Pinned",
                pinned: true,
                likes: 43,
            },
            {
                content:
                    "This item is very popular in my country. I own two of them. They make a funny sounds when you squeeze it",
                name: "Not pinned",
                pinned: false,
                likes: 38,
            },
        ],
    },
    // Crate
    {
        title: "Crate",
        url: "crate",
        location: "pacific",
        intro: [
            "This item was part of extraction number 19 on the 21st of January 2021. During this extraction we fished 21.893 kg of plastic out of the North Pacific Patch. This item was remarkable because we actually found a pair of these items together which is special because they would need to be together for multiple months if not years.",
            "We are not certain what the item is used for or what it’s origin is. We do know that is was in the ocean for over 1 year based on the damaged caused by the salt water of the ocean and the sunlight.",
        ],
        images: {
            mainImage: Crate,
            allImages: [Crate],
        },
        data: {
            filterOptions: {
                category: "other",
                color: "blue",
                material: "plastic",
            },
            sizes: {
                heightCm: "51",
                depthCm: "3",
                widthCm: "73",
                weightGr: "256",
            },
            optional: [
                {
                    title: "Material",
                    properties: [
                        {
                            title: "Material",
                            value: "Plastic",
                        },
                        {
                            title: "Category",
                            value: "Rest",
                        },
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "Color",
                            value: "Blue",
                        },
                        {
                            title: "Condition",
                            value: "Bad",
                        },
                    ],
                },
            ],
        },
        comments: [
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malasian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Brecon Philips",
                pinned: false,
                likes: 2,
            },
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malasian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Mr. Pinned",
                pinned: true,
                likes: 43,
            },
            {
                content:
                    "This item is very popular in my country. I own two of them. They make a funny sounds when you squeeze it",
                name: "Not pinned",
                pinned: false,
                likes: 38,
            },
        ],
    },
    // Toy Money
    {
        title: "Toy money",
        url: "toy-money",
        location: "pacific",
        intro: [
            "This item was part of extraction number 19 on the 21st of January 2021. During this extraction we fished 21.893 kg of plastic out of the North Pacific Patch. This item was remarkable because we actually found a pair of these items together which is special because they would need to be together for multiple months if not years.",
            "We are not certain what the item is used for or what it’s origin is. We do know that is was in the ocean for over 1 year based on the damaged caused by the salt water of the ocean and the sunlight.",
        ],
        images: {
            mainImage: ToyMoney,
            allImages: [ToyMoney],
        },
        data: {
            filterOptions: {
                category: "toys",
                color: "blue",
                material: "plastic",
            },
            sizes: {
                heightCm: "9",
                depthCm: "1",
                widthCm: "9",
                weightGr: "11",
            },
            optional: [
                {
                    title: "Material",
                    properties: [
                        {
                            title: "Material",
                            value: "Plastic",
                        },
                        {
                            title: "Category",
                            value: "Toys",
                        },
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "Color",
                            value: "Blue",
                        },
                        {
                            title: "Condition",
                            value: "Bad",
                        },
                    ],
                },
            ],
        },
        comments: [
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malasian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Brecon Philips",
                pinned: false,
                likes: 2,
            },
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malasian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Mr. Pinned",
                pinned: true,
                likes: 43,
            },
            {
                content:
                    "This item is very popular in my country. I own two of them. They make a funny sounds when you squeeze it",
                name: "Not pinned",
                pinned: false,
                likes: 38,
            },
        ],
    },
    // Kite Handle
    {
        title: "Kite handle",
        url: "kite-handle",
        location: "pacific",
        intro: [
            "This item was part of extraction number 19 on the 21st of January 2021. During this extraction we fished 21.893 kg of plastic out of the North Pacific Patch. This item was remarkable because we actually found a pair of these items together which is special because they would need to be together for multiple months if not years.",
            "We are not certain what the item is used for or what it’s origin is. We do know that is was in the ocean for over 1 year based on the damaged caused by the salt water of the ocean and the sunlight.",
        ],
        images: {
            mainImage: KiteHandle,
            allImages: [KiteHandle],
        },
        data: {
            filterOptions: {
                category: "toys",
                color: "yellow",
                material: "plastic",
            },
            sizes: {
                heightCm: "9",
                depthCm: "1",
                widthCm: "17",
                weightGr: "27",
            },
            optional: [
                {
                    title: "Material",
                    properties: [
                        {
                            title: "Material",
                            value: "Plastic",
                        },
                        {
                            title: "Category",
                            value: "Toys",
                        },
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "Color",
                            value: "Yellow",
                        },
                        {
                            title: "Condition",
                            value: "Pretty Okay",
                        },
                    ],
                },
            ],
        },
        comments: [
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malasian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Brecon Philips",
                pinned: false,
                likes: 2,
            },
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malasian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Mr. Pinned",
                pinned: true,
                likes: 43,
            },
            {
                content:
                    "This item is very popular in my country. I own two of them. They make a funny sounds when you squeeze it",
                name: "Not pinned",
                pinned: false,
                likes: 38,
            },
        ],
    },
    // Glass Buoy
    {
        title: "Glass buoy",
        url: "glass-buoy",
        location: "pacific",
        intro: [
            "This item was part of extraction number 19 on the 21st of January 2021. During this extraction we fished 21.893 kg of plastic out of the North Pacific Patch. This item was remarkable because we actually found a pair of these items together which is special because they would need to be together for multiple months if not years.",
            "We are not certain what the item is used for or what it’s origin is. We do know that is was in the ocean for over 1 year based on the damaged caused by the salt water of the ocean and the sunlight.",
        ],
        images: {
            mainImage: GlassBuoy,
            allImages: [GlassBuoy],
        },
        data: {
            filterOptions: {
                category: "sea equipment",
                color: "transparent",
                material: "glass",
            },
            sizes: {
                heightCm: "12",
                depthCm: "12",
                widthCm: "31",
                weightGr: "196",
            },
            optional: [
                {
                    title: "Material",
                    properties: [
                        {
                            title: "Material",
                            value: "Glass",
                        },
                        {
                            title: "Category",
                            value: "Fisher items",
                        },
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "Color",
                            value: "Yellow",
                        },
                        {
                            title: "Condition",
                            value: "Pretty Okay",
                        },
                    ],
                },
            ],
        },
        comments: [
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malasian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Brecon Philips",
                pinned: false,
                likes: 2,
            },
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malasian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Mr. Pinned",
                pinned: true,
                likes: 43,
            },
            {
                content:
                    "This item is very popular in my country. I own two of them. They make a funny sounds when you squeeze it",
                name: "Not pinned",
                pinned: false,
                likes: 38,
            },
        ],
    },

    /*
     * North Atlantic Patch
     */
    // Broken Tiara
    {
        title: "Broken tiara",
        url: "broken-tiara",
        location: "north-atlantic",
        intro: [
            "This broken tiara was part of extraction number 19 on the 22nd of June 2019. We cleared 14.003 kg of trash out of the Klang using Interceptor 002. Parts of toys are very commonly intercepted in rivers.",
            "This tiara is very small and clearly kid size. It has many small deatils in the bottom edge of the tiara. It’s main feature is the big heart at the top. At the back of the tiara it says “made in Taiwan” even though it was found in the Klang (Malaysia). ",
        ],
        images: {
            mainImage: BrokenTiara,
            allImages: [BrokenTiara],
        },
        data: {
            filterOptions: {
                category: "toys",
                color: "white",
                material: "plastic",
            },
            sizes: {
                heightCm: "10",
                depthCm: "5",
                widthCm: "34",
                weightGr: "40",
            },
            optional: [
                {
                    title: "Material",
                    properties: [
                        {
                            title: "Material",
                            value: "Plastic",
                        },
                        {
                            title: "Category",
                            value: "Toys",
                        },
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "Brand name",
                            value: "MINIIYOU",
                        },
                        {
                            title: "Color",
                            value: "White",
                        },
                    ],
                },
            ],
        },
        comments: [
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malaysian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Brecon Philips",
                pinned: false,
                likes: 2,
            },
            {
                content:
                    "My daughter owns a very similar piece also made in Taiwan. It is not exactly the same, but it could be a newer or older version from the same brand. My daughters tiara is from the brand MINIIYOU.",
                name: "Kimberly Slim",
                pinned: true,
                likes: 43,
            },
            {
                content:
                    "This item is very popular in my country. I own two of them. They make a funny sounds when you squeeze it",
                name: "",
                pinned: false,
                likes: 38,
            },
        ],
    },
    // Blue Toy Man
    {
        title: "Blue toy man",
        url: "blue-toy-man",
        location: "north-atlantic",
        intro: [
            "This item was part of extraction number 19 on the 21st of January 2021. During this extraction we fished 21.893 kg of plastic out of the North Pacific Patch. This item was remarkable because we actually found a pair of these items together which is special because they would need to be together for multiple months if not years.",
            "We are not certain what the item is used for or what it’s origin is. We do know that is was in the ocean for over 1 year based on the damaged caused by the salt water of the ocean and the sunlight.",
        ],
        images: {
            mainImage: BlueToyMan,
            allImages: [BlueToyMan, BlueToyManTwo],
        },
        data: {
            filterOptions: {
                category: "toys",
                color: "blue",
                material: "plastic",
            },
            sizes: {
                heightCm: "14",
                depthCm: "7",
                widthCm: "11",
                weightGr: "34",
            },
            optional: [
                {
                    title: "Material",
                    properties: [
                        {
                            title: "Material",
                            value: "Plastic",
                        },
                        {
                            title: "Category",
                            value: "Toys",
                        },
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "Color",
                            value: "Blue",
                        },
                        {
                            title: "Condition",
                            value: "Bad",
                        },
                    ],
                },
            ],
        },
        comments: [
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malasian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Brecon Philips",
                pinned: false,
                likes: 2,
            },
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malasian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Mr. Pinned",
                pinned: true,
                likes: 43,
            },
            {
                content:
                    "This item is very popular in my country. I own two of them. They make a funny sounds when you squeeze it",
                name: "Not pinned",
                pinned: false,
                likes: 38,
            },
        ],
    },
    // Crate
    {
        title: "Crate",
        url: "crate-2",
        location: "north-atlantic",
        intro: [
            "This item was part of extraction number 19 on the 21st of January 2021. During this extraction we fished 21.893 kg of plastic out of the North Pacific Patch. This item was remarkable because we actually found a pair of these items together which is special because they would need to be together for multiple months if not years.",
            "We are not certain what the item is used for or what it’s origin is. We do know that is was in the ocean for over 1 year based on the damaged caused by the salt water of the ocean and the sunlight.",
        ],
        images: {
            mainImage: Crate,
            allImages: [Crate],
        },
        data: {
            filterOptions: {
                category: "other",
                color: "blue",
                material: "plastic",
            },
            sizes: {
                heightCm: "51",
                depthCm: "3",
                widthCm: "73",
                weightGr: "256",
            },
            optional: [
                {
                    title: "Material",
                    properties: [
                        {
                            title: "Material",
                            value: "Plastic",
                        },
                        {
                            title: "Category",
                            value: "Rest",
                        },
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "Color",
                            value: "Blue",
                        },
                        {
                            title: "Condition",
                            value: "Bad",
                        },
                    ],
                },
            ],
        },
        comments: [
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malasian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Brecon Philips",
                pinned: false,
                likes: 2,
            },
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malasian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Mr. Pinned",
                pinned: true,
                likes: 43,
            },
            {
                content:
                    "This item is very popular in my country. I own two of them. They make a funny sounds when you squeeze it",
                name: "Not pinned",
                pinned: false,
                likes: 38,
            },
        ],
    },

    /*
     * South Atlantic Patch
     */
    // Toy Wheel
    {
        title: "Toy wheel",
        url: "toy-wheel",
        location: "south-atlantic",
        intro: [
            "The crew of extraction number 16 found this toy wheel in the Great Pacific Gabrage Patch. It was part of a 11.982 kg extraction on the 29th of Febuary 2018. During some rough wheater this item was fished out of the water. It was picked because of the text on the wheel, which gives it a greater chance of being traced back to it’s origin.",
            "The text on the tire says “JBI Rabbit 100kg XMFL TOY 1029”. We guess that it comes from a remote controlled toy car. Based on the corosion we estimate that the toy has been in the water for around 4 years.",
        ],
        images: {
            mainImage: ToyWheel,
            allImages: [ToyWheel],
        },
        data: {
            filterOptions: {
                category: "toys",
                color: "black",
                material: "plastic",
            },
            sizes: {
                heightCm: "10",
                depthCm: "5",
                widthCm: "34",
                weightGr: "40",
            },
            optional: [
                {
                    title: "Material",
                    properties: [
                        {
                            title: "Material",
                            value: "Plastic",
                        },
                        {
                            title: "Category",
                            value: "Toys",
                        },
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "Brand name",
                            value: "MINIIYOU",
                        },
                        {
                            title: "Color",
                            value: "White",
                        },
                    ],
                },
            ],
        },
        comments: [
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malaysian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Brecon Philips",
                pinned: false,
                likes: 2,
            },
            {
                content:
                    "That's wheel is really cool. This is actually a part of very rare toy. It is from Matchbox Quarry Truck which in perfect condition can sell up to $250. Parts are also very expensive but I think this will need some restoration",
                name: "Jermain Bois",
                pinned: true,
                likes: 43,
            },
            {
                content:
                    "This item is very popular in my country. I own two of them. They make a funny sounds when you squeeze it",
                name: "",
                pinned: false,
                likes: 38,
            },
        ],
    },
    // Toy Money
    {
        title: "Toy money",
        url: "toy-money-2",
        location: "south-atlantic",
        intro: [
            "This item was part of extraction number 19 on the 21st of January 2021. During this extraction we fished 21.893 kg of plastic out of the North Pacific Patch. This item was remarkable because we actually found a pair of these items together which is special because they would need to be together for multiple months if not years.",
            "We are not certain what the item is used for or what it’s origin is. We do know that is was in the ocean for over 1 year based on the damaged caused by the salt water of the ocean and the sunlight.",
        ],
        images: {
            mainImage: ToyMoney,
            allImages: [ToyMoney],
        },
        data: {
            filterOptions: {
                category: "toys",
                color: "blue",
                material: "plastic",
            },
            sizes: {
                heightCm: "9",
                depthCm: "1",
                widthCm: "9",
                weightGr: "11",
            },
            optional: [
                {
                    title: "Material",
                    properties: [
                        {
                            title: "Material",
                            value: "Plastic",
                        },
                        {
                            title: "Category",
                            value: "Toys",
                        },
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "Color",
                            value: "Blue",
                        },
                        {
                            title: "Condition",
                            value: "Bad",
                        },
                    ],
                },
            ],
        },
        comments: [
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malasian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Brecon Philips",
                pinned: false,
                likes: 2,
            },
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malasian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Mr. Pinned",
                pinned: true,
                likes: 43,
            },
            {
                content:
                    "This item is very popular in my country. I own two of them. They make a funny sounds when you squeeze it",
                name: "Not pinned",
                pinned: false,
                likes: 38,
            },
        ],
    },

    /*
     * Rio Ozama
     */
    // Land Border
    {
        title: "Land border",
        url: "land-border",
        location: "rio-ozama",
        intro: [
            "This item was part of extraction number 19 on the 21st of January 2021. During this extraction we fished 21.893 kg of plastic out of the North Pacific Patch. This item was remarkable because we actually found a pair of these items together which is special because they would need to be together for multiple months if not years.",
            "We are not certain what the item is used for or what it’s origin is. We do know that is was in the ocean for over 1 year based on the damaged caused by the salt water of the ocean and the sunlight.",
        ],
        images: {
            mainImage: LandBorder,
            allImages: [LandBorder, ExampleImageThree],
        },
        data: {
            filterOptions: {
                category: "sea equipment",
                color: "white",
                material: "plastic",
            },
            sizes: {
                heightCm: "50",
                depthCm: "18",
                widthCm: "18",
                weightGr: "230",
            },
            optional: [
                {
                    title: "Material",
                    properties: [
                        {
                            title: "Material",
                            value: "Plastic",
                        },
                        {
                            title: "Category",
                            value: "Toys",
                        },
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "Brand name",
                            value: "MINIIYOU",
                        },
                        {
                            title: "Color",
                            value: "White",
                        },
                    ],
                },
            ],
        },
        comments: [
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malaysian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Brecon Philips",
                pinned: false,
                likes: 2,
            },
            {
                content:
                    "That's wheel is really cool. This is actually a part of very rare toy. It is from Matchbox Quarry Truck which in perfect condition can sell up to $250. Parts are also very expensive but I think this will need some restoration",
                name: "Jermain Bois",
                pinned: true,
                likes: 43,
            },
            {
                content:
                    "This item is very popular in my country. I own two of them. They make a funny sounds when you squeeze it",
                name: "",
                pinned: false,
                likes: 38,
            },
        ],
    },

    /*
     * Kingston
     */
    // Buoy
    {
        title: "Buoy 1966",
        url: "buoy",
        location: "kingston",
        intro: [
            "This item was part of extraction number 19 on the 21st of January 2021. During this extraction we fished 21.893 kg of plastic out of the North Pacific Patch. This item was remarkable because we actually found a pair of these items together which is special because they would need to be together for multiple months if not years.",
            "We are not certain what the item is used for or what it’s origin is. We do know that is was in the ocean for over 1 year based on the damaged caused by the salt water of the ocean and the sunlight.",
        ],
        images: {
            mainImage: Buoy,
            allImages: [Buoy],
        },
        data: {
            filterOptions: {
                category: "sea equipment",
                color: "white",
                material: "plastic",
            },
            sizes: {
                heightCm: "79",
                depthCm: "79",
                widthCm: "79",
                weightGr: "424",
            },
            optional: [
                {
                    title: "Material",
                    properties: [
                        {
                            title: "Material",
                            value: "Plastic",
                        },
                        {
                            title: "Category",
                            value: "Toys",
                        },
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "Brand name",
                            value: "MINIIYOU",
                        },
                        {
                            title: "Color",
                            value: "White",
                        },
                    ],
                },
            ],
        },
        comments: [
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malaysian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Brecon Philips",
                pinned: false,
                likes: 2,
            },
            {
                content:
                    "That's wheel is really cool. This is actually a part of very rare toy. It is from Matchbox Quarry Truck which in perfect condition can sell up to $250. Parts are also very expensive but I think this will need some restoration",
                name: "Jermain Bois",
                pinned: true,
                likes: 43,
            },
            {
                content:
                    "This item is very popular in my country. I own two of them. They make a funny sounds when you squeeze it",
                name: "",
                pinned: false,
                likes: 38,
            },
        ],
    },
    // Toy Wheel
    {
        title: "Toy wheel",
        url: "toy-wheel-2",
        location: "kingston",
        intro: [
            "The crew of extraction number 16 found this toy wheel in the Great Pacific Gabrage Patch. It was part of a 11.982 kg extraction on the 29th of Febuary 2018. During some rough wheater this item was fished out of the water. It was picked because of the text on the wheel, which gives it a greater chance of being traced back to it’s origin.",
            "The text on the tire says “JBI Rabbit 100kg XMFL TOY 1029”. We guess that it comes from a remote controlled toy car. Based on the corosion we estimate that the toy has been in the water for around 4 years.",
        ],
        images: {
            mainImage: ToyWheel,
            allImages: [ToyWheel],
        },
        data: {
            filterOptions: {
                category: "toys",
                color: "black",
                material: "plastic",
            },
            sizes: {
                heightCm: "10",
                depthCm: "5",
                widthCm: "34",
                weightGr: "40",
            },
            optional: [
                {
                    title: "Material",
                    properties: [
                        {
                            title: "Material",
                            value: "Plastic",
                        },
                        {
                            title: "Category",
                            value: "Toys",
                        },
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "Brand name",
                            value: "MINIIYOU",
                        },
                        {
                            title: "Color",
                            value: "White",
                        },
                    ],
                },
            ],
        },
        comments: [
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malaysian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Brecon Philips",
                pinned: false,
                likes: 2,
            },
            {
                content:
                    "That's wheel is really cool. This is actually a part of very rare toy. It is from Matchbox Quarry Truck which in perfect condition can sell up to $250. Parts are also very expensive but I think this will need some restoration",
                name: "Jermain Bois",
                pinned: true,
                likes: 43,
            },
            {
                content:
                    "This item is very popular in my country. I own two of them. They make a funny sounds when you squeeze it",
                name: "",
                pinned: false,
                likes: 38,
            },
        ],
    },

    /*
     * LA County
     */
    // Ranch Dressing
    {
        title: "Ranch dressing",
        url: "ranch-dressing",
        location: "la-county",
        intro: [
            "This item was part of extraction number 19 on the 21st of January 2021. During this extraction we fished 21.893 kg of plastic out of the North Pacific Patch. This item was remarkable because we actually found a pair of these items together which is special because they would need to be together for multiple months if not years.",
            "We are not certain what the item is used for or what it’s origin is. We do know that is was in the ocean for over 1 year based on the damaged caused by the salt water of the ocean and the sunlight.",
        ],
        images: {
            mainImage: RanchDressing,
            allImages: [RanchDressing],
        },
        data: {
            filterOptions: {
                category: "food",
                color: "mixed",
                material: "plastic",
            },
            sizes: {
                heightCm: "53",
                depthCm: "17",
                widthCm: "17",
                weightGr: "970",
            },
            optional: [
                {
                    title: "Material",
                    properties: [
                        {
                            title: "Material",
                            value: "Plastic",
                        },
                        {
                            title: "Category",
                            value: "Bottles",
                        },
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "Brand",
                            value: "Creamy Ceasers",
                        },
                        {
                            title: "Taste",
                            value: "Bad",
                        },
                    ],
                },
            ],
        },
        comments: [
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malasian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Brecon Philips",
                pinned: false,
                likes: 2,
            },
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malasian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Mr. Pinned",
                pinned: true,
                likes: 43,
            },
            {
                content:
                    "This item is very popular in my country. I own two of them. They make a funny sounds when you squeeze it",
                name: "Not pinned",
                pinned: false,
                likes: 38,
            },
        ],
    },
    // Broken Tiara
    {
        title: "Broken tiara",
        url: "broken-tiara-2",
        location: "la-county",
        intro: [
            "This broken tiara was part of extraction number 19 on the 22nd of June 2019. We cleared 14.003 kg of trash out of the Klang using Interceptor 002. Parts of toys are very commonly intercepted in rivers.",
            "This tiara is very small and clearly kid size. It has many small deatils in the bottom edge of the tiara. It’s main feature is the big heart at the top. At the back of the tiara it says “made in Taiwan” even though it was found in the Klang (Malaysia). ",
        ],
        images: {
            mainImage: BrokenTiara,
            allImages: [BrokenTiara],
        },
        data: {
            filterOptions: {
                category: "toys",
                color: "white",
                material: "plastic",
            },
            sizes: {
                heightCm: "10",
                depthCm: "5",
                widthCm: "34",
                weightGr: "40",
            },
            optional: [
                {
                    title: "Material",
                    properties: [
                        {
                            title: "Material",
                            value: "Plastic",
                        },
                        {
                            title: "Category",
                            value: "Toys",
                        },
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "Brand name",
                            value: "MINIIYOU",
                        },
                        {
                            title: "Color",
                            value: "White",
                        },
                    ],
                },
            ],
        },
        comments: [
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malaysian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Brecon Philips",
                pinned: false,
                likes: 2,
            },
            {
                content:
                    "My daughter owns a very similar piece also made in Taiwan. It is not exactly the same, but it could be a newer or older version from the same brand. My daughters tiara is from the brand MINIIYOU.",
                name: "Kimberly Slim",
                pinned: true,
                likes: 43,
            },
            {
                content:
                    "This item is very popular in my country. I own two of them. They make a funny sounds when you squeeze it",
                name: "",
                pinned: false,
                likes: 38,
            },
        ],
    },

    /*
     * Chao Phraya
     */
    // Golf Ball
    {
        title: "Golf ball",
        url: "golf-ball",
        location: "chao-phraya",
        intro: [
            "This item was part of extraction number 19 on the 21st of January 2021. During this extraction we fished 21.893 kg of plastic out of the North Pacific Patch. This item was remarkable because we actually found a pair of these items together which is special because they would need to be together for multiple months if not years.",
            "We are not certain what the item is used for or what it’s origin is. We do know that is was in the ocean for over 1 year based on the damaged caused by the salt water of the ocean and the sunlight.",
        ],
        images: {
            mainImage: GolfBall,
            allImages: [GolfBall],
        },
        data: {
            filterOptions: {
                category: "other",
                color: "yellow",
                material: "plastic",
            },
            sizes: {
                heightCm: "10",
                depthCm: "10",
                widthCm: "10",
                weightGr: "30",
            },
            optional: [
                {
                    title: "Material",
                    properties: [
                        {
                            title: "Material",
                            value: "Plastic",
                        },
                        {
                            title: "Category",
                            value: "Bottles",
                        },
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "Brand",
                            value: "Creamy Ceasers",
                        },
                        {
                            title: "Taste",
                            value: "Bad",
                        },
                    ],
                },
            ],
        },
        comments: [
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malasian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Brecon Philips",
                pinned: false,
                likes: 2,
            },
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malasian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Mr. Pinned",
                pinned: true,
                likes: 43,
            },
            {
                content:
                    "This item is very popular in my country. I own two of them. They make a funny sounds when you squeeze it",
                name: "Not pinned",
                pinned: false,
                likes: 38,
            },
        ],
    },

    /*
     * Can Tho
     */
    // Bike Pedal
    {
        title: "Bike pedal",
        url: "bike-pedal",
        location: "can-tho",
        intro: [
            "This item was part of extraction number 19 on the 21st of January 2021. During this extraction we fished 21.893 kg of plastic out of the North Pacific Patch. This item was remarkable because we actually found a pair of these items together which is special because they would need to be together for multiple months if not years.",
            "We are not certain what the item is used for or what it’s origin is. We do know that is was in the ocean for over 1 year based on the damaged caused by the salt water of the ocean and the sunlight.",
        ],
        images: {
            mainImage: BikePedalTwo,
            allImages: [BikePedalTwo, BikePedal],
        },
        data: {
            filterOptions: {
                category: "toys",
                color: "black",
                material: "plastic",
            },
            sizes: {
                heightCm: "5",
                depthCm: "10",
                widthCm: "19",
                weightGr: "45",
            },
            optional: [
                {
                    title: "Material",
                    properties: [
                        {
                            title: "Material",
                            value: "Plastic",
                        },
                        {
                            title: "Category",
                            value: "Machine parts",
                        },
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "Brand",
                            value: "Creamy Ceasers",
                        },
                        {
                            title: "Taste",
                            value: "Bad",
                        },
                    ],
                },
            ],
        },
        comments: [
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malasian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Brecon Philips",
                pinned: false,
                likes: 2,
            },
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malasian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Mr. Pinned",
                pinned: true,
                likes: 43,
            },
            {
                content:
                    "This item is very popular in my country. I own two of them. They make a funny sounds when you squeeze it",
                name: "Not pinned",
                pinned: false,
                likes: 38,
            },
        ],
    },
    // Roller Scate
    {
        title: "Roller scate",
        url: "roller-scate-2",
        location: "can-tho",
        intro: [
            "This item was part of extraction number 19 on the 21st of January 2021. During this extraction we fished 21.893 kg of plastic out of the North Pacific Patch. This item was remarkable because we actually found a pair of these items together which is special because they would need to be together for multiple months if not years.",
            "We are not certain what the item is used for or what it’s origin is. We do know that is was in the ocean for over 1 year based on the damaged caused by the salt water of the ocean and the sunlight.",
        ],
        images: {
            mainImage: RollerScate,
            allImages: [RollerScate],
        },
        data: {
            filterOptions: {
                category: "personal artifacts",
                color: "mixed",
                material: "unknown",
            },
            sizes: {
                heightCm: "34",
                depthCm: "24",
                widthCm: "39",
                weightGr: "240",
            },
            optional: [
                {
                    title: "Material",
                    properties: [
                        {
                            title: "Material",
                            value: "Plastic",
                        },
                        {
                            title: "Category",
                            value: "Rest",
                        },
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "Color",
                            value: "Mixed",
                        },
                        {
                            title: "Condition",
                            value: "Bad",
                        },
                    ],
                },
            ],
        },
        comments: [
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malasian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Brecon Philips",
                pinned: false,
                likes: 2,
            },
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malasian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Mr. Pinned",
                pinned: true,
                likes: 43,
            },
            {
                content:
                    "This item is very popular in my country. I own two of them. They make a funny sounds when you squeeze it",
                name: "Not pinned",
                pinned: false,
                likes: 38,
            },
        ],
    },
    // Backside of Television
    {
        title: "Backside of Television",
        url: "television-2",
        location: "can-tho",
        intro: [
            "On May the 2nd 2021 this television was found in the Pacific Garbage Patch. It was part of extraction 18 on which we removed 13.987 kg of  plastic out of the ocean. This television stood out because of the remarkable corosion on plastic, which is caused by years of  laying in the salt water combined with sunlight.",
            "We believe that this television was produced in the early 2000’s. The brand and model is uncertain. Based on the corosion we estimate that the television would have been in the water for over 15 years. This estimation is not very precise because the amount of direct sunlight greatly impacts the visible corosion on items.",
        ],
        images: {
            mainImage: TelevisionOne,
            allImages: [TelevisionOne, TelevisionTwo, TelevisionThree],
        },
        data: {
            filterOptions: {
                category: "technology",
                color: "blue",
                material: "plastic",
            },
            sizes: {
                heightCm: "61",
                depthCm: "41",
                widthCm: "78",
                weightGr: "3145",
            },
            optional: [
                {
                    title: "Material",
                    properties: [
                        {
                            title: "Material",
                            value: "Plastic",
                        },
                        {
                            title: "Category",
                            value: "Devices",
                        },
                        {
                            title: "Weight (grams)",
                            value: "3145",
                        },
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "Brand name",
                            value: "Unknown",
                        },
                        {
                            title: "Production date",
                            value: "Early 2000's",
                        },
                        {
                            title: "Time in water",
                            value: "~15 years",
                        },
                    ],
                },
            ],
        },
        comments: [
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malasian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Brecon Philips",
                pinned: false,
                likes: 2,
            },
            {
                content:
                    " This is the back of the SONY FD Trinitron WEGA KV-32FS120 32 inch 480i CRT. I actually owned this television back in 2004. It sold for around $600 back in the day. Sad to see it ending up in the ocean.",
                name: "Jack van Haaren",
                pinned: true,
                likes: 56,
            },
            {
                content:
                    "This item is very popular in my country. I own two of them. They make a funny sounds when you squeeze it",
                name: "Not pinned",
                pinned: false,
                likes: 38,
            },
        ],
    },

    /*
     * Klang
     */
    // Monster Head
    {
        title: "Monster head",
        url: "monster-head",
        location: "klang",
        intro: [
            "This item was part of extraction number 19 on the 21st of January 2021. During this extraction we fished 21.893 kg of plastic out of the North Pacific Patch. This item was remarkable because we actually found a pair of these items together which is special because they would need to be together for multiple months if not years.",
            "We are not certain what the item is used for or what it’s origin is. We do know that is was in the ocean for over 1 year based on the damaged caused by the salt water of the ocean and the sunlight.",
        ],
        images: {
            mainImage: MonsterHead,
            allImages: [MonsterHead],
        },
        data: {
            filterOptions: {
                category: "toys",
                color: "black",
                material: "plastic",
            },
            sizes: {
                heightCm: "14",
                depthCm: "3",
                widthCm: "9",
                weightGr: "24",
            },
            optional: [
                {
                    title: "Material",
                    properties: [
                        {
                            title: "Material",
                            value: "Plastic",
                        },
                        {
                            title: "Category",
                            value: "Toys",
                        },
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "Brand",
                            value: "Unknown",
                        },
                        {
                            title: "Condition",
                            value: "Bad",
                        },
                    ],
                },
            ],
        },
        comments: [
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malasian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Brecon Philips",
                pinned: false,
                likes: 2,
            },
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malasian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Mr. Pinned",
                pinned: true,
                likes: 43,
            },
            {
                content:
                    "This item is very popular in my country. I own two of them. They make a funny sounds when you squeeze it",
                name: "Not pinned",
                pinned: false,
                likes: 38,
            },
        ],
    },

    /*
     * Chengkareng drain
     */
    // Glasses
    {
        title: "Glasses",
        url: "glasses",
        location: "chengkareng-drain",
        intro: [
            "This item was part of extraction number 19 on the 21st of January 2021. During this extraction we fished 21.893 kg of plastic out of the North Pacific Patch. This item was remarkable because we actually found a pair of these items together which is special because they would need to be together for multiple months if not years.",
            "We are not certain what the item is used for or what it’s origin is. We do know that is was in the ocean for over 1 year based on the damaged caused by the salt water of the ocean and the sunlight.",
        ],
        images: {
            mainImage: Glasses,
            allImages: [Glasses],
        },
        data: {
            filterOptions: {
                category: "personal artifacts",
                color: "black",
                material: "plastic",
            },
            sizes: {
                heightCm: "14",
                depthCm: "19",
                widthCm: "29",
                weightGr: "84",
            },
            optional: [
                {
                    title: "Material",
                    properties: [
                        {
                            title: "Material",
                            value: "Plastic",
                        },
                        {
                            title: "Category",
                            value: "Accessories",
                        },
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "Brand",
                            value: "Unknown",
                        },
                        {
                            title: "Condition",
                            value: "Bad",
                        },
                    ],
                },
            ],
        },
        comments: [
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malasian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Brecon Philips",
                pinned: false,
                likes: 2,
            },
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malasian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Mr. Pinned",
                pinned: true,
                likes: 43,
            },
            {
                content:
                    "This item is very popular in my country. I own two of them. They make a funny sounds when you squeeze it",
                name: "Not pinned",
                pinned: false,
                likes: 38,
            },
        ],
    },
    // Glass Buoy
    {
        title: "Glass buoy",
        url: "glass-buoy-2",
        location: "chengkareng-drain",
        intro: [
            "This item was part of extraction number 19 on the 21st of January 2021. During this extraction we fished 21.893 kg of plastic out of the North Pacific Patch. This item was remarkable because we actually found a pair of these items together which is special because they would need to be together for multiple months if not years.",
            "We are not certain what the item is used for or what it’s origin is. We do know that is was in the ocean for over 1 year based on the damaged caused by the salt water of the ocean and the sunlight.",
        ],
        images: {
            mainImage: GlassBuoy,
            allImages: [GlassBuoy],
        },
        data: {
            filterOptions: {
                category: "sea equipment",
                color: "transparent",
                material: "glass",
            },
            sizes: {
                heightCm: "12",
                depthCm: "12",
                widthCm: "31",
                weightGr: "196",
            },
            optional: [
                {
                    title: "Material",
                    properties: [
                        {
                            title: "Material",
                            value: "Glass",
                        },
                        {
                            title: "Category",
                            value: "Fisher items",
                        },
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "Color",
                            value: "Yellow",
                        },
                        {
                            title: "Condition",
                            value: "Pretty Okay",
                        },
                    ],
                },
            ],
        },
        comments: [
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malasian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Brecon Philips",
                pinned: false,
                likes: 2,
            },
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malasian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Mr. Pinned",
                pinned: true,
                likes: 43,
            },
            {
                content:
                    "This item is very popular in my country. I own two of them. They make a funny sounds when you squeeze it",
                name: "Not pinned",
                pinned: false,
                likes: 38,
            },
        ],
    },
];
