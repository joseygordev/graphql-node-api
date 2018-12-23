import { AuthUser } from "./AuthUserInterface";
import { DbConnection } from "./DbConnectionInterface";

export interface ResolverContext {
  db?: DbConnection;
  authorization?: string;
  user?: AuthUser;
}