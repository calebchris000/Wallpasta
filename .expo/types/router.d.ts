/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(main)` | `/(main)/` | `/(main)/(search)` | `/(main)/(search)/` | `/(main)/(wallpapers)` | `/(main)/(wallpapers)/` | `/(main)/(wallpapers)/components/card` | `/(main)/(wallpapers)/components/skeleton` | `/(main)/components/card` | `/(main)/components/skeleton` | `/(search)` | `/(search)/` | `/(wallpapers)` | `/(wallpapers)/` | `/(wallpapers)/components/card` | `/(wallpapers)/components/skeleton` | `/_sitemap` | `/components/card` | `/components/navbar` | `/components/search` | `/components/skeleton`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
