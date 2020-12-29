import mission from '../images/mission.png'
import reliability from '../images/Reliability.png'
import certified from '../images/certified.jpg'

import seasor from '../images/seasor.png'
import catalogh from '../images/catalouge.png'
import complaints from '../images/complaints.png'





export const webText = {
    header: {
        mainHeading: "Lorem Ipsum is simply",
        subHeading: "Lorem Ipsum is simply dummy text of the"
    },
    aim: {
        subHeading: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
        heading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',

        aimBoxes: [
            {
                id: 1,
                icon: mission,
                heading: 'Our Mission',
                details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
            },
            {
                id: 2,
                icon: reliability,
                heading: 'Our Mission',
                details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
            },
            {
                id: 3,
                icon: mission,
                heading: 'Our Mission',
                details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
            }
            
        ]
    },

    features: [
        {
            id: 1,
            heading: 'Meezam Impex',
            details: `popularised in the 1960s with the release 
            of Letraset sheets containing Lorem Ipsum passages Lorem 
            Ipsum is simply dummy text of 
            the printing and typesetting industry. Lorem 
            Ipsum has been the industry's standard dummy 
            text ever since the 1500s, when an unknown 
            printer took a galley of type and scrambled 
            it to make a type specimen book. 
            It has survived not only five centuries, but also
            the leap into electronic typesetting, remaining essentially unchanged. 
            It was , and more recently 
            with desktop publishing software like Aldus 
            PageMaker including versions of Lorem Ipsum.`,
            img: certified,
            isActive: false,
            icon: complaints

        },
        {
            id: 2,
            heading: 'Meezam Impex',
            details: `Lorem Ipsum is simply dummy text of 
            the printing and typesetting industry. Lorem 
            Ipsum has been the industry's standard dummy 
            text ever since the 1500s, when an unknown 
            printer took a galley of type and scrambled 
            it to make a type specimen book. 
            It has survived not only five centuries, but also
            the leap into electronic typesetting, remaining essentially unchanged. 
            It was popularised in the 1960s with the release 
            of Letraset sheets containing Lorem Ipsum passages, and more recently 
            with desktop publishing software like Aldus 
            PageMaker including versions of Lorem Ipsum.`,
            img: certified,
            isActive: false,
            icon: catalogh

        },
        {
            id: 3,
            heading: 'Meezam Impax',
            details: ` industry. Lorem 
            Ipsum has been the industry's standard dummy 
            text ever since the 1500s, Lorem Ipsum is simply dummy text of 
            the printing and typesetting  when an unknown 
            printer took a galley of type and scrambled 
            it to make a type specimen book. 
            It has survived not only five centuries, but also
            the leap into electronic typesetting, remaining essentially unchanged. 
            It was popularised in the 1960s with the release 
            of Letraset sheets containing Lorem Ipsum passages, and more recently 
            with desktop publishing software like Aldus 
            PageMaker including versions of Lorem Ipsum.`,
            img: certified,
            isActive: false,
            icon: complaints

        }
    ],

    contactMethods: [
        {
            id:1,
            category: 'address',
            text1 : 'Adresss line 1',
            text2 : 'adress line 2',
            icon: 'fas fa-map-marker-alt'
        },
        {
            id:2,
            category: 'email',
            text1 : 'email',
            text2 : 'xyz@gmail.com',
            icon: 'fas fa-envelope'
        },
        {
            id:3,
            category: 'phone',
            text1 : 'Phone',
            text2 : '0300-00000878',
            icon: 'fas fa-mobile'
        }
    ],

    footer: [
        {
            id:1,
            heading: 'Information',
            home: 'home',
            aboutUs : 'about us',
            contactUs: 'contact us',
            newsEvents: 'News and events',
            followUs: [
                {icon:'fas fa-facebook', link:'www.facebook.com'},
                {icon:'fas fa-twitter', link:'www.twitter.com'},
                {icon:'fas fa-instagram', link:'www.instagram.com'}
            ]
        },
        {
            id:2,
            heading: 'Catagories',
            general: 'General Surgeries',
            dental : 'Orthpetic',
            neoro: 'Neorosurgery',
            
        },
        {
            id:3,
            heading: 'Newsletter',
            details: 'desktop publishing software like Aldus',
            
        }

    ]

}