import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import toast, { Toaster } from 'react-hot-toast';
import { Helmet } from "react-helmet";

const Layout = (props) => {
  return (
    <div>
      <Helmet>
        <meta name="description" content={props.description} />
        <meta name="keywords" content={props.keywords} />
        <meta name="author" content={props.author}/>
        <title>{props.title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "73.5vh" }}>
        {props.children}
        
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

Layout.defaultProps = {
  title: 'Ecommerce App- Shop now',
  description: "A MERN stack project by Simran Kaur",
  keywords: "react, node, mongodb, bootstrap",
  author: "Simran Kaur",
}

export default Layout;
