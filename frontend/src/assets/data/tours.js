import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";
import tourImg08 from "../images/tour-img08.jpg";
import tourImg09 from "../images/tour-img09.jpg";
import tourImg10 from "../images/tour-img10.jpg";
import tourImg11 from "../images/tour-img11.jpg";
import tourImg12 from "../images/tour-img12.jpg";
import tourImg13 from "../images/tour-img13.jpg";
import tourImg14 from "../images/tour-img14.jpg";
import tourImg15 from "../images/tour-img15.jpg";
import tourImg16 from "../images/tour-img16.jpg";

const tours = [
  {
    id: "01",
    title: "The Spiritual Capital of India",
    city: "Varanasi, Uttar Pradesh",
    distance: 500,
    address: 'Varanasi, Uttar Pradesh, India',
    price: 79,
    maxGroupSize: 10,
    desc: "World's oldest living city, Varanasi - also known as Kashi (City of Life) and Benaras",
    ess:"Weather = 15 - 29°C",
    reviews: [
      {
        name: "Mukesh Kumar",
        rating: 4.6,
      },
      {
         name: "Urjit",
         rating: 5,
       },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Kullu-Manali",
    city: "Kullu District, Himachal Pradesh",
    distance: 400,
    address: 'Himachal Pradesh, India',
    price: 96,
    maxGroupSize: 8,
    desc: "Manali is a magical hill station at the northern end of Kullu valley in Himachal Pradesh.",
    ess:"Weather = 15 - 29°C",
    reviews: [
      {
        name: "Shubham",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Taj Mahal",
    city: "Agra",
    distance: 500,
    address: 'Agra, Uttar Pradesh, India',
    price: 76,
    maxGroupSize: 8,
    desc: "The Taj Mahal is one of the seven wonders of the world.",
    ess:"Weather = 15 - 29°C",
    reviews: [
      {
        name: "Jeewant",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "The Scotland of India",
    city: "Coorg, Karnataka",
    distance: 500,
    address: 'Karnataka, India',
    price: 85,
    maxGroupSize: 8,
    desc: "Coorg is a popular coffee producing hill station.",
    ess:"Weather = 15 - 29°C",
    reviews: [
      {
        name: "MNQ",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Blue Seas in India",
    city: "Andaman & Nicobar Islands",
    distance: 500,
    address: 'Andaman & Nicobar Islands, India',
    price: 75,
    maxGroupSize: 8,
    desc: "Blue seas, virgin islands and colonial past with sandy beaches.",
    ess:"Weather = 15 - 29°C",
    reviews: [
      {
        name: "Bhupendra Jogi",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "The city of Lakes",
    city: "Udaipur, Rajasthan",
    distance: 500,
    address: 'Rajasthan, India',
    price: 88,
    maxGroupSize: 8,
    desc: "Lakes and Palaces of Udaipur are must to Visit and offers experience luxury in India.",
    ess:"Weather = 15 - 29°C",
    reviews: [
      {
        name: "Sallu Bhai",
        rating: 4.4,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "The Gateway to Sikkim",
    city: "Gangtok",
    distance: 500,
    address: 'Sikkim, India',
    price: 79,
    maxGroupSize: 8,
    desc: "The town during its bright sunny days offers spectacular views of Mt. Kanchenjunga",
    ess:"Weather = 15 - 29°C",
    reviews: [
      {
        name: "ZAA",
        rating: 4.7,
      },
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Kashmir of South India",
    city: "Munnar, Kerala",
    distance: 500,
    address: 'Kerala, India',
    price: 99,
    maxGroupSize: 8,
    desc: "Famous for the tea estates, greenery, winding roads, blanket of mist, and viewpoints.",
    ess:"Weather = 15 - 29°C",
    reviews: [
      {
        name: "SMZ",
        rating: 4.7,
      },
    ],
    avgRating: 4.5,
    photo: tourImg08,
    featured: false,
  },
  {
    id: "09",
    title: "India's Own Moonland",
    city: "Leh Ladakh",
    distance: 300,
    address: 'Ladakh Union Territory, India',
    price: 99,
    maxGroupSize: 8,
    desc: "Ladakh is a union territory in the Kashmir region of India.It is world's coldest desert.",
    ess:"Weather = 15 - 29°C",
    reviews: [
      {
        name: "Shubham",
        rating: 4.7,
      },
    ],
    avgRating: 4.5,
    photo: tourImg09,
    featured: false,
  },
  {
    id: "10",
    title: "Beaches, Sunsets and Crazy Nights",
    city: "Goa",
    distance: 500,
    address: 'Goa, India',
    price: 99,
    maxGroupSize: 8,
    desc: "Goa is India's smallest state and known for its eclectic seafood, world-heritage listed architecture.",
    ess:"Weather = 15 - 29°C",
    reviews: [
    ],
    avgRating: 4.5,
    photo: tourImg10,
    featured: false,
  },
  {
    id: "11",
    title: "Scotland of the East India",
    city: "Shillong",
    distance: 500,
    address: 'Shillong, Meghalaya, India',
    price: 75,
    maxGroupSize: 8,
    desc: "A beautiful city encircled by pine trees and  home to numerous waterfalls.  Shillong is also famous as the music capital of India",
    ess:"Weather = 15 - 29°C",
    reviews: [
      {
        name: "Mukesh Chaudhary",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg11,
    featured: false,
  },
  {
    id: "12",
    title: "The Hill-Station with Rich Colonial History",
    city: "Shimla, H.P",
    distance: 500,
    address: 'Shimla, Himachal Pradesh, India',
    price: 79,
    maxGroupSize: 10,
    desc: "Shimla is the capital of Himachal Pradesh and a popular hill-station among Indian families and honeymooners.",
    ess:"Weather = 15 - 29°C",
    reviews: [
      {
        name: "Mukesh Kumar",
        rating: 4.6,
      },
      {
         name: "Urjit",
         rating: 5,
       },
    ],
    avgRating: 4.5,
    photo: tourImg12,
    featured: true,
  },
  {
    id: "13",
    title: "One Hundred Thousand Islands",
    city: "Lakshadweep, India",
    distance: 500,
    address: 'Lakshadweep UT, India',
    price: 79,
    maxGroupSize: 10,
    desc: "The smallest union territory of India has only 36 islands having a total area of 32 sq. kilometres.",
    ess:"Weather = 15 - 29°C",
    reviews: [
      {
        name: "Mukesh Kumar",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg13,
    featured: true,
  },
  {
    id: "14",
    title: "The Capital City of India",
    city: "NCR, India",
    distance: 500,
    address: 'Delhi NCR, India',
    price: 79,
    maxGroupSize: 10,
    desc: "Red Fort, Jama Masjid, Humayun's Tomb,  Akshardham Temple, the Lotus Temple, the ISKON Temple and Purana Qila are some famous Places of NCR",
    ess:"Weather = 15 - 29°C",
    reviews: [
      {
        name: "Mukesh Chaudhary",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg14,
    featured: true,
  },
  {
    id: "15",
    title: "Gateway to Punjab - Golden Temple",
    city: "Amritsar, Punjab",
    distance: 500,
    address: 'Amritsar, Punjab, India',
    price: 79,
    maxGroupSize: 10,
    desc: "Home of the glorious Golden Temple, the iconic city of Amritsar, portrays the heroic character of Punjab.  This place is also famous for its Jallianwala Bagh massacre and its proximity to Wagah Border.",
    ess:"Weather = 15 - 29°C",
    reviews: [
      {
         name: "Urjit",
         rating: 5,
       },
    ],
    avgRating: 4.5,
    photo: tourImg15,
    featured: true,
  },
  {
    id: "16",
    title: "The queen of hill-stations",
    city: "Dehradun, Uttarakhand",
    distance: 500,
    address: 'Mussoorie, Dehradun, Uttarakhand, India',
    price: 79,
    maxGroupSize: 10,
    desc: "With a backdrop of the Shivalik range of Himalayas and doon valley, Mussoorie, also known as Queen of The Hills, stands at an altitude of 7000 feet above sea level.",
    ess:"Weather = 15 - 29°C",
    reviews: [
      {
        name: "Mukesh Kumar",
        rating: 4.6,
      },  
    ],
    avgRating: 4.5,
    photo: tourImg16,
    featured: true,
  }
];

export default tours;
