import Nav from "@components/nav";
import Contact from "@components/contact";
import "@styles/globals.css";

export const metadata = {
  title: "Triton Pickleball",
  description: "UC San Diego Pickleball Club",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <main className="">
          <Nav />
          {children}
          <Contact />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
