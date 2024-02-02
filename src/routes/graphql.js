// Import necessary libraries
import { gql } from 'svelte-apollo';

// Define your GraphQL query
export const GET_CHART_DATA = gql`
  query GetChartData {
    chartData {
      name
      value
    }
  }
`;
