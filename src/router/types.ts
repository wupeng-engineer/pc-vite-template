import { Component } from 'vue';
import { RouteRecordRaw } from 'vue-router';
import { Recordable, XOR } from '@/@types/global';

export type AppRouteMeta = {
  auth?: XOR<boolean, string>;
}

// @ts-ignore
export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
  meta?: AppRouteMeta;
  component?: Component | string;
  components?: Component;
  children?: AppRouteRecordRaw[];
  props?: Recordable;
  fullPath?: string;
}
