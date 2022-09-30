import React, { useEffect, useState } from "react"

const List = (props: any) => {

    useEffect(() => {
        console.log('number of items in list compoennt', numItems);
    })

    const { numItems, itemHeight, renderItem, windowHeight } = props;
    const [scrollTop, setScrollTop] = useState(0);

    // const innerHeight = (numItems * itemHeight);
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
                    // height: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: 'absolute'
                }
            })
        );
    }

    const onScroll = (e: any) => {setScrollTop(e.currentTarget.scrollTop); console.log('stuff', e.currentTarget.scrollTop)};

    return (
        <div className="page">
            <div className="scroll" style={{ overflowY: "scroll" }} onScroll={onScroll}>
                <div
                    className="inner"
                    style={{ position: "relative", height: `300px`}}
                >
                   {items}
                </div>
            </div>
        </div>
    )
}

export default List