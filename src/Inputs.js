import React from "react";
import { Input} from "antd";


export const inputField = (placeholder, onChange ) => {
    return <Input placeholder={placeholder} onChange={(evt) => onChange()} />;
};

