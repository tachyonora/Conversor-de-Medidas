function ml_KM(ml) {
    if (ml === Infinity || ml === -Infinity) return ml;
    if (!Number.isFinite(ml)) return NaN;

    const conversion_ratio = 3.28084;
    return ml * conversion_ratio;
}
