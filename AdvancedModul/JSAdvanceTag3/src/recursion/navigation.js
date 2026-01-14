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