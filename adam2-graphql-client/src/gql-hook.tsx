import React from 'react';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import gql from 'graphql-tag';

const endPointUrl = 'http://localhost:9000/graphql';
const client = new ApolloClient({
	link: new HttpLink({ uri: endPointUrl }),
	cache: new InMemoryCache()
});

const queries: any = {
	a: `query {
      brands {
        id
        name
      }}`
};

function useGql() {
	async function doQuery(qr: string) {
		const query = gql(queries[qr]);
        const { data } = await client.query({ query });
		return { data };
	}
	return { doQuery };
}

export { useGql };
