import * as React from "react"

// styles
//@media only screen and 
const pageStyles = {
  color: "#3b3b3b",
  padding: "6% 18% 0.5% 18%",
  fontFamily: "IBM Plex Sans, -apple-system, Roboto, sans-serif, serif",
}

const headingStyles = {
  marginTop: 0,
  marginBottom: 0,
  maxWidth: 320,
  fontSize: "3rem",
}

const paragraphStyles = {
  fontSize: "1rem",
  marginBottom: 48,
  fontWeight: 500,
  marginRight: "8%",
  marginLeft: "3%",
  paddingLeft: "0.5%",
}

const TwitterStyles = {
  textDecoration: "underline",
  color: "#1DA1F2",
}

const GithubStyles = {
  textDecoration: "underline",
  color: "#4078c0",
}

const LinkedinStyles = {
  textDecoration: "underline",
  color: "#0e76a8",
}

const InstaStyles = {
  textDecoration: "underline",
  color: "#833AB4",
}

const linkStyles = {
  textDecoration: "underline",
  color: "#3b3b3b",
}

const linkStylesForBlog = {
  textDecoration: "none",
  color: "#3b3b3b",
}

const blogStyles = {
  width: "70%",
  height: "100%",
  backgroundColor: "#ffe882",
  display: "flex",
  flexDirection: "row",
  boxShadow: "4px 7px 0px 0px #ffdb3b",
  borderRadius: "3px",
  margin: "30px",
}

const blogName = {
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "left",
  textAlign: "left",
  alignItems: "left",
  paddingLeft: "7%",
  paddingRight: "7%",
  paddingTop: "1%",
  paddingBottom: "1%",
}

const heading = {
  marginBottom: 15,
  textDecoration: "underline",
}

const content = {
  paddingTop: 0,
  marginTop: 0,
  fontWeight: 500,
  fontSize: "1rem",
  textDecoration: "none",
}

const date = {
  fontSize: "0.75rem",
  fontWeight: 300,
}

const footer = {
  marginTop: "10%",
  left: 0,
  bottom: 0,
  width: "100%",
  textAlign: "center",
  fontSize: "0.9rem",
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <head>
        <title>Tanish Goel</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
      </head>
      <h1 style={headingStyles}>
        Tanish Goel
        <br />
        —--
      </h1>
      <p style={paragraphStyles}>
        Welcome to my website! I am Tanish, a unix and python developer currently
        studying computing at Imperial College London. This website will function 
        like a miniature blog updated as often as possible about the events going on 
        in my life. Fun fact: The prime minister of India <a style={TwitterStyles} href="https://twitter.com/narendramodi/status/1220703661011144711?lang=en">tweeted</a> about me!
      </p>
      <p style={paragraphStyles}>Few important things out of the way-- my <a style={GithubStyles} href="https://github.com/TanishGoel">Github</a>, <a style={LinkedinStyles} href="https://www.linkedin.com/in/tanish-goel-42a85b167/">LinkedIn</a>, and <a style={InstaStyles} href="https://www.instagram.com/_tanishgoel_/">Instagram</a>. 
      I am always looking for new projects, collabs, and ideas so feel free to reach out. My email is goeltanish15[at]gmail[dot]com.</p>
      <p style={paragraphStyles}>I hope this website will become a one-stop shop for my ongoing projects, 
        failiures, opinions, and much more-- "a day in the life" of Tanish Goel.
      </p>
      <p style={paragraphStyles}>Books I am currently reading and will recommend:
        <ul>
          <li><a style={linkStyles} href="https://en.wikipedia.org/wiki/Zero_to_One">Zero to One</a> by Peter Thiel</li>
          <li><a style={linkStyles} href="https://en.wikipedia.org/wiki/Barbarians_at_the_Gate">Barbarians at the Gate</a> by Bryan Burrough and John Helyar</li>
          <li><a style={linkStyles} href="https://en.wikipedia.org/wiki/Dune_(novel)">Dune</a> by Frank Herbert</li>
        </ul>
      </p>
      <h2>
        Posts
        <br />
        —--
      </h2>

    <a style={linkStylesForBlog} href="https://continuous-bongo-489.notion.site/Personal-Websites-Reimagined-8bae83fe946042aa9f3eef2983e3f82a">
      <div style={blogStyles}>
        <div style={blogName}>
          <h2 style={heading}>Personal Websites— Reimagined</h2>
          <div class="details">
            <p style={content}>As I gear up for another year of college, my yearly ritual yearns to get started. 
            Redesigning my website has been a chore that I undertake every year, sometimes every couple of months...</p>
            <p style={date}>5 September 2021</p>
          </div>
        </div>
      </div>
    </a>

    <div style={footer}>
      <p style={{marginBottom: 2, paddingBottom: 0}}>“If everyone fought for their own convictions there would be no war.”</p>
      <p style={{fontWeight: 500, marginTop: 0, marginBottom: 0, paddingBottom: 0}}>-War and Peace</p>
    </div>
    </main>
  )
}

export default IndexPage
