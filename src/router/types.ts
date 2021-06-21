import { Component } from 'vue';
import { RouteRecordRaw } from 'vue-router';
import { Recordable } from '@/types/global';

export type AppRouteMeta = {
  auth?: string;
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
