import React, {useState, CSSProperties} from 'react'
import MoonLoader from "react-spinners/MoonLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Loading = () => {
  const [color, setColor] = useState("#36d7b7");
  const [loading, setLoading] = useState(true)
  return (
    <div className="sweet-loading my-[10%] mx-auto">
            <MoonLoader
              color={color}
              speedMultiplier={0.5}
              loading={loading}
              cssOverride={override}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
  )
}

export default Loading