import * as React from "react";
import Link from "./Link";

export interface ILinkWithCheckboxProps {
    isChecked: boolean;
    onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
}
export default class LinkWithCheckbox extends React.Component<ILinkWithCheckboxProps> {
    public render() {
        const { isChecked, onChange } = this.props;

        return (
            <Link>
                <input data-test="input" type="checkbox" checked={isChecked} onChange={onChange} />
            </Link>
        );
    }
}
