const { Blog } = require("../models");
const blogData = [{
        blog_name: "Aliso Trail - Meadows",
        description: "Is this trail great for beginner riders?",
        user_name: "Martin B",
        date_posted: "March 30, 2019",
        blog_id: 1,
        for_sale_ad: false,
    },
    {
        blog_name: "Trail Work in Progress - Aliso Woods",
        description: "I noticed trail work signs at the beginning of Lynx",
        user_name: "Johhny 5'0",
        date_posted: "September 20, 2019",
        blog_id: 2,
        for_sale_ad: false,
    },
    {
        blog_name: "Selling my 2015 Specialized Enduro",
        description: "Great bike! Only 6 years old, running full Eagle drive train and othe XT components ",
        user_name: "Tanner 'Moose'",
        date_posted: "October 01, 2019",
        blog_id: 3,
        for_sale_ad: true,
    },
    {
        blog_name: "Selling my Yeti dh rig",
        description: "Its in pretty good condition and runs like a champ! Contact me for more information @ 949-999-9999",
        user_name: "YeTi B",
        date_posted: "October 16, 2019",
        blog_id: 4,
        for_sale_ad: true,
    },
    {
        blog_name: "Laguna Wilderness - Socal",
        description: "Has anyone ridden this area? would love to take my family here to ride",
        user_name: "Jose M",
        date_posted: "October 30, 2019",
        blog_id: 5,
        for_sale_ad: false,
    },
    {
        blog_name: "The Luge - Santiago Road, SOCAL",
        description: "How long of a ride is it from the bottom to the top of the luge?",
        user_name: "Slow-Rider",
        date_posted: "November 03, 2019",
        blog_id: 6,
        for_sale_ad: false,
    },
    {
        blog_name: "Aliso Trail - Car Wreck",
        description: "Is this trail great for beginner riders? I've heard that it has a lot of downhill features",
        user_name: "Downhill4Life",
        date_posted: "November 30, 2019",
        blog_id: 7,
        for_sale_ad: false,
    },
];
const seedBlogData = () => Blog.bulkCreate(blogData);

module.exports = seedBlogData;