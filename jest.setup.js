import { TextEncoder, TextDecoder } from "text-encoding";

// Polyfill TextEncoder and TextDecoder
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;