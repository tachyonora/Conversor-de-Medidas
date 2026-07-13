function ml_km(ml) {
    if (ml === Infinity || ml === -Infinity) return ml;
    if (!Number.isFinite(ml)) return NaN;

    const conversion_ratio = 1.609;
    return ml * conversion_ratio;
}
