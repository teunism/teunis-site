import ExampleImageOne from "../img/example-1.jpg";
import ExampleImageTwo from "../img/example-2.jpg";
import ExampleImageThree from "../img/example-3.jpg";
import ExampleImageFour from "../img/example-4.jpg";
import ToyPlane from "../img/items-nice/toy-plane.jpg";
import ToySoldier from "../img/items-nice/toy-soldier.jpg";
import Flipper from "../img/items-nice/flipper.jpg";
import Ink from "../img/items-nice/ink.jpg";
import Lamp from "../img/items-nice/lamp.jpg";
import Mask from "../img/items-nice/mask.jpg";
import OilCan from "../img/items-nice/oil-can.jpg";
import PiggyBank from "../img/items-nice/piggy.jpg";
import Tire from "../img/items-nice/tire.jpg";
import ToothBrushes from "../img/items-nice/tooth-brushes.jpg";
import ToyGun from "../img/items-nice/toy-gun.jpg";
import WaterCan from "../img/items-nice/water-can.jpg";

export const itemsData = [
    /*
     * Pacific.
     */
    // Plastic Slipper
    {
        title: "Plastic slipper",
        url: "plastic-slipper",
        location: "pacific",
        intro: [
            "This item was found in the pacific garbage patch during extraction number 28. We believe it to be an Asian slipper from the brand \"Baby\". The slipper is still in very good condition. That's why we guess that the slipper couldn't be in the water for more than two years. ",
        ],
        images: {
            mainImage: ExampleImageOne,
            allImages: [ExampleImageOne, ExampleImageTwo, ExampleImageThree],
        },
        data: {
            sizes: {
                heightCm: "10",
                depthCm: "41",
                widthCm: "33",
                weightGr: "40",
            },
            materials: {
                material: "plastic",
                category: "footwear",
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
                            value: "Footwear",
                        },
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "Produced in",
                            value: "China",
                        },
                        {
                            title: "Brand name",
                            value: "Baby",
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
                likes: 5,
            },
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malasian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Mr. Pinned",
                pinned: true,
                likes: 31,
            },
            {
                content:
                    "This item is very popular in my country. I own two of them. They make a funny sounds when you squeeze it",
                name: "Not pinned",
                pinned: false,
                likes: 19,
            },
        ],
    },
    // Head of Doll
    {
        title: "Head of doll",
        url: "doll-head",
        location: "pacific",
        intro: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.",
        ],
        images: {
            mainImage: ExampleImageTwo,
            allImages: [ExampleImageTwo, ExampleImageThree, ExampleImageOne],
        },
        data: {
            sizes: {
                heightCm: "10",
                depthCm: "41",
                widthCm: "33",
                weightGr: "40",
            },
            materials: {
                material: "plastic",
                category: "footwear",
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
                            value: "Footwear",
                        },
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "Produced in",
                            value: "China",
                        },
                        {
                            title: "Brand name",
                            value: "Baby",
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
                likes: 5,
            },
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malasian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Mr. Pinned",
                pinned: true,
                likes: 3,
            },
            {
                content:
                    "This item is very popular in my country. I own two of them. They make a funny sounds when you squeeze it",
                name: "Not pinned",
                pinned: false,
                likes: 15,
            },
        ],
    },
    // Tambourine
    {
        title: "Tambourine",
        url: "tambourine",
        location: "pacific",
        intro: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.",
        ],
        images: {
            mainImage: ExampleImageFour,
            allImages: [ExampleImageFour, ExampleImageThree, ExampleImageOne],
        },
        data: {
            sizes: {
                heightCm: "10",
                depthCm: "41",
                widthCm: "33",
                weightGr: "40",
            },
            materials: {
                material: "plastic",
                category: "footwear",
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
                            value: "Footwear",
                        },
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "Produced in",
                            value: "China",
                        },
                        {
                            title: "Brand name",
                            value: "Baby",
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
                likes: 5,
            },
            {
                content:
                    "This is actually not a plastic penguiño but a rare Malasian baby slipper. Around 2004 it was a limited edition release with 5000 items. Still very popular in Japan!",
                name: "Mr. Pinned",
                pinned: true,
                likes: 3,
            },
            {
                content:
                    "This item is very popular in my country. I own two of them. They make a funny sounds when you squeeze it",
                name: "Not pinned",
                pinned: false,
                likes: 15,
            },
        ],
    },
    // Giant Dart
    {
        title: "Giant dart",
        url: "giant-dart",
        location: "pacific",
        intro: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.",
        ],
        images: {
            mainImage: ExampleImageThree,
            allImages: [ExampleImageThree, ExampleImageOne, ExampleImageTwo],
        },
        data: {
            sizes: {
                heightCm: "10",
                depthCm: "41",
                widthCm: "33",
                weightGr: "40",
            },
            materials: {
                material: "plastic",
                category: "footwear",
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
                            value: "Footwear",
                        },
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "Produced in",
                            value: "China",
                        },
                        {
                            title: "Brand name",
                            value: "Baby",
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
    // Toy Plane
    {
        title: "Toy plane",
        url: "toy-plane",
        location: "pacific",
        intro: [
            "This item was part of extraction number 19 on the 21st of January 2021. During this extraction we fished 21.893 kg of plastic out of the North Pacific Patch. This item was remarkable because we actually found a pair of these items together which is special because they would need to be together for multiple months if not years.",
            "We are not certain what the item is used for or what it’s origin is. We do know that is was in the ocean for over 1 year based on the damaged caused by the salt water of the ocean and the sunlight.",
        ],
        images: {
            mainImage: ToyPlane,
            allImages: [ToyPlane],
        },
        data: {
            sizes: {
                heightCm: "3",
                depthCm: "8",
                widthCm: "6",
                weightGr: "25",
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
                            value: "Black",
                        },
                        {
                            title: "Condition",
                            value: "Pretty okay",
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
    // Toy Soldier
    {
        title: "Toy soldier",
        url: "toy-soldier",
        location: "pacific",
        intro: [
            "This item was part of extraction number 19 on the 21st of January 2021. During this extraction we fished 21.893 kg of plastic out of the North Pacific Patch. This item was remarkable because we actually found a pair of these items together which is special because they would need to be together for multiple months if not years.",
            "We are not certain what the item is used for or what it’s origin is. We do know that is was in the ocean for over 1 year based on the damaged caused by the salt water of the ocean and the sunlight.",
        ],
        images: {
            mainImage: ToySoldier,
            allImages: [ToySoldier],
        },
        data: {
            sizes: {
                heightCm: "8",
                depthCm: "3",
                widthCm: "5",
                weightGr: "25",
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
                            value: "White",
                        },
                        {
                            title: "Condition",
                            value: "Pretty okay",
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
    // Flipper
    {
        title: "Flipper",
        url: "flipper",
        location: "pacific",
        intro: [
            "This item was part of extraction number 19 on the 21st of January 2021. During this extraction we fished 21.893 kg of plastic out of the North Pacific Patch. This item was remarkable because we actually found a pair of these items together which is special because they would need to be together for multiple months if not years.",
            "We are not certain what the item is used for or what it’s origin is. We do know that is was in the ocean for over 1 year based on the damaged caused by the salt water of the ocean and the sunlight.",
        ],
        images: {
            mainImage: Flipper,
            allImages: [Flipper],
        },
        data: {
            sizes: {
                heightCm: "52",
                depthCm: "11",
                widthCm: "20",
                weightGr: "232",
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
                            value: "Shoes",
                        },
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "Color",
                            value: "Black",
                        },
                        {
                            title: "Condition",
                            value: "Pretty okay",
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
    // Ink
    {
        title: "Ink",
        url: "ink",
        location: "pacific",
        intro: [
            "This item was part of extraction number 19 on the 21st of January 2021. During this extraction we fished 21.893 kg of plastic out of the North Pacific Patch. This item was remarkable because we actually found a pair of these items together which is special because they would need to be together for multiple months if not years.",
            "We are not certain what the item is used for or what it’s origin is. We do know that is was in the ocean for over 1 year based on the damaged caused by the salt water of the ocean and the sunlight.",
        ],
        images: {
            mainImage: Ink,
            allImages: [Ink],
        },
        data: {
            sizes: {
                heightCm: "11",
                depthCm: "10",
                widthCm: "10",
                weightGr: "180",
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
                            value: "Fluids",
                        },
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "Color",
                            value: "Black",
                        },
                        {
                            title: "Condition",
                            value: "Pretty okay",
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
    // Lamp
    {
        title: "Lamp",
        url: "lamp",
        location: "pacific",
        intro: [
            "This item was part of extraction number 19 on the 21st of January 2021. During this extraction we fished 21.893 kg of plastic out of the North Pacific Patch. This item was remarkable because we actually found a pair of these items together which is special because they would need to be together for multiple months if not years.",
            "We are not certain what the item is used for or what it’s origin is. We do know that is was in the ocean for over 1 year based on the damaged caused by the salt water of the ocean and the sunlight.",
        ],
        images: {
            mainImage: Lamp,
            allImages: [Lamp],
        },
        data: {
            sizes: {
                heightCm: "11",
                depthCm: "10",
                widthCm: "10",
                weightGr: "180",
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
                            value: "Tools",
                        },
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "Color",
                            value: "Black",
                        },
                        {
                            title: "Condition",
                            value: "Okay",
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
    // Mask
    {
        title: "Mask",
        url: "mask",
        location: "pacific",
        intro: [
            "This item was part of extraction number 19 on the 21st of January 2021. During this extraction we fished 21.893 kg of plastic out of the North Pacific Patch. This item was remarkable because we actually found a pair of these items together which is special because they would need to be together for multiple months if not years.",
            "We are not certain what the item is used for or what it’s origin is. We do know that is was in the ocean for over 1 year based on the damaged caused by the salt water of the ocean and the sunlight.",
        ],
        images: {
            mainImage: Mask,
            allImages: [Mask],
        },
        data: {
            sizes: {
                heightCm: "11",
                depthCm: "10",
                widthCm: "10",
                weightGr: "180",
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
                            value: "Tools",
                        },
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "Color",
                            value: "Black",
                        },
                        {
                            title: "Condition",
                            value: "Okay",
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
    // Oil Can
    {
        title: "Oil can",
        url: "oil-can",
        location: "pacific",
        intro: [
            "This item was part of extraction number 19 on the 21st of January 2021. During this extraction we fished 21.893 kg of plastic out of the North Pacific Patch. This item was remarkable because we actually found a pair of these items together which is special because they would need to be together for multiple months if not years.",
            "We are not certain what the item is used for or what it’s origin is. We do know that is was in the ocean for over 1 year based on the damaged caused by the salt water of the ocean and the sunlight.",
        ],
        images: {
            mainImage: OilCan,
            allImages: [OilCan],
        },
        data: {
            sizes: {
                heightCm: "11",
                depthCm: "10",
                widthCm: "10",
                weightGr: "180",
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
                            value: "Tools",
                        },
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "Color",
                            value: "Black",
                        },
                        {
                            title: "Condition",
                            value: "Okay",
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
    // Piggy Bank
    {
        title: "Piggy bank",
        url: "piggy-bank",
        location: "pacific",
        intro: [
            "This item was part of extraction number 19 on the 21st of January 2021. During this extraction we fished 21.893 kg of plastic out of the North Pacific Patch. This item was remarkable because we actually found a pair of these items together which is special because they would need to be together for multiple months if not years.",
            "We are not certain what the item is used for or what it’s origin is. We do know that is was in the ocean for over 1 year based on the damaged caused by the salt water of the ocean and the sunlight.",
        ],
        images: {
            mainImage: PiggyBank,
            allImages: [PiggyBank],
        },
        data: {
            sizes: {
                heightCm: "11",
                depthCm: "10",
                widthCm: "10",
                weightGr: "180",
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
                            value: "Tools",
                        },
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "Color",
                            value: "Black",
                        },
                        {
                            title: "Condition",
                            value: "Okay",
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
    // Tire
    {
        title: "Tire",
        url: "tire",
        location: "pacific",
        intro: [
            "This item was part of extraction number 19 on the 21st of January 2021. During this extraction we fished 21.893 kg of plastic out of the North Pacific Patch. This item was remarkable because we actually found a pair of these items together which is special because they would need to be together for multiple months if not years.",
            "We are not certain what the item is used for or what it’s origin is. We do know that is was in the ocean for over 1 year based on the damaged caused by the salt water of the ocean and the sunlight.",
        ],
        images: {
            mainImage: Tire,
            allImages: [Tire],
        },
        data: {
            sizes: {
                heightCm: "11",
                depthCm: "10",
                widthCm: "10",
                weightGr: "180",
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
                            value: "Tools",
                        },
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "Color",
                            value: "Black",
                        },
                        {
                            title: "Condition",
                            value: "Okay",
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
    // Tooth Brushes
    {
        title: "Tooth brushes",
        url: "tooth-brushes",
        location: "pacific",
        intro: [
            "This item was part of extraction number 19 on the 21st of January 2021. During this extraction we fished 21.893 kg of plastic out of the North Pacific Patch. This item was remarkable because we actually found a pair of these items together which is special because they would need to be together for multiple months if not years.",
            "We are not certain what the item is used for or what it’s origin is. We do know that is was in the ocean for over 1 year based on the damaged caused by the salt water of the ocean and the sunlight.",
        ],
        images: {
            mainImage: ToothBrushes,
            allImages: [ToothBrushes],
        },
        data: {
            sizes: {
                heightCm: "11",
                depthCm: "10",
                widthCm: "10",
                weightGr: "180",
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
                            value: "Tools",
                        },
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "Color",
                            value: "Black",
                        },
                        {
                            title: "Condition",
                            value: "Okay",
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
    // Toy Gun
    {
        title: "Toy gun",
        url: "toy-gun",
        location: "pacific",
        intro: [
            "This item was part of extraction number 19 on the 21st of January 2021. During this extraction we fished 21.893 kg of plastic out of the North Pacific Patch. This item was remarkable because we actually found a pair of these items together which is special because they would need to be together for multiple months if not years.",
            "We are not certain what the item is used for or what it’s origin is. We do know that is was in the ocean for over 1 year based on the damaged caused by the salt water of the ocean and the sunlight.",
        ],
        images: {
            mainImage: ToyGun,
            allImages: [ToyGun],
        },
        data: {
            sizes: {
                heightCm: "11",
                depthCm: "10",
                widthCm: "10",
                weightGr: "180",
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
                            value: "Tools",
                        },
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "Color",
                            value: "Black",
                        },
                        {
                            title: "Condition",
                            value: "Okay",
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
    // Water Can
    {
        title: "Water can",
        url: "water-can",
        location: "pacific",
        intro: [
            "This item was part of extraction number 19 on the 21st of January 2021. During this extraction we fished 21.893 kg of plastic out of the North Pacific Patch. This item was remarkable because we actually found a pair of these items together which is special because they would need to be together for multiple months if not years.",
            "We are not certain what the item is used for or what it’s origin is. We do know that is was in the ocean for over 1 year based on the damaged caused by the salt water of the ocean and the sunlight.",
        ],
        images: {
            mainImage: WaterCan,
            allImages: [WaterCan],
        },
        data: {
            sizes: {
                heightCm: "11",
                depthCm: "10",
                widthCm: "10",
                weightGr: "180",
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
                            value: "Tools",
                        },
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "Color",
                            value: "Black",
                        },
                        {
                            title: "Condition",
                            value: "Okay",
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

    /*
     *  South Atlantic Patch
     */

    /*
     *  Rio Ozama
     */

    /*
     * Kingston
     */

    /*
     *  LA County
     */

    /*
     *  Chao Phraya
     */

    /*
     *  Can Tho
     */

    /*
     *  Klang
     */

    /*
     *  Chengkareng drain
     */
];
