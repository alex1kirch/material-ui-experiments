import * as React from "react";
import { defineMessages, FormattedMessage } from "react-intl";
import PageLayout from "../common/PageLayout";

const messages = defineMessages({
    title: {
        defaultMessage: "Page not found",
        id: "NotFoundPage.title",
    },
});

export default () => <PageLayout pageTitle={<FormattedMessage {...messages.title} />} />;
