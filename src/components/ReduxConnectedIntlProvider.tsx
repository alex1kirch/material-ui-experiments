import { IntlProvider } from "react-intl";
import { connect } from "react-redux";
import { localeSelector } from "../modules/locale";
import { StoreState } from "../types";

const mapStateToProps = (state: StoreState) => {
    const localeData = localeSelector(state);
    return {
        key: localeData.locale,
        ...localeData,
    };
};

export default connect(mapStateToProps)(IntlProvider);
