// var string: string = @bytes::to_utf8_string(bytes);
export function toUtf8String (bytes: Uint8Array): string {
  return new TextDecoder()
    .decode(bytes);
}