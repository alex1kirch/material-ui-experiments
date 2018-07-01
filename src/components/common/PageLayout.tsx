import Typography from "@material-ui/core/Typography";
import * as React from "react";

interface IProps {
    pageTitle: React.ReactNode;
    children?: React.ReactNode;
}
export default ({ pageTitle, children }: IProps) => (
    <div>
        <Typography variant={"headline"} children={pageTitle} />
        {children}
    </div>
);
