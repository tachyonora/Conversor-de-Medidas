function km_ml(km) {
    if (km === Infinity || km === -Infinity) return km;
    if (!Number.isFinite(km)) return NaN;

    const conversion_ratio = 1.609;
    return km / conversion_ratio;
}
