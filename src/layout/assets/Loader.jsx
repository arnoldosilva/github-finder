import React,{ useState } from 'react'
import { css } from "@emotion/react";
import SpinnerLoader from "react-spinners/FadeLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;


export default function Loader() {
  
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  return (
    <div className="MoonLoader">
      <SpinnerLoader color={color} loading={loading} css={override} size={150} />
    </div>
  
  )
}
