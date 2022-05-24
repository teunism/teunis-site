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

export const itemsData = [
    // Pacific
    {
        title: "Plastic slipper",
        url: "plastic-slipper",
        location: "pacific",
        intro: "This item was found in the pacific garbage patch during extraction #28. We believe it to be an Asian slipper from the brand \"Baby\". The slipper is still in very good condition. That's why we guess that the slipper couldn't be more then 2 years in the water",
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
    {
        title: "Head of doll",
        url: "doll-head",
        location: "pacific",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.",
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
    {
        title: "Tambourine",
        url: "tambourine",
        location: "pacific",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.",
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
    {
        title: "Plastic slipper",
        url: "plastic-slipper",
        location: "pacific",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.",
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
    {
        title: "Head of doll",
        url: "doll-head",
        location: "pacific",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.",
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
    {
        title: "Tambourine",
        url: "tambourine",
        location: "pacific",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.",
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

    // North Atlantic Patch
    {
        title: "Backside of Television",
        url: "television",
        location: "north-atlantic",
        intro: "This backside of a TV was found in the ... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. ",
        images: {
            mainImage: TelevisionOne,
            allImages: [TelevisionOne, TelevisionTwo, TelevisionThree],
        },
        data: {
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
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "-",
                            value: "-",
                        },
                        // {
                        //     title: "Brand name",
                        //     value: "Baby",
                        // },
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
    {
        title: "Broken tiara",
        url: "broken-tiara",
        location: "north-atlantic",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.",
        images: {
            mainImage: BrokenTiara,
            allImages: [BrokenTiara],
        },
        data: {
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
                            title: "-",
                            value: "-",
                        },
                        // {
                        //     title: "Brand name",
                        //     value: "Baby",
                        // },
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
    {
        title: "Ranch dressing",
        url: "ranch-dressing",
        location: "north-atlantic",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.",
        images: {
            mainImage: RanchDressing,
            allImages: [RanchDressing],
        },
        data: {
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
    {
        title: "Golf ball",
        url: "golf-ball",
        location: "north-atlantic",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.",
        images: {
            mainImage: GolfBall,
            allImages: [GolfBall],
        },
        data: {
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

    // South Atlantic Patch
    {
        title: "Plastic slipper",
        url: "plastic-slipper",
        location: "south-atlantic",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.",
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
    {
        title: "Head of doll",
        url: "doll-head",
        location: "south-atlantic",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.",
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

    // Rio Ozama
    {
        title: "Head of doll",
        url: "doll-head",
        location: "rio-ozama",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.",
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

    // Kingston
    {
        title: "Giant dart",
        url: "giant-dart",
        location: "kingston",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.",
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
    {
        title: "Backside of Television",
        url: "television",
        location: "kingston",
        intro: "This backside of a TV was found in the ... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. ",
        images: {
            mainImage: TelevisionOne,
            allImages: [TelevisionOne, TelevisionTwo, TelevisionThree],
        },
        data: {
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
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "-",
                            value: "-",
                        },
                        // {
                        //     title: "Brand name",
                        //     value: "Baby",
                        // },
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
    {
        title: "Broken tiara",
        url: "broken-tiara",
        location: "kingston",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.",
        images: {
            mainImage: BrokenTiara,
            allImages: [BrokenTiara],
        },
        data: {
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
                            title: "-",
                            value: "-",
                        },
                        // {
                        //     title: "Brand name",
                        //     value: "Baby",
                        // },
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

    // LA County
    {
        title: "Tambourine",
        url: "tambourine",
        location: "la-county",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.",
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

    // Chao Phraya
    {
        title: "Plastic slipper",
        url: "plastic-slipper",
        location: "chao-phraya",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.",
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
    {
        title: "Giant dart",
        url: "giant-dart",
        location: "chao-phraya",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.",
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

    // Can Tho
    {
        title: "Head of doll",
        url: "doll-head",
        location: "can-tho",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.",
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
    {
        title: "Backside of Television",
        url: "television",
        location: "can-tho",
        intro: "This backside of a TV was found in the ... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. ",
        images: {
            mainImage: TelevisionOne,
            allImages: [TelevisionOne, TelevisionTwo, TelevisionThree],
        },
        data: {
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
                    ],
                },
                {
                    title: "Rest",
                    properties: [
                        {
                            title: "-",
                            value: "-",
                        },
                        // {
                        //     title: "Brand name",
                        //     value: "Baby",
                        // },
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
    {
        title: "Broken tiara",
        url: "broken-tiara",
        location: "can-tho",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.",
        images: {
            mainImage: BrokenTiara,
            allImages: [BrokenTiara],
        },
        data: {
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
                            title: "-",
                            value: "-",
                        },
                        // {
                        //     title: "Brand name",
                        //     value: "Baby",
                        // },
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

    // Klang
    {
        title: "Giant dart",
        url: "giant-dart",
        location: "klang",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.",
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

    // Chengkareng drain
    {
        title: "Tambourine",
        url: "tambourine",
        location: "chengkareng-drain",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.",
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
];
