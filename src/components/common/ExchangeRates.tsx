import gql from "graphql-tag";
import * as React from "react";
import { Query } from "react-apollo";
import { IExchangeRatesQuery } from "../../types";

const QUERY = gql`
    query IExchangeRates {
        rates(currency: "USD") {
            currency
            rate
        }
    }
`;

class ExchangeRatesQuery extends Query<IExchangeRatesQuery> {}

const ExchangeRates = () => (
    <ExchangeRatesQuery query={QUERY}>
        {({ loading, error, data }) => {
            if (loading) {
                return <p>Loading...</p>;
            }
            if (error) {
                return <p>Error :(</p>;
            }

            return data!.rates!.map(args => (
                <div key={args!.currency!}>
                    <p>{`${args!.currency}: ${args!.rate}`}</p>
                </div>
            ));
        }}
    </ExchangeRatesQuery>
);

export default ExchangeRates;
