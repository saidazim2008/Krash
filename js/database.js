let videos = window.localStorage.getItem('data')
if (!videos) videos = [{
        iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/F5UPc8dya-M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        img: "https://img.etimg.com/thumb/msid-75910975,width-650,imgsize-1416319,,resizemode-4,quality-100/if-you-cant-go-to-the-animals-the-animals-will-come-to-you-via-your-tv-set-or-smartphone-.jpg",
        title: "Wild animals life"
    },
    {
        iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/SMKPKGW083c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        img: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
        title: "Nature life"
    },
    {
        iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/W6NZfCO5SIk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        img: "https://zavistnik.com/wp-content/uploads/2020/02/Yavaskript-zastavka2-750x375.jpg",
        title: "Learn JS"
    },
    {
        iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/uVwtVBpw7RQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        img: "https://i.morioh.com/3f0d82edf4.png",
        title: "Node JS course"
    },
    {
        iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/Zz6eOVaaelI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        img: "https://uploads.sitepoint.com/wp-content/uploads/2014/04/1502203992featured-sass-scss.png",
        title: "CSS / SCSS / SASS"
    },

]
else videos = JSON.parse(videos)