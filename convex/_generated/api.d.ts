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
import type * as feature_convex_convexTypes from "../feature/convex/convexTypes.js";
import type * as feature_list_gaurdCurrentUserId from "../feature/list/gaurdCurrentUserId.js";
import type * as feature_list_guardCurrentUserId from "../feature/list/guardCurrentUserId.js";
import type * as feature_list_guardCurrentUserList from "../feature/list/guardCurrentUserList.js";
import type * as feature_list_guardUserList from "../feature/list/guardUserList.js";
import type * as http from "../http.js";
import type * as lists from "../lists.js";
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
  "feature/convex/convexTypes": typeof feature_convex_convexTypes;
  "feature/list/gaurdCurrentUserId": typeof feature_list_gaurdCurrentUserId;
  "feature/list/guardCurrentUserId": typeof feature_list_guardCurrentUserId;
  "feature/list/guardCurrentUserList": typeof feature_list_guardCurrentUserList;
  "feature/list/guardUserList": typeof feature_list_guardUserList;
  http: typeof http;
  lists: typeof lists;
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
