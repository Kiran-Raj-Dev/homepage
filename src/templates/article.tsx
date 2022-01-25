import React from "react";
import Layout from "../components/layout";
import * as styles from "../styles/article.module.scss";
import * as markdown_styles from "../styles/markdown.module.scss";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { ArticlePage } from "./__generated__/article-page";

interface ProjectProps {
    data: ArticlePage;
}
const Project: React.FC<ProjectProps> = (props) => {
    const body = props.data.mdx?.body as string;
    const title = props.data.mdx?.frontmatter?.title as string;
    const description = props.data.mdx?.frontmatter?.description as string;
    const date = props.data.mdx?.frontmatter?.date as string;
    return (
        <Layout heading={title}>
            <div className={markdown_styles.markdown_body}>
                <p className={styles.date}>{date}</p>
                <MDXRenderer className={styles.article}>{body}</MDXRenderer>
            </div>
        </Layout>
    );
}
export default Project;

export const query = graphql`
query ArticlePage($slug: String) {
  mdx(frontmatter: {slug: {eq: $slug}, type: {eq: "article"}}) {
    body
    frontmatter {
      date(formatString: "MMMM YYYY")
      title
      description
    }
  }
}
`;
