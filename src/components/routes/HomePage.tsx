import * as React from "react";
import { defineMessages, FormattedMessage } from "react-intl";
import PageLayout from "../common/PageLayout";
import TodoListContainer from "../todos/TodoListContainer";

const idPrefix = "HomePage";
const messages = defineMessages({
    title: {
        defaultMessage: "Home page",
        id: `${idPrefix}.Title`,
    },
});

export default () => (
    <PageLayout pageTitle={<FormattedMessage {...messages.title} />} children={<TodoListContainer />} />
);
