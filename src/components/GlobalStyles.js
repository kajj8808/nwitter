import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    *{
        box-sizing:border-box;
    }
    a{
        text-decoration:none;
    }
    input{
        all:unset;
        box-sizing : border-box;
        appearance : none;
    }
    body{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background-color: #000000;
    }
`;

export default globalStyles;