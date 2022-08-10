/** @jsx jsx */
import { jsx, get, Flex, useColorMode } from "theme-ui"
import { Link } from "gatsby"
import Logo from "../icons/logo"
import useSiteMetadata from "../hooks/use-site-metadata"
import useJodieConfig from "../hooks/use-jodie-config"
import Navigation from "./navigation"
import ColorModeToggle from "./colormode-toggle"


type SidebarProps = { bg: string }


const Sidebar = ({ bg }: SidebarProps) => {
    const { siteTitle } = useSiteMetadata()
    const { basePath } = useJodieConfig()

    // Code for Setting Color Mode
    const [colorMode, setColorMode] = useColorMode()
    const isDark = colorMode === `dark`
    const toggleColorMode = (e: React.SyntheticEvent) => {
        e.preventDefault()
        setColorMode(isDark ? `light` : `dark`)
    }

    return (
        <header 
            sx={{
                p: [3, 3, 4],
                width: (t) => [`100%`, `100%`, `100%`, get(t, `sidebar.normal`), get(t, `sidebar.wide`)],
                backgroundColor: `background`,
                position: [`relative`, `relative`, `relative`, `fixed`],
                height: `100%`,
                display: `flex`,
                flexDirection: [`row`, `row`, `row`, `column`],
                alignItems: [`center`, `center`, `center`, `flex-start`],
                justifyContent: [`space-between`, `space-between`, `space-between`, `flex-start`],
                variant: `sidebar`,
                svg: {
                    fill: `background`
                },
                path: {
                    fill: `text`,
                }
            }}
            data-testid="sidebar"
        >
            <Link to={basePath} aria-label={`${siteTitle}, Back to Home`} sx={{ width: [`3rem`, `4rem`, `4.5rem`, `5rem`] }}>
                <Logo/>
            </Link>
            <div sx={{ py: 4, display: [`none`, `none`, `none`, `block`] }} />
            <Navigation bg={ `background` } />
            <div sx={{ py:4 }}>
                <ColorModeToggle isDark={isDark} toggle={toggleColorMode} />
            </div>
        </header>
    )
}

export default Sidebar