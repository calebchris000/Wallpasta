/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(main)` | `/(main)/` | `/(main)/(search)` | `/(main)/(search)/search` | `/(main)/(view)` | `/(main)/(view)/view` | `/(main)/(wallpapers)` | `/(main)/(wallpapers)/(view)` | `/(main)/(wallpapers)/(view)/view` | `/(main)/(wallpapers)/components/card` | `/(main)/(wallpapers)/components/skeleton` | `/(main)/(wallpapers)/view` | `/(main)/(wallpapers)/wallpapers` | `/(main)/components/card` | `/(main)/components/skeleton` | `/(main)/components/tab` | `/(main)/search` | `/(main)/view` | `/(main)/wallpapers` | `/(search)` | `/(search)/search` | `/(view)` | `/(view)/view` | `/(wallpapers)` | `/(wallpapers)/(view)` | `/(wallpapers)/(view)/view` | `/(wallpapers)/components/card` | `/(wallpapers)/components/skeleton` | `/(wallpapers)/view` | `/(wallpapers)/wallpapers` | `/_sitemap` | `/components/card` | `/components/navbar` | `/components/search` | `/components/skeleton` | `/components/tab` | `/core/store` | `/search` | `/view` | `/wallpapers`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
