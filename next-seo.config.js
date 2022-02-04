const title = "Starter";
const description = `This is a cool Starter`;

const SEO = {
    title,
    description,
    openGraph: {
        title,
        description,
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_SITE_URL}/og_image.png`,
                width: 1200,
                height: 630,
                alt: title,
            },
        ],
        type: "website",
        locale: "en_US",
        url: process.env.NEXT_PUBLIC_SITE_URL,
        site_name: title,
    },
    twitter: {
        handle: "@Starter",
        site: "@Starter",
        cardType: "summary_large_image",
    },
};

export default SEO;
