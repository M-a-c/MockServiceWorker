// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
/* eslint-disable */
/* tslint:disable */

import worker from '../mocks/browser';
worker.worker.start();

export const environment = {
  production: false
};
