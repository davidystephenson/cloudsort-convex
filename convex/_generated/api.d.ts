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
import type * as CustomPassword from "../CustomPassword.js";
import type * as _import from "../_import.js";
import type * as auth from "../auth.js";
import type * as choose from "../choose.js";
import type * as createList from "../createList.js";
import type * as deleteList from "../deleteList.js";
import type * as follow from "../follow.js";
import type * as getUserByName from "../getUserByName.js";
import type * as home from "../home.js";
import type * as http from "../http.js";
import type * as list from "../list.js";
import type * as publishList from "../publishList.js";
import type * as renameAuth from "../renameAuth.js";
import type * as renameList from "../renameList.js";
import type * as resetAll from "../resetAll.js";
import type * as rewindList from "../rewindList.js";
import type * as unfollow from "../unfollow.js";
import type * as unpublishList from "../unpublishList.js";
import type * as user from "../user.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  CustomPassword: typeof CustomPassword;
  _import: typeof _import;
  auth: typeof auth;
  choose: typeof choose;
  createList: typeof createList;
  deleteList: typeof deleteList;
  follow: typeof follow;
  getUserByName: typeof getUserByName;
  home: typeof home;
  http: typeof http;
  list: typeof list;
  publishList: typeof publishList;
  renameAuth: typeof renameAuth;
  renameList: typeof renameList;
  resetAll: typeof resetAll;
  rewindList: typeof rewindList;
  unfollow: typeof unfollow;
  unpublishList: typeof unpublishList;
  user: typeof user;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
