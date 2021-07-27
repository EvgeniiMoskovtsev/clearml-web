/**
 * tasks
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2.13
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { TaskUrls } from '././taskUrls';


export interface TasksResetManyResponseSucceeded {
    /**
     * ID of the succeeded entity
     */
    id?: string;
    /**
     * Indicates whether the task was dequeued
     */
    dequeued?: boolean;
    /**
     * Number of tasks updated (0 or 1)
     */
    updated?: number;
    /**
     * Updated fields names and values
     */
    fields?: object;
    /**
     * Number of output models deleted by the reset
     */
    deleted_models?: number;
    /**
     * Number of deleted dataset versions
     */
    deleted_versions?: number;
    urls?: TaskUrls;
}