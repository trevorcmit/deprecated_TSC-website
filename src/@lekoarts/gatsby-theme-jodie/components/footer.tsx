/** @jsx jsx */
import { jsx, Link, useThemeUI, get } from "theme-ui"
import useSiteMetadata from "../hooks/use-site-metadata"

const Footer = ({ bg }: { bg: string }) => {
  const { siteTitle } = useSiteMetadata()
  const {
    theme: { rawColors },
  } = useThemeUI()

  return (
    <footer
      sx={{
        position: [`relative`, `relative`, `relative`, `fixed`],
        width: (t) => [`100%`, `100%`, `100%`, get(t, `sidebar.normal`), get(t, `sidebar.wide`)],
        bottom: 0,
        color: `text`,
        fontSize: 0,
        p: [3, 3, 4],
        backgroundColor: `background`,
        a: {
          color: `text`,
          "&:hover,&:focus": {
            color: `primary`
          },
        },
        variant: `footer`,
      }}
    >
      <div>
        &copy; {new Date().getFullYear()} by {siteTitle}.
      </div>
      <div>
        <Link
          aria-label="Link to the theme's GitHub repository"
          href="https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-jodie"
        >
          Theme
        </Link>
        {` `}
        by
        {` `}
        <Link
          aria-label="Link to the theme author's website"
          href="https://www.lekoarts.de?utm_source=jodie&utm_medium=Theme"
        >
          LekoArts
        </Link>
      </div>
    </footer>
  )
}

export default Footer
