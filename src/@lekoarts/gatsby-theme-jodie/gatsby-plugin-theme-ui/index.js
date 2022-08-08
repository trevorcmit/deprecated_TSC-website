import { merge } from "theme-ui"
import { tailwind } from "@theme-ui/presets"
import prismPreset from "@theme-ui/prism/presets/github"

const contentStyles = {
  px: [3, 3, 4, 5, 6],
  py: [3, 3, 4, 5, 5],
  maxWidth: `6xl`,
  margin: `0 auto`,
}

const theme = merge(tailwind, {
  initialColorModeName: `light`,

  config: {
    useCustomProperties: true,
  },

  colors: {
        primary: tailwind.colors.purple[7],
        secondary: `#5f6c80`,
        toggleIcon: tailwind.colors.gray[8],
        heading: tailwind.colors.black,
        divide: tailwind.colors.gray[4],
        modes: {
            dark: {
                text: tailwind.colors.gray[4],
                primary: tailwind.colors.purple[5],
                secondary: `#7f8ea3`,
                toggleIcon: tailwind.colors.gray[4],
                background: `#1A202C`,
                heading: tailwind.colors.white,
                divide: tailwind.colors.gray[8],
                muted: tailwind.colors.gray[8],
            },
        },
    },

    sidebar: {
        normal: `320px`,
        wide: `375px`,
    },

    fonts: {
        body: `"Work Sans", -apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`,
    },

    content: {
        page: {
            ...contentStyles,
        },
        custom: {
            margin: 0,
            padding: 0,
        },
        project: {
            ...contentStyles,
        },
        imageList: {
            ...contentStyles,
            ".gatsby-image-wrapper:not(:last-child)": {
                marginBottom: 5,
            },
        },
    },

    text: {
        heading: {
            fontFamily: `heading`,
            fontWeight: `heading`,
            lineHeight: `heading`,
            color: `heading`,
        },
    },

    styles: {
        root: {
            color: `text`,
            backgroundColor: `background`,
        },
        a: {
            transition: `all 0.3s ease-in-out`,
            color: `black`,
            textDecoration: `none`,
            "&:hover, &:focus": {
                color: `primary`,
                textDecoration: `none`,
            },
        },
        p: {
            fontSize: 1,
            letterSpacing: `-0.003em`,
            lineHeight: `body`,
            "--baseline-multiplier": 0.179,
            "--x-height-multiplier": 0.35,
            img: {
                maxWidth: `100%`,
            },
            a: {
                color: `primary`,
                "&:hover, &:focus": {
                textDecoration: `underline`,
                },
            },
        },
        h1: {
            variant: `text.heading`,
            fontSize: [5, 5, 5, 5, 6],
            mt: 2,
        },
        h2: {
            variant: `text.heading`,
            fontSize: [4, 4, 4, 4, 5],
            mt: 2,
        },
        h3: {
            variant: `text.heading`,
            fontSize: [3, 3, 3, 3, 4],
            mt: 3,
        },
        h4: {
            variant: `text.heading`,
            fontSize: [2, 2, 2, 2, 3],
        },
        h5: {
            variant: `text.heading`,
            fontSize: [1, 1, 1, 1, 2],
        },
        h6: {
            variant: `text.heading`,
            fontSize: 1,
            mb: 2,
        },
        pre: {
            ...prismPreset,
            padding: 2,
            whiteSpace: `pre-wrap`,
            wordBreak: `keep-all`,
        },
    },
})

export default theme