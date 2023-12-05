/**
 * @typedef {Object} Item
 * @property {string} _id
 * @property {string} name
 * @property {number} score
 */

/** @typedef {Omit<Item, "_id">} ItemPayload */

export const BACKEND_URL = "http://34.234.78.227:3222";