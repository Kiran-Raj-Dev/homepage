import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import { SiteInfo } from "./__generated__/site-info";
import { Helmet } from "react-helmet";

import Heading from "src/components/heading";
import "src/styles/global.scss";
import * as styles from "src/styles/layout.module.scss";

interface LayoutProps {
    heading?: string;
    sub_heading?: string;
    icon?: string;
}
const Layout: React.FC<LayoutProps> = (props) => {
    const data: SiteInfo = useStaticQuery(graphql`
query SiteInfo {
  site {
    siteMetadata {
      linkedin {
        name
        link
      }
      email {
        name
        link
      }
      discord {
        name
        link
      }
      github {
        name
        link
      }
      address
    }
  }
}
    `);
    const discord = data.site?.siteMetadata?.discord?.link as string;
    const email = data.site?.siteMetadata?.email?.link as string;
    const github = data.site?.siteMetadata?.github?.link as string;
    const linkedin = data.site?.siteMetadata?.linkedin?.link as string;

    const address = data.site?.siteMetadata?.address as string;
    const title = props.heading ? `Christopher Besch—${props.heading}` : "Christopher Besch—Software Developer";

    return (
        <div>
            <Helmet htmlAttributes={{ lang: "en" }}>
                <meta charSet="utf-8" />
                <meta property="og:description" content={title} />
                <meta name="description" content={title} />
                {/* TODO: add social preview */}
                {/* <meta property="og:image" image=""/> */}
                <title>{title}</title>
                <link rel="canonical" href={address} />
                <link rel="shortcut icon" href="/favicon.png" />
            </Helmet>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <h1>Christopher Besch</h1>
                    <h2>Software Developer</h2>
                </div>
                <div>
                    <input type="checkbox" id="nav_toggle" />
                    <label htmlFor="nav_toggle" className={styles.hamburger}>&#9776;</label>
                    <ul className={styles.nav_menu}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </nav >

            <div className={styles.content}>
                {props.heading ? <Heading heading={props.heading} icon={props.icon} sub_heading={props.sub_heading} /> : undefined}
                {props.children}
            </div>

            <footer className={styles.footer}>
                <ul>
                    <li className={styles.link}><a href={github}>GitHub</a></li>
                    <li className={styles.link}><a href={linkedin}>LinkedIn</a></li>
                    <li className={styles.link}><a href={discord}>Discord</a></li>
                    <li className={styles.link}><a href={email}>Mail</a></li>
                    <li><p>&#169; 2021</p></li>
                    <li className={styles.emoji}><p>🔗</p></li>
                </ul>
            </footer>
        </div>
    );
}
export default Layout;
