/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface StoatConfigSchemaRendered {
  version: number;
  enabled?: boolean;
  comment_template_file?: string;
  updated_at: string;
  tasks?: {
    [k: string]:
      | {
          metadata?: {
            [k: string]: unknown;
          };
          static_hosting: {
            path: string;
            link: string;
            sha: string;
            status: string;
            [k: string]: unknown;
          };
          [k: string]: unknown;
        }
      | {
          metadata?: {
            [k: string]: unknown;
          };
          json: {
            path: string;
            value: {
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          [k: string]: unknown;
        };
  };
  views?: {
    plugins?: {
      static_hosting?: {
        github: {
          table: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
