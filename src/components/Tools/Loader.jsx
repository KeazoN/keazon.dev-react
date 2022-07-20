import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={476}
    height={124}
    viewBox="0 0 476 124"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="88" rx="3" ry="3" width="178" height="6" /> 
    <circle cx="413" cy="53" r="51" /> 
    <rect x="0" y="73" rx="3" ry="3" width="250" height="6" /> 
    <rect x="0" y="56" rx="3" ry="3" width="270" height="6" /> 
    <rect x="-2" y="30" rx="3" ry="3" width="120" height="8" /> 
    <rect x="0" y="8" rx="3" ry="3" width="150" height="8" />
  </ContentLoader>
)

export default MyLoader
