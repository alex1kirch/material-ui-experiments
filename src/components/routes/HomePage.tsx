import * as React from "react";
import { defineMessages, FormattedMessage } from "react-intl";
import ExchangeRates from "../common/ExchangeRates";
import PageLayout from "../common/PageLayout";

const messages = defineMessages({
    title: {
        defaultMessage: "Home page",
        id: "HomePage.title",
    },
});

export default () => (
    <PageLayout pageTitle={<FormattedMessage {...messages.title} />}>
        <ExchangeRates />
    </PageLayout>
);
