function mt_ft(mt) {
    if (!Number.isFinite(mt)) return NaN;
    if (mt === Infinity || mt === -Infinity) return mt;

    const conversion_ratio = 3.28084;
    return mt * conversion_ratio;
}
