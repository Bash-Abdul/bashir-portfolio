import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = 'Bashir Abdulah | React Frontend Developer',
  description = 'Welcome to the portfolio of Bashir Abdulah, a React frontend developer crafting modern, responsive websites and mobile apps with clean UI/UX design and scalable performance.',
  keywords = 'React, Frontend Developer, Bashir Abdulah, Web Developer, UI/UX, Portfolio',
  author = 'Bashir Abdulah',
  image = 'https://yourdomain.com/banner.png',
  url = 'https://yourdomain.com',
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />

      {/* Open Graph / Facebook */}
      {/* <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} /> */}

      {/* Twitter */}
      {/* <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} /> */}
    </Helmet>
  );
};

export default SEO;
