import { AuthUser } from "./AuthUserInterface";
import { DbConnection } from "./DbConnectionInterface";
import { DataLoaders } from "./DataLoadersInterface";

export interface ResolverContext {
  db?: DbConnection;
  authorization?: string;
  authUser?: AuthUser;
  dataloaders?: DataLoaders;
}