/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as auth from "../auth.js";
import type * as feature_auth_getAuthId from "../feature/auth/getAuthId.js";
import type * as feature_auth_guardAuthId from "../feature/auth/guardAuthId.js";
import type * as feature_convex_convexTypes from "../feature/convex/convexTypes.js";
import type * as feature_list_guardAuthList from "../feature/list/guardAuthList.js";
import type * as feature_list_guardUserList from "../feature/list/guardUserList.js";
import type * as getAuthLists from "../getAuthLists.js";
import type * as getList from "../getList.js";
import type * as http from "../http.js";
import type * as lists from "../lists.js";
import type * as normalizeListId from "../normalizeListId.js";
import type * as users from "../users.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  auth: typeof auth;
  "feature/auth/getAuthId": typeof feature_auth_getAuthId;
  "feature/auth/guardAuthId": typeof feature_auth_guardAuthId;
  "feature/convex/convexTypes": typeof feature_convex_convexTypes;
  "feature/list/guardAuthList": typeof feature_list_guardAuthList;
  "feature/list/guardUserList": typeof feature_list_guardUserList;
  getAuthLists: typeof getAuthLists;
  getList: typeof getList;
  http: typeof http;
  lists: typeof lists;
  normalizeListId: typeof normalizeListId;
  users: typeof users;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
