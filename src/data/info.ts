import { Post } from '../models/Post';
import { Feature } from '../models/Feature';
import { Product } from '../models/Product';
export const freeProducts = [
    new Product(
        "The Perfect Outdoor Workout",
        "30 minutes",
        "free",
        "https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e80cc3543a59d1e21194573_angelos-michalopoulos-S3Rs0DcvvK0-unsplash.jpg"
    ),
    new Product(
        "Back Day",
        "1 hour",
        "free",
        "https://uploads-ssl.webflow.com/5e8303dd097a90ffd20e6b2f/5e831e7a9a30c575281c9d8d_logan-weaver-BvXh8e5M8YM-unsplash.jpg"
    ),
    new Product(
        "The Ultimate Abs Tabata",
        "40 minutes",
        "free",
        "https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e80cc35a7eca1d6f394deb8_guillaume-bolduc-cfmBbDcCAQo-unsplash.jpg"
    ),
];





export const premiumProducts = [
    new Product(
        "Home Burn",
        "3 days a week",
        "$ 19.99 USD",
        "https://uploads-ssl.webflow.com/5e8303dd097a90ffd20e6b2f/5e831544e893cdaff056a2df_guillaume-bolduc-jWvUCKFIXbI-unsplash.jpg"
    ),
    new Product(
        "Shredded Meal Plan",
        "30 days",
        "$ 29.99 USD",
        "https://uploads-ssl.webflow.com/5e8303dd097a90ffd20e6b2f/5e8314f167d71f19f7a0189f_logan-weaver-RBbwGEKBbD8-unsplash.jpg"
    ),
    new Product(
        "High Intensity Training",
        "7 days a week",
        "$ 89.99 USD",
        "https://uploads-ssl.webflow.com/5e8303dd097a90ffd20e6b2f/5e83149f3165d632eb81e21b_logan-weaver-brI7nj3kju8-unsplash.jpg"
    ),
];

export const trainingProducts = [
    new Product(
        "Home Burn",
        "3 days a week",
        "$ 19.99 USD",
        "https://uploads-ssl.webflow.com/5e8303dd097a90ffd20e6b2f/5e831544e893cdaff056a2df_guillaume-bolduc-jWvUCKFIXbI-unsplash.jpg"
    ),
    new Product(
        "Shredded Meal Plan",
        "30 days",
        "$ 29.99 USD",
        "https://uploads-ssl.webflow.com/5e8303dd097a90ffd20e6b2f/5e8314f167d71f19f7a0189f_logan-weaver-RBbwGEKBbD8-unsplash.jpg"
    ),
    new Product(
        "Sculpt Your Body",
        "5 days a week",
        "$ 39.99 USD",
        "https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e80cc3929502f63a5ba28e2_hipcravo-DC5akQJyH4I-unsplash.jpg"
    ),
];

export const nutritionProducts = [
    new Product(
        "Shredded Meal Plan",
        "30 days",
        "$ 29.99 USD",
        "https://uploads-ssl.webflow.com/5e8303dd097a90ffd20e6b2f/5e8314f167d71f19f7a0189f_logan-weaver-RBbwGEKBbD8-unsplash.jpg"
    ),
    new Product(
        "High Intensity Training",
        "7 days a week",
        "$ 89.99 USD",
        "https://uploads-ssl.webflow.com/5e8303dd097a90ffd20e6b2f/5e83149f3165d632eb81e21b_logan-weaver-brI7nj3kju8-unsplash.jpg"
    ),
];





