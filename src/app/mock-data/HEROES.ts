import { Hero } from "../models/hero";

export const HEROES: Array<Hero> = [
    {
        id: 1,
        name: "Nguyễn Văn Đức",
        image: "https://iap.poly.edu.vn/user/ph/PH11076.jpg",
        skills: [
            {
                id: 1,
                name: "java"
            },
            {
                id: 2,
                name: "C-Sharp"
            }
        ]
    },
    {
        id: 2,
        name: "Trương Khánh Ngọc",
        image: "https://iap.poly.edu.vn/user/ph/PH11120.jpg",
        skills: [
            {
                id: 1,
                name: "java"
            },
            {
                id: 3,
                name: "PHP"
            }
        ]
    },
    {
        id: 3,
        name: "Nguyễn Văn Tân",
        image: "https://iap.poly.edu.vn/user/ph/PH11473.jpg",
        skills: []
    }
]