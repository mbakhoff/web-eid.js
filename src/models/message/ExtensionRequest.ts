/*
 * Copyright (c) Estonian Information System Authority
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import Action from "../Action";
import ActionOptions from "../ActionOptions";

export interface ExtensionStatusRequest {
  action: Action.STATUS;

  /**
   * A version number string in SemVer format
   *
   * @see https://semver.org/
   */
  libraryVersion: string;
}

export interface ExtensionAuthenticateRequest {
  action: Action.AUTHENTICATE

  /**
   * A version number string in SemVer format
   *
   * @see https://semver.org/
   */
  libraryVersion: string;

  /**
   * A base64-encoded cryptographic nonce, generated by the server, with at least 256 bits of entropy
   */
  challengeNonce: string;

  options?: ActionOptions;
}

export interface ExtensionGetSigningCertificateRequest {
  action: Action.GET_SIGNING_CERTIFICATE;

  /**
   * A version number string in SemVer format
   *
   * @see https://semver.org/
   */
  libraryVersion: string;

  options?: ActionOptions;
}

export interface ExtensionSignRequest {
  action: Action.SIGN;

  /**
   * A version number string in SemVer format
   *
   * @see https://semver.org/
   */
  libraryVersion: string;

  /**
   * The Base64-encoded DER-encoded signing certificate of the eID user
   */
  certificate: string;

  /**
   * The Base64-encoded document hash
   */
  hash: string[];

  /**
   * The hash algorithm
   *
   * Allowed hash algorithm values are SHA-224, SHA-256, SHA-384, SHA-512, SHA3-224, SHA3-256, SHA3-384, SHA3-512,
   * and the hash algorithm has to be supported by the card (see the hash-algo member of supported-signature-algos array elements
   * in the get-signing-certificate command output).
   *
   * The document hash length has to match the hash algorithm output length
   * and the hash algorithm has to be supported by the electronic ID signing implementation.
   */
  hashFunction: string;

  options?: ActionOptions;
}

export type ExtensionRequest
  = ExtensionStatusRequest
  | ExtensionAuthenticateRequest
  | ExtensionGetSigningCertificateRequest
  | ExtensionSignRequest;
