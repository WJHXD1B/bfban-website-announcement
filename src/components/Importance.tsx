import React from 'react';

import TextColor from "@site/src/components/Color";

export default function Importance({children, color}) {
    return (
        <b><TextColor backgroundColor={color || 'auto'} color={color || '#dc2d1e'}>{children}</TextColor></b>
    );
}
