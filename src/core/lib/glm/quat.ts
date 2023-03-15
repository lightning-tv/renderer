import {
  ANGLE_ORDER,
  EPSILON,
  getMatrixArrayType,
  RANDOM,
  type ConversionOrder,
  type Float32ArrayLen4,
  type NumberArrayLen4,
} from './common.js';
import { type Mat3 } from './mat3.js';
import { type Vec3 } from './vec3.js';
import { type Quat2 } from './quat2.js';

import * as mat3 from './mat3.js';
import * as vec3 from './vec3.js';
import * as vec4 from './vec4.js';

export type Quat = Float32ArrayLen4 | NumberArrayLen4;

/**
 * Quaternion in the format XYZW
 * @module quat
 */

/**
 * Creates a new identity quat
 *
 * @returns {quat} a new quaternion
 */

export function create(): Quat {
  var out = getMatrixArrayType(4) as Quat;

  if (!(out instanceof Float32Array)) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }

  out[3] = 1;
  return out;
}
/**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */

export function identity(out: Quat): Quat {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}
/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {Vec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/

export function setAxisAngle(out: Quat, axis: Vec3, rad: number): Quat {
  rad = rad * 0.5;
  var s = Math.sin(rad);
  out[0] = s * axis[0];
  out[1] = s * axis[1];
  out[2] = s * axis[2];
  out[3] = Math.cos(rad);
  return out;
}
/**
 * Gets the rotation axis and angle for a given
 *  quaternion. If a quaternion is created with
 *  setAxisAngle, this method will return the same
 *  values as providied in the original parameter list
 *  OR functionally equivalent values.
 * Example: The quaternion formed by axis [0, 0, 1] and
 *  angle -90 is the same as the quaternion formed by
 *  [0, 0, 1] and 270. This method favors the latter.
 * @param  {Vec3} out_axis  Vector receiving the axis of rotation
 * @param  {Quat} q     Quaternion to be decomposed
 * @return {Number}     Angle, in radians, of the rotation
 */

export function getAxisAngle(out_axis: Vec3, q: Quat): number {
  var rad = Math.acos(q[3]) * 2.0;
  var s = Math.sin(rad / 2.0);

  if (s > EPSILON) {
    out_axis[0] = q[0] / s;
    out_axis[1] = q[1] / s;
    out_axis[2] = q[2] / s;
  } else {
    // If s is zero, return any axis (no rotation - axis does not matter)
    out_axis[0] = 1;
    out_axis[1] = 0;
    out_axis[2] = 0;
  }

  return rad;
}
/**
 * Gets the angular distance between two unit quaternions
 *
 * @param  {Quat} a     Origin unit quaternion
 * @param  {Quat} b     Destination unit quaternion
 * @return {Number}     Angle, in radians, between the two quaternions
 */

export function getAngle(a: Quat, b: Quat): number {
  var dotproduct = dot(a, b);
  return Math.acos(2 * dotproduct * dotproduct - 1);
}
/**
 * Multiplies two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {Quat} a the first operand
 * @param {Quat} b the second operand
 * @returns {quat} out
 */

export function multiply(out: Quat, a: Quat, b: Quat): Quat {
  var ax = a[0],
    ay = a[1],
    az = a[2],
    aw = a[3];
  var bx = b[0],
    by = b[1],
    bz = b[2],
    bw = b[3];
  out[0] = ax * bw + aw * bx + ay * bz - az * by;
  out[1] = ay * bw + aw * by + az * bx - ax * bz;
  out[2] = az * bw + aw * bz + ax * by - ay * bx;
  out[3] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {Quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */

export function rotateX(
  out: Quat | Quat2,
  a: Quat | Quat2,
  rad: number,
): Quat | Quat2 {
  rad *= 0.5;
  var ax = a[0],
    ay = a[1],
    az = a[2],
    aw = a[3];
  var bx = Math.sin(rad),
    bw = Math.cos(rad);
  out[0] = ax * bw + aw * bx;
  out[1] = ay * bw + az * bx;
  out[2] = az * bw - ay * bx;
  out[3] = aw * bw - ax * bx;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {Quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */

export function rotateY(
  out: Quat | Quat2,
  a: Quat | Quat2,
  rad: number,
): Quat | Quat2 {
  rad *= 0.5;
  var ax = a[0],
    ay = a[1],
    az = a[2],
    aw = a[3];
  var by = Math.sin(rad),
    bw = Math.cos(rad);
  out[0] = ax * bw - az * by;
  out[1] = ay * bw + aw * by;
  out[2] = az * bw + ax * by;
  out[3] = aw * bw - ay * by;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {Quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */

export function rotateZ(
  out: Quat | Quat2,
  a: Quat | Quat2,
  rad: number,
): Quat | Quat2 {
  rad *= 0.5;
  var ax = a[0],
    ay = a[1],
    az = a[2],
    aw = a[3];
  var bz = Math.sin(rad),
    bw = Math.cos(rad);
  out[0] = ax * bw + ay * bz;
  out[1] = ay * bw - ax * bz;
  out[2] = az * bw + aw * bz;
  out[3] = aw * bw - az * bz;
  return out;
}
/**
 * Calculates the W component of a quat from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @param {quat} out the receiving quaternion
 * @param {Quat} a quat to calculate W component of
 * @returns {quat} out
 */

export function calculateW(out: Quat, a: Quat): Quat {
  var x = a[0],
    y = a[1],
    z = a[2];
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
  return out;
}
/**
 * Calculate the exponential of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {Quat} a quat to calculate the exponential of
 * @returns {quat} out
 */

export function exp(out: Quat, a: Quat): Quat {
  var x = a[0],
    y = a[1],
    z = a[2],
    w = a[3];
  var r = Math.sqrt(x * x + y * y + z * z);
  var et = Math.exp(w);
  var s = r > 0 ? (et * Math.sin(r)) / r : 0;
  out[0] = x * s;
  out[1] = y * s;
  out[2] = z * s;
  out[3] = et * Math.cos(r);
  return out;
}
/**
 * Calculate the natural logarithm of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {Quat} a quat to calculate the exponential of
 * @returns {quat} out
 */

export function ln(out: Quat, a: Quat): Quat {
  var x = a[0],
    y = a[1],
    z = a[2],
    w = a[3];
  var r = Math.sqrt(x * x + y * y + z * z);
  var t = r > 0 ? Math.atan2(r, w) / r : 0;
  out[0] = x * t;
  out[1] = y * t;
  out[2] = z * t;
  out[3] = 0.5 * Math.log(x * x + y * y + z * z + w * w);
  return out;
}
/**
 * Calculate the scalar power of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {Quat} a quat to calculate the exponential of
 * @param {Number} b amount to scale the quaternion by
 * @returns {quat} out
 */

export function pow(out: Quat, a: Quat, b: number): Quat {
  ln(out, a);
  scale(out, out, b);
  exp(out, out);
  return out;
}
/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {Quat} a the first operand
 * @param {Quat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 */

export function slerp(out: Quat, a: Quat, b: Quat, t: number): Quat {
  // benchmarks:
  //    http://jsperf.com/quaternion-slerp-implementations
  var ax = a[0],
    ay = a[1],
    az = a[2],
    aw = a[3];
  var bx = b[0],
    by = b[1],
    bz = b[2],
    bw = b[3];
  var omega, cosom, sinom, scale0, scale1; // calc cosine

  cosom = ax * bx + ay * by + az * bz + aw * bw; // adjust signs (if necessary)

  if (cosom < 0.0) {
    cosom = -cosom;
    bx = -bx;
    by = -by;
    bz = -bz;
    bw = -bw;
  } // calculate coefficients

  if (1.0 - cosom > EPSILON) {
    // standard case (slerp)
    omega = Math.acos(cosom);
    sinom = Math.sin(omega);
    scale0 = Math.sin((1.0 - t) * omega) / sinom;
    scale1 = Math.sin(t * omega) / sinom;
  } else {
    // "from" and "to" quaternions are very close
    //  ... so we can do a linear interpolation
    scale0 = 1.0 - t;
    scale1 = t;
  } // calculate final values

  out[0] = scale0 * ax + scale1 * bx;
  out[1] = scale0 * ay + scale1 * by;
  out[2] = scale0 * az + scale1 * bz;
  out[3] = scale0 * aw + scale1 * bw;
  return out;
}
/**
 * Generates a random unit quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */

export function random(out: Quat): Quat {
  // Implementation of http://planning.cs.uiuc.edu/node198.html
  // TODO: Calling random 3 times is probably not the fastest solution
  var u1 = RANDOM();
  var u2 = RANDOM();
  var u3 = RANDOM();
  var sqrt1MinusU1 = Math.sqrt(1 - u1);
  var sqrtU1 = Math.sqrt(u1);
  out[0] = sqrt1MinusU1 * Math.sin(2.0 * Math.PI * u2);
  out[1] = sqrt1MinusU1 * Math.cos(2.0 * Math.PI * u2);
  out[2] = sqrtU1 * Math.sin(2.0 * Math.PI * u3);
  out[3] = sqrtU1 * Math.cos(2.0 * Math.PI * u3);
  return out;
}
/**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {Quat} a quat to calculate inverse of
 * @returns {quat} out
 */

export function invert(out: Quat, a: Quat): Quat {
  var a0 = a[0],
    a1 = a[1],
    a2 = a[2],
    a3 = a[3];
  var dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
  var invDot = dot ? 1.0 / dot : 0; // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

  out[0] = -a0 * invDot;
  out[1] = -a1 * invDot;
  out[2] = -a2 * invDot;
  out[3] = a3 * invDot;
  return out;
}
/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {Quat} a quat to calculate conjugate of
 * @returns {quat} out
 */

export function conjugate(out: Quat, a: Quat): Quat {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  return out;
}
/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {Mat3} m rotation matrix
 * @returns {quat} out
 * @function
 */

export function fromMat3(out: Quat, m: Mat3) {
  // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
  // article "Quaternion Calculus and Fast Animation".
  var fTrace = m[0] + m[4] + m[8];
  var fRoot: number;

  if (fTrace > 0.0) {
    // |w| > 1/2, may as well choose w > 1/2
    fRoot = Math.sqrt(fTrace + 1.0); // 2w

    out[3] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot; // 1/(4w)

    out[0] = (m[5] - m[7]) * fRoot;
    out[1] = (m[6] - m[2]) * fRoot;
    out[2] = (m[1] - m[3]) * fRoot;
  } else {
    // |w| <= 1/2
    // Since we're doing math to calculate tuple indices we extract these
    // types so we can easily assert to them below when needed.
    type Mat3Index = Extract<keyof Mat3, number>;
    type QuatIndex = Extract<keyof Quat, number>;
    var i: number = 0;
    if (m[4] > m[0]) i = 1;
    if (m[8] > m[(i * 3 + i) as Mat3Index]) i = 2;
    var j = ((i + 1) % 3) as QuatIndex;
    var k = ((i + 2) % 3) as QuatIndex;
    fRoot = Math.sqrt(
      m[(i * 3 + i) as Mat3Index] -
        m[(j * 3 + j) as Mat3Index] -
        m[(k * 3 + k) as Mat3Index] +
        1.0,
    );
    out[i as QuatIndex] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot;
    out[3] =
      (m[(j * 3 + k) as Mat3Index] - m[(k * 3 + j) as Mat3Index]) * fRoot;
    out[j] =
      (m[(j * 3 + i) as Mat3Index] + m[(i * 3 + j) as Mat3Index]) * fRoot;
    out[k] =
      (m[(k * 3 + i) as Mat3Index] + m[(i * 3 + k) as Mat3Index]) * fRoot;
  }

  return out;
}
/**
 * Creates a quaternion from the given euler angle x, y, z using the provided intrinsic order for the conversion.
 *
 * @param {quat} out the receiving quaternion
 * @param {x} x Angle to rotate around X axis in degrees.
 * @param {y} y Angle to rotate around Y axis in degrees.
 * @param {z} z Angle to rotate around Z axis in degrees.
 * @param {'zyx'|'xyz'|'yxz'|'yzx'|'zxy'|'zyx'} order Intrinsic order for conversion, default is zyx.
 * @returns {quat} out
 * @function
 */

export function fromEuler(
  out: Quat,
  x: number,
  y: number,
  z: number,
  order?: ConversionOrder,
): Quat {
  order = order ?? ANGLE_ORDER;
  var halfToRad = Math.PI / 360;
  x *= halfToRad;
  z *= halfToRad;
  y *= halfToRad;
  var sx = Math.sin(x);
  var cx = Math.cos(x);
  var sy = Math.sin(y);
  var cy = Math.cos(y);
  var sz = Math.sin(z);
  var cz = Math.cos(z);

  switch (order) {
    case 'xyz':
      out[0] = sx * cy * cz + cx * sy * sz;
      out[1] = cx * sy * cz - sx * cy * sz;
      out[2] = cx * cy * sz + sx * sy * cz;
      out[3] = cx * cy * cz - sx * sy * sz;
      break;

    case 'xzy':
      out[0] = sx * cy * cz - cx * sy * sz;
      out[1] = cx * sy * cz - sx * cy * sz;
      out[2] = cx * cy * sz + sx * sy * cz;
      out[3] = cx * cy * cz + sx * sy * sz;
      break;

    case 'yxz':
      out[0] = sx * cy * cz + cx * sy * sz;
      out[1] = cx * sy * cz - sx * cy * sz;
      out[2] = cx * cy * sz - sx * sy * cz;
      out[3] = cx * cy * cz + sx * sy * sz;
      break;

    case 'yzx':
      out[0] = sx * cy * cz + cx * sy * sz;
      out[1] = cx * sy * cz + sx * cy * sz;
      out[2] = cx * cy * sz - sx * sy * cz;
      out[3] = cx * cy * cz - sx * sy * sz;
      break;

    case 'zxy':
      out[0] = sx * cy * cz - cx * sy * sz;
      out[1] = cx * sy * cz + sx * cy * sz;
      out[2] = cx * cy * sz + sx * sy * cz;
      out[3] = cx * cy * cz - sx * sy * sz;
      break;

    case 'zyx':
      out[0] = sx * cy * cz - cx * sy * sz;
      out[1] = cx * sy * cz + sx * cy * sz;
      out[2] = cx * cy * sz - sx * sy * cz;
      out[3] = cx * cy * cz + sx * sy * sz;
      break;

    default:
      throw new Error('Unknown angle order ' + order);
  }

  return out;
}
/**
 * Returns a string representation of a quaternion
 *
 * @param {Quat} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

export function str(a: Quat): string {
  return 'quat(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}
/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {Quat} a quaternion to clone
 * @returns {quat} a new quaternion
 * @function
 */

export var clone = vec4.clone;
/**
 * Creates a new quat initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} a new quaternion
 * @function
 */

export var fromValues = vec4.fromValues;
/**
 * Copy the values from one quat to another
 *
 * @param {quat} out the receiving quaternion
 * @param {Quat} a the source quaternion
 * @returns {quat} out
 * @function
 */

export var copy = vec4.copy;
/**
 * Set the components of a quat to the given values
 *
 * @param {quat} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} out
 * @function
 */

export var set = vec4.set;
/**
 * Adds two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {Quat} a the first operand
 * @param {Quat} b the second operand
 * @returns {quat} out
 * @function
 */

export var add = vec4.add;
/**
 * Alias for {@link quat.multiply}
 * @function
 */

export var mul = multiply;
/**
 * Scales a quat by a scalar number
 *
 * @param {quat} out the receiving vector
 * @param {Quat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {quat} out
 * @function
 */

export var scale = vec4.scale;
/**
 * Calculates the dot product of two quat's
 *
 * @param {Quat} a the first operand
 * @param {Quat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */

export var dot = vec4.dot;
/**
 * Performs a linear interpolation between two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {Quat} a the first operand
 * @param {Quat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 * @function
 */

export var lerp = vec4.lerp;
/**
 * Calculates the length of a quat
 *
 * @param {Quat} a vector to calculate length of
 * @returns {Number} length of a
 */

export var length = vec4.length;
/**
 * Alias for {@link length}
 * @function
 */

export var len = length;
/**
 * Calculates the squared length of a quat
 *
 * @param {Quat} a vector to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */

export var squaredLength = vec4.squaredLength;
/**
 * Alias for {@link squaredLength}
 * @function
 */

export var sqrLen = squaredLength;
/**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {Quat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */
export var normalize = vec4.normalize;
/**
 * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {Quat} a The first quaternion.
 * @param {Quat} b The second quaternion.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

export var exactEquals = vec4.exactEquals;
/**
 * Returns whether or not the quaternions point approximately to the same direction.
 *
 * Both quaternions are assumed to be unit length.
 *
 * @param {Quat} a The first unit quaternion.
 * @param {Quat} b The second unit quaternion.
 * @returns {Boolean} True if the quaternions are equal, false otherwise.
 */

export function equals(a: Quat, b: Quat): boolean {
  return Math.abs(vec4.dot(a, b)) >= 1 - EPSILON;
}
/**
 * Sets a quaternion to represent the shortest rotation from one
 * vector to another.
 *
 * Both vectors are assumed to be unit length.
 *
 * @param {quat} out the receiving quaternion.
 * @param {Vec3} a the initial vector
 * @param {Vec3} b the destination vector
 * @returns {quat} out
 */

export var rotationTo = (function () {
  var tmpVec3 = vec3.create();
  var xUnitVec3 = vec3.fromValues(1, 0, 0);
  var yUnitVec3 = vec3.fromValues(0, 1, 0);
  return function (out: Quat, a: Vec3, b: Vec3) {
    var dot = vec3.dot(a, b);

    if (dot < -0.999999) {
      vec3.cross(tmpVec3, xUnitVec3, a);
      if (vec3.len(tmpVec3) < 0.000001) vec3.cross(tmpVec3, yUnitVec3, a);
      vec3.normalize(tmpVec3, tmpVec3);
      setAxisAngle(out, tmpVec3, Math.PI);
      return out;
    } else if (dot > 0.999999) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      return out;
    } else {
      vec3.cross(tmpVec3, a, b);
      out[0] = tmpVec3[0];
      out[1] = tmpVec3[1];
      out[2] = tmpVec3[2];
      out[3] = 1 + dot;
      return normalize(out, out);
    }
  };
})();
/**
 * Performs a spherical linear interpolation with two control points
 *
 * @param {quat} out the receiving quaternion
 * @param {Quat} a the first operand
 * @param {Quat} b the second operand
 * @param {Quat} c the third operand
 * @param {Quat} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 */

export var sqlerp = (function () {
  var temp1 = create();
  var temp2 = create();
  return function (
    out: Quat,
    a: Quat,
    b: Quat,
    c: Quat,
    d: Quat,
    t: number,
  ): Quat {
    slerp(temp1, a, d, t);
    slerp(temp2, b, c, t);
    slerp(out, temp1, temp2, 2 * t * (1 - t));
    return out;
  };
})();
/**
 * Sets the specified quaternion with values corresponding to the given
 * axes. Each axis is a Vec3 and is expected to be unit length and
 * perpendicular to all other specified axes.
 *
 * @param {Vec3} view  the vector representing the viewing direction
 * @param {Vec3} right the vector representing the local "right" direction
 * @param {Vec3} up    the vector representing the local "up" direction
 * @returns {quat} out
 */

export var setAxes = (function () {
  var matr = mat3.create();
  return function (out: Quat, view: Vec3, right: Vec3, up: Vec3) {
    matr[0] = right[0];
    matr[3] = right[1];
    matr[6] = right[2];
    matr[1] = up[0];
    matr[4] = up[1];
    matr[7] = up[2];
    matr[2] = -view[0];
    matr[5] = -view[1];
    matr[8] = -view[2];
    return normalize(out, fromMat3(out, matr));
  };
})();
