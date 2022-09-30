import React, { useState } from "react"
import './List.css'

const List = (props: any) => {

    const { numItems, itemHeight, renderItem, windowHeight } = props;
    const [scrollTop, setScrollTop] = useState(0);

    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = Math.min(
        numItems - 1, // don't render past the end of the list
        Math.floor((scrollTop + windowHeight) / itemHeight)
    );

    const items = [];
    for (let i = startIndex; i <= endIndex; i++) {
        items.push(
            renderItem({
                index: i,
                style: {
                    top: `${i * itemHeight}px`,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: 'absolute'
                }
            })
        );
    }

    const onScroll = (e: any) => {setScrollTop(e.currentTarget.scrollTop)};

    return (
        <div className="page">
            <div className="scroll" style={{ overflowY: "scroll" }} onScroll={onScroll}>
                <div
                    className="inner"
                    style={{ position: "relative", height: `300px`}}
                >
                   {items as any}
                </div>
            </div>
        </div>
    )
}

export default List