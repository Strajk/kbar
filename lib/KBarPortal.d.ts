import * as React from "react";
interface Props {
    children: React.ReactNode;
    /**
     * @see Docs https://reach.tech/portal#portal-containerRef
     */
    containerRef?: React.RefObject<Node>;
}
export declare function KBarPortal(props: Props): JSX.Element | null;
export {};
