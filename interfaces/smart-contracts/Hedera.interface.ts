import NodeClient from '@hashgraph/sdk/lib/client/NodeClient';
export interface IHederaClient {
  error: boolean;
  client?: NodeClient;
}
