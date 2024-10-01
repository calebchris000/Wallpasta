/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(favourite)` | `/(favourite)/components/card` | `/(favourite)/components/skeleton` | `/(favourite)/favourite` | `/(main)` | `/(main)/` | `/(main)/(favourite)` | `/(main)/(favourite)/components/card` | `/(main)/(favourite)/components/skeleton` | `/(main)/(favourite)/favourite` | `/(main)/(search)` | `/(main)/(search)/search` | `/(main)/(view)` | `/(main)/(view)/view` | `/(main)/(wallpapers)` | `/(main)/(wallpapers)/(view)` | `/(main)/(wallpapers)/(view)/view` | `/(main)/(wallpapers)/components/card` | `/(main)/(wallpapers)/components/skeleton` | `/(main)/(wallpapers)/view` | `/(main)/(wallpapers)/wallpapers` | `/(main)/components/card` | `/(main)/components/skeleton` | `/(main)/components/tab` | `/(main)/favourite` | `/(main)/search` | `/(main)/view` | `/(main)/wallpapers` | `/(search)` | `/(search)/search` | `/(view)` | `/(view)/view` | `/(wallpapers)` | `/(wallpapers)/(view)` | `/(wallpapers)/(view)/view` | `/(wallpapers)/components/card` | `/(wallpapers)/components/skeleton` | `/(wallpapers)/view` | `/(wallpapers)/wallpapers` | `/_sitemap` | `/components/card` | `/components/navbar` | `/components/search` | `/components/skeleton` | `/components/tab` | `/core/core` | `/core/store` | `/favourite` | `/search` | `/view` | `/wallpapers`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
