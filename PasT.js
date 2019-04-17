"use strict";

const pascalTri = function pas(p, ls = [1], tri = [ls]) {
    if (p === 0) return tri;
    const l = [0].concat(ls), rs = ls.concat([0]);
    const next = rs.map((r, i) => l[i] + r);
    return pas(p - 1, next, tri.concat([next]));
};
