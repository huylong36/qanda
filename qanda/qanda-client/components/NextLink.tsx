import { memo, PropsWithChildren } from "react";
import Link, { LinkProps } from "next/link";

const NextLink = memo((props: PropsWithChildren<LinkProps>) => {
    const { children, ...linkProps } = props;
    return <Link {...linkProps} passHref>
        <a style={{ textDecoration: "none", color: "inherit" }}>
            {children}
        </a>
    </Link>
});

export default NextLink;