export const features = [
    new Feature(
        "Learn to live a healthy life with fitness",
        "Changing your lifestyle with a fast paced life may seem hard or impossible, but with small steps each week you can achieve your dream physique and live a healthier life.",
        "https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e8318b4e893cdf8c256b249_logan-weaver-Oyw8t2UTUWQ-unsplash.jpg"
    ),
    new Feature(
        "Understand how to do excercises properly",
        "Just going to the gym and lifting weights won't make you healthy, after all it may even cause some harm to your body. We teach proper exercise techniques",
        "https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e8318f6e893cd930956b324_logan-weaver-RBbwGEKBbD8-unsplash.jpg"
    ),
    new Feature(
        "Track your progress weekly",
        "We're tracking your goal weight with body fat measures, weight and general feeling. You may have the same body weight but feel 10x better.",
        "https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e80cc38dc5445e4baf2fc5c_guillaume-bolduc-KyX1s7KSfIk-unsplash.jpg"
    ),
    new Feature(
        "Follow a specific plan made just for you",
        "Everyone is different, and we know it. That's why all of our clients get a programme specific just for their lifestyle and body tipe. This give the best possible results.",
        "https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e8318ac54f5dfdf7b9fe428_logan-weaver-24LpwagvuDY-unsplash.jpg"
    ),
];


const user = {
    name:"Curtis Vandervort",
    image:"https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e80cc3543a59dbf9b194574_guillaume-bolduc-D929R3i3Ai4-unsplash.jpg"
}

export const posts = [
    new Post(
        user,
        "The 10 best exercises to do in your park",
        "",
        "https://uploads-ssl.webflow.com/5e8303dd097a90ffd20e6b2f/5e848436ae1ad84d9cff791e_logan-weaver-nU1myxFkiMk-unsplash.jpg",
        "Training"
    ),
    new Post(
        user,
        "Healthy breakfast ideas",
        "",
        "https://uploads-ssl.webflow.com/5e8303dd097a90ffd20e6b2f/5e848470f368a46ca30df605_joseph-gonzalez-fdlZBWIP0aM-unsplash.jpg",
        "Weight Loss"
    ),
    new Post(
        user,
        "My life changing experience",
        "",
        "https://uploads-ssl.webflow.com/5e8303dd097a90ffd20e6b2f/5e831e3a9e9cc3b8eccc7caf_angelos-michalopoulos-S3Rs0DcvvK0-unsplash.jpg",
        "Training"
    ),
]

export const instaRols1 = [
    {
        id:1,
        image:"https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e80cc39dc5445cab2f2fc62_guillaume-bolduc-zFzR5K2-_xc-unsplash.jpg"
    },
    {
        id:2,
        image:"https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e80cc39dad44dc6402ce3e5_morgan-petroski-rx6wXNsXUOE-unsplash.jpg"
    },
    {
        id:3,
        image:"https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e80cc36fea9a34a5cd99e31_guillaume-bolduc-k_oBq1mdzY4-unsplash.jpg"
    },
    {
        id:4,
        image:"https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e80cc3543a59d1e21194573_angelos-michalopoulos-S3Rs0DcvvK0-unsplash.jpg"
    },
]
export const instaRols2 = [
    {
        id:1,
        image:"https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e808f479d755165efc99997_logan-weaver-DVWa-aq3_m4-unsplash%201.png"
    },
    {
        id:2,
        image:"https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e80894f63c55763eded9700_manny-pantoja-2vnpCeKohWI-unsplash.jpg"
    },
    {
        id:3,
        image:"https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e8331bf54f5df307aa05c19_logan-weaver-DVWa-aq3_m4-unsplash.jpg"
    },
    {
        id:4,
        image:"https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e80cc330c4ef42626fe067e_derick-mckinney-__QqvTI5Edc-unsplash.jpg"
    },
]

export const socials = [
    {
        id:1,
        logo:"https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e82ffa5871a996615e6cebc_003-twitter-logo-button.svg",
        link:"#",
        title:"@fitnesso"
    },
    {
        id:2,
        logo:"https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e83002e40b6b8486e320705_instagram.svg",
        link:"#",
        title:"@fitnesso"
    },
    {
        id:3,
        logo:"https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e82ffa4097a9061280e5e5a_004-linkedin-logo-button.svg",
        link:"#",
        title:"/Fitnesso"
    },
    {
        id:4,
        logo:"https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e830050cf9bc2c348479b60_youtube.svg",
        link:"#",
        title:"/Fitnesso"
    },
]