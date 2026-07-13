function mt_ft(mt) {
    if (mt === Infinity || mt === -Infinity) return mt;
    if (!Number.isFinite(mt)) return NaN;

    const conversion_ratio = 3.28084;
    return mt * conversion_ratio;
}
