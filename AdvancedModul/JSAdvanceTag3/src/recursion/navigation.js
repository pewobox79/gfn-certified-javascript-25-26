const navigationData ={
    name: 'homepage',
    href: "/",
    title: 'Homepage',
    images: [
        {
            name: "bildname",
            url: 'https://',
        }   
    ],
    children: [
        {
            name: "about me",
            href: "/about-me",
            children: [
                {
                    name: "submenu aboutme",
                    href: "/about-me/submenu",
                    children:[]
                }
            ]
        }
    ]
}

const bigNavigation = {
    meta: {
        version: "1.0.0",
        locale: "de",
    },

    settings: {
        sticky: true,
        mobileBreakpoint: 1024,
    },

    items: [
        {
            id: "products",
            label: "Produkte",
            url: "/produkte",
            icon: "box",
            children: [
                {
                    id: "software",
                    label: "Software",
                    url: null,
                    children: [
                        {
                            id: "crm",
                            label: "CRM System",
                            url: "/produkte/crm",
                            children: [],
                        },
                        {
                            id: "erp",
                            label: "ERP Lösung",
                            url: "/produkte/erp",
                            children: [],
                        },
                    ],
                },
                {
                    id: "hardware",
                    label: "Hardware",
                    url: null,
                    children: [
                        {
                            id: "terminals",
                            label: "Terminals",
                            url: "/produkte/terminals",
                            children: [],
                        },
                        {
                            id: "accessories",
                            label: "Zubehör",
                            url: "/produkte/zubehoer",
                            children: [],
                        },
                    ],
                },
            ],
        },

        {
            id: "solutions",
            label: "Lösungen",
            url: "/loesungen",
            icon: "layers",
            children: [
                {
                    id: "retail",
                    label: "Einzelhandel",
                    url: "/loesungen/einzelhandel",
                    children: [],
                },
                {
                    id: "industry",
                    label: "Industrie",
                    url: "/loesungen/industrie",
                    children: [],
                },
            ],
        },

        {
            id: "resources",
            label: "Ressourcen",
            url: "/ressourcen",
            icon: "book",
            children: [
                {
                    id: "blog",
                    label: "Blog",
                    url: "/blog",
                    children: [],
                },
                {
                    id: "whitepaper",
                    label: "Whitepaper",
                    url: "/whitepaper",
                    children: [],
                },
                {
                    id: "case-studies",
                    label: "Case Studies",
                    url: "/case-studies",
                    children: [],
                },
            ],
        },

        {
            id: "company",
            label: "Unternehmen",
            url: "/unternehmen",
            icon: "building",
            children: [
                {
                    id: "about",
                    label: "Über uns",
                    url: "/unternehmen/ueber-uns",
                    children: [],
                },
                {
                    id: "careers",
                    label: "Karriere",
                    url: "/unternehmen/karriere",
                    children: [],
                },
                {
                    id: "contact",
                    label: "Kontakt",
                    url: "/kontakt",
                    children: [],
                },
            ],
        },
    ],

    utility: {
        cta: {
            label: "Demo anfragen",
            url: "/demo",
        },
    },
};
