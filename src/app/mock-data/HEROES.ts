import { Hero } from "../models/hero";

export const HEROES: Array<Hero> = [
    {
        id: 1,
        name: "Nguyễn Văn Đức",
        image: "https://iap.poly.edu.vn/user/ph/PH11076.jpg",
        skills: [
            {
                id: 1,
                name: "php"
            },
            {
                id: 2,
                name: "html"
            }
        ]
    },
    {
        id: 2,
        name: "Trương Khánh Ngọc",
        image: "https://iap.poly.edu.vn/user/ph/PH11120.jpg",
        skills: [
            {
                id: 3,
                name: "css"
            },
            {
                id: 1,
                name: "php"
            }
        ]
    },
    {
        id: 3,
        name: "Nguyễn Văn Tân",
        image: "https://iap.poly.edu.vn/user/ph/PH11473.jpg",
    }
]