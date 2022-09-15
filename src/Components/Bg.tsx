import React, { FC } from "react"

export const Bg: FC<{style: React.CSSProperties}> = ({style}) => {

    const styles: React.CSSProperties = {
        ...style,
        height: "100vh",
        width: "100vw",
        margin: 0,
        padding: 0,
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1
    }


    return <div style={styles}></div>
}