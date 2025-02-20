import type { Headers } from "~/headers"

export type Response = {
  status: number
  headers: Headers
  bytes: Uint8Array
}