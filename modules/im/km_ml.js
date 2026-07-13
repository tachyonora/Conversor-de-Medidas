function km_ml(km) {
    if (!Number.isFinite(km)) return NaN;
    if (km === Infinity || km === -Infinity) return km;

    const conversion_ratio = 1.609;
    return km / conversion_ratio;
}
