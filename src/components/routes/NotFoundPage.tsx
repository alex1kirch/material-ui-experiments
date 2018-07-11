import * as React from "react";
import { defineMessages, FormattedMessage } from "react-intl";
import PageLayout from "../common/PageLayout";

const idPrefix = "NotFoundPage";
const messages = defineMessages({
    title: {
        defaultMessage: "Page not found",
        id: `${idPrefix}.Title`,
    },
});

export default () => <PageLayout pageTitle={<FormattedMessage {...messages.title} />} />;
